export default function nzbnNumber(form) {
  form.everyComponent((component) => {
    if (component.component.key === 'data_entity_nzbn1') {
      console.log('NZBN', component);
      form.ready.then(function () {
        const nzbnComp = component.component;
        if (nzbnComp.data.url === 'data_nzbnentityurl') {
          nzbnComp.data.url = 'https://api.business.govt.nz/sandbox/nzbn/v5/entities';
        }
        //const authKey = nzbnComp.data.headers;
        console.log(nzbnComp.data.headers[0].value);
        if (nzbnComp.data.headers[0].value === 'data_nzbnbasesubscriptionkey') {
          nzbnComp.data.headers[0].value = '22c5825ca2bd40cba2b30e684df323cc';
        }
        component.redraw();
      });
    }
  });
}
