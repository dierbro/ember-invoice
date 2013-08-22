var IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  },
  redirect: function() {
    this.transitionTo('invoices');
  }
});

export default IndexRoute;
