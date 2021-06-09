import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCustomerConsents, submitConsents } from 'api';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import history from '../../history';
import { CheckoutConsentsStyled, CheckoutConsentsContentStyled, CheckoutConsentsTitleStyled, CheckoutConsentsSubTitleStyled, CheckoutConsentsListStyled, CheckoutConsentsCheckbox, CheckoutConsentsError } from './CheckoutConsentsStyled';

var CheckoutConsents = function CheckoutConsents(_ref) {
  var redirectUrl = _ref.redirectUrl;

  var _useTranslation = useTranslation(),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      consents = _useState2[0],
      setConsents = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      processing = _useState4[0],
      setProcessing = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      generalError = _useState6[0],
      setGeneralError = _useState6[1];

  useEffect(function () {
    getCustomerConsents().then(function (resp) {
      var consentsToAccept = resp.responseData.consents.filter(function (consent) {
        return consent.newestVersion > consent.version || consent.needsUpdate === true;
      });
      setConsents(consentsToAccept);
    });
  }, []);

  var handleClick = function handleClick(e, isConsentDisabled, clicked) {
    var updatedConsents = consents.map(function (consent) {
      if (consent.name === clicked.name) {
        return _objectSpread(_objectSpread({}, consent), {}, {
          state: clicked.state === 'accepted' ? 'declined' : 'accepted'
        });
      }

      return consent;
    });
    setConsents(updatedConsents);
  };

  var validateConsents = function validateConsents() {
    var isError = false;
    var updatedConsents = consents.map(function (consent) {
      if (consent.required && consent.state === 'declined') {
        isError = true;
        return _objectSpread(_objectSpread({}, consent), {}, {
          error: t('This consent is required')
        });
      }

      return consent;
    });
    setConsents(updatedConsents);
    return !isError;
  };

  var updateConsents = function updateConsents() {
    if (validateConsents()) {
      var payload = consents.map(function (consent) {
        return {
          name: consent.name,
          version: consent.newestVersion,
          state: consent.state
        };
      });
      setProcessing(true);
      submitConsents([], [], payload).then(function () {
        setProcessing(false);
        var currentRedirection = redirectUrl.shift();
        history.push(currentRedirection, redirectUrl);
      }).catch(function () {
        setGeneralError(t('Something went wrong. Try again later'));
      });
    }
  };

  return /*#__PURE__*/React.createElement(CheckoutConsentsStyled, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(CheckoutConsentsContentStyled, null, consents ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckoutConsentsTitleStyled, null, t('Terms & Conditions')), /*#__PURE__*/React.createElement(CheckoutConsentsSubTitleStyled, null, t('Please accept Terms & Conditions')), /*#__PURE__*/React.createElement(CheckoutConsentsListStyled, null, consents.map(function (consent) {
    return /*#__PURE__*/React.createElement(CheckoutConsentsCheckbox, {
      key: consent.name
    }, /*#__PURE__*/React.createElement(Checkbox, {
      isMyAccount: true,
      onClickFn: function onClickFn(e, isConsentDisabled) {
        return handleClick(e, isConsentDisabled, consent);
      },
      checked: consent.state === 'accepted',
      required: consent.required
    }, t(consent.label)), /*#__PURE__*/React.createElement(CheckoutConsentsError, null, consent.error));
  }), generalError && /*#__PURE__*/React.createElement(CheckoutConsentsError, {
    center: true
  }, generalError)), /*#__PURE__*/React.createElement(Button, {
    size: "big",
    theme: "confirm",
    onClickFn: updateConsents
  }, processing ? /*#__PURE__*/React.createElement(Loader, {
    buttonLoader: true,
    color: "#ffffff"
  }) : t('Continue'))) : /*#__PURE__*/React.createElement(Loader, null)), /*#__PURE__*/React.createElement(Footer, {
    isCheckout: false
  }));
};

CheckoutConsents.defaultProps = {
  redirectUrl: []
};
export default CheckoutConsents;