let c=(a,b) =>{
     return a-b
}

let  a = [43,12,78,13,0,-1]
a.sort(c)
console.log(a)
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
    
 }

let a1 = [111,222,4,6,8,9]
a1.sort()
console.log(a1) 

let a2 = [23,13,14,17,19,5]
a2 .splice(2,2,75,84) // splice is the add value in the givin array element 
console.log(a2)

let a3 = [22,33,44,55,66,77,8,8]
let newarray 
newarray=a3.slice(3)// this is removes the element with the help of new array or var
console.log(newarray)