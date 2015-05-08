ContactManager.module('ContactsApp.List', function(
  List, ContactManager, Backbone,
  Marionette, $, _
){

  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-list-item',
    events: {
      'click': 'highlightName',
      // button要素のうち, js-deleteクラスのものがクリックされたら
      // 'deleteClicked'が呼ばれる
      'click button.js-delete': 'deleteClicked'
      /** 下記のように直接イベントを登録する書き方も可能
      * 'click button.js-delete': function() {
      *   this.model.collection.remove(this.model);
      * }
      */
    },

    highlightName: function(e){
      e.preventDefault();
      this.$el.toggleClass('warning');
    },

    deleteClicked: function(e){
      // イベントの伝播を止める.
      // * これがないと削除ボタンが押されたときに
      //   'click': 'highlightName' も呼ばれてしまう.
      e.stopPropagation();
      // あくまでこのViewはItemViewなのでmodelはcontact.
      // なのでcollectionに直でアクセスできないので下記のような書き方になる.
      this.model.collection.remove(this.model);
    }

  });
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    // 追加
    template: '#contact-list',
    childView: List.Contact,
    // 追加
    // childViewをtbodyの中にrenderするよう指示
    childViewContainer: 'tbody'
  });

});
