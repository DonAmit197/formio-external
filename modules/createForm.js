//import gds from '@ukhomeoffice/formio-gds-template';
import { formSubmitEvent, submissionConfirmation } from './form-submit-event';
import { confirmationUIInit, tipsUI } from "./confirmation-ui";
const _ = require('lodash');
Formio.use(gds);
export const createForm = (formioForm, result) => {

    Formio.createForm(formioForm, result).then((form) => {
        console.log(form);
        formSubmitEvent(form);
        submissionConfirmation(form);
        confirmationUIInit(form);
        tipsUI(form);

    });
}