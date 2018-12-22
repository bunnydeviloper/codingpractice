const fs = require('fs');
const crypto = require('crypto');

function findDuplicateFiles(startingDirectory) {
  const filesSeenAlready = {};
  const stack = [startingDirectory];

  const duplicates = [];

  while (stack.length) {

    const currentPath = stack.pop();
    const currentFile = fs.statSync(currentPath);

    // If it's a directory,
    // put the contents in our stack
    if (currentFile.isDirectory()) {
      fs.readdirSync(currentPath).forEach(path => {
        stack.push(`${currentPath}/${path}`);
      });

      // If it's a file
    } else {

      // Get its hash
      const fileHash = sampleHashFile(currentPath);

      // Get its last edited time
      const currentLastEditedTime = currentFile.mtime;

      // If we've seen it before
      if (filesSeenAlready.hasOwnProperty(fileHash)) {

        const existingFile = filesSeenAlready[fileHash];

        if (currentLastEditedTime > existingFile.lastEditedTime) {

          // Current file is the dupe!
          duplicates.push([currentPath, existingFile.path]);

        } else {

          // Old file is the dupe!
          duplicates.push([existingFile.path, currentPath]);

          // But also update the object to have the new file's info
          filesSeenAlready[fileHash] = { lastEditedTime: currentLastEditedTime, path: currentPath };
        }

        // If it's a new file, throw it in filesSeenAlready
        // and record its path and last edited time,
        // so we can tell later if it's a dupe
      } else {
        filesSeenAlready[fileHash] = { lastEditedTime: currentLastEditedTime, path: currentPath };
      }
    }
  }

  return duplicates;
}

function sampleHashFile(path) {
  const file = fs.statSync(path);

  const sampleSize = 4000;
  const totalBytes = file.size;

  const hash = crypto.createHash('sha512');

  // If the file is too short to take 3 samples, hash the entire file
  if (totalBytes < sampleSize * 3) {
    hash.update(fs.readFileSync(path));

  } else {
    const numBytesBetweenSamples = (totalBytes - sampleSize * 3) / 2;

    const buffer = Buffer.alloc(sampleSize * 3);

    // Read first, middle, and last bytes
    for (let offsetMultiplier = 0; offsetMultiplier <= 2; offsetMultiplier++) {
      const fd = fs.openSync(path, 'r');

      const offset = offsetMultiplier * sampleSize;
      const position = offsetMultiplier * (sampleSize + numBytesBetweenSamples);

      fs.readSync(fd, buffer, offset, sampleSize, position);
    }

    hash.update(buffer);
  }

  return hash.digest();
}

/* ASSUMPTIONS:
1) Two different files won't have the same fingerprints. EG: "hash collision"
> We could do a last-minute full content scan whenever we find two "matching" files

2) The most recently edited file is the duplicate. EG: daemons files or swap files

3) Two files with the same contents are the same file. EG: empty files
*/

/* Some ideas for further improvements:
If a file wasn't last edited around the time your friend got a hold of your computer, you know it probably wasn't created by your friend. Similarly, if a file wasn't accessed (sometimes your filesystem stores the last accessed time for a file as well) around that time, you know it wasn't copied by your friend. You can use these facts to skip some files.
Make the file size the fingerprint—it should be available cheaply as metadata on the file (so you don't need to walk through the whole file to see how long it is). You'll get lots of false positives, but that's fine if you treat this as a "preprocessing" step. Maybe you then take hash-based fingerprints only on the files which which have matching sizes. Then you fully compare file contents if they have the same hash.
Some file systems also keep track of when a file was created. If your filesystem supports this, you could use this as a potentially-stronger heuristic for telling which of two copies of a file is the dupe.
When you do compare full file contents to ensure two files are the same, no need to read the entire files into memory. Open both files and read them one block at a time. You can short-circuit as soon as you find two blocks that don't match, and you only ever need to store a couple blocks in memory.
Complexity
Each "fingerprint" takes O(1)O(1) time and space, so our total time and space costs are O(n)O(n) where nn is the number of files on the file system.

If we add the last-minute check to see if two files with the same fingerprints are actually the same files (which we probably should), then in the worst case all the files are the same and we have to read their full contents to confirm this, giving us a runtime that's order of the total size of our files on disc.

Bonus
If we wanted to get this code ready for a production system, we might want to make it a bit more modular. Try separating the file traversal code from the duplicate detection code. Try implementing the file traversal with a generator!

What about concurrency? Can we go faster by splitting this procedure into multiple threads? Also, what if a background process edits a file while our script is running? Will this cause problems?

What about link files (files that point to other files or folders)? One gotcha here is that a link file can point back up the file tree. How do we keep our file traversal from going in circles?
*/

/* What We Learned
The main insight was to save time and space by "fingerprinting" each file.

This question is a good example of a "messy" interview problem. Instead of one optimal solution, there's a big knot of optimizations and trade-offs. For example, our hashing-based approach wins us a faster runtime, but it can give us false positives.

For messy problems like this, focus on clearly explaining to your interviewer what the trade-offs are for each decision you make. The actual choices you make probably don't matter that much, as long as you show a strong ability to understand and compare your options.
*/
