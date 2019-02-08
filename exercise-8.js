//Logic Challenge - Tukar Besar Kecil

function tukarBesarKecil(kalimat) {
    // you can only write your code here!

    var newKalimat = [];
    var hasil = [];
    var x = 0;

    for (var i = 0; i < kalimat.length; i++) {
        newKalimat.push(kalimat[i]);
    }

    for (var i = 0; i < newKalimat.length; i++) {
        if (newKalimat[i].charCodeAt() > 96 && newKalimat[i].charCodeAt() < 123) newKalimat[i] = newKalimat[i].toUpperCase();
        else if (newKalimat[i].charCodeAt() > 40 && newKalimat[i].charCodeAt() < 91) newKalimat[i] = newKalimat[i].toLowerCase();
    }

    for (var i = 0; i < newKalimat.length; i++) {
        hasil = hasil + newKalimat[i];
    }

    return hasil;

}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"