import { getData } from 'util/appConfigHelper';

const getOfferDetails = function getOfferDetails(offerId) {
  const token = getData('CLEENG_AUTH_TOKEN') || '';
  const customerEmail = getData('CLEENG_CUSTOMER_EMAIL') || '';
  const customerIP = getData('CLEENG_CUSTOMER_IP') || '';
  const url = ''
    .concat(ENVIRONMENT_CONFIGURATION.API_URL, '/offers/')
    .concat(offerId, '/customers/')
    .concat(customerEmail, '?customerIP=')
    .concat(customerIP);
  return fetch(url, {
    headers: {
      Authorization: 'Bearer '.concat(token)
    }
  }).then(function(res) {
    return res.json();
  });
};

export default getOfferDetails;
