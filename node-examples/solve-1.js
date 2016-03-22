var rect=require('./rect-1.js')

function simpleRect(x,y){
    console.log("Area of rect:"+rect.area(x,y));
    console.log("Perimeter of rect:"+rect.perimeter(x,y));
}

simpleRect(1,2);
simpleRect(5,5);