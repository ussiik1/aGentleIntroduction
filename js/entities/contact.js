ContactManager.module('Entities', function(
  Entities, ContactManager, Backbone,
  Marionette, $, _
){

  Entities.Contact = Backbone.Model.extend({
    urlRoot: 'contacts'
  });

  Entities.ContactCollection = Backbone.Collection.extend({
    url: 'contacts',
    model: Entities.Contact,
    comparator: 'firstName'
  });

  var contacts;

  var initializeContact = function() {
    contacts = new Entities.ContactCollection([
      { id: 1, firstName: 'Alice', lastName: 'Arten',
        phoneNumber: '555-0184' },
      { id: 2, firstName: 'Bob', lastName: 'Brigham',
        phoneNumber: '555-0163' },
      { id: 3, firstName: 'Charlie', lastName: 'Campbell',
        phoneNumber: '555-0129' }
    ]);
  };

  var API = {
    getContactEntities: function() {
      if (contacts === undefined) initializeContact();
      return contacts;
    }
  };

  /**
   *  他の場所で ContactManager.request('contact:entities') をすると,
   *  API.getContactEntities() つまり、contacts(Collection)が
   *  呼ばれる(返される)ようになる。
   */
  ContactManager.reqres.setHandler('contact:entities', function() {
    return API.getContactEntities();
  });

});
