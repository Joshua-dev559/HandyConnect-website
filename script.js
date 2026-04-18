const FORM_ENDPOINT = "https://formspree.io/f/mjgjwzaz";

function validateForm(data) {
    return(
        data.name.trim () !== "" &&
        data.email.includes ("@") &&
        data.phone.length >= 10 &&
        data.service !== "" &&
        data.message.trim () !== ""
      );
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault ();
    const formData = new FormData (form);
    const data = {
        name: formData.get ("name"),
        email: formData.get ("email"),
        phone: formData.get ("phone"),
        service: formData.get ("service"),
        message: formData.get ("message")
    };

    if (!validateForm(data)) {
        alert ("Please fill all fields correctly");
        return;
    }

    try {
        const response = await fetch (FORM_ENDPOINT, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            alert("Message sent successfully");
            form.reset();
        }else{
            const errorData = await response.json ();
            console.error("Formspree error:", errorData);
            alert("Failed to send message.");
        }
    }catch (error) {
        console.error("Network error:", error);
        alert("Error sending message.");
    }
});