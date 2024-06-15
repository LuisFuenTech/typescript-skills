const numberList: number[] = [4, 2, 1, 3, 5];
type RemovedNumber = number | undefined;

const addRemoveNumbers = (numberList: number[]): void => {
  numberList.push(6, 7, 8);
  numberList.unshift(0);

  console.log(numberList);

  const popRemoved: RemovedNumber = numberList.pop();
  console.log(numberList);

  const shiftRemoved: RemovedNumber = numberList.shift();
  console.log(numberList);

  console.log({ popRemoved, shiftRemoved });
};

const addRemoveNumberIndex = (numberList: number[]): void => {
  numberList.splice(2, 0, 2.5);
  console.log(numberList);

  const removed = numberList.splice(4, 2, 3.5);
  console.log(numberList);
  console.log('removed', removed);
};

// addRemoveNumbers([...numberList]);
// addRemoveNumberIndex([...numberList]);
console.log(
  'sorted array',
  numberList.toSorted((a, b) => a - b)
);
console.log('reversed array', numberList.toReversed());
console.log('original array', numberList);
