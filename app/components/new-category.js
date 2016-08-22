import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory1() {
      var params = {
        categoryName: this.get('categoryName'),
      };
      this.sendAction('saveCategory2', params);
      this.set('categoryName', "");
    }
  }
});
