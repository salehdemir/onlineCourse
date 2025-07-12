// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs){
//    console.log(div.innerText = `all changed ${idx}`)
//    idx++
// }
// let btn = document.createElement("button");
// btn.innerText = "click me";

// let ul = document.querySelector("ul");
// ul.prepend(btn);

// btn.addEventListener("click",() => {
//     console.log("button click first")
// })

// let evtSecnd =() => {
//     console.log("button click second")
// };

// btn.addEventListener("click", evtSecnd)

// btn.addEventListener("click",() => {
//     console.log("button click third")
// })
// btn.addEventListener("click",() => {
//     console.log("button click fourt")
// })

// btn.removeEventListener("click",evtSecnd)




// btn.addEventListener("dblclick", function(){
//     console.log("button clicked")
// })
// btn.onclick = function(){
//     alert("button clicked")
// }

let btn = document.querySelector("#btn");
let currentMode = "light" 
btn.addEventListener("click", () => {
    if (currentMode === "light"){
        currentMode = "Dark"
        document.body.style.backgroundColor = "black"
        btn.innerText = "Change to light"
    }else{
        currentMode = "light"
          document.body.style.backgroundColor = "white"
          btn.innerText = "Change to dark"
    }
    console.log(currentMode)
})