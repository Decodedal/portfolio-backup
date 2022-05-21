let toggle = document.querySelector("#checkbox");
let heade = document.querySelector(".head");

toggle.addEventListener("change", function(){
   if (toggle.checked == true){
       document.body.style.backgroundColor = "black"
       document.body.style.color ="white"
       document.head.style.textShadow = "none"
       console.log("on")
   }else{
       document.body.style.backgroundColor= "rgb(223, 175, 223)"
       document.body.style.color ="black"
       console.log("off")
   }
})


// var slider = document.getElementById("myRange");
// var output = document.getElementById("#output");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
    document.body.style.fontSize = this.value + "px";
//     output.innerHTML = this.value;
// }
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value +"px";
  document.body.style.fontSize = this.value + "px";
}

let blueFilter= document.querySelector("#bluefilter")

blueFilter.addEventListener("change", function(){
    if (blueFilter.checked == true){
        document.body.style.filter = "grayscale(100%)";
        console.log("filter on")
    }else{
        document.body.style.filter = "grayscale(0%)";
    console.log("filter off")

    }
})