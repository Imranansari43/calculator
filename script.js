const display = document.querySelector('input');
const per = document.getElementById('percent');
let clr = true;
function percent () {
    if (clr == true) {
        display.value = eval(display.value)/100;
        clr = false;
    }
    else{
        display.value = eval(display.value)/100;
        clr = false ;
    }
}
function button7(){
    if (clr == true) {
        display.value += '7';
        clr = true;
    }
    else{
        display.value = '7'
        clr =true;
    }
}
function button8(){
    if (clr == true) {
        display.value += '8';
        clr = true;
    }
    else{
        display.value = '8'
        clr =true;
    }
}
function button9(){
    if (clr == true) {
        display.value += '9';
        clr = true;
    }
    else{
        display.value = '9'
        clr =true;
    }
}
function button4(){
    if (clr == true) {
        display.value += '4';
        clr = true;
    }
    else{
        display.value = '4'
        clr =true;
    }
}
function button5(){
    if (clr == true) {
        display.value += '5';
        clr = true;
    }
    else{
        display.value = '5'
        clr =true;
    }
}
function button6(){
    if (clr == true) {
        display.value += '6';
        clr = true;
    }
    else{
        display.value = '6'
        clr =true;
    }
}
function button1(){
    if (clr == true) {
        display.value += '1';
        clr = true;
    }
    else{
        display.value = '1'
        clr =true;
    }
}
function button2(){
    if (clr == true) {
        display.value += '2';
        clr = true;
    }
    else{
        display.value = '2'
        clr =true;
    }
}
function button3(){
    if (clr == true) {
        display.value += '3';
        clr = true;
    }
    else{
        display.value = '3'
        clr =true;
    }
}
function button0(){
    if (clr == true) {
        display.value += '0';
        clr = true;
    }
    else{
        display.value = '0'
        clr =true;
    }
}
function buttonm(){
    if (clr == true) {
        display.value += '*';
        clr = true;
    }
    else{
        display.value += '*'
        clr =true;
    }
}
function buttonmin(){
    if (clr == true) {
        display.value += '-';
        clr = true;
    }
    else{
        display.value += '-'
        clr =true;
    }
}
function buttonp(){
    if (clr == true) {
        display.value += '+';
        clr = true;
    }
    else{
        display.value += '+'
        clr =true;
    }
}
function buttond(){
    if (clr == true) {
        display.value += '/';
        clr = true;
    }
    else{
        display.value += '/'
        clr =true;
    }
}

function equal (){
    display.value = eval(display.value);
    clr = false;
}