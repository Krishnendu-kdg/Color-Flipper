let container=document.getElementsByClassName('container')[0];
let flip_button=document.getElementsByClassName('flip-button')[0];

function getRand(min,max)
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


function flip_color_by_rgb()
{
    let red_content=getRand(0,255);
    let blue_content=getRand(0,255);
    let green_content=getRand(0,255);
    document.body.style.backgroundColor="rgb("+String(red_content)+','+String(green_content)+','+String(blue_content)+')'
container.innerText=`Background Color: RGB(${red_content},${green_content},${blue_content})`;
}


function flip_color_by_hex_codes()
{
    let red_content=getRand(0,255);
    let green_content=getRand(0,255);
    let blue_content=getRand(0,255);
    
    let first_2_letters=(eq_hex(red_content));
    let second_2_letters=(eq_hex(green_content));
    let third_2_letters=(eq_hex(blue_content));
    
    document.body.style.backgroundColor='#'+first_2_letters+second_2_letters+third_2_letters;
    
    container.innerText=`Background Color : #${first_2_letters}${second_2_letters}${third_2_letters}`; 
}


let choice=getRand(0,100);
if(choice%2==0)
{
    flip_color_by_rgb();
}
else
{
    flip_color_by_hex_codes();
}

flip_button,addEventListener('click',function()
{
    let choice=getRand(0,100);
if(choice%2==0)
{
    flip_color_by_rgb();
}
else
{
    flip_color_by_hex_codes();
}
})



//For any individual documentation, plz refer to respective files