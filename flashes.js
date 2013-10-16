/*
    Flashes
    version 0.1.0
    10/16/2013
    https://github.com/mattcarp/flashes
*/

Flashes = {
  // client-only collection
  collection: new Meteor.Collection(null),

  setFlash:function(message, type, channel) {
    Flashes.collection.insert({message: message, seen: false, type: type, channel: channel});
  },

  clearSeen: function() {
    Flashes.collection.remove({seen: true});
  }

};