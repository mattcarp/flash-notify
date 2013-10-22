/*
 *  flash-notify
 *  version 0.1.0
 *  10/28/2013
 *  https://github.com/mattcarp/flash-notify
*/
FlashNotify = {};
Meteor.startup(function(){

  // flashes are client-only, and don't persist
  FlashNotify.flashes = new Meteor.Collection(null);
  FlashNotify.notifications =  new Meteor.Collection('notifications');

  FlashNotify.setFlash = function(message, options) {
  // override defaults with passed-in options, if any
    options = _.extend({
      cssClass: "alert-info",
      title: null,
      sticky: false,
      delay: 3500, // how log message is visible
      image: null,
      fadeDuration: 1500, // length of fade out
      channel: "inline",
      position: "top-right"  // for gritter only
    }, options);

    FlashNotify.flashes.insert({
      message: message,
      options: options, seen: false
    });
  };

  FlashNotify.clearSeenFlashes = function() {
    FlashNotify.flashes.remove({seen: true});
  };

  FlashNotify.createNotification = function(message, options) {
    // TODO system-wide and user-specific config options
    options = _.extend({
      userId: null,
    }, options);

    var now = +(new Date());
    FlashNotify.notifications.insert({
      userId: options.userId,
      createdAt: now,
      message: message,
      read: false
    });
  };

  FlashNotify.clearSeenNotifications = function() {
    FlashNotify.notifications.remove({seen: true});
  };


  FlashNotify.notifications.allow({
    // TODO these are not secure:
    update: function() {
      return true;
    },
    insert: function() {
      return true;
    }
  });

});