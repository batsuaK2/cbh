const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("When input is a string", () => {
    const trivialKey = deterministicPartitionKey("abc");
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify("abc")).digest("hex"));
  });
});

describe("deterministicPartitionKey", () => {
  it("When input is an object with partitionKey and a string value with less than 256 chars", () => {
    const trivialKey = deterministicPartitionKey({partitionKey : "someKey"});
    expect(trivialKey).toBe("someKey");
  });
});

describe("deterministicPartitionKey", () => {
  it("When input is an object with partitionKey and a string value with more than 256 chars", () => {
    const trivialKey = deterministicPartitionKey({partitionKey : "4QVkKeySeRK7nuLOvOIiA0JusnIfLbO8jQQVypaQANCUoWwKc2RcziXUd24UF4PnDv2Kp46A09O2Yf7SQhLQ7FvHftPc96PqBmYFib0BxFRvAonvIYM3ck2nUbdsEQhzBi9SazhkuGM70RuhnYDceIeOsv2p10m7ktwDfNcPDIGsavodWNNYWGVNFdECsvFHm2MK365ICHkcdp8qmY6HioBit61MNT8IM5Z7uFbDfLGe9LZsMVMTHAQ4pSW89Lq5EFhR"});
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update("4QVkKeySeRK7nuLOvOIiA0JusnIfLbO8jQQVypaQANCUoWwKc2RcziXUd24UF4PnDv2Kp46A09O2Yf7SQhLQ7FvHftPc96PqBmYFib0BxFRvAonvIYM3ck2nUbdsEQhzBi9SazhkuGM70RuhnYDceIeOsv2p10m7ktwDfNcPDIGsavodWNNYWGVNFdECsvFHm2MK365ICHkcdp8qmY6HioBit61MNT8IM5Z7uFbDfLGe9LZsMVMTHAQ4pSW89Lq5EFhR").digest("hex"));
  });
});

describe("deterministicPartitionKey", () => {
  it("When input is an object with partitionKey and a NOT a string value", () => {
    const trivialKey = deterministicPartitionKey({partitionKey : {key : "someKey"}});
    expect(trivialKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify({key : "someKey"})).digest("hex"));
  });
});
