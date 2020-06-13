var div1=document.querySelector("div");

var X 
var Y 
var drag=false


div1.onmousedown=function(e){
    X=e.clientX;
    Y=e.clientY;
    drag=true;
}

document.onmousemove=function(e){
    if(drag){
        var deltaX=e.clientX-X;
        var deltaY=e.clientY-Y;     
        var top=parseInt(div1.style.top) || 0;
        var left=parseInt(div1.style.left) || 0; 
        if((deltaX+left)>0 && (deltaX+left)<document.body.clientWidth){//防止移出边界
            div1.style.left=deltaX+left+'px';          
            X=e.clientX;
        } 
        if((deltaY+top)>0 && (deltaY+top)<document.body.clientHeight){//防止移出边界
            div1.style.top=deltaY+top+'px';
            Y=e.clientY;
        } 
    }
}

document.onmouseup=function(){
    drag=false;
}

