// print an array with the help of loop

let arr =[2,1,4,6,7,]
//console.log(arr)
 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    
 }
  
/*let a = 1;
for (let i = 0; i <= 100; i++) {
    console.log(i+a);*/
    let num = [1,2,3,34,5]
    num.pop();//removes the last elemnet of the array
    console.log(num)
    num.shift(); //remove the a strating element array elemnet
    console.log(num) 
    num.unshift(76) //add the value of the start poin in the array elemnet 
    console.log(num)


    let num1 = [1,2,3,4,5,6,7]
    delete num1[0] //delete the any value of givin array 
    console.log(num1)