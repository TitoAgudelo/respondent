/* jshint -W117, -W030 */
describe('OrganizationDetailController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.detail');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('OrganizationDetailController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Organization detail controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Organization', function() {
        expect(controller.title).to.equal('Detail');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
