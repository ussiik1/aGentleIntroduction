var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: '#main-region'
});

ContactManager.onStart = function(){
  ContactManager.ContactsApp.List.Controller.listContacts();
};
