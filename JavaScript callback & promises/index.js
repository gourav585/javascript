
// this is the example of asynchronous programing

console.log("gourav is a hacker")// first
console.log("Rohan is a hecker")//second


setTimeout(() => {
    console.log("I am inside settimeout")//fourth
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")//fivth
}, 0);

console.log("The End")//third

/// callback founction in javascript
//A JavaScript callback is a function which is to be executed after another function has finished execution.

//this is the example of syncronous programing
//console.log("gourav is a hacker")// first
//console.log("Rohan is a hecker")//second

const fn = () => {
    console.log("Nothing")
  }
  
  const callback = (arg, fn) => {
      console.log(arg)
      fn()
  }
  
  const loadScript = (src, callback) => {
      let sc = document.createElement("script");
      sc.src = src;
      sc.onload = callback("gourav", fn);
      document.head.append(sc)
  }
  
  
  loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )