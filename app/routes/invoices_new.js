import Invoice from 'appkit/models/invoice';

var InvoicesNewRoute = Ember.Route.extend({

  model: function(){
    var items, invoice = Invoice.createRecord({
      invoice_number: 10,
      issued: new Date()
    });
    items = invoice.get("items")
    items.createRecord({ description: "placeholder", qty: 10, price: 11})
    return invoice;
  }
});

export default InvoicesNewRoute;
