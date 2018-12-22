// Tower of Hanoi
// write a function that will print out all steps needed to move
// x number of disk from 'fromPeg' to 'toPeg' using 'extraPeg' as temp

function moveNDisks (N, fromPeg, toPeg, extraPeg) {
  // if there is only one disk to move, then print the move required
  if (N === 1) {
    console.log(`Move 1 disk from Peg: '${fromPeg}' to '${toPeg}'`);
  } else {
    // otherwise, call the function to move N-1 disks out of the way...
    moveNDisks(N - 1, fromPeg, extraPeg, toPeg);

    // then move 1 disk to destination
    moveNDisks(1, fromPeg, toPeg, extraPeg);

    // and then bring back the N-1 disks that was out of the way
    moveNDisks(N - 1, extraPeg, toPeg, fromPeg);
  }
}

// moveNDisks(3, "F", "T", "Extra");
moveNDisks(5, "Src", "Dest", "Temp");

console.log("======================================");

function towerOfHanoi (N, src, aux, dst) {
  if (N > 0) {
    towerOfHanoi(N - 1, src, dst, aux);
    console.log(`Move disk number ${N} from ${src} to ${dst}`);
    towerOfHanoi(N - 1, aux, src, dst);
  }
}

towerOfHanoi(3, "S", "A", "D");
