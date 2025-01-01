//this function is add some value of the containt and string

function nice(name) {
    console.log("hey " + name + " i am so good")
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good")
}

nice("rohan")
nice("shivam")

// this is the example of normal functions

function sum(a,b) {
    console.log(a+b)
}

sum(3,5)


// this the example of return of value to result and it's use of multipul times for diffrent case
function sumof(a,b) {
    return a+b
}

result = sumof(3,6)
result1 = sumof(7,6)
result2= sumof(39,6)

console.log("The sum of these number is :",result)
console.log("The sum of these number is :",result1)
console.log("The sum of these number is :",result2)

//this is example of arrow function
const func1 = (x)=>{
    console.log(" i am an arrow function",x)
}

func1(34)
func1(64)
func1(6)