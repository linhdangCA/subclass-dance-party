var LeftSharkDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer shark" src="images/leftSharkImg.png" alt="left shark">');
  this.setPosition(top, left);
};

LeftSharkDancer.prototype = Object.create(MakeDancer.prototype);
LeftSharkDancer.prototype.constructor = LeftSharkDancer;

LeftSharkDancer.prototype.step = function () {
  var oldStep = MakeDancer.prototype.step.bind(this);

  oldStep();

  if (this.timeStep === 0) {
    this.$node.animate({ height: '125px', width: '125px' });
    this.timeStep = 1;
  } if (this.timeStep === 1) {
    this.$node.animate({ height: '125px', width: '150px' });
    this.timeStep = 2;
  } if (this.timeStep === 2) {
    this.$node.animate({ height: '150px', width: '150px' });
    this.timeStep = 3;
  } if (this.timeStep === 3) {
    this.$node.animate({ height: '150px', width: '125px' });
    this.timeStep = 0;
  }

  if (this.timeStep === 0) {
    this.$node.animate({ top: '+=50px' });
    this.timeStep = 1;
  } if (this.timeStep === 1) {
    this.$node.animate({ left: '+=50px' });
    this.timeStep = 2;
  } if (this.timeStep === 2) {
    this.$node.animate({ top: '-=50px' });
    this.timeStep = 3;
  } if (this.timeStep === 3) {
    this.$node.animate({ left: '-=50px' });
    this.timeStep = 0;
  }

};
