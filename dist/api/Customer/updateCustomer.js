import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import jwtDecode from 'jwt-decode';
import { getData } from 'util/appConfigHelper';

var updateCustomer = function updateCustomer(params) {
  var token = getData('CLEENG_AUTH_TOKEN') || '';
  var decoded = jwtDecode(token);
  var customerId = decoded.customerId;
  var url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/customers/").concat(customerId);
  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(_objectSpread({}, params)),
    headers: {
      Authorization: "Bearer ".concat(token),
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  });
};

export default updateCustomer;