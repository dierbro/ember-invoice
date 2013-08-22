var Invoice = DS.Model.extend({

  tax: DS.attr('number'),
  invoice_number: DS.attr('number'),
  items: DS.hasMany('InvoiceItem'),
  
  sub_total: function(){
    return this.get('items').getEach('total').reduce(function(sum, partial) {
      return sum + partial;
    }, 0);
  }.property("items.@each.total"),
  
  tax_total: function(){
    return this.get("sub_total")/100.0*this.get("tax");
  }.property("sub_total"),
  
  total: function(){
    return this.get("sub_total")+this.get("tax_total");
  }.property("sub_total", "tax_total")
});

export default Invoice;
