/*
 *  Flashes
 *  version 0.1.0
 *  10/16/2013
 *  https://github.com/mattcarp/flashes
*/


Flashes = {
  defaults: {
    hide: true,
    delay: 4000,
    fadeDuration: 1000
  },

  // client-only collection
  collection: new Meteor.Collection(null),

  setFlash:function(message, type, channel, options) {
    type = type || "info";
    channel = channel || 'inline';
    options = options || Flashes.defaults;

    // console.log(options);
    Flashes.collection.insert({message: message,
      type: type, channel: channel, options: options, seen: false
    });
  },

  clearSeen: function() {
    Flashes.collection.remove({seen: true});
  },



};