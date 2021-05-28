var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function()
{
var x=this.innerHTML;
handleclick(x);
});
}

document.addEventListener("keydown",function(event)
{
var w=event.key;
handleclick(w);
});


function handleclick(x)
{
    
    if(x=="w")
    {
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    }
    else if(x=="a")
    {
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    }
    if(x=="s")
    {
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    }
    if(x=="d")
    {
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    }
    if(x=="j")
    {
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    }
    if(x=="k")
    {
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    }
    if(x=="l")
    {
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    }
}



