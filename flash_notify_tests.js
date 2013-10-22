Tinytest.add("Flash collection works", function(test) {
  test.equal(name.collection.find({}).count(), 0);

  FlashNotify.setFlash("A new flash message!", "info");
  test.equal(FlashNotify.collection.find({}).count(), 1);
  FlashNotify.setFlash("A second flash message!", "danger");
  test.equal(FlashNotify.collection.find({}).count(), 2);

  FlashNotify.collection.remove({});
  test.equal(FlashNotify.collection.find({}).count(), 0);

});

Tinytest.addAsync("Flash template works", function(test, done) {
  FlashNotify.setFlash("A message for you!");
  test.equal(FlashNotify.collection.find({seen: false}).count(), 1);

  // render the template
  OnscreenDiv(Spark.render(function() {
    return Template.FlashNotifyList();
  }));

  // wait a few milliseconds
  Meteor.setTimeout(function() {
    test.equal(FlashNotify.collection.find({seen: false}).count(), 0);
    test.equal(FlashNotify.collection.find({}).count(), 1);
    FlashNotify.clearSeen();

    test.equal(FlashNotify.collection.find({seen: true}).count(), 0);
    done();
  }, 500);

});