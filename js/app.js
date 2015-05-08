var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: '#main-region'
});

ContactManager.onStart = function(){
  if (Backbone.history) {
    Backbone.history.start();
  }
};
