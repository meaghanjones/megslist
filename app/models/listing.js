import DS from 'ember-data';

export default DS.Model.extend({
  listName: DS.attr(),
  listingDate: DS.attr(),
  listingPoster: DS.attr(),
  listingCity: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
