
function printWeekDay(){
    let day = new Date ().getDate()
    switch(day){
        case 0:
            console.log("CN");
            break;
        case 1:
            console.log("T2");
            break;
         case 3:
            console.log("T3");
            break;
        case 4:
            console.log("T4");
            break;
        case 5:
            console.log("T6");
            break;
        case 6:
            console.log("T7");
            break;
            
    }
}
printWeekDay();