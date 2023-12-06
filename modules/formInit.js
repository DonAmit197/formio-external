import { createForm } from "./createForm";

export const FormInit = () => {

    const formioForm = document.querySelector("#formio");
    const formId = formioForm.getAttribute('data-form');
    var myHeaders = new Headers();
    myHeaders.append("x-token", process.env.FORMIO_API_KEY);

    var formdata = new FormData();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${process.env.FORMIO_API_URL}/form/${formId}`, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then((result) => {

            createForm(formioForm, result);

        })
        .catch(error => console.log('error', error));

}
