import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

var createOrder = function createOrder(offerId) {
  var paymentMethodId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var token = getData('CLEENG_AUTH_TOKEN') || '';
  var customerIP = getData('CLEENG_CUSTOMER_IP') || '';
  var url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/orders");

  var _jwtDecode = jwtDecode(token),
      customerId = _jwtDecode.customerId;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      offerId: offerId,
      customerId: customerId,
      customerIP: customerIP,
      paymentMethodId: paymentMethodId
    }),
    headers: {
      Authorization: "Bearer ".concat(token),
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  });
};

export default createOrder;