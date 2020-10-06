//D=((L-D)/L)*100
var listedPrice=1000;
var sellingPrice=700;
var discountedPrice=((listedPrice-sellingPrice)/listedPrice)*100;

console.log(discountedPrice);
Math.round(discountedPrice);
console.log(discountedPrice+" % off");

var result=listedPrice>sellingPrice;
console.log(typeof result);

//For More Details,Refer MDN docs