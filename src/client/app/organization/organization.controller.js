(function() {
  'use strict';

  angular
    .module('app.organizations')
    .controller('OrganizationController', OrganizationController);

  OrganizationController.$inject = ['logger'];
  /* @ngInject */
  function OrganizationController(logger) {
    var vm = this;
    vm.title = 'Organizations';

    activate();

    function activate() {
      logger.info('Activated organization View');
    }
  }
})();
