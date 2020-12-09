let R = 3;
let V = 1;
let S = R;
let C = 1;

while(R > V) {
    V = 20;
}

while (S <= V) {
    S += (R + C);

    C++;
}

console.log(C);