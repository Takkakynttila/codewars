export function sumAray(array: number[] | null): number {
  return array && array.length > 1
    ? array.reduce((partialSum, a) => partialSum + a, 0) -
        (Math.max(...array) + Math.min(...array))
    : 0;
}
console.log(sumAray([1, 1, 11, 2, 3]));
