/*
var SlideDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer mj" src="images/mj.gif" alt="michael">');
  this.setPosition(top, left * 0.7);
  this.setTop = top;
  this.marginPosition = 0;
};

SlideDancer.prototype = Object.create(MakeDancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function () {
  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();

  this.$node.animate({ 'marginLeft': this.marginPosition }, 1000);
  this.marginPosition += 100;
  if (this.marginPosition > 900) {
    this.marginPosition = 0;
    this.setPosition(this.setTop, 0);
  }
};
*/

var aDrake = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer drake" src="images/drakeGIF.gif" alt="hotline">');
  this.setPosition(top, left);
};

aDrake.prototype = Object.create(MakeDancer.prototype);
aDrake.prototype.constructor = aDrake;

aDrake.prototype.step = function () {
  var oldStep = MakeDancer.prototype.step.bind(this);

  oldStep();
  if (this.timeStep === 0) {
    this.$node.animate({ height: '150px', width: '150px' });
    this.timeStep = 1;
  } else if (this.timeStep === 1) {
    this.$node.animate({ height: '110px', width: '110px' });
    this.timeStep = 0;
  }
};
