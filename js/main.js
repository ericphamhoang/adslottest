///**
// * Created by John on 11/1/2016.
// */
//
var app = angular.module('adSlot', []);

app.controller("mainController", function ($scope) {

    //Load data
    $scope.sites = sites;
    $scope.categories = categories;

    //Process indexing
    $scope.searchIndex = lunr(function () {
        this.field('siteName');
        this.field('categories');
        this.ref('id')
    });

    $scope.sites.forEach(function(siteElm, siteKey){

        var elmCategories = [];

        $scope.categories.forEach(function(catElm, catKey){

            if (siteElm.categoryIds.indexOf(catElm.id) != -1)
            {
                elmCategories.push(catElm.description);
            }

        });

        console.log(elmCategories.toString());
        $scope.searchIndex.add({
            id: siteElm.id,
            siteName: siteElm.siteName,
            categories: elmCategories.toString()
        })
    });

    //Fire search function
    $scope.search = function(){

        //split all query by "," then trim all elements in array
        querryArr = $scope.queries.split(',').map(function(e){return e.trim();});

        var rs = [];

        for (i=0; i<querryArr.length; i++)
        {
            rs = rs.concat($scope.searchIndex.search(querryArr[i]));
        }

        $scope.results = [];

        rs.forEach(function(value, key){

            $scope.sites.forEach(function(siteElm, siteKey) {
                if (value.ref == siteElm.id)
                    $scope.results.push(siteElm);
            });
        });

        console.log($scope.results);
    }

});