function myfunction(){

    var name=document.querySelector("#name").value;
    var destination=document.querySelector("#destination").value;
    var phone=document.querySelector("#phone").value;
    var add=document.querySelector("#add").value;
    var website=document.querySelector("#website").value;
    var company=document.querySelector("#company").value;
    var mobile=document.querySelector("#mobile").value;
    var email=document.querySelector("#email").value;

    if(name == ""){
        alert("Enter your name");
        return false;     
    }
    if(company == ""){
        alert("Enter your company name");
        return false;
    }
    if(destination == ""){
        alert("Enter your destination");
        return false;
    }
    if(add == ""){
        alert("Enter your address");
        return false;
    }
    if(mobile == ""){
        alert("Enter your mobile number");
        return false;
    }  
    if(mobile.length!=10){
        alert("Mobile number must be 10 digits");
        return false;
    }
    if(mobile<=0){
        alert("Invalid phone number");
        return false;
    }
    if(phone.length!=10){
        alert("Mobile number must be 10 digits");
        return false;
    }
    if(email == ""){
        alert("Enter your email address");
        return false;
    }
}
// ---------------------choose file----------------------
const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
// ---------------------------------------------------------
var check = document.querySelector('#cb');
var btn = document.querySelector('#create');
var web = document.querySelector('#website');
check.onchange = function(){
   
    if(this.checked){
        btn.disabled = false;
        web.disabled = true;
    }
    else{
        btn.disabled = true;
        web.disabled = false;
    }
}
// -------------------------------------------------------------
var radio1 = document.querySelector('#radio1');
var pic1 = document.querySelector('#pic1');
var radio2 = document.querySelector('#radio2');
var pic2 = document.querySelector('#pic2');
var radio3 = document.querySelector('#radio3');
var pic3 = document.querySelector('#pic3');
var radio4 = document.querySelector('#radio4');
var pic4 = document.querySelector('#pic4');
var radio5 = document.querySelector('#radio5');
var pic5 = document.querySelector('#pic5');
var radio6 = document.querySelector('#radio6');
var pic6 = document.querySelector('#pic6');


function imgFunction1(){
    if(pic1.onchange){
        radio1.checked = false;
    }
    else if(radio1.checked = true){
            document.getElementById("selected3").style.display="none";
            document.getElementById("selected1").style.display="block";
            document.getElementById("selected2").style.display="none";
            document.getElementById("selected4").style.display="none";
            document.getElementById("selected5").style.display="none";
            document.getElementById("selected6").style.display="none";        
            function cardReady(){
                var myname = document.getElementById("name").value;
                document.getElementById("myName").innerHTML = myname;
                var mycompany = document.getElementById("company").value;
                document.getElementById("myCompany").innerHTML = mycompany;
                var mydestination = document.getElementById("destination").value;
                document.getElementById("myDestination").innerHTML = mydestination;
                var mymobile = document.getElementById("mobile").value;
                document.getElementById("myMobile").innerHTML = mymobile;
                var myphone = document.getElementById("phone").value;
                document.getElementById("myAlternate").innerHTML = myphone;
                var myemail = document.getElementById("email").value;
                document.getElementById("myEmail").innerHTML = myemail;
                var myadd = document.getElementById("add").value;
                document.getElementById("myAdd").innerHTML = myadd;
            }
            cardReady();
    }

}    
function imgFunction2(){
    if(pic2.onchange){
        radio2.checked = false;
    }
    else if(radio2.checked = true){
            document.getElementById("selected3").style.display="none";
            document.getElementById("selected1").style.display="none";
            document.getElementById("selected2").style.display="block";
            document.getElementById("selected4").style.display="none";
            document.getElementById("selected5").style.display="none";
            document.getElementById("selected6").style.display="none";
            function cardReady(){
                var myname = document.getElementById("name").value;
                document.getElementById("myName").innerHTML = myname;
                var mycompany = document.getElementById("company").value;
                document.getElementById("myCompany").innerHTML = mycompany;
                var mydestination = document.getElementById("destination").value;
                document.getElementById("myDestination").innerHTML = mydestination;
                var mymobile = document.getElementById("mobile").value;
                document.getElementById("myMobile").innerHTML = mymobile;
                var myphone = document.getElementById("phone").value;
                document.getElementById("myAlternate").innerHTML = myphone;
                var myemail = document.getElementById("email").value;
                document.getElementById("myEmail").innerHTML = myemail;
                var myadd = document.getElementById("add").value;
                document.getElementById("myAdd").innerHTML = myadd;
            }
            cardReady();
    }
}
function imgFunction3(){
    if(pic3.onchange){
        radio3.checked = false;
    }
    else if(radio3.checked = true){
            document.getElementById("selected3").style.display="block";
            document.getElementById("selected1").style.display="none";
            document.getElementById("selected2").style.display="none";
            document.getElementById("selected4").style.display="none";
            document.getElementById("selected5").style.display="none";
            document.getElementById("selected6").style.display="none";       
    }
}
function imgFunction4(){
    if(pic4.onchange){
        radio4.checked = false;
    }
    else if(radio4.checked = true){
            document.getElementById("selected3").style.display="none";
            document.getElementById("selected1").style.display="none";
            document.getElementById("selected2").style.display="none";
            document.getElementById("selected4").style.display="block";
            document.getElementById("selected5").style.display="none";
            document.getElementById("selected6").style.display="none";
        
    }
}
function imgFunction5(){
    if(pic5.onchange){
        radio5.checked = false;
    }
    else if(radio5.checked = true){
            document.getElementById("selected3").style.display="none";
            document.getElementById("selected1").style.display="none";
            document.getElementById("selected2").style.display="none";
            document.getElementById("selected4").style.display="none";
            document.getElementById("selected5").style.display="block";
            document.getElementById("selected6").style.display="none";
        
    }
}
function imgFunction6(){
    if(pic6.onchange){
        radio6.checked = false;
    }
    else if(radio6.checked = true){
             document.getElementById("selected3").style.display="none";
            document.getElementById("selected1").style.display="none";
            document.getElementById("selected2").style.display="none";
            document.getElementById("selected4").style.display="none";
            document.getElementById("selected5").style.display="none";
            document.getElementById("selected6").style.display="block";
         
    }
}

// ----------------------------------------------------------------------------------
