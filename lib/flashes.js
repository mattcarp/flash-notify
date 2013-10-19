/*
 *  Flashes
 *  version 0.1.0
 *  10/16/2013
 *  https://github.com/mattcarp/flashes
*/


Flashes = {
  // client-only collection
  collection: new Meteor.Collection(null),

  setFlash: function(message, options) {
  // override defaults with passed-in options, if any
  options = _.extend({
    cssClass: "alert-info",
    title: "",
    sticky: false,
    delay: 3000,
    image: "http://a0.twimg.com/profile_images/59268975/jquery_avatar_bigger.png",
    fadeDuration: 1500,
    channel: "inline"
  }, options);

    // console.log(options);
    Flashes.collection.insert({message: message,
      options: options, seen: false
    });
  },

  clearSeen: function() {
    Flashes.collection.remove({seen: true});
  },
};