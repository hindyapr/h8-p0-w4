//Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var hasil = [];
    var harga = 2000;
    var start = true;
    var end = false;
    var jarak = 0;

    var x = 0;

    for (var i = 0; i < arrPenumpang.length; i++) {
        harga = 2000;
        jarak = 0;
        start = true;
        end = false;
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) start = false;
            else if (arrPenumpang[i][2] === rute[j]) {
                jarak++;
                end = true;
            } else if (!start) jarak++;


            if (end) break;
        }

        harga = harga * jarak;
        x = jarak;
        var temp = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: harga
        };

        hasil.push(temp);
    }

    if (arrPenumpang.length > 0) return hasil;
    else return [];


}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]