var InvoicesNewController = Ember.ObjectController.extend({
    removeItem: function(item){
      this.get("model.items").removeObject(item);
      item.deleteRecord();
    },
    addItem: function(){
      var items = this.get('model.items');
      items.createRecord({description: "click to edit", qty: 10, price: 1});
    }
});

export default InvoicesNewController;
