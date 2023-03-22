"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cockroachSpeed = void 0;
function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600);
}
exports.cockroachSpeed = cockroachSpeed;
console.log(cockroachSpeed(1.08));
