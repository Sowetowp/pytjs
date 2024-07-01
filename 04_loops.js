// for loop 
// while loop
// do while loop
// for in loop
// for of loop

for (let i = 0; i < 1000; i++){
    i % 2 === 0 ? console.log(`${i} is an even number`) : console.log(`${i} is an odd number`)
}
let i = 0
while(i <= 10){
    console.log(i)
    i++
}
let a = 0
do {
    console.log(a)
    a++
} while (a <= 10);

let myObject = {
    favour: [1, 2, 3],
    ope: "vibes",
    kizzo: null,
    wunmi: true,
    henry: 10,
    chioma: 1e+34,
    eri: {name: "Samuel"},
    afa: false
}

for(let key in myObject){
    console.log(myObject[key] = "smart")
}
console.log(myObject["ope"])

let myArray = [1,2,3]

for (const iterator of myArray) {
    console.log(iterator)
}


const arsenal = ["saka", "leno", "xhaka", "gabriel"]
const chelsea = ["palmer", "kante", "werner", "james"]
const realMadrid = ["vini", "belingham", "bale", "modric"]

