//Assignment using Finite State Machine Concept using states

let color = ["red", "green", "yellow"];

let i=0,counter=1;
let timer = 0;
let x=0, y=0, click="";

//This is the function state red which means x=0,y=0
function stateRed()
{
    x=0;
    y=0;
    timer = 0

}

//This is the function state green which means x=0,y=1
function stateGreen()
{
    x=0;
    y=1;
    timer = 21
}

//This is the function state yellow which means x=1,y=0
function stateYellow()
{
    x=1;
    y=0;
    timer = 36

}

function activeButton()
{
    //timer always increment with 1 as this function active button is passed in setInterval which is called after every 1 second.
      
    timer++;
    let active = document.getElementsByClassName('btn');

  
    
    for(let j=0; j<active.length; j++)
    {
        active[j].style.background="black";
        active[j].innerHTML = "";
    }
  
    //when timer is less than 20 then it should be in statered which is x=0,y=0
    if(timer<=20)
      {
        x=0;
        y=0
      }
    //when timer is more or equal to 21 and less then or equal to 35 then it should be in stategreen which is x=0,y=1
    if(timer>=21 && timer<=35)
      {
        x=0;
        y=1;
      }
    //when timer is more or equal to 36 and less then or equal to 41 then it should be in stategreen which is x=0,y=1
    if(timer>=36 && timer<=41)
      {
        x=1;
        y=0;
      }
    //Make timer to 0 as we go through all the states and we need to go again(repeat the process)
    if(timer>42)
      {
        timer=0;
      }
    
    if(x==0 && y==0)
      {
        document.getElementById('btnR').style.background = color[0];
      }
    
    if(x==0 && y==1)
      {
        document.getElementById('btnG').style.background = color[1];
      }
    
    if(x==1 && y==0)
      {
        document.getElementById('btnY').style.background = color[2];
      }
  
}


document.getElementById("btnG").addEventListener("click",stateGreen);
document.getElementById("btnR").addEventListener("click", stateRed); 
document.getElementById("btnY").addEventListener("click", stateYellow);

setInterval(activeButton,1000);

