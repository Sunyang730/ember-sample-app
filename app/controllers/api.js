import Ember from 'ember';

export default Ember.Controller.extend({
  userId: 123,
  getApi: Ember.computed.filter('model', function(request) {
    return request.method === "get";
  }),

  postApi: Ember.computed.filter('model', function(request) {
    return request.method === 'post';
  }),

  apiKey: Ember.computed('model', function() {
    return this.generateApiKey();
  }),

  generateApiKey() {
    var result = '';
    var availableChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < 15; i++) {
      result += availableChar[Math.floor(Math.random() * availableChar.length)];
    }

    return result;
  },

  actions: {
    clearActive() {
      this.get('model').setEach('active', false);
    },

    userIdChanged(userId) {
      this.set('userId', userId);
    },

    newApiKey() {
      var newKey = this.generateApiKey();
      this.set('apiKey', newKey);
    }
  }
});
