//
//https://github.com/mszoernyi/ember-inplace-edit
//

var InPlaceFieldView = Ember.View.extend({
  tagName: 'div',
  isEditing: false,
  templateName: 'in_place_edit',
  isEmpty: function(){
    return Ember.isEmpty(this.get('content'))
  }.property('content'),
  
  inputField: Ember.TextField.extend({}),
  emptyValue: "Click to Edit",
  focusOut: function(){
    this.get('controller').get('store').commit();
    this.set('isEditing', false)
  },

  click: function(){
    this.set("isEditing", true);
  }
})


var InPlaceTextFieldView = InPlaceFieldView.extend({
  inputField: Ember.TextField.extend({})
})

export default InPlaceFieldView;
