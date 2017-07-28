'use strict';

(function(){
  angular.module('z-material')
  .config(function($stateProvider, $locationProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url: '/',
      views: {
        header: {
          templateUrl: 'header/header.html',
        },
        'side-nav': {
          templateUrl: 'side-nav/component.html',
          controller: 'SideNavController',
          controllerAs: '$ctrl'
        },
        content: {},
        footer: {
          templateUrl: 'footer/footer.html'
        }
      }
    });

    $urlRouterProvider.when('', '/');
    $locationProvider.html5Mode(true);
  });

})();
