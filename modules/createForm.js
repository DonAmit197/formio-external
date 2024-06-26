//import gds from '@ukhomeoffice/formio-gds-template';
import { formSubmitEvent, submissionConfirmation } from './form-submit-event';
import { confirmationUIInit, tipsUI } from './confirmation-ui';
import nzbnNumber from './nzbnNumber';
import footer from './footer';
const _ = require('lodash');

Formio.use(gds);
export const createForm = (formioForm, result) => {
  Formio.createForm(formioForm, result, {
    buttonSettings: {
      showCancel: false,
      showPrevious: false,
      showNext: false,
      showSubmit: false,
    },
  }).then((form) => {
    console.log(form);
    nzbnNumber(form);
    formSubmitEvent(form);
    submissionConfirmation(form);
    confirmationUIInit(form);
    tipsUI(form);

    footer(form);
  });
};
