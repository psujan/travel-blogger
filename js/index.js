const contactForm = document.getElementById("contact-form");

const mobileMenuBtn = document.getElementById("m-menu-btn");

if (contactForm != null) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name) {
      alert("Please provide your name");
      return;
    }

    if (!email) {
      alert("Please provide your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please provide a valid email");
      return;
    }

    if (!message) {
      alert("Please write your message");
      return;
    }

    alert(
      "Form Validation Successful. Unfortunately this website doesn't include backend service to proceed your request"
    );
  });
}

mobileMenuBtn.addEventListener("click", (e) => {
  mobileMenuBtn.classList.add("hidden");
  document.getElementById("m-menu-wrap").classList.add("m-menu-open");
});

const mobileOverlay = document.querySelector('.m-menu-overlay');
mobileOverlay.addEventListener("click",(e)=>{
  console.log("clicked", e.target);
  if(e.target.classList.contains("m-menu-overlay")){
    document.getElementById("m-menu-wrap").classList.remove("m-menu-open");
    mobileMenuBtn.classList.remove("hidden");
  }
})
