var Purchase = {
  description: "",
  quantity: 0,
  unitCost: 0,
  totalCost: function (inputQuantity, inputUnitCost) {
    return inputQuantity * inputUnitCost;
  }
};
