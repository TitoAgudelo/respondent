/* jshint -W117, -W030 */
describe('detail routes', function() {
  describe('state', function() {
    var view = 'app/organizationDetail/detail.html';

    beforeEach(function() {
      module('app.detail', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state organization detail to url /organizations/:id ', function() {
      expect($state.href('organizations/1', {})).to.equal('/organizations/1');
    });

    it('should map /organizations route to admin View template', function() {
      expect($state.get('detail').templateUrl).to.equal(view);
    });

    it('of organization should work with $state.go', function() {
      $state.go('detail');
      $rootScope.$apply();
      expect($state.is('detail'));
    });
  });
});
