(function () {
    'use strict';

    angular.module('epam.productcomparison')
        .directive('comparisonButton', ['ProductComparisonService', function (ProductComparisonService) {
            return {
                restrict: 'E',
                templateUrl: "js/app/productcomparison/templates/add-remove-to-comparison.html",
                scope: {
                	product : "=product"
                },
                controller: ['$scope', '$rootScope', function ($scope, $rootScope) {

                	$scope.isAdded = false;
                	$scope.productId = $scope.product.id;
                	
                	ProductComparisonService.getProductIds().then(function(productIds) {
                		console.log("product ids");
                		console.log(productIds);                		
                		$scope.isAdded = contains(productIds, $scope.product.id);
                	});
                	
                	function contains(ids, productId){
                		for(var i = 0; i < ids.length; i++){
                			if(ids[i] == productId){
                				return true;
                			}
                		}
                		return false;
                	}
                	
                	console.log("Directive for product " + $scope.productId + " was created");

                    $scope.addToComparison = function() {
                        ProductComparisonService.addProductToComparison($scope.productId).then(function(){
                        	$scope.isAdded = true;
                        	console.log("Added product: " + $scope.productId);
                        	$rootScope.$broadcast('ADDED_TO_COMPARISON', $scope.productId);
                        });
                    };
                    
                    $scope.removeFromComparison = function() {
                    	ProductComparisonService.removeProductFromComparison($scope.productId).then(function(){
                    		$scope.isAdded = false;
                            console.log("Removed product: " + $scope.productId);
                            $rootScope.$broadcast('REMOVED_TO_COMPARISON', $scope.productId);
                    	})
                    }
                }]
            };
        }]);
})();