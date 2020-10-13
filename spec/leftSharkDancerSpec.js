describe('leftSharkDancer', function () {

  var leftSharkDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    //leftSharkDancer = LeftSharkDancer(10, 20, timeBetweenSteps);
    leftSharkDancer = new LeftSharkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(leftSharkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move and change in size', function () {
    sinon.spy(leftSharkDancer.$node, 'animate');
    leftSharkDancer.step();
    expect(leftSharkDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(leftSharkDancer, 'step');
      expect(leftSharkDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(leftSharkDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(leftSharkDancer.step.callCount).to.be.equal(2);
    });
  });
});
