document.querySelectorAll("button")[0].addEventListener("click",handleclick0);
document.querySelectorAll("button")[1].addEventListener("click",handleclick1);
document.querySelectorAll("button")[2].addEventListener("click",handleclick2);
document.querySelectorAll("button")[3].addEventListener("click",handleclick3);
document.querySelectorAll("button")[4].addEventListener("click",handleclick4);
document.querySelectorAll("button")[5].addEventListener("click",handleclick5);
document.querySelectorAll("button")[6].addEventListener("click",handleclick6);
document.addEventListener("keydown", function(event) {
    if(event.key==='1'){handleclick0();}
    else if(event.key==='2'){handleclick1();}
    else if(event.key==='3'){handleclick2();}
    else if(event.key==='4'){handleclick3();}
    else if(event.key==='5'){handleclick4();}
    else if(event.key==='6'){handleclick5();}
    else if(event.key==='7'){handleclick6();}


});
function handleclick0()
{
    var audio=new Audio("./sounds/crash.mp3");
    audio.play();
}
function handleclick1()
{
    var audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
}
function handleclick2()
{
    var audio=new Audio("./sounds/snare.mp3");
    audio.play();
}

function handleclick3()
{
    var audio=new Audio("./sounds/tom-1.mp3");
    audio.play();
}

function handleclick4()
{
    var audio=new Audio("./sounds/tom-2.mp3");
    audio.play();
}
function handleclick5()
{
    var audio=new Audio("./sounds/tom-3.mp3");
    audio.play();
}
function handleclick6()
{
    var audio=new Audio("./sounds/tom-4.mp3");
    audio.play();
}