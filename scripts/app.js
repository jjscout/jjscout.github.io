var myApp = angular.module("myApp",[]);

myApp.controller("mainController",function($scope){
	//Controller code goes here
    $scope.rsCount=0;
    $scope.log=[];
    $scope.addRoughlySpeaking=function(){
        $scope.rsCount = $scope.rsCount + 1;
        $scope.log[rsCount]={id:rsCount,timeTag:'1'};//new Date()}
        return;
    }
    $scope.removeRoughlySpeaking=function(){
		if ($scope.rsCount > 0){
			$scope.rsCount = $scope.rsCount - 1;
		}
        return;
    }
});
