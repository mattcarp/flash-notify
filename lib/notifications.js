Template.notifications.helpers({
  notifications: function() {
    // return FlashNotify.notificatons.find({userId: Meteor.userId(), read: false});
    return FlashNotify.notifications.find({read: false});
  },
  notificationCount: function(){
    // use the {userId: Meteor.userId() to keep this exclusive to the user
    return FlashNotify.notifications.find({read: false}).count();
  }
});

Template.notification.events({
  'click .flash-notification': function() {
    FlashNotify.notifications.update(this._id, {$set: {read: true}});
  }
});