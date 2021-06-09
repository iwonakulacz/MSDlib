/* eslint-disable prefer-template */
var roundNumber = function roundNumber(number) {
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '2';
  return Number(Math.round(number + 'e' + decimalPlaces) + "e-" + decimalPlaces).toFixed(2);
};

export default roundNumber;