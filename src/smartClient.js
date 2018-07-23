const getSmartClient = () =>
  new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line */
    const smart = FHIR.client({

        // === Cerner sandbox ===
        // serviceUrl:
        //   'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca',
        // patientId: '1316024'

        // === SMART on FHIR sandbox ===
        serviceUrl: 'https://r2.smarthealthit.org',
        patientId: 'smart-1137192'
      });

      resolve(smart);
    } else {
      /* eslint-disable-next-line */
    FHIR.oauth2.ready(function(smart, err) {
        if (err) {
          reject(err);
        }
        resolve(smart);
      });
    }
  });

export default getSmartClient;
