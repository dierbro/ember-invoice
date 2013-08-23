import Invoice from 'appkit/models/invoice';

var InvoicesNewRoute = Ember.Route.extend({

  model: function(){
    var items, invoice = Invoice.createRecord({
      invoice_number: 10,
      issued: new Date()
    });
    return invoice;
  }
});

export default InvoicesNewRoute;
