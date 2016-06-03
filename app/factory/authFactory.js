"use strict"

app.factory("authFactory", function(){
  let ref=new Firebase("https://movieapisylvia.firebaseio.com/");
  var currentUserData=null;

  return{

    isAuthenticated(){
      let authData=ref.getAuth();
      return(authData)?true:false;
    },

    getUser(){
      return currentUserData;
    },


    authenticate(credentials){
      return new Promise(function(resolve,reject){
        ref.authWithPassword({
          "email":credentials.email,
          "password":credentials.password
        },(error,authData)=>{
          if(error){
            reject(error);
          }else{
            currentUserData=authData;
            resolve(authData);
          };
        });
      });
    }

  }//close return



})


