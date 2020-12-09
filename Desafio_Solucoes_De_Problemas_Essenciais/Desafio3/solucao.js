let R = parseInt(gets());
let V = parseInt(gets());
let S = R;
let C = 1;

while(R > V) {
    V = parseInt(gets());
}

while (S <= V) {
    S += (R + C);

    C++;
}

console.log(C);