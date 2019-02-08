//Logic Challenge - Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {

    var batas;

    if (angka1 > angka2) batas = angka2;
    else batas = angka1;

    for (var i = batas - 1; i > 1; i--) {
        if ((angka1 % i === 0) && (angka2 % i === 0)) return i;
    }
    return 1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1