function myFunction(chioma1, chioma2, chioma3) {
    console.log(chioma2)
    console.log(chioma1 * chioma2)
}
myFunction(1, 2, 3)

function areaOfACircle(r) {
    console.log(Math.random() * 3.142 * r ** 2)
}
areaOfACircle(2)

const myArray = [
    { start: 1, end: 3 },
    { start: 2, end: 4 },
    { start: 3, end: 5 },
    { start: 0, end: 6 },
    { start: 5, end: 7 },
    { start: 8, end: 9 },
    { start: 5, end: 9 }
]
const timeScheduling = () => {
    const output = []
    for (let i = 0; i <= myArray.length; i++) {
        if(i !== 0){
            output.push()
        }
        if (i !== 0  && myArray[i].start < myArray[i + 1].start && myArray[i].end < myArray[i + 1].start) {

        }
    }
}