const _ = require('lodash');
export function getformAPIURL() {
    /**
     * Set all staging urls
     */
    let stagings = [
        {
            sandpitForm: 'https://sandpit-businessconnect.form.io',
        },
        {
            externalSandpit: 'https://externalsandpit-businessconnect.form.io',
        },
        {
            masters: 'https://masters-businessconnect.form.io',
        },
        {
            featureDev: 'https://dev-businessconnect.form.io',
        },
        {
            featureTest: 'https://test-businessconnect.form.io',
        },
        {
            live: 'https://businessconnect.form.io',
        },
    ];
    /**
     * Get data-staging attribute
     */
    let dataStaging = document.querySelector('#formio').getAttribute('data-staging');
    let formIOUrl = '';
    //console.log(dataStaging);
    _.forEach(stagings, (staging) => {
        _.mapKeys(staging, function (value, key) {
            if (key === dataStaging) {
                formIOUrl = value;
            }
        });
    });

    return formIOUrl;
}
