import InvoicesRoute from 'appkit/routes/invoices';
import App from 'appkit/app';

var route;

module("Unit - InvoicesRoute", {
  setup: function(){
    route = routeFor('invoices');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});

