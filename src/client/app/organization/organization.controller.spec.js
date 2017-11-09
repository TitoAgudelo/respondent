/* jshint -W117, -W030 */
describe('OrganizationController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.organizations');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('OrganizationController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Organization controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Organization', function() {
        expect(controller.title).to.equal('Organizations');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
