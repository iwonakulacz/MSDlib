import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

const createOrder = function createOrder(offerId) {
  const paymentMethodId =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const token = getData('CLEENG_AUTH_TOKEN') || '';
  const customerIP = getData('CLEENG_CUSTOMER_IP') || '';
  const url = ''.concat(ENVIRONMENT_CONFIGURATION.API_URL, '/orders');

  const _jwtDecode = jwtDecode(token);
  const { customerId } = _jwtDecode;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      offerId,
      customerId,
      customerIP,
      paymentMethodId
    }),
    headers: {
      Authorization: 'Bearer '.concat(token),
      'Content-Type': 'application/json'
    }
  }).then(function(res) {
    return res.json();
  });
};

export default createOrder;
