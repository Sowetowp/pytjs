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
const mm = myArray.forEach((val, index, arr)=>{
    ph.push(val + " " + "olodo")
})
console.log(ph)

const mapped = myArray.map((val, index, arr)=>{
    return val + " " + "omo ologo"
})
console.log(mapped)

const filt = myArray.filter()