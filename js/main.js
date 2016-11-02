///**
// * Created by John on 11/1/2016.
// */
//
var app = angular.module('adSlot', []);

app.controller("mainController", function ($scope) {

    //Load data
    $scope.sites = sites;
    $scope.categories = categories;

    ////Process indexing
    //$scope.searchIndex = lunr(function () {
    //    this.field('siteName');
    //    this.field('categories');
    //    this.ref('id')
    //});

    $scope.sites.forEach(function (siteElm, siteKey) {

        var elmCategories = [];

        $scope.categories.forEach(function (catElm, catKey) {

            if (siteElm.categoryIds.indexOf(catElm.id) != -1) {
                elmCategories.push(catElm.description);
            }

        });

        siteElm.categories = elmCategories;
    });

    console.log($scope.sites);

    //Fire search function
    $scope.search = function () {

        //split all query by "," then trim all elements in array
        querryArr = $scope.queries.split(',').map(function (e) {
            return e.trim();
        });

        $scope.results = [];

        for (i = 0; i < querryArr.length; i++) {
            queryElm = querryArr[i];
            //rs = rs.concat($scope.searchIndex.search(querryArr[i]));

            if (queryElm != "") {
                $scope.sites.forEach(function (siteElm, siteKey) {
                    if (siteElm.siteName.indexOf(queryElm) != -1) {
                        $scope.results.push(siteElm);
                    }
                    else {
                        for (i = 0; i < siteElm.categories.length; i++) {
                            if (siteElm.categories[i].indexOf(queryElm) != -1) {
                                $scope.results.push(siteElm);
                                break;
                            }
                        }
                    }
                })
            }
        }

        console.log($scope.results);
    }

});