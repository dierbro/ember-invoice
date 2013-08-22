import Index from 'appkit/routes/index';
import App from 'appkit/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("index renders", function(){
  expect(1);

  visit('/').then(function(){
    equal(currentPath(), 'invoices.index', 'Redirects to /invoices');
  });
});
