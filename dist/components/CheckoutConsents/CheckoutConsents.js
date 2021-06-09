import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _slicedToArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCustomerConsents, submitConsents } from 'api';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import history from '../../history';
import {
  CheckoutConsentsStyled,
  CheckoutConsentsContentStyled,
  CheckoutConsentsTitleStyled,
  CheckoutConsentsSubTitleStyled,
  CheckoutConsentsListStyled,
  CheckoutConsentsCheckbox,
  CheckoutConsentsError
} from './CheckoutConsentsStyled';

const CheckoutConsents = function CheckoutConsents(_ref) {
  const { redirectUrl } = _ref;

  const _useTranslation = useTranslation();
  const _useTranslation2 = _slicedToArray(_useTranslation, 1);
  const t = _useTranslation2[0];

  const _useState = useState(null);
  const _useState2 = _slicedToArray(_useState, 2);
  const consents = _useState2[0];
  const setConsents = _useState2[1];

  const _useState3 = useState(false);
  const _useState4 = _slicedToArray(_useState3, 2);
  const processing = _useState4[0];
  const setProcessing = _useState4[1];

  const _useState5 = useState('');
  const _useState6 = _slicedToArray(_useState5, 2);
  const generalError = _useState6[0];
  const setGeneralError = _useState6[1];

  useEffect(function() {
    getCustomerConsents().then(function(resp) {
      const consentsToAccept = resp.responseData.consents.filter(function(
        consent
      ) {
        return (
          consent.newestVersion > consent.version ||
          consent.needsUpdate === true
        );
      });
      setConsents(consentsToAccept);
    });
  }, []);

  const handleClick = function handleClick(e, isConsentDisabled, clicked) {
    const updatedConsents = consents.map(function(consent) {
      if (consent.name === clicked.name) {
        return _objectSpread(
          _objectSpread({}, consent),
          {},
          {
            state: clicked.state === 'accepted' ? 'declined' : 'accepted'
          }
        );
      }

      return consent;
    });
    setConsents(updatedConsents);
  };

  const validateConsents = function validateConsents() {
    let isError = false;
    const updatedConsents = consents.map(function(consent) {
      if (consent.required && consent.state === 'declined') {
        isError = true;
        return _objectSpread(
          _objectSpread({}, consent),
          {},
          {
            error: t('This consent is required')
          }
        );
      }

      return consent;
    });
    setConsents(updatedConsents);
    return !isError;
  };

  const updateConsents = function updateConsents() {
    if (validateConsents()) {
      const payload = consents.map(function(consent) {
        return {
          name: consent.name,
          version: consent.newestVersion,
          state: consent.state
        };
      });
      setProcessing(true);
      submitConsents([], [], payload)
        .then(function() {
          setProcessing(false);
          const currentRedirection = redirectUrl.shift();
          history.push(currentRedirection, redirectUrl);
        })
        .catch(function() {
          setGeneralError(t('Something went wrong. Try again later'));
        });
    }
  };

  return /* #__PURE__ */ React.createElement(
    CheckoutConsentsStyled,
    null,
    /* #__PURE__ */ React.createElement(Header, null),
    /* #__PURE__ */ React.createElement(
      CheckoutConsentsContentStyled,
      null,
      consents
        ? /* #__PURE__ */ React.createElement(
            React.Fragment,
            null,
            /* #__PURE__ */ React.createElement(
              CheckoutConsentsTitleStyled,
              null,
              t('Terms & Conditions')
            ),
            /* #__PURE__ */ React.createElement(
              CheckoutConsentsSubTitleStyled,
              null,
              t('Please accept Terms & Conditions')
            ),
            /* #__PURE__ */ React.createElement(
              CheckoutConsentsListStyled,
              null,
              consents.map(function(consent) {
                return /* #__PURE__ */ React.createElement(
                  CheckoutConsentsCheckbox,
                  {
                    key: consent.name
                  },
                  /* #__PURE__ */ React.createElement(
                    Checkbox,
                    {
                      isMyAccount: true,
                      onClickFn: function onClickFn(e, isConsentDisabled) {
                        return handleClick(e, isConsentDisabled, consent);
                      },
                      checked: consent.state === 'accepted',
                      required: consent.required
                    },
                    t(consent.label)
                  ),
                  /* #__PURE__ */ React.createElement(
                    CheckoutConsentsError,
                    null,
                    consent.error
                  )
                );
              }),
              generalError &&
                /* #__PURE__ */ React.createElement(
                  CheckoutConsentsError,
                  {
                    center: true
                  },
                  generalError
                )
            ),
            /* #__PURE__ */ React.createElement(
              Button,
              {
                size: 'big',
                theme: 'confirm',
                onClickFn: updateConsents
              },
              processing
                ? /* #__PURE__ */ React.createElement(Loader, {
                    buttonLoader: true,
                    color: '#ffffff'
                  })
                : t('Continue')
            )
          )
        : /* #__PURE__ */ React.createElement(Loader, null)
    ),
    /* #__PURE__ */ React.createElement(Footer, {
      isCheckout: false
    })
  );
};

CheckoutConsents.defaultProps = {
  redirectUrl: []
};
export default CheckoutConsents;
