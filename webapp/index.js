sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer"
], function(
	Shell, App, Page, ComponentContainer) {
	"use strict";

	sap.ui.getCore().attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "Rule Builder - Basic Decision Table",
						enableScrolling : false,
						content : [
							new ComponentContainer({
								height : "100%", name : "sap.rules.ui.sample.GuidedDecisionTable",
								settings : {
									id : "sap.rules.ui.sample.GuidedDecisionTable"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});
