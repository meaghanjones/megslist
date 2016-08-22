import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing1() {
      var listingDate = moment().format('MMM Do YYYY, h:mm a');

      var params = {
        listingName: this.get('listingName'),
        listingPoster: this.get('listingPoster'),
        listingCity: this.get('listingCity'),
        category: this.get('category'),
        listingDate: listingDate
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing2', params);
      this.set('listingName', "");
      this.set('listingPoster', "");
      this.set('listingCity', "");
    }

  }

});
