function getuserinput(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('Lname').value;
    var uname = document.getElementById('Uname').value; 
    var pass = document.getElementById('pass').value;
    document.getElementById("register").innerHTML=fname;
}
alert(fname);