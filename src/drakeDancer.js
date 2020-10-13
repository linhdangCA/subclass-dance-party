var DrakeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer drake" src="images/drakeGIF.gif" alt="hotline">');
  this.setPosition(top, left);
};

DrakeDancer.prototype = Object.create(MakeDancer.prototype);
DrakeDancer.prototype.constructor = DrakeDancer;

DrakeDancer.prototype.step = function() {
  var oldStep = MakeDancer.prototype.step.bind(this);

  oldStep();
  if (this.timeStep === 0) {
    this.$node.animate({height: '150px', width: '150px'});
    this.timeStep = 1;
  } else if (this.timeStep === 1) {
    this.$node.animate({height: '110px', width: '110px'});
    this.timeStep = 0;
  }
};