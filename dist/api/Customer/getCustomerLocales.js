var getCustomerLocales = function getCustomerLocales() {
  return fetch("".concat(ENVIRONMENT_CONFIGURATION.API_URL, "/locales"), {}).then(function (res) {
    return res.json();
  });
};

export default getCustomerLocales;