
var SlideDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer mj" src="images/mj.gif" alt="michael">');
  this.setPosition(top, left * 0.7);
  this.setTop = top;
  this.setLeft = left;
  this.marginPosition = 0;
  this.direction = true;
};

SlideDancer.prototype = Object.create(MakeDancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function () {
  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();

  this.$node.animate({ 'marginLeft': this.marginPosition }, 1000);

  if (this.setLeft > 1200) {
    this.direction = false;
  } else if (this.setLeft < 200) {
    this.direction = true;
  }

  if (this.direction) {
    this.marginPosition += 100;
    this.setLeft += 100;
  } else if (!this.direction) {
    this.marginPosition -= 100;
    this.setLeft -= 100;
  }
};

/*
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
*/
