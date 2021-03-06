'use strict';

/**
 * @ngdoc overview
 * @name vocaCbtApp
 * @description
 * # vocaCbtApp
 *
 * Main module of the application.
 */
angular
  .module('vocaCbtApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
            $urlRouterProvider.otherwise('/');
    });