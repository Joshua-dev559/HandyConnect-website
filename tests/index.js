function extractData(form) {
    const formData = new FormData(form);

    return {
        name: formData.get ("name"),
        email: formData.get ("email"),
        phone: formData.get ("phone"),
        service: formData.get ("service"),
        message: formData.get ("message")
   };
}

function isFormValid(data) {
    return (
        data.name.trim () !== "" &&
        data.email.includes ("@") &&
        data.phone.length >= 10 &&
        data.message.trim () !== ""
    );
}

if (typeof document !== "undefined") {
    const form = document.getElementById ("contactForm")

    if (form) {
        form.addEventListener ("submit", function (e) {
            const data = extractData (form);
            if (isFormValid (data)) {
                e.preventDefault ();
                alert ("Please fill all fields correctly");
            }
        });
    }
}

module.exports = {
    extractData,
    isFormValid
};