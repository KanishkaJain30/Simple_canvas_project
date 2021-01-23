const canvas=document.querySelector(".draw");
//const c = canvas.getContext('2d');
const c=canvas.getContext('2d');
canvas.width =1000;
canvas.height =650;
c.strokestyle='#BADA55';
c.lineJoin = "round";
c.lineCap = 'round';
c.lineWidth = 50;
let lastX=0;
let lastY=0;

let isdraw=false;
let hue=0;
canvas.addEventListener('mousedown',(e)=>{
  //console.log(e);
  lastX=e.offsetX;
  lastY=e.offsetY;
  isdraw=true;
 
});
function draw(e)
{
   if(!isdraw)
     return ;

   //console.log(e);
   c.strokeStyle=`hsl(${hue},100%,50%)`;
   //c.strokeStyle = `hsl(${hue}, 100%, 50%)`;
   c.beginPath();
   c.moveTo(lastX,lastY);
   c.lineTo(e.offsetX,e.offsetY);
   c.stroke();
   [lastX,lastY]=[e.offsetX,e.offsetY];
   hue++;
   
}
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=>{
    isdraw=false;
  });

  canvas.addEventListener('mouseout',()=>{
    isdraw=false;
  });

  const brush=document.querySelector('input');

  function changesize()
  {
      c.lineWidth=this.value;
  }
  brush.addEventListener('change',changesize);
  brush.addEventListener('mousemove',changesize);




