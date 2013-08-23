var Customer = DS.Model.extend({

  name: DS.attr('string'),

  address: DS.attr('string'),

  postalCode: DS.attr('string')

});

export default Customer;

