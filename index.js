const pi=22/7;


var volume=()=>{
    let radius=document.getElementById('radius').value;
    let height=document.getElementById('height').value;
    let result=document.getElementById('result');
    let volume=pi*radius*radius*height;
    result.innerText="volume is :"+volume +" Cubic units"
}

var surfaceArea=()=>{
    let radius = document.getElementById('radius').value;
    let height = document.getElementById('height').value;
    let result = document.getElementById('result');
    let surfaceArea = (2*pi*radius*height)+(2*pi*radius*radius);
    result.innerText="Surface Area is:"+surfaceArea+" Square Units";
}

var power=()=>{
    let i = document.getElementById('current').value;
    let v = document.getElementById('volt').value;
    let result = document.getElementById('power');
    let p= v*i;
    result.innerText = "Power is : "+ p + " watt"; 
}