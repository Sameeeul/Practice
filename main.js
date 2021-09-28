let menuBar = document.querySelector(".burger");
let navMenu = document.querySelector(".menu");


menuBar.addEventListener("click", mobileMenu);

function mobileMenu() {
    // menuBar.classList.toggle("active");
    navMenu.classList.toggle("active");

};
let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    // menuBar.classList.remove("active");
    navMenu.classList.remove("active");
} 

let text = ['Developer','Student','Designer'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
   if(count=== text.length){
      count = 0;
   }
   currentText = text[count];
   letter= currentText.slice(0, ++index);

   document.querySelector('.typing').textContent = letter;
   if(letter.length === currentText.length){
      count++;
      index=0;
   }
   setTimeout(type,300);

}());

function validation(){
   var error=  document.getElementById("error");
   var name = document.getElementById("Name").value;
   var email = document.getElementById("Email").value;
   var phone = document.getElementById("Phone").value;
   var message = document.getElementById("Message").value;


   if (name.length<3 ) {
      error.innerHTML= "Please Enter a valid Name.";
      return again();
   }
   if (email.indexOf(".com") == -1) {
      error.innerHTML= "Please Enter a valid Email.";
      return again();
   }
   if (isNaN(phone)) {
      error.innerHTML= "Please Enter a valid Phone Number.";
      return again();
   }



   else{
       clear();
 }
   

}

function clear(){
   error.innerHTML= "";
}
function again(){
   alert("Please submit your form again with validation!");
}
