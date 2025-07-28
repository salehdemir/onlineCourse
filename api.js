
// In Below code actual data is not appearing which is data about cat b/c it can't read it and
// it is  in different format.
// So we learn xml,JSON and json() AJAX(Async js and xml). now AJAJ async js and json.
// In perviose the data come from browser in xml but it deprecated.
// Now a days data are coming JSON format
// JSON (Java script object notition), its coming like js object but it not js object.
// For getting api data we should change json to js object. cause it looks the some make it easy.
// we can change it by json()method which is async like fetch().
// json()method:returns a second promise the resolve with the result of parsing the reponse body text
// as JSON.(Input is JSON, output is js object).
// fetch()method: is first promise.
// By default the option is GET which is bring the data and most time used
// Let promise = fetch(url,[option]).

// fetching()method
// const Url = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
 
// const getData = async () => {
//     console.log("getting Data ...")
//     let response = await fetch(Url);
//     console.log(response); 
// } 

// json()method
const Url = "https://goweather.xyz/weather/kabul";

let parag = document.querySelector(".parag");
let btn = document.querySelector("#btn");

//  using async await
const getData = async () => {
    console.log("getting Data ...")
    let response = await fetch(Url);
    console.log(response); 
    let data = await response.json();
    parag.innerText = data.forecast[0].temperature
} 

// using promise chaining
// function getData(){
//     fetch(Url)
//     .then((res) => {
//       return  res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         parag.innerText = data.forecast[0].wind
//     })
// }

btn.addEventListener("click",getData);











