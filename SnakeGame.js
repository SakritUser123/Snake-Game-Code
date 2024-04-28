/*
This Function gets the id from the snakegame.html document ,
and runs an switch case  to check  what color the user chose.
It then sends a message to canvas saying to set the ballcolor as what the user chose.
*/

function onLoad(){
     document.getElementById('canvas').style.display = 'none';
}


function submitForm() {
     
     document.getElementById('formfield').style.display = 'none';
    document.getElementById('canvas').style.display = 'block';


   let selectedColor =document.getElementById('colorball').value;

     const canvas = document.getElementById("gameCanvas");
     const context = canvas.getContext("2d");
     context.beginPath();

      context.arc(300, 200, 30, 0, 2 * Math.PI);


     switch (selectedColor) {
          case "Red":
               context.fillStyle = "red";
               break;
          case "Blue":
               context.fillStyle = "blue";
               break;
          case "Purple":
               context.fillStyle = "purple";
               break;
          case "Green":
               context.fillStyle = "green";
               break;
          default:
               context.fillStyle = "black";
                break;
     }

 context.fill();
 context.lineWidth = 6;
 context.stroke();
 
 
 };
 
 
 
 window.addEventListener("keydown",processthekey,false);

 

 let x=500;
 let y=400;
 let dx=0;
 let dy=0;

  function processthekey(e){

     //up arrow
      if (e.keyCode == 38){
           dy -=10;
      }
      //down arrow
      if(e.keyCode == 40){
          dy +=10;
         
      }
      //left arrow
      if (e.keyCode == 37){
           dx -=10;
 
      }
      //right arrow
      if(e.keyCode == 39){
 
         dx+=10;
      }
  }
 e.preventDefault();
  function drawCircle(){
     
         context.clearRect(0,0,canvas.width,canvas.height);
         context.beginPath();
         context.arc =(200+dx,200+dy);
         context.fillStyle = chooseBallColor();
         context.fill();
         x += dx;
         y+=dy;
     }
  
  
 
  processthekey();
  drawCircle();

  
 
 
 
 
 
  
 
 
  



