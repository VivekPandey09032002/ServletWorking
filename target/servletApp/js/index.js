function formValidation(data) {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const phoneNumber = data.phoneNumber;
    const gender = data.gender;
    const language = data.language;
    const zipcode = data.zipcode;

    // checking name length
    if (name.length < 2 || name.length > 20) {
        alert("Name length should be more than 2 and less than 21");
        return false;
    }
    // checking email
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        return false;
    }
    // checking password
    if (!password.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        return false;
    }
/*    // checking phone number
    if (!phoneNumber.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long number and first digit can't be 0!");
        return false;
    }*/
    // checking gender
    if (gender === "") {
        alert("Please select your gender!");
        return false;
    }
    // checking language
    if (language === "") {
        alert("Please select your language!")
        return false;
    }
    // checking zip code
    if (!zipcode.match(/^[0-9]{6}$/)) {
        alert("Zip code must be 6 characters long number!");
        return false;
    }

    return true;
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}


const form = document.querySelector(".registartion-form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = e.target.elements;
    const name = formData.name.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const phoneNumber = formData.phoneNumber.value;
    const language = formData.language.value;
    const zipcode = formData.zipcode.value;
    const about = formData.about.value;
    const data = {
        "name": name,
        "email": email,
        "password": password,
        "number": phoneNumber,
        "language": language,
        "zipcode": zipcode,
        "about": about
    }
    console.log(data)
    if (formValidation(data)) {
        postData("http://localhost:8080/servletApp_war_exploded/register", data)
            .then((data) => {
                console.log(data);
            });

    }

})