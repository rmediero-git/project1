sap.ui.define([
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageToast"
  ],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
    function(Controller,MessageToast) {
      "use strict";

      return Controller.extend("project1.controller.App", {
        onShowHello : function () {
            // show a native JavaScript alert
            //alert("Hello World");
            MessageToast.show("Hello opensap from toast")
        }
      });
    }
  );
