var Invoice = DS.Model.extend({

  tax: DS.attr('number'),
  invoice_number: DS.attr('number'),
  items: DS.hasMany('App.InvoiceItem')

});

export default Invoice;
