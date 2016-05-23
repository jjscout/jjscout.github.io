var myApp = angular.module("myApp",[]);

myApp.controller("mainController",function($scope){
	//Controller code goes here
    $scope.rs=0;

    $scope.addRoughlySpeaking=function(){
        $scope.rs = $scope.rs + 1;
        return;
    }
    $scope.removeRoughlySpeaking=function(){
        $scope.rs = $scope.rs - 1;
        return;
    }
});
