(function () {
    'use strict';

    angular.module('epam.productcomparison')
        .directive('comparisonCount', ['ProductComparisonService', function (ProductComparisonService) {
            return {
                restrict: 'E',
                templateUrl: "js/app/productcomparison/templates/comparison-count.html",
                controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
                    console.log("Directive count of products in comparison was created");
                    
                    $scope.productIds = [];
                    $scope.numberOfProductsInComparison = 0;
                    
                    function UpdateState(){
                    	$scope.numberOfProductsInComparison = ProductComparisonService.getProductIds().then(function(data){
                        	$scope.productIds = data;
                        	$scope.numberOfProductsInComparison = $scope.productIds.length;
                        });
                    }
                    
                    UpdateState();
                    
                    $rootScope.$on('ADDED_TO_COMPARISON', UpdateState);
                    $rootScope.$on('REMOVED_TO_COMPARISON', UpdateState);
                }]
            };
        }]);
})();