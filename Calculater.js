let display = document.getElementById('display');
function press(value){
    display.value += value;
}
function equal(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "ERROR";
    }
}
function Resat(){
    display.value = "";
}
function Del(){
    display.value= display.value.slice(0, - 1);
}