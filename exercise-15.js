//Logic Challenge: Highest Score

function highestScore(students) {
    // Code disini

    var hasil = {};
    var tidakAda;

    for (var i = 0; i < students.length; i++) {
        if (Object.getOwnPropertyNames(hasil).length > 0) {
            tidakAda = true;
            for (var j = 0; j < Object.getOwnPropertyNames(hasil).length; j++) {
                if (students[i].class === Object.getOwnPropertyNames(hasil)[j]) {
                    tidakAda = false;
                    if (students[i].score > hasil[students[i].class].score) {
                        hasil[students[i].class] = {
                            name: students[i].name,
                            score: students[i].score
                        }
                    }
                }
            }

            if (tidakAda) {
                hasil[students[i].class] = {
                    name: students[i].name,
                    score: students[i].score
                }
            }
        } else {
            hasil[students[i].class] = {
                name: students[i].name,
                score: students[i].score
            }
        }
    }


    if (students.length > 0) return hasil;
    else return {};



}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}