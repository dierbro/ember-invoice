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

