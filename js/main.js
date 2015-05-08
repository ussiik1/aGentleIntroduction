$(function(){

  var ContactManager = new Marionette.Application();

  ContactManager.addRegions({
    mainRegion: '#main-region'
  });

  ContactManager.Contact = Backbone.Model.extend({
  });

  ContactManager.ContactCollection = Backbone.Collection.extend({
    model: ContactManager.Contact,
    comparator: 'firstName',
  });

  // ItemView
  ContactManager.ContactView = Marionette.ItemView.extend({
    tagName: 'li',
    template: '#contact-list-item',
    initialize: function(){
      console.log('ContactView:initialize',this.model.attributes);
    },
    onRender: function(){
      console.log('ContactView:onRender',this.model.attributes);
    }
  });

  // CollectionView
  ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: 'ul', // デフォルトでは div タグになります。
    childView: ContactManager.ContactView,
    initialize: function(){
      console.log('ContactsView:initialize\n',
        this.collection.models.map(function(a){return JSON.stringify(a.attributes)})
        .reduce(function(a,b){return a+',\n '+b})
      );
    },
    onRender: function(){
      console.log('ContactsView:onRender\n',
        this.collection.models.map(function(a){return JSON.stringify(a.attributes)})
        .reduce(function(a,b){return a+',\n '+b})
      );
    },
  });

  ContactManager.onStart = function(){

    // CollectionはArrayの中にObjectでモデルをつっこみます。
    var contacts = new ContactManager.ContactCollection([
      { firstName: 'Bob', lastName: 'Brigham', phoneNumber: '555-0163' },
      { firstName: 'Alice', lastName: 'Arten', phoneNumber: '555-0184' },
      { firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '555-0129' }
    ]);

    // CollectionViewのインスタンス
    var contactsListView = new ContactManager.ContactsView({
      collection: contacts
    });

    ContactManager.mainRegion.show(contactsListView);

  };

  ContactManager.start();

});
