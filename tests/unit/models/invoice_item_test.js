/*
 * invoice_item_test.js
 * Copyright (C) 2013 diego <diego@diego-ThinkPad-W530>
 *
 * Distributed under terms of the MIT license.
 */

import InvoiceItem from 'appkit/models/invoice_item';

module("Model - InvoiceItem");

test("model exists", function(){
  expect(1)
  ok(InvoiceItem, 'expected model')
})

test("computed property: total", function(){
  expect(1)
  var invoice_item
  Ember.run(function () {
    invoice_item = createInvoiceItem({qty: 3, price: 10.50})
  })

  equal(invoice_item.get("total"), 31.50, "invoice item total is 31.50")
})


function createInvoiceItem(params){
  return InvoiceItem.createRecord(params)
}

