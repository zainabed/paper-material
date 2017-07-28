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
