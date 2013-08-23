/*
 * invoices_test.js
 * Copyright (C) 2013 diego <diego@diego-ThinkPad-W530>
 *
 * Distributed under terms of the MIT license.
 */

import App from 'appkit/app';

module("Acceptances - Invoices", {
  setup: function(){
    App.reset();
  }
});

test("renders new button", function(){
  expect(3);

  visit('/invoices').then(function(){
    var button = find("a.new-invoice");
    equal(button.length, 1)
    equal(button.attr('href'), '/invoices/new');
    click("a.new-invoice").then(function(){
      equal(currentPath(), 'invoices.new');
    });
  });
});

module("Acceptances - New Invoices", {
  setup: function(){
    App.reset();
  }
});

test("renders new button", function(){
  expect(8)
  visit("/invoices/new").then(function(){
    equal(find("div.invoice").length,1)
      equal(find("div.invoice .logo").length,1)
      equal(find("div.invoice .info").length,1)
        equal(find("div.invoice .info .number").length,1)
        equal(find("div.invoice .info .date").length,1)
      equal(find("div.invoice address.company").length,1)
      equal(find("div.invoice address.customer").length,1)
      equal(find("div.invoice .items").length,1)
  })
});

