//
//https://github.com/mszoernyi/ember-inplace-edit
//

var InPlaceFieldView = Ember.View.extend({
  tagName: 'span',
  isEditing: false,
  layoutName: "in_place_edit",
  templateName: function(){
    if(this.get("contentType") === 'currency'){
      return 'in_place_currency_field';
    } else {
      return 'in_place_text_field';
    }
  }.property(),
  isEmpty: function(){
    return Ember.isEmpty(this.get('content'));
  }.property('content'),
  
  inputField: Ember.TextField.extend({}),
  emptyValue: "Click to Edit",
  focusOut: function(){
    this.get('controller').get('store').commit();
    this.set('isEditing', false);
  },

  click: function(){
    this.set("isEditing", true);
  }
});

export default InPlaceFieldView;
