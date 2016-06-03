app.controller("watchList", function($scope, searchFactory){

  $scope.watchListMovie=[];
  //Show WatchList
  searchFactory.getWatchList().then(function(list){
    $scope.watchListMovie=list;
    console.log(list);
  })


})