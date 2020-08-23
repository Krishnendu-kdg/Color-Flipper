let container=document.getElementsByClassName('container')[0];
let flip_button=document.getElementsByClassName('flip-button')[0];

function get_rand(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function get_hex(num)
{
    let hex_mapping={
        0:'0',
        1:'1',
        2:'2',
        3:'3',
        4:'4',
        5:'5',
        6:'6',
        7:'7',
        8:'8',
        9:'9',
        10:'A',
        11:'B',
        12:'C',
        13:'D',
        14:'E',
        15:'F'
    };
    return hex_mapping[num];
}

function eq_hex(num)
{
    let str='';
    str+=get_hex(Math.floor(num/16));
    str+=get_hex(num%16);
    return str;
}



let red_content=get_rand(0,255);
let green_content=get_rand(0,255);
let blue_content=get_rand(0,255);

//getting the red,green,blue content


let first_2_letters=(eq_hex(red_content));
//getting the equivalent hexadecimal representation of the red content

let second_2_letters=(eq_hex(green_content));

//getting the equivalent hexadecimal representation of the green content

let third_2_letters=(eq_hex(blue_content));

//getting the equivalent hexadecimal representation of the blue content


document.body.style.backgroundColor='#'+first_2_letters+second_2_letters+third_2_letters;

//changing the color of the body


container.innerText=`Background Color : #${first_2_letters}${second_2_letters}${third_2_letters}`; 

//changing the descriptor of background color

// console.log(`Background Color : # ${first_2_letters}${second_2_letters}${third_2_letters}`);


flip_button.addEventListener('click',function(){
    let red_content=get_rand(0,255);
let green_content=get_rand(0,255);
let blue_content=get_rand(0,255);

let first_2_letters=(eq_hex(red_content));
let second_2_letters=(eq_hex(green_content));
let third_2_letters=(eq_hex(blue_content));

document.body.style.backgroundColor='#'+first_2_letters+second_2_letters+third_2_letters;

container.innerText=`Background Color : #${first_2_letters}${second_2_letters}${third_2_letters}`; 

// console.log(`Background Color : # ${first_2_letters}${second_2_letters}${third_2_letters}`)

})