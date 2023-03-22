"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumAray = void 0;
function sumAray(array) {
    return array && array.length > 1
        ? array.reduce(function (partialSum, a) { return partialSum + a; }, 0) -
            (Math.max.apply(Math, array) + Math.min.apply(Math, array))
        : 0;
}
exports.sumAray = sumAray;
console.log(sumAray([1, 1, 11, 2, 3]));
