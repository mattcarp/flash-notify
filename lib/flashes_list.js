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

  if (FlashNotify.flashes.find().count())
    $('html, body').animate({
      scrollTop: 0
    }, 200);

  if (flash.options.channel === 'gritter' && flash.seen === false) {
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
  }

  if (flash.options.channel === 'jquery-modal' && flash.seen === false) {

      // $(".alert-flashes").modal({
      //   fadeDuration: flash.options.fadeDuration,
      //   fadeDelay: flash.options.delay,
      //   before-open: function () {
      //     Flashes.collection.remove({_id: flash._id});
      //   }
      // });
      // $('.alert-flashes').on($.modal.BEFORE_OPEN, function(event, modal) {
      //   console.log('about to run before-open');
      //   Flashes.collection.remove({_id: flash._id});
      // });
    // $('#myModal').modal();
    // $('.alert-flashes').on('hidden.bs.modal', function () {
    //   console.log('we are running');
    // });
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
    } else {
      // inline but sticky
      // TODO don't allow message to display...
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


