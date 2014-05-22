'use strict';

/* Controllers */

angular.module('TestListingsApp.controllers', ['TestListingsApp.services'])
  .controller('HomeController', ['$scope', 'listingsFactory', function($scope, listingsFactory) {
  	console.log(listingsFactory.getListings());

  	listingsFactory.getListings().then(function(result) {
  		$scope.listings = result.data;
  	});
  }]);