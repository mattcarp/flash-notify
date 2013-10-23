if (Meteor.isClient) {

  Template.flashDemo.events({
    "click .inline": function () {
      FlashNotify.setFlash("Just thought you'd want to know...");
    },
    "click .inline-title-image": function() {
      FlashNotify.setFlash(
        "I have an image and a title, and I'm sticky.",
        {
          title: "My Title!",
          sticky: true,
          image: "html5.png",
          cssClass: "alert-danger"
        });
    },
    "click .growl": function() {
      FlashNotify.setFlash("I am growling at you.  Grrrrr.",
        {
          channel: "gritter",
        });
    },
    "click .growl-image-position": function() {
      FlashNotify.setFlash("I am growling, I've got an image, and I'm on the bottom left. " +
        "<br>HTML 5 logo by <a href='https://twitter.com/emirpprime's>Phil Banks</a>",
        {
          channel: "gritter",
          image: "html5.png",
          position: "bottom-left"
        });
    }

  });

  Template.notificationsDemo.events({
    "click .create-notice": function () {
      FlashNotify.createNotification(
              "You've been notified!");
    },
    "click .remove-seen": function () {
      FlashNotify.seenAllNotifications();
    },

  });

  Template.notification.events({
    "click .flash-notification-link": function(e) {
      // keep the demo from scrolling up
      e.preventDefault();
      FlashNotify.notifications.update(this._id, {$set: {read: true}});
    }
  });

}
