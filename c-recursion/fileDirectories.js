// source: https://www.interviewcake.com/question/javascript/find-duplicate-files?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23222:%20Does%20This%20Linked%20List%20Have%20A%20Cycle%3F&utm_medium=email&utm_medium=email

const fs = require('fs');

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

      // Get its contents
      const fileContents = fs.readFileSync(currentPath);

      // Get its last edited time
      const currentLastEditedTime = currentFile.mtime;

      // If we've seen it before
      if (filesSeenAlready.hasOwnProperty(fileContents)) {

        const existingFile = filesSeenAlready[fileContents];

        if (currentLastEditedTime > existingFile.lastEditedTime) {

          // Current file is the dupe!
          duplicates.push([currentPath, existingFile.path]);

        } else {

          // Old file is the dupe!
          duplicates.push([existingFile.path, currentPath]);

          // But also update filesSeenAlready to have the new file's info
          filesSeenAlready[fileContents] = { lastEditedTime: currentLastEditedTime, path: currentPath };
        }

        // If it's a new file, throw it in filesSeenAlready
        // and record its path and last edited time,
        // so we can tell later if it's a dupe
      } else {
        filesSeenAlready[fileContents] = { lastEditedTime: currentLastEditedTime, path: currentPath };
      }
    }
  }

  return duplicates;
}
