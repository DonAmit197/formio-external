const axios = require('axios')
export const formSubmitEvent = (form) => {
    //form.nosubmit = true;
    //console.log(axios)

    form.on('reviewSubmission', (submission) => {
        console.log(submission);
        axios({
            method: 'post',
            url: process.env.FORM_SUBMISSION_URL,
            data: submission
        })
            .then((response) => {
                console.log(response)
                form.emit('submitDone', submission);
                console.log(response.data);
            })

            .catch(error => console.error('Error during submission:', error))



    })
}

export const submissionConfirmation = (form) => {
    form.on('submitDone', function (submission) {
        try {

            form.everyComponent((component) => {
                if (component.component.key === 'thankYouDetails') {
                    console.log('thank you', component);
                    const compoElem = component.element;
                    if (compoElem) {
                        if (compoElem.parentNode) {
                            compoElem.parentNode.removeChild(compoElem);
                            document.body.appendChild(compoElem);
                            document.querySelector('.ExpressFormMainWrapper').setAttribute('hidden', true)
                        }
                        compoElem.classList.remove('ef-hideComponent');
                        compoElem.classList.add('ef-showComponent');

                    } else {
                        throw new Error('Component element Not found')
                    }
                }
            })

        } catch (error) {
            console.error('Error in submission confirmation', error)
        }

    });
}