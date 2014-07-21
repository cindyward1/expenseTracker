var Purchase = {
  description: "",
  quantity: 0,
  unitCost: 0,
  totalCost: function () {
    return this.quantity * this.unitCost;
  }
};

var validInputQuantity = function(inputQuantity) {
  if (inputQuantity > 0) {
    return true;
  } else {
    return false;
  };
};

var validInputUnitCost = function(inputUnitCost) {
  if (inputUnitCost > 0) {
    return true;
  } else {
    return false;
  };
};

$(document).ready (function () {

  $("form#add-purchase").submit (function (event) {

    event.preventDefault();

    var inputDesc = $("input#input-desc").val();
    var inputQuantity = parseInt($("input#input-qty").val());
    if (!validInputQuantity(inputQuantity)) {
      alert("Input quantity is invalid; please enter a number greater than zero");
    } else { // needs closing brace
      var inputUnitCost = parseFloat($("input#input-unit-cost").val()).toFixed(2);
      if (!validInputUnitCost(inputUnitCost)) {
        alert("Input unit cost is invalid; please enter an amount in dollars and cents" +
              " that is greater than zero");
      } else { // needs closing brace
        var myPurchase = Object.create(Purchase);
        myPurchase.description = inputDesc;
        myPurchase.quantity = inputQuantity;
        myPurchase.unitCost = inputUnitCost;
      };

      $("input#input-desc").val("");
      $("input#input-qty").val("");
      $("input#input-unit-cost").val("");

    };

    var displayDesc = myPurchase.description.slice(0,1).toUpperCase() +
                      myPurchase.description.slice(1).toLowerCase();
    $("tbody").last().append("<tr><td>" + displayDesc + "</td><td>"
                           + "$ <span class='pull-right'>" + myPurchase.totalCost().toFixed(2)
                           + "</span></td></tr>");

  }); // closes submit


});
