(function() {
  'use strict';

  angular
    .module('app.project')
    .controller('ProjectController', ProjectController);

  ProjectController.$inject = ['logger', '$state', 'dataservice'];
  /* @ngInject */
  function ProjectController(logger, $state, dataservice) {
    var vm = this;
    vm.title = 'Project';
    vm.getProject = getProject;

    activate();

    function activate() {
      logger.info('Activated organization detail View');
      getId();
    }

    function getId() {
      vm.idProject = $state.params.id;
      if (vm.idProject) {
        vm.getProject();
      }
    }

    function getProject() {
      return dataservice.getProject(vm.idProject).then(function(data) {
        vm.project = data;
        return vm.project;
      });
    }
  }
})();
