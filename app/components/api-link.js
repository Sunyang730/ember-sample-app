import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['api.active:active'],
  attributeBindings: ['href'],
  tagName: 'a',

  click() {
    this.sendAction('clearActive');
    this.set('api.active', true);
  }
});
