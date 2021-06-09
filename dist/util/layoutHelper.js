import { getData, setData } from 'util/appConfigHelper';

var isConfigSetted = function isConfigSetted(urlParam, configName) {
  switch (new URLSearchParams(window.location.search).get(urlParam)) {
    case 'true':
      setData(configName, 'true');
      return true;

    case 'false':
      setData(configName, 'false');
      return false;

    default:
      return getData(configName) === 'true';
  }
};

export var isHosted = function isHosted() {
  return isConfigSetted('hosted', 'CLEENG_HOSTED');
};
export var isHeaderOff = function isHeaderOff() {
  return isConfigSetted('headerOff', 'CLEENG_HEADER_OFF');
};