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

if(chioma <= 4){
    document.write("chioma is an infant")
}else if(chioma <= 12){
    document.write("chioma is a child")
}else if(chioma < 18){
    document.write("chioma is a teenager")
}else if(chioma >= 18 && chioma <= 19){
    document.write("chioma is an adult that is also a teenager")
}else{
    document.write("chioma is definitely an adult")
}
