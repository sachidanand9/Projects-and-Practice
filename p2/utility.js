
// export function addition(a,b){
//     return a+b
// }

// export function multiplication(a,b) {
//     return a*b 
// }

// ---- instead of using export again and again we call call it once 
function addition(a,b){
    return a+b
}

 function multiplication(a,b) {
    return a*b 
}
export{addition,multiplication as mul}