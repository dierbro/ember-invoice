/*
 * invoice_test.js
 * Copyright (C) 2013 diego <diego@diego-ThinkPad-W530>
 *
 * Distributed under terms of the MIT license.
 */
import Invoice from 'appkit/models/invoice';

module("Model - Invoice");

test("model exists", function(){
  expect(1)
  ok(Invoice, 'expected model')
})

test("property: `items`", function(){
  expect(3)
  var property = Invoice.metaForProperty('items');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.InvoiceItem');

  equal(property.kind, 'hasMany');
})

