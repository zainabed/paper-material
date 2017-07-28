'use strict';

(function(){
    angular.module('z-material',['ui.router']);

})();

angular
    // Injecting into our app module
    .module('z-material')

    // Creating an Angular constant and rendering a list of items as JSON
    .constant('COMPONENT_ROUTE', [
  {
    "name": "component",
    "stateName": "home.component",
    "type": "module",
    "outputPath": "component.html",
    "url": "component",
    "docs": [
      {
        "name": "action",
        "stateName": "home.action",
        "type": "directive",
        "outputPath": "component/directive/action.html",
        "url": "component/action"
      },
      {
        "name": "appbar",
        "stateName": "home.appbar",
        "type": "directive",
        "outputPath": "component/directive/appbar.html",
        "url": "component/appbar"
      },
      {
        "name": "cards",
        "stateName": "home.cards",
        "type": "directive",
        "outputPath": "component/directive/cards.html",
        "url": "component/cards"
      }
    ]
  }
]);

'use strict';

(function(){
  angular.module('z-material')
  .controller('SideNavController', SideNavController)

  function SideNavController(COMPONENT_ROUTE){
    var self = this;
    self.materialRoutes = COMPONENT_ROUTE[0].docs;
  }
})();

'use strict';

(function(){
  angular.module('z-material')
  .config(function($stateProvider, $locationProvider, COMPONENT_ROUTE){
    angular.forEach(COMPONENT_ROUTE, function(components) {
      var stateConfig =createState(components);
      $stateProvider.state(stateConfig);

      angular.forEach(components.docs, function(component) {
        stateConfig = createState(component);
        $stateProvider.state(stateConfig);
      });
    })
  });

  function createState(component) {
    return  {
      url: component.url,
      name: component.stateName,
      views: {
        'content@' : {
          templateUrl: component.outputPath
        }
      }
      
    }
  }

})();

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
