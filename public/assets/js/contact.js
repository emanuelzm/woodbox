var formContactV1 = document.getElementById("formContactV1");
formContactV1.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
        'Nombre',
        document.querySelector('input[name="form_name"]').value
    )
    formData.append(
        'Correo',
        document.querySelector('input[name="form_email"]').value
    )
    formData.append(
        'Mensaje',
        document.querySelector('textarea[name="form_message"]').value
    )

    fetch("https://getform.io/f/GETAPI", {
            method: "POST",
            body: formData,
    })
    .then(response => {
        if (response.status === 200) {
            formSubmit.reset();
            alert("Thank you for your submission!");
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    });
}