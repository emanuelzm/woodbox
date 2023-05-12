var formV1 = document.getElementById("formV1");
formV1.addEventListener("submit", formSubmit);
var code = atob("MDYwZWI2OGQtZTZkYi00NDRiLWE2MmUtOTRiYzRlMWE3YjE4");
var fetch_code = atob("aHR0cHM6Ly9nZXRmb3JtLmlvL2Yv") + code;

function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
        'Correo',
        document.querySelector('input[name="form_email"]').value
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