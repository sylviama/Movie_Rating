"use strict"

app.controller("loginCtrl", function($scope, $location, authFactory){

  var ref=new Firebase("https://movieapisylvia.firebaseio.com/");

  $scope.hasUser=false;

  $scope.account={
    email:"",
    password:""
  };

  if($location.path()==="/logout"){
    ref.unauth();
  }




  $scope.register=function(){

    ref.createUser({
      email:$scope.account.email,
      password:$scope.account.password
    }, function(error,userData){
      if(error){
        console.log("error:", error);
      }else{
        console.log("userData: ", userData.uid);
        $scope.login();
      }
    })
  };



  $scope.login=function(){
    authFactory.authenticate($scope.account).then(function(){
      $scope.hasUser=true;
      $location.url("/items/watchList");
      // $scope.apply();
    })
  };



})

