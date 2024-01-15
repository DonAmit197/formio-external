const axios = require('axios');
import { footerElem } from './footer';
console.log('FooterElem inside form-submit-js', footerElem);
export const formSubmitEvent = (form) => {
  //form.nosubmit = true;
  //console.log(axios)

  form.on('reviewSubmission', (submission) => {
    console.log(submission);
    /**
     * Sending to Pega
     */
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://nzmbie-bconn-dt2.pegacloud.io/prweb/api/ExternalWebsitePublication/v1/cases?ServiceID=AIP-',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic Y2hhcnVsYXRoYS5rcmlzaG5ha3VAZGF0YWNvbS5jby5uejpEeW5hbWljMkA=',
        Cookie:
          'JSESSIONID=C299170E3B56C70BD4539B11DE9AC99A; AWSALB=WE+YI7QdsSe/A8cHE7q6Vn/HvY9syhxnEZxjnag+YYC684jKsh26qKkIdgrgpH+yX9Qwp2pO17EZtO12PvfvI74+aUG0zzR19Rx7d0P7F586uZjIkS3BGUTZPiDp; AWSALBCORS=WE+YI7QdsSe/A8cHE7q6Vn/HvY9syhxnEZxjnag+YYC684jKsh26qKkIdgrgpH+yX9Qwp2pO17EZtO12PvfvI74+aUG0zzR19Rx7d0P7F586uZjIkS3BGUTZPiDp',
      },
      data: submission,
    };
    /**
     * Sending to Aaron's API
     */
    let config2 = {
      method: 'post',
      url: process.env.FORM_SUBMISSION_URL,
      data: submission,
    };

    axios(config2)
      .then((response) => {
        console.log(response);
        form.emit('submitDone', submission);
        console.log(response.data);
        console.log(submission);
      })

      .catch((error) => console.error('Error during submission:', error));
  });
};

export const submissionConfirmation = (form) => {
  form.on('submitDone', function (submission) {
    try {
      form.everyComponent((component) => {
        if (component.component.key === 'thankYouDetails') {
          //console.log('thank you', component);
          const compoElem = component.element;
          if (compoElem) {
            if (compoElem.parentNode) {
              compoElem.parentNode.removeChild(compoElem);
              document.body.appendChild(compoElem);
              document.querySelector('.ExpressFormMainWrapper').setAttribute('hidden', true);
              compoElem.insertAdjacentElement('afterend', footerElem);
              footerElem.classList.add('fixed-footer');
            }
            compoElem.classList.remove('ef-hideComponent');
            compoElem.classList.add('ef-showComponent');
          } else {
            throw new Error('Component element Not found');
          }
        }
      });
    } catch (error) {
      console.error('Error in submission confirmation', error);
    }
  });
};
