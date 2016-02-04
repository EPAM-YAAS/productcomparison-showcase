'use strict';

angular.module('epam.productcomparison')

    .controller('ProductComparisonCtrl', ['$scope', 'ProductComparisonService',
        function ($scope, ProductComparisonService) {
    		var comparison = ProductComparisonService.getComparison();
            $scope.comparison = comparison;
            $scope.products = comparison.comparedProducts;
            $scope.categories = comparison.comparedCategories;
            $scope.mixins = comparison.comparedProducts[0].mixins;
            $scope.selectedCategoryId = "All";
            
            $scope.getProductMixinValue = function(product, mixinKey){
            	var mixins = product.mixins;
            	for(var i = 0; i < mixins.length; i++){
            		if(mixins[i].key === mixinKey){
            			return mixins[i].value;
            		}
            	}
            };
            
            $scope.setSelectedCategory = function(categoryId){
            	$scope.selectedCategoryId = categoryId;
            	var products = $scope.comparison.comparedProducts;
            	
            	var filteredProducts = [];
            	for(var i = 0; i < products.length; i++){
            		if(products[i].category_ids.indexOf($scope.selectedCategoryId) !== -1 
        				|| $scope.selectedCategoryId === "All"){
            			filteredProducts.push(products[i]);
            		}
            	}
            	$scope.products = filteredProducts;
            }
            
            
        }
    ]);