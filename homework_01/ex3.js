const item={
  "name":"Biscuits",
  "type":"regular",
  "category":"food",
  "price":200
}

function applyCoupon(item){
  return(number)=>{
    item.price = item.price*((100-number)/100);
    return item;
  }
}

console.log(applyCoupon(item)(10).price==180);
