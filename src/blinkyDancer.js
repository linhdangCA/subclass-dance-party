/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// PSEUDOCLASSICAL

var MakeBlinkyDancer = function (top, left, timeBetweenSteps) {
  // this = Object.create(MakeBlinkyDancer.prototype)
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer siren" src="images/siren.gif" alt="siren">');
  this.setPosition(top, left);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

//MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step.bind(this);
/*
MakeBlinkyDancer.prototype.oldStep = function() {
  MakeDancer.prototype.step.call(this);
}; */

MakeBlinkyDancer.prototype.step = function () {
  var oldStep = MakeDancer.prototype.step.bind(this);

  // call the old version of step at the beginning of any call to this new version of step
  oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
