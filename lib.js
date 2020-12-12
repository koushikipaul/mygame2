function lineExtension(x1,y1,x2,y2){
    var m = (y2-y1)/(x2-x1);

    var c = y2-m*x2;
    console.log(m+","+c)
    var x,y;
   var extendedPoint={x:0,y:0};
   
    if(x2>x1){
        if(y2>y1){
            y=canvas.height;
            x=(y-c)/m;
            
            extendedPoint.x=x;
            extendedPoint.y=y;
        }else {
            y=0;
            x=(y-c)/m;
            
            extendedPoint.x=x;
            extendedPoint.y=y;
        }
        
    }else {
        if(y2>y1){
            y=canvas.height;
            x=(y-c)/m;
            
            extendedPoint.x=x;
            extendedPoint.y=y;
        }else {
            y=0;
            x=(y-c)/m;
           
            extendedPoint.x=x;
            extendedPoint.y=y;
        }
    
}   
   return extendedPoint;
     
}