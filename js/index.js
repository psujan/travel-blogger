const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(!name){
    alert("Please provide your name");
    return;
  }

  if(!email){
    alert("Please provide your email");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(email)){
    alert("Please provide a valid email");
    return;
  }

  if(!message){
    alert("Please write your message");
    return;
  }

  alert("Form Validation Successful. Unfortunately this website doesn't include backend service to proceed your request")

})