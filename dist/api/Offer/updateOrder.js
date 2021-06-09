import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import { getData } from 'util/appConfigHelper';

var updateOrder = function updateOrder(orderId, params) {
  var token = getData('CLEENG_AUTH_TOKEN') || '';
  var url = "".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/orders/").concat(orderId);
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

export default updateOrder;