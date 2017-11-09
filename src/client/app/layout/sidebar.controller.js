(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$q', '$state', 'routerHelper', 'dataservice', 'logger'];
  /* @ngInject */
  function SidebarController($q ,$state, routerHelper, dataservice, logger) {
    var vm = this;
    var states = routerHelper.getStates();

    activate();

    function activate() {
      var promises = [getOrganizations()];
      return $q.all(promises).then(function() {
        logger.info('Activated Sidebar View');
      });
    }

    function getOrganizations() {
      return dataservice.getOrganizations().then(function(data) {
        vm.organizations = data;
        return vm.organizations;
      });
    }
  }
})();
