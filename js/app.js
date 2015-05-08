var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: '#main-region'
});

ContactManager.navigate = function(route, options){
  options = options || {};
  Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function(){
  return Backbone.history.fragment;
};

ContactManager.onStart = function(){
  if (Backbone.history) {
    Backbone.history.start();
    if (Backbone.history.fragment === '') {
      // URLを#contactsに変え, browserの履歴に追加する.
      Backbone.history.navigate('contacts');
      ContactManager.ContactsApp.List.Controller.listContacts();
    }  }
};
