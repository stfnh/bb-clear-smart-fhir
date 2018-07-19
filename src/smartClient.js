const getSmartClient = () => new Promise((resolve, reject) => {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable-next-line */
    const smart = FHIR.client({
      serviceUrl: 'https://r3.smarthealthit.org',
      // patientId: 'smart-1213208'
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
