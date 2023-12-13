const _ = require('lodash');
export const confirmationUIInit = (form) => {
    form.everyComponent((component) => {

        if (_.includes(component.component.customClass, 'efPageHeading')) {
            //console.log(component)
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

export const tipsUI = (form) => {
    return form.everyComponent((component) => {
        if (_.includes(component.component.customClass, 'tips-container')) {
            console.log(component);
            const compoElem = component.element;
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('tip-icon-wrapper');
            const tipIconImg = document.createElement('img');
            tipIconImg.setAttribute('src', '../dist/images/tipicon.png');
            tipIconImg.setAttribute('alt', 'Tip Icon')
            tipIconImg.classList.add('icon-image');
            imageWrapper.appendChild(tipIconImg);

            if (compoElem) {
                let _tipWrapperhtmlElem = compoElem.querySelector('.formio-component-htmlelement');
                _tipWrapperhtmlElem.appendChild(imageWrapper);


            }

        }
    })
}