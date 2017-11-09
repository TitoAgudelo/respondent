/* jshint -W117, -W030 */
describe('organization routes', function() {
  describe('state', function() {
    var view = 'app/organization/organization.html';

    beforeEach(function() {
      module('app.admin', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state organization to url /organizations ', function() {
      expect($state.href('organizations', {})).to.equal('/organizations');
    });

    it('should map /organizations route to admin View template', function() {
      expect($state.get('organizations').templateUrl).to.equal(view);
    });

    it('of organization should work with $state.go', function() {
      $state.go('organizations');
      $rootScope.$apply();
      expect($state.is('organizations'));
    });
  });
});
