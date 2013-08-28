import Resolver from 'resolver';

CLDR.defaultLocale = 'en';

import translations from 'appkit/locales/en';
Ember.I18n.translations = translations;

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  rootElement: '#app-container',
  resolver: Resolver
});

App.Store = DS.Store.extend({
  adapter: DS.LSAdapter.create()
});

///FIXME: move to helpers folder
Ember.Handlebars.helper('moment', function(value) {
  return moment(value).format('L');
});
Ember.Handlebars.helper('money', function(value) {
  return accounting.formatMoney(value);
});
import InPlaceFieldView from 'appkit/views/in_place_field';
Ember.Handlebars.helper('inPlaceField',InPlaceFieldView);
///

import routes from 'appkit/routes';
App.Router.map(routes); // TODO: just resolve the router


export default App;
