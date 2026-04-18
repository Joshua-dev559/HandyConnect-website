const { extractData, isFormValid } = require('./index.js');
describe("Contact Form Tests", () => {
    test ("should validate correct data", () => {
        const data = {
            name: "Peter",
            email: "peter@email.com",
            phone: "0734124131",
            service: "Plumbing",
            message: "Fix my sink"
        };
        expect(isFormValid(data)).toBe(true);
    });

    test ("should reject invalid data", () => {
        const data = {
            name: "",
            email: "wrong",
            phone: "123",
            service: "",
            message: ""
        };
        expect(isFormValid(data)).toBe(false);
    });

    test ("should extract data from DOM form", () => {
        document.body.innerHTML = `
            <form id="contact-form">
                <input type="text" name="name" value="Peter">
                <input type="email" name="email" value="peter@email.com">
                <input type="tel" name="phone" value="0734124131">
                <select name="service"> 
                <option value = "plumbing" selected>Plumbing</option>
                </select>
                <textarea name ="message">Hello</textarea>
                </form>
    `;
    const form = document.getElementById ("contact-form");
    const data = extractData (form);
    expect (data.name).toBe("Peter");
    expect (data.email).toBe("peter@email.com");
    expect (data.service).toBe("plumbing");
    expect (data.message).toBe("Hello");
});
});
