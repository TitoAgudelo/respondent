/* jshint -W117, -W030 */
describe('project routes', function() {
  describe('state', function() {
    var view = 'app/project/project.html';

    beforeEach(function() {
      module('app.project', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state project detail to url /project/:id ', function() {
      expect($state.href('project/1', {})).to.equal('/project/1');
    });

    it('should map /project route to project View template', function() {
      expect($state.get('project').templateUrl).to.equal(view);
    });

    it('of project should work with $state.go', function() {
      $state.go('project');
      $rootScope.$apply();
      expect($state.is('project'));
    });
  });
});
