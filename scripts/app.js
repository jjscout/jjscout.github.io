var myApp = angular.module("myApp",[]);

myApp.controller("mainController",function($scope){
	//Controller code goes here
	$scope.name="Boaty McBoatface";
    $scope.shekel=1;
    $scope.dollar=3.867;
    //$scope.rs;
    //expect(element(by.binding('rs')).getText()).toMatch('0');
    //element(by.css('button')).click();
    //expect(element(by.binding('rs')).getText()).toMatch('1');
    $scope.toDollars=function(){
        return $scope.shekel*$scope.dollar;
    };
});

//it('should check ng-click', function() {
//  expect(element(by.binding('count')).getText()).toMatch('0');
//  element(by.css('button')).click();
//  expect(element(by.binding('count')).getText()).toMatch('1');
//});