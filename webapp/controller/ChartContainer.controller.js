sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.vk.tutorial.icecream.controller.ChartContainer", {
    onNavButtonPressed: function() {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("home");
  }  
	});
});
