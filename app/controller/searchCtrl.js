app.controller("searchCtrl", function($scope, $http, searchFactory){
  $scope.movie={
    title:"",
    year:"",
    runtime:""
  };

  $scope.movieList=[];
  $scope.movieResult=false;
  $scope.watchListShow=true;
  $scope.watchListMovie={};

  //search database and show result
  $scope.generateLink=function(movie){
    //generate urlLink
    var urlLink="http://www.omdbapi.com/?s="+movie.title+"&r=json";
    //capture the search result
    searchFactory.getSearchResult(urlLink).then(function(response){
      $scope.movieList=response;
      console.log($scope.movieList);
      $scope.movieShow=true;
    });
  };

  //Add to watch list button
  $scope.addToWatchList=function(movieList){
    
    searchFactory.postToWatchList(movieList).then(function(response){
      console.log("post");
      searchFactory.getWatchList().then(function(list){
        $scope.watchListMovie=list;
        console.log(list);
        $scope.watchListShow=true;
      })
    })
  };

  


})


