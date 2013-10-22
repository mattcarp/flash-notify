/*
 *  flash-notify
 *  version 0.1.0
 *  10/28/2013
 *  https://github.com/mattcarp/flash-notify
*/

FlashNotify = {
  // flashes are client-only, and don't persist
  flashes: new Meteor.Collection(null),
  notifications: new Meteor.Collection('notifications'),

  setFlash: function(message, options) {
  // override defaults with passed-in options, if any
    options = _.extend({
      cssClass: "alert-info",
      title: null,
      sticky: false,
      delay: 3500,
      image: null,
      fadeDuration: 1500,
      channel: "inline"
    }, options);

    FlashNotify.flashes.insert({
      message: message,
      options: options, seen: false
    });
  },

  clearSeenFlashes: function() {
    FlashNotify.flashes.remove({seen: true});
  },

  createNotification: function(message, options) {
    options = _.extend({
      userId: null,
      someOption: 'foo'
    }, options);

    var now = +(new Date());
    FlashNotify.notifications.insert({
      userId: options.userId,
      createdAt: now,
      message: message,
      read: false
    });
  },

  clearSeenNotifications: function() {
    FlashNotify.notifications.remove({seen: true});
  }

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