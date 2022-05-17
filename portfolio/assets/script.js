let toggle = document.querySelector("#checkbox");

toggle.addEventListener("change", function(){
   if (toggle.checked == true){
       document.body.style.backgroundColor = "black"
       document.body.style.color ="white"
       console.log("on")
   }else{
       document.body.style.backgroundColor= "white"
       document.body.style.color ="black"
       console.log("off")
   }
})


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
document.body.style.fontSize = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    document.body.style.fontSize = this.value + "px";
    console.log(this.value)
}