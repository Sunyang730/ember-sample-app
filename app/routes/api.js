import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('api_schema.json');
  },

  afterModel(model) {
    var self = this;
    model.forEach(function(api) {
      api.id = self.createApiId(api.url);
      api.link = '#' + api.id;
      api.active = false;
    });
  },

  createApiId: function(url) {
    return url.replace(/\W+/g, '');
  }
});
