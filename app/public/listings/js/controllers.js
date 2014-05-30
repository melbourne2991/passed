'use strict';

/* Controllers */

angular.module('listingsModule.controllers', ['listingsModule.services'])
  .controller('MainController', ['$scope', 'listingsFactory', 'languagesFactory', function($scope, listingsFactory, languagesFactory) {
  	// Property to Filter By
    $scope.filterBy = 'name';

  	listingsFactory.getListings().then(function(result) {
  		$scope.listings = result.data;
  	});

  	languagesFactory.getLanguages().then(function(result) {
  		$scope.languages = result.data;

	  	// Set Default Filter
  		$scope.filter = $scope.languages[0][$scope.filterBy];
  	});


  }]);