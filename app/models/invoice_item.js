var InvoiceItem = DS.Model.extend({
  description: DS.attr('string'),
  qty: DS.attr('number'),
  price: DS.attr('number'),
  invoice:  DS.belongsTo('Invoice'),

  total: function(){
    return this.get('qty') * this.get('price');
  }.property('qty', 'price')
});

export default InvoiceItem;
