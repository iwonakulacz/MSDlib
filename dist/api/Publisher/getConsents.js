var getConsents = function getConsents(publisherId) {
  return fetch("".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/publishers/").concat(publisherId, "/consents"), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  });
};

export default getConsents;