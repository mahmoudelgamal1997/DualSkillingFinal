let points = {x:5 , y:10};
({x:points.y , y:points.x} = {x:points.x,y:points.y})
console.log(points);
