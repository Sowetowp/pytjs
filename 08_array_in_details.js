const myArray = ["ope", "eri", "wunmi", "chioma"]
console.log(myArray.join(" . "))
console.log(myArray.length)
console.log(myArray.reverse())
myArray.push("afa")
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift("afa")
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.reverse()
console.log(myArray)
console.log(myArray.slice(1, 3))
console.log(myArray)
myArray.splice(1, 2, "elvis", "david")
console.log(myArray.toString())
console.log(myArray[myArray.length - 1])
console.log(myArray.at(-1))
const myarr2 = [[1, 2, 3], ["malik", "david"]]
console.log(myarr2.flat())
const ph = []
myArray.push("wunmi")
const mm = myArray.forEach((val, index, arr) => {
    ph.push(val + " " + "olodo")
})
console.log(ph)

const mapped = myArray.map((val, index, arr) => {
    return val + " " + "omo ologo"
})
console.log(mapped)

const filt = myArray.filter((val) => {
    return val === "chioma"
})
console.log(filt)
let kk = [{ a: 1, b: 8 }, { b: 2 }, { c: 3 }]
const reduced = kk.reduce((acc, curr) => {
    for (const key in curr) {
        if (acc[key]) {
            acc[key].push(curr[key]);
        } else {
            acc[key] = [curr[key]];
        }
    }
    return acc;
}, { a: [99] });
console.log(reduced)

const finders = kk.find((val) => {
    return val.a = 1
})
console.log(finders)

const arr = [1, 2, 3, 4]
const final = []
// console.log([
//     arr[0] + 5,
//     arr[1] + 5,
//     arr[2] + 5,
//     arr[3] + 5
// ])
for(let i = 0; i < arr.length; i++){
    final.push(arr[i] + 5)
    console.log(final)
}
console.log(final)