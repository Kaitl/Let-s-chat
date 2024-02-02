//YOUR FIREBASE LINKS
var message=""
const firebaseConfig = {
      apiKey: "AIzaSyDi47IpBLP0Dp4_6j35moy-aTMSgF5UI1M",
      authDomain: "kidter-43792.firebaseapp.com",
      databaseURL: "https://kidter-43792-default-rtdb.firebaseio.com",
      projectId: "kidter-43792",
      storageBucket: "kidter-43792.appspot.com",
      messagingSenderId: "381529227639",
      appId: "1:381529227639:web:bfc260b3207f56428a2172"
    };
    firebase.initializeApp(firebaseConfig)

    username=localStorage.getItem("username")
    room_name=localStorage.getItem("Room")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function doodoo() {
      localStorage.removeItem("username")
      localStorage.removeItem("Room")
      window.location="index.html"
}

function poopoo() {
      message=document.getElementById("popo").value
      firebase.database().ref(room_name).push({
            name: username,
            message: message,
            like: 0
      })
      document.getElementById("popo").value=""
}