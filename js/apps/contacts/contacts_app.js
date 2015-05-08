ContactManager.module('ContactsApp', function(
  ContactsApp, ContactManager, Backbone,
  Marionette, $, _
){

  // Routerインスタンス
  ContactsApp.Router = Marionette.AppRouter.extend({
    // appRoutesプロパティ内にrouteを定義.
    appRoutes: {
      // /index.html#contacts にアクセスすると, 'listContacts' コールバックが呼ばれる.
      'contacts': 'listContacts'
    }
  });

  // 上記routeのコールバック関数はこのAPIオブジェクト内に定義する.
  var API = {
    listContacts: function(){
      ContactsApp.List.Controller.listContacts();
    }
  };

  ContactManager.addInitializer(function(){
    new ContactsApp.Router({
      controller: API
    });
  });

});
