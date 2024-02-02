var User=localStorage.getItem("username")
document.getElementById("user_name").innerHTML="Welcome "+User

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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log(Room_names)
row="<div class='room_name' onclick='redirect_to_message_page(this.id)' id="+Room_names+">#"+Room_names+"</div>"+"<hr>"
document.getElementById("output").innerHTML+=row
      });});}
getData();

function beanjoe() {
      room=document.getElementById("AR").value
      localStorage.setItem("Room",room)
      firebase.database().ref("/").child(room).set({
            purpose:"adding the room name"
      })
      window.location="kwitter_page.html"
}
function redirect_to_message_page(name) {
      localStorage.setItem("Room",name)
      window.location="kwitter_page.html"
}
function doodoo() {
      localStorage.removeItem("username")
      localStorage.removeItem("Room")
      window.location="index.html"
}
