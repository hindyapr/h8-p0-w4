//Logic Challenge - Change Me!



// function data(firstName, lastName, gender, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     if (age > 0) this.age = age;
//     else this.age = 'Invalid Birth Year';
// }

function changeMe(arr) {
    // you can only write your code here!

    var nama = [];
    var dataArray = [];
    var temp = { firstName: '', lastName: '', gender: '', age: 0 };

    for (var i = 0; i < arr.length; i++) {
        nama.push(arr[i][0] + ' ' + arr[i][1]);

        //var temp = new data(arr[i][0], arr[i][1], arr[i][2], 2019 - arr[i][3])

        if (2019 - arr[i][3] > 0 && 2019 - arr[i][3] < 2020) var umur = 2019 - arr[i][3];
        else var umur = 'Invalid Birth Year';

        var temp = { firstName: arr[i][0], lastName: arr[i][1], gender: arr[i][2], age: umur };
        dataArray.push(temp);
    }


    for (var i = 0; i < nama.length; i++) {
        console.log((i + 1) + '. ' + nama[i] + ': ');
        console.log(dataArray[i]);
    }




}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""