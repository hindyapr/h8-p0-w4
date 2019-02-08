//Logic Challenge - Shopping Time!


function shoppingTime(memberId, money) {
    // you can only write your code here!

    var listBarang = [{ nama: 'Sepatu Stacattu', harga: 1500000 },
        { nama: 'Baju Zoro', harga: 500000 },
        { nama: 'Baju H&N', harga: 250000 },
        { nama: 'Sweater Uniklooh', harga: 175000 },
        { nama: 'Casing Handphone', harga: 50000 },
    ]

    var listBeli = [];

    var modal = money;


    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    } else {
        for (var i = 0; i < listBarang.length; i++) {
            if (money >= listBarang[i].harga) {
                listBeli.push(listBarang[i].nama);
                money -= listBarang[i].harga;
            }
        }

        var data = {
            memberId: memberId,
            money: modal,
            listPurchased: listBeli,
            changeMoney: money
        };

        return data;
    }




}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ///Mohon maaf, toko X hanya berlaku untuk member saja