Meteor.publish('FlashNotify.notifications', function() {
  return FlashNotify.notifications.find();
});