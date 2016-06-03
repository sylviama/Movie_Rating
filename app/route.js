"use strict"

var app=angular.module("MovieRatingApp", ["ngRoute"]);

let isAuth=(authFactory)=> new Promise((resolve,reject)=>{
  if(authFactory.isAuthenticated()){
    console.log("autenticated");
    resolve();
  }else{
    console.log("not autenticated");
  };
});

app.config(function($routeProvider){
  $routeProvider
  .when("/logout", {
    templateUrl:"./partial/login.html",
    controller:"loginCtrl"
  })
  .when("/items/watchList", {
    templateUrl:"./partial/watchList.html",
    controller:"watchList"
  })
  .when("/items/search",{
    templateUrl:"./partial/search.html",
    controller:"searchCtrl"
  })
  .otherwise("/items/search");
});

app.run(($location)=>{
  var todoRef=new Firebase("https://movieapisylvia.firebaseio.com/");

  todoRef.onAuth(authData=>{
    if(!authData){
      $location.path("/logout");
    }
  })
})
