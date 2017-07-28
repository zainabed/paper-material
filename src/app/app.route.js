'use strict';

(function() {
	angular.module('aaDemo')
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('component', {
					url: '/',
					views: {
						header: {
							templateUrl: 'demo/views/header.tpl.html'
						},
						'side-nav': {
							templateUrl: 'demo/views/side-nav.tpl.html'
						},
						'content' : {}
					}
				})
				.state('component.card', {
					url: 'card',
					views: {
						'content@': {
							templateUrl: 'demo/component/card.tpl.html'
						}
					}
				})
				.state('component.list', {
					url: 'list',
					views: {
						'content@': {
							templateUrl: 'demo/component/list.tpl.html'
						}
					}
				});

			$urlRouterProvider.otherwise('/');
		});
})();