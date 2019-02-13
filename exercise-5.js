//Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
    // you can only write your code here!

    var lbub = '';
    var tempChar = '';

    for (var i = 0; i < kata.length; i++) {
        if (kata[i] === 'z') lbub = lbub + 'a';
        else {
            tempChar = String.fromCharCode(kata[i].charCodeAt(0) + 1);
            lbub = lbub + tempChar;
        }
    }

    return lbub;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('z'));