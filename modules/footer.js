export const footerElem = document.querySelector('.one-page-footer');
export default function footer(form) {
  /*const footerElem = document.createElement('footer');
  const expressFormWrapper = document.querySelector('.ExpressFormMainWrapper');
  footerElem.classList.add('one-page-footer');
  if (expressFormWrapper) {
    expressFormWrapper.insertAdjacentElement('afterend', footerElem);
  } else {
    console.error('ExpressFormWrapper Class is missing');
  }*/
  /**
   * Current scope but will remove later on
   */
  form.ready.then(function () {
    //const _footer = document.querySelector('.one-page-footer');
    footerElem.style.display = 'block';
  });
}
