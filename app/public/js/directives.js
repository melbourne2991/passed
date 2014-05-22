'use strict';

/* Directives */


angular.module('TestListingsApp.directives', []).
  directive('testListing', [ function() {
    return {
    	templateUrl: '/partials/box_listing',
    	scope: {
    		testListing: '='
    	},
    	controller: function($scope, $element, $attrs) {
    		var listing = $scope.testListing

    		$scope.title 	  = listing.title;
    		$scope.passing 	  = listing.passing;
    		$scope.failing 	  = listing.failing;
    		$scope.framework  = listing.framework;
    		$scope.language   = listing.language;
    		$scope.parent_app = listing.parent_app
    	}
    }
  }]);
