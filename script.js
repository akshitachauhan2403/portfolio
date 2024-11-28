const header = document.querySelector("header");
Window.addEventListerner("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 100)
})
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // EmailJS Configuration
    emailjs.init("YOUR_EMAILJS_USER_ID");
  
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
  
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send(serviceID, templateID, params)
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  });
  