//Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    // you can only write your code here!
    var x = 0;
    var y = 0;
    var a = 0;
    var b = 0;

    var makeStr = [];
    var hasil = '';

    for (var i = 0; i < str.length; i++) {
        makeStr.push(str[i]);
    }

    for (var i = 1; i < makeStr.length; i++) {
        a++;
        for (var j = i - 1; j >= 0; j--) {
            b++;
            if (makeStr[j] < makeStr[j + 1]) {
                break;
            } else {
                var temp = makeStr[j + 1];
                makeStr[j + 1] = makeStr[j];
                makeStr[j] = temp;
                y++;
            }
        }
    }
    //makeStr.sort();

    for (var i = 0; i < makeStr.length; i++) {
        hasil = hasil + makeStr[i];
    }

    return hasil;
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'