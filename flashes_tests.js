Tinytest.add("Flashes collection works", function(test) {
  test.equal(Flashes.collection.find({}).count(), 0);

  Flashes.setFlash("A new flash message!", "info");
  test.equal(Flashes.collection.find({}).count(), 1);
  Flashes.setFlash("A second flash message!", "danger");
  test.equal(Flashes.collection.find({}).count(), 2);

  Flashes.collection.remove({});
  test.equal(Flashes.collection.find({}).count(), 0);

});

Tinytest.addAsync("Flashes template works", function(test, done) {
  Flashes.setFlash("A message for you!");
  test.equal(Flashes.collection.find({seen: false}).count(), 1);

  // render the template
  OnscreenDiv(Spark.render(function() {
    return Template.flashesList();
  }));

  // wait a few milliseconds
  Meteor.setTimeout(function() {
    test.equal(Flashes.collection.find({seen: false}).count(), 0);
    test.equal(Flashes.collection.find({}).count(), 1);
    Flashes.clearSeen();

    test.equal(Flashes.collection.find({seen: true}).count(), 0);
    done();
  }, 500);

});