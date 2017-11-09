(function() {
  'use strict';

  angular
    .module('app.detail')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'detail',
        config: {
          url: '/organizations/:id',
          templateUrl: 'app/organizationDetail/detail.html',
          controller: 'OrganizationDetailController',
          controllerAs: 'vm',
          title: 'Detail'
        }
      }
    ];
  }
})();
