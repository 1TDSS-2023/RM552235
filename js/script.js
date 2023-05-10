"use strict";
// console.log("Hello World")

// var n1 = "10"
// var n2 = "5"

// console.log(parseInt(n1)+parseInt(n2))

// var nome1 = "Dubas"

// if(nome1 != ""){
//     var nome1 = "Julia"
// }

// console.log(nome1)

const btn = document.getElementById("meu_btn")
console.log(btn.id)

btn.addEventListener("click", function(){
    // console.log(btn.textContent)

} )

let r=0,g=0,b=0
r = Math.round(Math.random() *255)
g = Math.round(Math.random() *255)
b = Math.round(Math.random() *255)


this.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b});`)