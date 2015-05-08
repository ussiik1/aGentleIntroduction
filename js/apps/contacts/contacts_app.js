ContactManager.module('ContactsApp', function(
  ContactsApp, ContactManager, Backbone,
  Marionette, $, _
){

  // Routerインスタンス
  ContactsApp.Router = Marionette.AppRouter.extend({
    // appRoutesプロパティ内にrouteを定義.
    appRoutes: {
      // /index.html#contacts にアクセスすると, 'listContacts' コールバックが呼ばれる.
      'contacts': 'listContacts',
      'contacts/:id': 'showContact'
    }
  });

  // 上記routeのコールバック関数はこのAPIオブジェクト内に定義する.
  var API = {
    listContacts: function(){
      ContactsApp.List.Controller.listContacts();
    },
    showContact: function(id){
      ContactsApp.Show.Controller.showContact(id);
    }  };

  ContactManager.on('contacts:list', function(){
    ContactManager.navigate('contacts');
    API.listContacts();
  });

  ContactManager.on('contact:show', function(id){
    ContactManager.navigate('contacts/' + id);
    API.showContact(id);
  });

  ContactManager.addInitializer(function(){
    new ContactsApp.Router({
      controller: API
    });
  });

});
