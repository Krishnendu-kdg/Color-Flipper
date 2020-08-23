let container=document.getElementsByClassName('container')[0];
let flip_button=document.getElementsByClassName('flip-button')[0];

function getRand(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let red_content=getRand(0,255);
let blue_content=getRand(0,255);
let green_content=getRand(0,255);

// getting the red,green,blue content by random number 


// console.log(red_content,blue_content,green_content);
document.body.style.backgroundColor="rgb("+String(red_content)+','+String(green_content)+','+String(blue_content)+')';

//changing the color of Body

container.innerText=`Background Color: RGB(${red_content},${green_content},${blue_content})`;

//Changing the Background color descriptor


// console.log("rgb("+String(red_content)+','+String(blue_content)+','+String(green_content)+')');


flip_button.addEventListener('click',function(){
    let red_content=getRand(0,255);
let blue_content=getRand(0,255);
let green_content=getRand(0,255);
// console.log(red_content,blue_content,green_content);
document.body.style.backgroundColor="rgb("+String(red_content)+','+String(green_content)+','+String(blue_content)+')'

container.innerText=`Background Color: RGB(${red_content},${green_content},${blue_content})`;

})