const { deterministicPartitionKey } = require("./dpk");
const MAX_PARTITION_KEY_LENGTH = 256;

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();

    console.log(typeof trivialKey);

    expect(trivialKey).toBe("0");
  });

  it("Returns the same result when given the same string as input", () => {
    const trivialKey = deterministicPartitionKey('this is a test');

    console.log(typeof trivialKey);

    expect(trivialKey).toBe("3112b8cca960bfc9d9f41a32d985aa3de96b24c1ec4951bf3a812fff06fcebf74ee29c21bd3cb7da06e4834cde298dd1acd0adf1e37dc4767d551af16a87faa4");
  });

  it("Returns a tops 256 key with a Partition key provided as input", () => {
    let event = {};
    event.partitionKey =  "3112b8cca960bfc9d9f41a32d985aa3de96b24c1ec4951bf3a812fff06fcebf74ee29c21bd3cb7da06e4834cde298dd1acd0adf1e37dc4767d551af16a87faa43112b8cca960bfc9d9f41a32d985aa3de96b24c1ec4951bf3a812fff06fcebf74ee29c21bd3cb7da06e4834cde298dd1acd0adf1e37dc4767d551af16a87faa43112b8cca960bfc9d9f41a32d985aa3de96b24c1ec4951bf3a812fff06fcebf74ee29c21bd3cb7da06e4834cde298dd1acd0adf1e37dc4767d551af16a87faa4";
    const trivialKey = deterministicPartitionKey(event);

    console.log(trivialKey.length);

    expect(trivialKey.length).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
  });
});
