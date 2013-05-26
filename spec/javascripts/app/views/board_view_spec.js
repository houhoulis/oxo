describe("App.Views.Board", function() {

  beforeEach(function() {
    this.view = new App.Views.Board();
    loadFixtures('./index.html');
  });

  describe("Instantiation", function() {

    it("should create a div element", function() {
      expect(this.view.el.nodeName).toEqual("DIV");
    });

    describe ("creates in the DOM", function() {
      var oxoDOM;

      beforeEach(function() {
        oxoDOM = document.getElementById('oxo-container');
      });

      it("creates a <p>", function() {
        // debugger;
        expect($(this.view.el).has('p').length).toBeTruthy;
      });

      it("fails because it doesn't create a span in the DOM", function() {
        expect($(this.view.el).has('span').length).toBeTruthy;
      });
    });
  });

});
