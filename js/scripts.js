//business logic
function Dessert(iceCream, topping, cone) {
  this.iceCream = iceCream;
  this.topping = topping;
  this.cone = cone;
}

Dessert.prototype.yumYum  = function() {
  return this.iceCream + this.topping + this.cone;
}






//user interface logic
$(document).ready(function() {

  $("#dessert").submit(function(event) {

    event.preventDefault();

    var inputtedIceCream = parseInt($("#iceCream").val());
    var inputtedTopping = parseInt($("#topping").val());
    var inputtedCone = parseInt($("#cone").val());

    var newDessert = new Dessert(inputtedIceCream, inputtedTopping, inputtedCone)
    $("#result").text(newDessert.yumYum());

  });
});
