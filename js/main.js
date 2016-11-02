///**
// * Created by John on 11/1/2016.
// */
//
//var app = angular.module('adSlot', []);
//
//app.controller("searchController", function ($scope) {
//
//    //Load data
//    $scope.sites = sites;
//    $scope.categories = categories;
//
//    //Process indexing
//    $scope.searchIndex = lunr(function () {
//        this.field('siteName');
//        this.field('categories');
//        this.ref('id')
//    });
//
//    $scope.sites.forEach(function(siteElm, siteKey){
//
//        var elmCategories = [];
//
//        $scope.categories.forEach(function(catElm, catKey){
//
//            if (siteElm.categoryIds.indexOf(catElm.id) != -1)
//            {
//                elmCategories.push(catElm.description);
//            }
//
//        });
//
//        $scope.searchIndex.add({
//            id: siteElm.id,
//            siteName: siteElm.siteName,
//            body: elmCategories.toString()
//        })
//    });
//
//    //Fire search function
//    $scope.search = function(){
//
//        //split all query by "," then trim all elements in array
//        querryArr = $scope.queries.split(',').map(function(e){return e.trim();});
//
//        console.log(querryArr);
//    }
//
//});