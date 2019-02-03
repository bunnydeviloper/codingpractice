// Merge K sorted array
// SIMPLE: I: [[1, 3, 5, 7], [2, 4, 6, 8]], O: [1, 2, 3, 4, 5, 6, 7, 8]

// I: [4 arrays inside with average length N]
// O: [... expensive computation]

// Brute force: doing comparisons each iteration: O(N * K * K)
// Concat: concatenating and sorting: O(N * K * log(N*K)))
// Concat: but this is no diff than merging and sorting UNSORTED array

// Use Min Heap:
// TIME: O(N*K*log(K)) | SPACE: O(N*K)


