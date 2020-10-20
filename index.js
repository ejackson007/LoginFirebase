firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      var user = firebase.auth().currentUser;
      if(user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      }
    } 
    else {
      // No sigin in
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });

function login(){
    var email = document.getElementById("user_email").value;
    var passwd = document.getElementById("user_passwd").value;

    firebase.auth().signInWithEmailAndPassword(email, passwd).catch(function (error){
        //Handle Errors
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert(errorMessage);
    });
}

function logout() {
  firebase.auth().signOut();
}