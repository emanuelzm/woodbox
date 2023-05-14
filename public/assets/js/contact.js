var formContactV1 = document.getElementById("formContactV1");
formContactV1.addEventListener("submit", formSubmit);
var code = atob("ODc5ZWVlNDUtMGY2My00MzFjLTkxMjEtNTFjYjA0ZTFkYmY2");
var fetch_code = atob("aHR0cHM6Ly9nZXRmb3JtLmlvL2Yv") + code;
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

    fetch(fetch_code, {
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