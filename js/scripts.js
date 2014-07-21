var Purchase = {
  category: "",
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

    var purchaseArray = [];

  $("form#add-category").submit (function (event) {

    event.preventDefault();

    var inputCategory = $("input#input-category").val();
    inputCategory = inputCategory.slice(0,1).toUpperCase() +
                      inputCategory.slice(1).toLowerCase();

    $("dl").last().append("<dt class='category'>" + inputCategory + "</dt>");

    $("dt.category").last().click (function () {
      $(".add-purchase-header1 h3").text("Add purchase to " + inputCategory);
      $(".add-purchase-header2 h3").text(inputCategory);
      $("tbody.tbody-list").text("");
      purchaseArray.forEach(function (myPurchase) {
        if (myPurchase.category === inputCategory) {
          $("tbody").last().append("<tr><td>" + myPurchase.description + "</td><td>"
                           + "$ <span class='pull-right'>" + myPurchase.totalCost().toFixed(2)
                           + "</span></td></tr>");
        }
      })

    });

    $("input#input-category").val("");

  });

  $("form#add-purchase").submit (function (event) {

    event.preventDefault();

    var inputDesc = $("input#input-desc").val();
    var inputQuantity = parseInt($("input#input-qty").val());
    if (!validInputQuantity(inputQuantity)) {
      alert("Input quantity is invalid; please enter a number greater than zero");
    } else {
      var inputUnitCost = parseFloat($("input#input-unit-cost").val()).toFixed(2);
      if (!validInputUnitCost(inputUnitCost)) {
        alert("Input unit cost is invalid; please enter an amount in dollars and cents" +
              " that is greater than zero");
      } else {
        var myPurchase = Object.create(Purchase);
        myPurchase.category = $(".add-purchase-header2 h3").text();
        var displayDesc = inputDesc.slice(0,1).toUpperCase() +
                      inputDesc.slice(1).toLowerCase();
        myPurchase.description = displayDesc;
        myPurchase.quantity = inputQuantity;
        myPurchase.unitCost = inputUnitCost;
        purchaseArray.push(myPurchase);
      };

      $("input#input-desc").val("");
      $("input#input-qty").val("");
      $("input#input-unit-cost").val("");

    };

    $("tbody").last().append("<tr><td>" + myPurchase.description + "</td><td>"
                           + "$ <span class='pull-right'>" + myPurchase.totalCost().toFixed(2)
                           + "</span></td></tr>");


  }); // closes submit


});
