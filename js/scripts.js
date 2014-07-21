var Purchase = {
  description: "",
  quantity: 0,
  unitCost: 0,
  totalCost: function (inputQuantity, inputUnitCost) {
    return inputQuantity * inputUnitCost;
  }
};

var validateInputQuantity = function(inputQuantity) {
  if (inputQuantity > 0) {
    return true;
  } else {
    return false;
  };
};

var validateInputUnitCost = function(inputUnitCost) {
  if (inputUnitCost > 0) {
    return true;
  } else {
    return false;
  };
};
