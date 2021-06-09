import { getData } from 'util/appConfigHelper';

var getOfferDetails = function getOfferDetails(offerId) {
  var token = getData('CLEENG_AUTH_TOKEN') || '';
  var customerEmail = getData('CLEENG_CUSTOMER_EMAIL') || '';
  var customerIP = getData('CLEENG_CUSTOMER_IP') || '';
  var url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/offers/").concat(offerId, "/customers/").concat(customerEmail, "?customerIP=").concat(customerIP);
  return fetch(url, {
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (res) {
    return res.json();
  });
};

export default getOfferDetails;