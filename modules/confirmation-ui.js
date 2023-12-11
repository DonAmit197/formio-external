const _ = require('lodash');
export const confirmationUIInit = (form) => {
    form.everyComponent((component) => {

        if (_.includes(component.component.customClass, 'efPageHeading')) {
            console.log(component)
            const compoElem = component.element;
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('page-headingSuccess');
            const successImage = document.createElement('img');
            successImage.setAttribute('src', '../dist/images/greenticksuccess.png');
            successImage.setAttribute('alt', 'Confirmation Icon')
            successImage.classList.add('icon-image');
            imageWrapper.appendChild(successImage);


            if (compoElem) {
                let _pageHeading = compoElem.querySelector('.formio-component-htmlelement');
                _pageHeading.appendChild(imageWrapper);


            }
        }
    })
}