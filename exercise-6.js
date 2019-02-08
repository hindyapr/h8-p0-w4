//Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    // you can only write your code here!

    var angka1 = [];
    var angka2 = [];
    var index = 0;
    var hasil = 0;

    for (var i = 1; i < (angka / 2) + 1; i++) {
        if (angka % i === 0) {
            angka1.push(i + '');
            angka2.push((angka / i) + '');
        }
    }

    for (var i = 0; i < angka1.length; i++) {
        if (i === 0) hasil = angka1[i].length + angka2[i].length;
        else {
            var temp = angka1[i].length + angka2[i].length;
            if (hasil > temp) hasil = temp;
        }
    }

    return hasil;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2