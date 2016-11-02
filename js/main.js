/**
 * Created by John on 11/1/2016.
 */

var app = angular.module('adSlot', []);

app.controller("searchController", function ($scope) {

    $scope.sites = sites;

    $scope.categories = categories;

    //Fire search function
    $scope.search = function(){

        console.log($scope.queries);

    }

});