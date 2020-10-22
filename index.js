firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      var user = firebase.auth().currentUser;
      if(user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User: " + email_id;
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
        window.alert("Invalid email or password!");
        document.getElementById("user_email").value = "";
        document.getElementById("user_passwd").value = "";
    });
}

function logout() {
  firebase.auth().signOut();
  document.getElementById("user_email").value = "";
  document.getElementById("user_passwd").value = "";
}