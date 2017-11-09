(function() {
  'use strict';

  angular
    .module('app.detail')
    .controller('OrganizationDetailController', OrganizationController);

  OrganizationController.$inject = ['logger', '$state', 'dataservice'];
  /* @ngInject */
  function OrganizationController(logger, $state, dataservice) {
    var vm = this;
    vm.title = 'Detail';
    vm.getDetail = getDetail;

    activate();

    function activate() {
      logger.info('Activated organization detail View');
      getId();
    }

    function getId() {
      vm.idDetail = $state.params.id;
      if (vm.idDetail) {
        vm.getDetail();
      }
    }

    function getDetail() {
      return dataservice.getOrganizationDetail(vm.idDetail).then(function(data) {
        vm.organization = data;
        return vm.organization;
      });
    }
  }
})();
