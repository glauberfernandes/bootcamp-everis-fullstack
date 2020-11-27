let renda = parseFloat(gets());

if (renda <= 2000.00) {
    console.log('Isento');
} else if (renda <= 3000.00) {
    result = parseFloat((renda - 2000.00) * 0.08);
    console.log('R$ ' + result.toFixed(2));
} else if (renda <= 4500.00) {
    faixa1 = parseFloat(renda - 2000.00);
    faixa2 = parseFloat(1000.00 * 0.08);
    faixa3 = parseFloat((faixa1 - 1000.00) * 0.18);
    result = faixa2 + faixa3;
    console.log('R$ ' + result.toFixed(2));
} else {
    faixa1 = parseFloat(renda - 2000.00);
    faixa2 = parseFloat(1000.00 * 0.08);
    faixa3 = parseFloat(1500.00 * 0.18);
    faixa4 = parseFloat((faixa1 - 2500) * 0.28);
    result = faixa2 + faixa3 + faixa4;
    console.log('R$ ' + result.toFixed(2));
}