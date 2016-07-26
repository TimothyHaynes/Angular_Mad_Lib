var app = angular.module("madLibsApp");

app.controller("outputController", function($scope, madLibsFactory) {
    $scope.madLibObject = madLibsFactory.returnObject();
    console.log($scope.madLibObject);
});
