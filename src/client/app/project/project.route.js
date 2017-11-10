(function() {
  'use strict';

  angular
    .module('app.project')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'project',
        config: {
          url: '/project/:id',
          templateUrl: 'app/project/project.html',
          controller: 'ProjectController',
          controllerAs: 'vm',
          title: 'Project'
        }
      }
    ];
  }
})();
