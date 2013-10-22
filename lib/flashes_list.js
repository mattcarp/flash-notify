Template.flashesList.helpers({
  flashes: function() {
    return FlashNotify.flashes.find();
  }
});

Template.flash.rendered = function() {
  var flash = this.data;

  Meteor.defer(function() {
    FlashNotify.flashes.update(flash._id, {$set: {seen: true}});
  });

  if (FlashNotify.flashes.find().count() && flash.options.channel === "inline")
    $('html, body').animate({
      scrollTop: 0
    }, 200);

  if (flash.options.channel === 'gritter' && flash.seen === false) {
      // TODO if a second growl is fired while one is still visible,
      // it takes its position from the first one

      // these options are handled differently
      $.extend($.gritter.options, {
        position: flash.options.position,
        fade_in_speed: 'medium', // hard coding for now
        fade_out_speed: flash.options.fadeDuration,
        time: flash.options.delay
      });
      var gritterId = $.gritter.add({
        title: flash.options.title,
        text: flash.message,
        image: flash.options.image,
        sticky: flash.options.sticky,
        time: flash.options.delay,
        class_name: flash.options.cssClass,
        before_open: function(){
          FlashNotify.flashes.remove({_id: flash._id});
        }
      });
      // these options are handled differently
      $.extend($.gritter.options, {
        position: flash.options.position,
        fade_in_speed: 'medium', // hard coding for now
        fade_out_speed: flash.options.fadeDuration,
        time: flash.options.delay // hang on the screen for...
      });

  }

  if (flash.options.channel === 'inline') {
    // inline with fade out
    if (! flash.options.sticky) {
      var flashBox = $(this.find('.flash-message'));
      flashBox.delay(flash.options.delay).fadeOut('slow', function() {
        // need to delay the record removal until the animation finishes
        setTimeout(function() {
          FlashNotify.flashes.remove({_id: flash._id});
        }, flash.options.fadeDuration);

      });
    }
  }


};

Template.flash.events({
  "click .close": function (e, tmpl) {
    e.preventDefault();
    FlashNotify.flashes.remove(tmpl.data._id);
  }
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});


