'use strict';

angular.module('epam.productcomparison').factory(
		'ProductComparisonService',
		[
				'ProductComparisonRest',
				function(ProductComparisonRest) {

					return {
						addProductToComparison : function(productId) {
							return ProductComparisonRest.comparison.one(
									'products', productId).post();
						},
						removeProductFromComparison : function(productId) {
							return ProductComparisonRest.comparison.one(
									'products', productId).remove();
						},
						getProductIds : function() {
							return ProductComparisonRest.comparison.all(
									'products/ids').getList();
						},
						getComparison : function() {
							return {
								comparedProducts : [ {
									id : "1000000",
									sku : "sku-1000000",
									name : "Sofa 1",
									price : "$1000",
									description : "Nice sofa",
									media_url : "http://fs157.www.ex.ua/show/47556796/47556796.png?1600",
									category_ids : [ "1001e" ],
									mixins : [ {
										"key" : "Size_Weight",
										"value" : "10 KG"
									}, {
										"key" : "Size_Length",
										"value" : "120 sm"
									}, {
										"key" : "Size_Width",
										"value" : "50 sm"
									} ]
								}, {
									id : "1000001",
									sku : "sku-1000001",
									name : "Sofa 2",
									price : "$1000",
									description : "Nice sofa",
									media_url : "http://static1.squarespace.com/static/5681783fb204d52319b988e2/t/5681ea6b99043989de2029a3/1451354881260/2-graphic.png",
									category_ids : [ "1002e" ],
									mixins : [ {
										"key" : "Size_Weight",
										"value" : "5 KG"
									}, {
										"key" : "Size_Length",
										"value" : "110 sm"
									}, {
										"key" : "Size_Width",
										"value" : "60 sm"
									} ]
								} 
								],
								
								comparedCategories : [ 
								{
									id : "1001e",
									name : "Furniture",
									count : 1
								},
								{
									id : "1002e",
									name : "Electronics",
									count : 1
								} 
								]
							};
						}
					};
				} ]);