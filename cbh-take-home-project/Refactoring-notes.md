Refactoring

1. Moved the logic to determine the candidate with a hash true/false into a separate function.
2. Moved the hasher util to a separate function.
3. The function deterministicPartitionKey() should be a shell that is exported. Separation of concerns.
4. The length could be moved out to but for brevity I left it in the deterministicPartitionKey
5. Helps in testing individual parts of the logic.