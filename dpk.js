const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {

  let candidateKey = getOrCreateCandidateKey(event);

  if (typeof candidateKey !== "string") {
    candidateKey = JSON.stringify(candidateKey);
  }

  candidateKey = shortenKey(candidateKey)

  return candidateKey;
};

getOrCreateCandidateKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event?.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  return candidate;
}

shortenKey = (candidateKey) => {
  if (candidateKey.length > MAX_PARTITION_KEY_LENGTH) {
    candidateKey = crypto.createHash("sha3-512").update(candidateKey).digest("hex");
  }

  return candidateKey;
}