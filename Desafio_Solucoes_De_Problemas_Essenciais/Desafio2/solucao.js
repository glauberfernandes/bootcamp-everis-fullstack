let qt1 = gets();
let v1 = gets().split(" ");

let qt2 = gets();
let v2 = gets().split(" ");

let qt3 = gets();
let v3 = gets().split(" ");

function velocMax(v) {
  if (v < 10) {
    console.log(1);
  }
  if (v >= 10 && v < 20) {
    console.log(2);
  }
  if (v >= 20) {
    console.log(3);
  }
}

v1.sort((curr, next) => next - curr);
velocMax(v1[0]);

v2.sort((curr, next) => next - curr);
velocMax(v2[0]);

v3.sort((curr, next) => next - curr);
velocMax(v3[0]);