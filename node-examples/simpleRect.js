var rect={
    area:function(x,y){
        return (x*y);
    },
    perimeter:function(x,y){
        return (2*(x+y));
    }
};


function simpleRect(x,y){
    console.log("Area of rect:"+rect.area(x,y));
    console.log("Perimeter of rect:"+rect.perimeter(x,y));
}

simpleRect(1,2);
simpleRect(5,5);