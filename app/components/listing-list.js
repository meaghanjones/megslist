import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['listingDate:desc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),
});
