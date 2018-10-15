
sap.ui.getCore().attachInit(function() {
    new sap.m.Shell({
      app: new sap.ui.core.ComponentContainer({
        name: "org.fornever.ui5demo"
      })
    }).placeAt("content");
  });