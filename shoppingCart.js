
var cart = []; //creates an array

var Item = function(name, price, count){ //this creates the items and sets the
    this.name = name  //funtions arguments
    this.price = price
    this.count = count
}

function addItemstoCart(name, price, count){ //this puts the items into a function
  for(var i in cart){

    if (cart[i].name === name){ //this is a way to count the items
      cart[i].cart += count   //with the same name
      return; // e
    }
  }

  var item = new Item(name, price, count); //this puts the items in the array
  cart.push(item);
}

addItemstoCart("jeans", 40, 1)
addItemstoCart("blouse", 20, 1)
addItemstoCart("shoes", 100, 1)


console.log(cart[0].name)
console.log(cart[1].name)


var total = 0;
funtion total(){
for(var j = 0;i<cart.length;j++){
  total+=cart[j].price;
console.log(total);
}
}
