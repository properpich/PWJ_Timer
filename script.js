let date = new Date().toLocaleTimeString();
console.log(date);

let clock = document.getElementById('clock')
clock.innerHTML = date;

//run the function every sec.
window.setInterval(() =>{
    let date = new Date().toLocaleTimeString();
    console.log(date);
    let clock = document.getElementById('clock')
    clock.innerHTML = date;
},1000)