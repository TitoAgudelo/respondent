(function() {
  'use strict';

  angular
    .module('app.organizations')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'organizations',
        config: {
          url: '/organizations',
          templateUrl: 'app/organization/organization.html',
          controller: 'OrganizationController',
          controllerAs: 'vm',
          title: 'Organization'
        }
      }
    ];
  }
})();
