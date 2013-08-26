import Invoice from 'appkit/models/invoice';
import Company from 'appkit/models/company';

var InvoicesNewRoute = Ember.Route.extend({

  model: function(){
    return this.stubNewInvoice();
  },

  stubNewInvoice: function(){
    //FIXME
    Company.createRecord({id: "issuer"});
    var items, invoice = Invoice.createRecord({
      tax: 21,
      invoice_number: 10,
      issued: new Date(),
      issuer: Company.find("issuer"),
      customer: Company.createRecord({name: "Huge Corp.", address: "Via Roma", city: "Conturs Terme", postalCode: "84024"}) 
    }); 
    items = invoice.get("items");
    items.createRecord({ description: "placeholder", qty: 10, price: 11});
    return invoice;
  },

});

export default InvoicesNewRoute;
