var Company = DS.Model.extend({

  name: DS.attr('string'),

  address: DS.attr('string'),
  
  city: DS.attr('string'),

  postalCode: DS.attr('string')

});

export default Company;

