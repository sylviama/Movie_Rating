app.factory("searchFactory", function($q, $http,authFactory){
  
  //get database search result
  var getSearchResult=function(urlLink){
    // var user=authFactory.getUser();

    return $q(function(resolve, reject){
      $http.get(urlLink)
      .success(function(response){
        resolve(response.Search);
      })
    })
  };

  //post to watch list
  var movieList={
    Title:"",
    Year:"",
    uid:"",
    watched:false
  };

  var postToWatchList=function(movieList){
    var user=authFactory.getUser();

    return $q(function(resolve, reject){
      $http.post("https://movieapisylvia.firebaseio.com/movies.json",
        JSON.stringify({
          Title:movieList.Title,
          Year:movieList.Year,
          uid:user.uid,
          watched: false
        }))
      .success(function(response){
        resolve(response)
      })
    })
  }

  //get watch list from firebase
  var getWatchList=function(){
    var user=authFactory.getUser();

    return $q(function(resolve, reject){
      $http.get(`https://movieapisylvia.firebaseio.com/movies.json?orderBy="uid"&equalTo="${user.uid}"`)
      .success(function(response){
        resolve(response);
      })
    })
  }

  return{getSearchResult:getSearchResult, postToWatchList:postToWatchList, getWatchList:getWatchList};

})

