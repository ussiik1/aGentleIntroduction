ContactManager.module('ContactsApp.Show', function(
  Show, ContactManager, Backbone,
  Marionette, $, _
){

  Show.Controller = {

    showContact: function(id){
      // 修正
      var contact = ContactManager.request('contact:entity', id);
      var contactView;
      // 修正
      if (contact !== undefined) {
        // 修正
        contactView = new Show.Contact({ model: contact });
      } else {
        contactView = new Show.MissingContact();
      }
      ContactManager.mainRegion.show(contactView);
    }
  };

});
