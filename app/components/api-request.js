import Ember from 'ember';

export default Ember.Component.extend({
  formattedExample: Ember.computed('userId', 'key', 'api.example', function() {
    var userId = this.get('userId');
    var apiKey = this.get('key');
    var resultString = this.get('api.example');
    resultString = resultString.replace(/(\{\{id\}\})/g, userId);
    resultString = resultString.replace(/(\{\{apiKey\}\})/g, apiKey);

    return resultString;
  })
});
