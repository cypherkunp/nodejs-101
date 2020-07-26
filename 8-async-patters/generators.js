function* makeRangeIterator(start = 0, end = 10, step = 1) {
  let iteratorCount = 0;
  for (let index = start; index <= end; index += step) {
    iteratorCount++;
    yield index;
  }

  return iteratorCount;
}
const generate = makeRangeIterator();
console.log(generate.next());
console.log(generate.next());

for (const value of generate) {
  console.log(value);
}
