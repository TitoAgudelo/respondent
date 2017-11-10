(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getOrganizations: getOrganizations,
      getOrganizationDetail: getOrganizationDetail,
      getProject: getProject
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }

    function getOrganizations() {
      return $http.get('/api/organizations')
        .then(success)
        .catch(fail)

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getOrganizations')(e);
      }
    }

    function getOrganizationDetail(id) {
      return $http.get('/api/organizations/' + id)
        .then(success)
        .catch(fail)

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getOrganizations')(e);
      }
    }

    function getProject(id) {
      return $http.get('/api/project/' + id)
        .then(success)
        .catch(fail)

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getOrganizations')(e);
      }
    }
  }
})();
