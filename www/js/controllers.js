angular.module('starter.controllers', [])

.controller('SignCtrl', function($scope,$state) {

   $scope.user = {
       name: ""
   } ;
   $scope.signin= function()
{ 
       console.log($scope.user.name);
       $state.go('feed',{username:$scope.user.name});
}
})

.controller('FeedCtrl', function($scope,$http,$stateParams) {
 $scope.user= {
     message: ""
 };
    console.log($stateParams);  
    $http.get("https://messageapp1.herokuapp.com/messages").then(function(response){
        console.log(response);
        $scope.data=response.data;
});
    
$scope.send = function()
  {  
    var dataWithPost={
      username:$stateParams.username,
      message:$scope.user.message
    };
    
    $http.post("https://messageapp1.herokuapp.com/messages", dataWithPost).then(function(response){
      console.log(response);
      $scope.data = response.data;
    });

  }
})

