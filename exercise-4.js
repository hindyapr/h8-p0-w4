//Logic Challenge - Mencari Modus

function cariModus(arr) {
    // you can only write your code here!

    var counter = [];
    var newArr = [];
    var flag = true;
    var hasilCount = 0;
    var hasil = 0;
    var validCount = 0;

    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            newArr.push(arr[i]);
            counter.push(1);
        } else {
            flag = true;
            for (var j = 0; j < newArr.length; j++) {
                if (arr[i] === newArr[j]) {
                    counter[j] += 1;
                    flag = false;
                    break;
                }

            }
            if (flag) {
                newArr.push(arr[i]);
                counter.push(1);
            }
        }
    }

    for (var i = 0; i < newArr.length; i++) {
        if (counter[i] > hasilCount) {
            hasilCount = counter[i];
            hasil = i;
        }
    }

    for (var i = 0; i < counter.length; i++) {
        if (counter[hasil] === counter[i]) validCount++;
    }



    if (validCount > 2) return -1;
    else if (newArr.length === 1) return -1;
    else return newArr[hasil];



}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1