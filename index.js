// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs){
//    console.log(div.innerText = `all changed ${idx}`)
//    idx++
// }
let btn = document.createElement("button");
btn.innerText = "click me";


let fDiv = document.querySelector("ul");
fDiv.prepend(btn);

btn.addEventListener("dblclick", function(){
    console.log("button clicked")
})