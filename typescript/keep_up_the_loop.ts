export function hoopCount(n: number): string {
    if (n >= 10) {
        return "Great, now move on to tricks";
    }
    return "Keep at it until you get it";
  }

console.log(hoopCount(9));