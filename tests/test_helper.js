document.write('<div id="ember-testing-container" class="container"><div id="ember-testing"></div></div>');

Ember.testing = true;

var App = requireModule('appkit/app');

App.rootElement = '#ember-testing';

function exists(selector) {
  return !!find(selector).length;
}

function equal(actual, expected, message) {
  message = message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
  QUnit.equal.call(this, expected, actual, message);
}

window.exists = exists;
window.equal = equal;

Ember.Container.prototype.stub = function(fullName, instance) {
  instance.destroy = instance.destroy || function() {};
  this.cache.dict[fullName] = instance;
};

// https://github.com/stefanpenner/ember-app-kit/pull/80
Ember.Test.registerHelper('routeFor', function(app, routeName) {
  return app.__container__.lookup('route:' + routeName);
});

App.setupForTesting();
App.injectTestHelpers();
