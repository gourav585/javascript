let a = 1;
for (let i = 0; i <= 100; i++) {
    console.log(i+a);
    
}

let obj = {
    name: "gourav",
    role: "programmer",
}

for (const key in obj) {
       const element = obj[key]; 
       console.log(element)
}

for (const key in obj) {
    const element = obj[key]; 
    console.log(key)
}



for (const c of "gourav") {
    console.log(c)
}