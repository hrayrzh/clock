window.onload=clock();
function clock(){
    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var we = document.getElementById("we");
    var date = new Date();
    var mil = date.getMilliseconds();
    var sec1 = date.getSeconds();
    var min1 = date.getMinutes();
    var hour1 = date.getHours();
    var amis = date.getMonth()+1;
    var x=sec1*6+(mil/1000)*6;
    var y=min1*6+(sec1/10);
    if (hour1>12){
        var z=(hour1-12)*30+(min1/2);
    }else{
        var z=hour1*30+(min1/2);
    }
    sec.setAttribute("style", "transform:rotate("+x+"deg);");
    min.setAttribute("style", "transform:rotate("+y+"deg);");
    hour.setAttribute("style", "transform:rotate("+z+"deg);");
    document.getElementById("date").innerHTML = date.getDate()+"/"+amis;
//    var week = date.getDay();
//    var w=(360/7)*2;
//    we.setAttribute("style", "transform:rotate("+w+"deg);");
    setTimeout(clock, 2);
//     ո՞նց տարբեր երկրների ժամեր ցույց տանք
}

function guyn1(){
    document.getElementById("div1").setAttribute("style", "background-color:red");
    document.getElementById("div2");
    document.getElementById("div3");
    document.getElementById("div4");
    document.getElementById("div5");
    document.getElementById("div6");
    document.getElementById("div7");
    
    
    
//    Ո՞նց չայլդով գեթ էլեենտ անենք
}

/*var flags = ['flags-normal/am.png' , 'flags-normal/ru.png' , 'flags-normal/de.png' , 'flags-normal/es.png' , 'flags-normal/fr.png' , 'flags-normal/jo.png' , 'flags-normal/pt.png' , 'flags-normal/ar.png' , 'flags-normal/us.png' , 'flags-normal/uy.png' , 'flags-normal/ve.png' , 'flags-normal/sy.png'];
var peephole = document.getElementsByClassName('peephole');
window.onload=cl();
    peephole[0].innerHTML='<img src='+'"'+flags[0]+'" width=100%; height=100%;>';
    peephole[1].innerHTML='<img src='+'"'+flags[1]+'" width=100%; height=100%;>';
    peephole[2].innerHTML='<img src='+'"'+flags[2]+'" width=100%; height=100%;>';
function forward(){
    flags.push(flags.shift());
    peephole[0].innerHTML='<img src='+'"'+flags[0]+'" width=100%; height=100%;>';
    peephole[1].innerHTML='<img src='+'"'+flags[1]+'" width=100%; height=100%;>';
    peephole[2].innerHTML='<img src='+'"'+flags[2]+'" width=100%; height=100%;>';
}*/
/*
function back(){
    flags.unshift(flags.pop());
    peephole[0].innerHTML='<img src='+'"'+flags[0]+'" width=100%; height=100%;>';
    peephole[1].innerHTML='<img src='+'"'+flags[1]+'" width=100%; height=100%;>';
    peephole[2].innerHTML='<img src='+'"'+flags[2]+'" width=100%; height=100%;>';
}
*/

//function cl(){
//    flags.unshift(flags.pop());
//    peephole[0].innerHTML='<img src='+'"'+flags[0]+'" width=100%; height=100%;>';
//    peephole[1].innerHTML='<img src='+'"'+flags[1]+'" width=100%; height=100%;>';
//    peephole[2].innerHTML='<img src='+'"'+flags[2]+'" width=100%; height=100%;>';
//    
//    setTimeout(cl, 2000);
//}
