"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoopCount = void 0;
function hoopCount(n) {
    if (n >= 10) {
        return "Great, now move on to tricks";
    }
    return "Keep at it until you get it";
}
exports.hoopCount = hoopCount;
console.log(hoopCount(9));
