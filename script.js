let display = document.getElementById("screen");

function cal(a){
    switch(a){
        case 'ac': 
            display.value = "";
        break;
    
        case 'del': 
            display.value = display.value.slice(0,-1);
        break;
    
        case '=': 
            display.value = eval(display.value);
        break;
        
        default:
            display.value += a; 
            break;
    }
}