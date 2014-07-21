 describe("Purchase", function(){
    describe("totalCost", function(){
      it ("calculates the total cost of the purchase", function(){
        var testPurchase = Object.create(Purchase);
        testPurchase.totalCost(2,5).should.equal(10);
      });
    });
 });
