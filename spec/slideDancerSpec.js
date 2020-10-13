describe('slideDancer', function () {

  var slideDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    //drakeDancer = makedrakeDancer(10, 20, timeBetweenSteps);
    slideDancer = new aDrake(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(slideDancer.$node).to.be.an.instanceof(jQuery);
  });

  // anything stand out to you yet ? nope... i've been looking. checked the sources. checekd the spec. checked the js. walked through the debugger. slideDancer variable is coming back undefined cause the new instance isn't completing


  it('should have a step function that makes its node change in size', function () {
    sinon.spy(slideDancer.$node, 'animate');
    slideDancer.step();
    expect(slideDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(slideDancer, 'step');
      expect(slideDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slideDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(createSlideDancer.step.callCount).to.be.equal(2);
    });
  });
});