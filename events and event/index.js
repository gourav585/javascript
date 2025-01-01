let button = document.getElementById("btn")

//button.addEventListener("click", ()=>{
   // alert("gourav")
//})
// this event is used to single click 
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML ="<b> hello</b> gourav rajak"
}
)

// this event is used to double click
//button.addEventListener("dblclick", ()=>{
  //  document.querySelector(".box").innerHTML ="<b> hello</b> gourav rajak"
//}
//)

// when you click right on button to show this content
button.addEventListener("contextmenu", ()=> {
    alert("dont heak us by right click")
})


// use any key for this button
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})