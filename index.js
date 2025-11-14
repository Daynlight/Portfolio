document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Xk4NkOlVjyzD5tjqD");

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fromEmail = document.getElementById("from_email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_8jblrql", "template_lzv14il", {
        name: fromEmail,
        message: message
      })
      .then(() => {
        document.getElementById("status").innerText = "Message sent!";
      })
      .catch((err) => {
        console.error(err);
        document.getElementById("status").innerText = "Error sending message.";
      });
  });
});
