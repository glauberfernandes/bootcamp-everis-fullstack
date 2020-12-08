let v = parseInt(gets());

for(let i = 1; i <= v; i++){
    let lines = []
    for(let j = 1; j <= 3; j++){
        lines[j - 1] = i ** j;
    }
    console.log(lines.join(' '));
}