//import gds from '@ukhomeoffice/formio-gds-template';
const _ = require('lodash');
Formio.use(gds);
export const createForm = (formioForm, result) => {

    Formio.createForm(formioForm, result).then((form) => {
        console.log(form);

    });
}