const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({partitionKey : {key : "abc"}}));