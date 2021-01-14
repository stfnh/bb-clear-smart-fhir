const getSmartClient = () =>
  new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line */
    const smart = FHIR.client({

        // === SMART on FHIR sandbox ===
        serverUrl: 'https://r4.smarthealthit.org',
        tokenResponse: {
          patient: '17ff80a3-dda8-4a58-a8c5-6fe94ad0d747'
        }
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
