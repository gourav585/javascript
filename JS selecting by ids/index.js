console.log("gourav")

//how to target an elemenet in the javascript in a class 
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"

// how to target id 
document.getElementById("red").style.backgroundColor = "green"


// this selector is used to select first element in the .box classs
document.querySelector(".box").style.backgroundColor = "blue"