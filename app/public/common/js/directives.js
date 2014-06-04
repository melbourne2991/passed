angular.module('commonModule.directives', [])
  .directive('tabs', [ function() {
    return {
      templateUrl: '/partials/common/_tabs',
      scope: {
        tabs: '=',
            tabsTextProperty: '@',
            filterBy: '=',
            filter: '='
      },
      controller: function($scope, $element, $attrs) {
            $scope.changeFilter = function(newFilter) {
                $scope.filter = newFilter;
            }
      }
    }
  }]);