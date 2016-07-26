var app = angular.module("madLibsApp");

app.controller("inputController", function($scope, madLibsFactory, $location) {

    $scope.ourFunc = function(madLib) {
        madLibsFactory.saveObject(madLib);
        console.log(madLib);
        $location.path('/view2');
    };

});
