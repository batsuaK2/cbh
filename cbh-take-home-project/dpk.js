const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = getPartitionCandidate(event);

  if (candidate.value.length > MAX_PARTITION_KEY_LENGTH) {
    candidate.hash = true;
  }

  return getPartitionValue(candidate);
};



const getPartitionValue = (candidate) => {
  if (candidate.hash) {
    return crypto.createHash("sha3-512").update(candidate.value).digest("hex")
  } else {
    return candidate.value
  }
}

const getPartitionCandidate = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  let candidate = {
    value : TRIVIAL_PARTITION_KEY,
    hash : false
  };
  if (!event) return candidate;

  if (event.partitionKey) {
    if (typeof event.partitionKey === "string") {
      candidate.value = event.partitionKey;
    } else {
      candidate.value = JSON.stringify(event.partitionKey);
    }
    candidate.hash = false;
  } else {
    candidate.value = JSON.stringify(event);
    candidate.hash = true
  }
  return candidate;
}