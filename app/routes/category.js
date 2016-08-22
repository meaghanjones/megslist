import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      category: this.store.findRecord('category', params.category_id),
      listings: this.store.findAll('listing')
    });
  },

  actions: {
    saveListing3(params) {
      debugger;
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      console.log("category: " + category);
      category.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return category.save();
      });
      this.transitionTo('category', params.category);
  }
}
});
