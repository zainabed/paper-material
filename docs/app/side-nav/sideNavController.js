'use strict';

(function(){
  angular.module('z-material')
  .controller('SideNavController', SideNavController)

  function SideNavController(COMPONENT_ROUTE){
    var self = this;
    self.materialRoutes = COMPONENT_ROUTE[0].docs;
  }
})();
