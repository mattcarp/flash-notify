Meteor.startup(function(){
  Meteor.publish('FlashNotify.notifications', function() {
    return FlashNotify.notifications.find();
  });
});