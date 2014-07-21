 describe("Purchase", function(){
    describe("totalCost", function(){
      it ("calculates the total cost of the purchase", function(){
        var testPurchase = Object.create(Purchase);
        testPurchase.totalCost(2,5).should.equal(10);
      });
    });
 });

 describe("validInputQuantity", function () {
  it("returns false if the quantity input by the user is invalid", function () {
    validInputQuantity(0).should.equal(false);
    validInputQuantity(-1).should.equal(false);
  });
 });

describe("validInputUnitCost", function () {
  it("returns false if the unit cost input by the user is invalid", function () {
    validInputUnitCost(0).should.equal(false);
    validInputUnitCost(-1).should.equal(false);
  });
});
