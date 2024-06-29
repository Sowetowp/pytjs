// truthy and falsy values
// if else statement
// switch and case
// tenary operator

// falsy value
null
false
undefined
0
""
NaN

let chioma = 20
// if(chioma >= 18){
//     document.write("chioma is an adult")
// }else{
//     document.write("chioma is a child")
// }

if (chioma <= 4) {
    document.write("chioma is an infant")
} else if (chioma <= 12) {
    document.write("chioma is a child")
} else if (chioma < 18) {
    document.write("chioma is a teenager")
} else if (chioma >= 18 && chioma <= 19) {
    document.write("chioma is an adult that is also a teenager")
} else {
    document.write("chioma is definitely an adult")
}

let variable1 = 88
var variable2 = 99
let sum = (Math.floor(Math.random() * (variable1 + 1))) + (Math.floor(Math.random() * (variable2 + 1)))
console.log(sum)
if (sum % 2 === 0) {
    console.log("i am an even number")
} else {
    console.log("i am an odd number")
}

const superHero = "thor"
switch (superHero) {
    case "thor":
        console.log("I have my hammer")
        break;
    case "superman":
        console.log("This is Super Man flying")
        break;
    case "Iron Man":
    case "":
        console.log("i am Iron Man")
        break;
    default:
        console.log("Please type in a correct Super Hero name")
}