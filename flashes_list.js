Template.flashesList.helpers({
  flashes: function() {
    return Flashes.collection.find();
  }
});

Template.flash.rendered = function() {
  var flash = this.data;
  Meteor.defer(function() {
    Flashes.collection.update(flash._id, {$set: {seen: true}});
  });
};