 describe("Purchase", function(){
    describe("totalCost", function(){
      it ("calculates the total cost of the purchase", function(){
        var testPurchase = Object.create(Purchase);
        testPurchase.totalCost(2,5).should.equal(10);
      });
    });
 });

 describe("validateInputQuantity", function () {
  it("returns false if the quantity input by the user is invalid", function () {
    validateInputQuantity(0).should.equal(false);
    validateInputQuantity(-1).should.equal(false);
  });
 });

