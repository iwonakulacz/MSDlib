import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

const updateCustomer = function updateCustomer(params) {
  const token = getData('CLEENG_AUTH_TOKEN') || '';
  const decoded = jwtDecode(token);
  const { customerId } = decoded;
  const url = ''
    .concat(ENVIRONMENT_CONFIGURATION.API_URL, '/customers/')
    .concat(customerId);
  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(_objectSpread({}, params)),
    headers: {
      Authorization: 'Bearer '.concat(token),
      'Content-Type': 'application/json'
    }
  }).then(function(res) {
    return res.json();
  });
};

export default updateCustomer;
