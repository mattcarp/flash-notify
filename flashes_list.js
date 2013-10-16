Template.flashesList.helpers({
  flashes: function() {
    if (Flashes.collection.find().count())
      $('html, body').animate({
        scrollTop: 0
      }, 200);
    return Flashes.collection.find();
  }
});

Template.flash.rendered = function() {
  var flash = this.data;
  Meteor.defer(function() {
    Flashes.collection.update(flash._id, {$set: {seen: true}});
  });

console.log(flash.options);
  if(flash.options && flash.options.hide) {

    var alertBox = $(this.find('.alert'));

    alertBox.delay(flash.options.fadeDuration).fadeOut('slow', function() {
      // need to delay the record removal until the animation finishes
      setTimeout(function() {
        Flashes.collection.remove({_id: flash._id})
      }, flash.options.fadeDuration);

    });
  }
};
