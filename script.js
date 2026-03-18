var selectedBus="";

function login(){

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){
window.location="index.html";
}
else{
alert("Invalid Login");
}


}

function displayRoute(){

const params = new URLSearchParams(window.location.search);
const location = params.get("location");
const destination = params.get("destination");

document.getElementById("result").innerHTML = location + " to " + destination;

}

window.addEventListener("load", displayRoute);

function trackBus(busName){



selectedBus=busName;

var img=document.getElementById("busImage");
var btn=document.getElementById("trackBtn");

if(busName=="KS"){
img.src="ks.jpg";
}

else if(busName=="SNB"){
img.src="snb.jpg";
}

else if(busName=="RVT"){
img.src="rvt.jpg";
}

else if(busName=="SVT"){
img.src="svt.jpg";
}

btn.style.display="inline-block";

}

function openMap(){

window.open("https://www.google.com/maps/dir/Mettur/Mecheri/Omalur/Salem");

}

function logout(){

window.location="login.html";

}

