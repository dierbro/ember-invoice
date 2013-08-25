/*
 * invoice_test.js
 * Copyright (C) 2013 diego <diego@diego-ThinkPad-W530>
 *
 * Distributed under terms of the MIT license.
 */
import InvoiceItem from 'appkit/models/invoice_item';
import Invoice from 'appkit/models/invoice';

module("Model - Invoice");

test("model exists", function(){
  expect(1)
  ok(Invoice, 'expected model')
})

test("property: `issuer`", function(){
  expect(2)
  var property = Invoice.metaForProperty('issuer');

  equal(property.isRelationship, true,'Expected relationship');

  equal(property.kind, 'belongsTo');
})
test("property: `customer`", function(){
  expect(2)
  var property = Invoice.metaForProperty('customer');

  equal(property.isRelationship, true,'Expected relationship');

  equal(property.kind, 'belongsTo');
})


test("property: `items`", function(){
  expect(2)
  var property = Invoice.metaForProperty('items');

  equal(property.isRelationship, true,'Expected relationship');

  equal(property.kind, 'hasMany');
})

test("computed property: sub_total", function(){
  expect(2)
  var invoice
  Ember.run(function () {
    invoice = createInvoiceWithItems()
  })

  equal(invoice.get("items.length"), 4, "invoice has 4 items")

  var total = 0;
  invoice.get("items.content").forEach(function(item){
    total += item.record.get('total')
  })

  equal(invoice.get('sub_total'), total, "invoice sub total is correct")
})

test("computed property: tax_total", function(){
  expect(2)
  var invoice
  Ember.run(function () {
    invoice = createInvoiceWithItems()
  })

  equal(invoice.get("items.length"), 4, "invoice has 4 items")
  var total = 0
  invoice.get("items.content").forEach(function(item){
    total += item.record.get('total')
  })
  equal(invoice.get('tax_total'), total/100.0*invoice.get("tax"), "invoice tax total is correct")
})

test("computed property: total", function(){
  expect(2)
  var invoice
  Ember.run(function () {
    invoice = createInvoiceWithItems()
  })

  equal(invoice.get("items.length"), 4, "invoice has 4 items")
  var total = invoice.get("sub_total")+invoice.get("tax_total")
  equal(invoice.get('total'), total, "invoice total is correct")
})


function createInvoiceWithItems(){
  var invoice = Invoice.createRecord({tax: 21.0})
  var items = invoice.get('items') 

  items.createRecord({description: "item1", qty: Math.random(), price: Math.random()})
  items.createRecord({description: "item2", qty: Math.random(), price: Math.random()})
  items.createRecord({description: "item3", qty: Math.random(), price: Math.random()})
  items.createRecord({description: "item4", qty: Math.random(), price: Math.random()})

  return invoice
}

