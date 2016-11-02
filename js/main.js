/**
 * Created by John on 11/1/2016.
 */

var app = angular.module('adSlot', []);

app.controller("searchController", function ($scope) {

    $scope.sites = sites;

    console.log($scope.sites);

});