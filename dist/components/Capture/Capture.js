import _slicedToArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import CaptureForm from './CaptureForm/CaptureForm';
import { CaptureStyled, CaptureContentStyled, CaptureTitle } from './CaptureStyled';

var Capture = function Capture(_ref) {
  var settings = _ref.settings,
      redirectUrl = _ref.redirectUrl;

  var _useTranslation = useTranslation(),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      captureSettings = _useState2[0],
      setCaptureSettings = _useState2[1];

  useEffect(function () {
    setCaptureSettings(settings);
  }, [captureSettings]);
  return /*#__PURE__*/React.createElement(CaptureStyled, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(CaptureContentStyled, null, /*#__PURE__*/React.createElement(CaptureTitle, null, t('Confirm Registration')), captureSettings ? /*#__PURE__*/React.createElement(CaptureForm, {
    settings: captureSettings,
    redirectUrl: redirectUrl
  }) : /*#__PURE__*/React.createElement(Loader, null)), /*#__PURE__*/React.createElement(Footer, {
    isCheckout: false
  }));
};

Capture.defaultProps = {
  settings: [],
  redirectUrl: []
};
export default Capture;