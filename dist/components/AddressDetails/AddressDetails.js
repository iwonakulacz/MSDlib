import _defineProperty from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'components/Card';
import MyAccountInput from 'components/MyAccountInput';
import Loader from 'components/Loader';
import useMessage from 'hooks/useMessage';
import { updateCaptureAnswers } from 'api';
import { ButtonStyled, ButtonWrapperStyled } from 'components/MyAccountConsents/MyAccountConsentsStyled';
import { WrapStyled, RowStyled, MessageStyled } from './AddressDetailsStyled';

var AddressDetails = function AddressDetails(_ref) {
  var data = _ref.data,
      isLoading = _ref.isLoading,
      updateCaptureOption = _ref.updateCaptureOption;

  var _useTranslation = useTranslation(),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isSectionDisabled = _useState2[0],
      setIsSectionDisabled = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPending = _useState4[0],
      setIsPending = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      address = _useState6[0],
      setAddress = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      initialAddress = _useState8[0],
      setInitialAddress = _useState8[1];

  var _useMessage = useMessage(),
      _useMessage2 = _slicedToArray(_useMessage, 4),
      message = _useMessage2[0],
      type = _useMessage2[1],
      setMessage = _useMessage2[2],
      resetMessage = _useMessage2[3];

  useEffect(function () {
    if (data) {
      setAddress(data.answer);
      setInitialAddress(data.answer);
    }
  }, [data]);

  var onAddressChange = function onAddressChange(key, newValue) {
    setAddress(_objectSpread(_objectSpread({}, address), {}, _defineProperty({}, key, newValue)));
  };

  var onCancel = function onCancel() {
    setAddress(initialAddress);
    setIsSectionDisabled(true);
  };

  var onSubmit = function onSubmit() {
    setIsPending(true);
    updateCaptureAnswers(_objectSpread({}, address)).then(function () {
      updateCaptureOption({
        key: 'address',
        value: address
      });
      setMessage({
        message: t('Your address details have been changed successfully'),
        type: 'success'
      });
      setIsPending(false);
      setIsSectionDisabled(true);
    }).catch(function () {
      setMessage({
        message: t('Something went wrong. Try again later.'),
        type: 'error'
      });
      setIsPending(false);
      setIsSectionDisabled(true);
    });
  };

  return isLoading ? /*#__PURE__*/React.createElement(Loader, {
    isMyAccount: true
  }) : /*#__PURE__*/React.createElement(WrapStyled, null, address && /*#__PURE__*/React.createElement(Card, {
    withBorder: true
  }, message && /*#__PURE__*/React.createElement(MessageStyled, {
    type: type
  }, message), /*#__PURE__*/React.createElement(MyAccountInput, {
    id: "address",
    label: t('Address Line 1'),
    value: address.address || '',
    onChange: function onChange(e) {
      return onAddressChange('address', e.target.value);
    },
    disabled: isSectionDisabled
  }), /*#__PURE__*/React.createElement(MyAccountInput, {
    id: "address2",
    label: t('Address Line 2'),
    value: address.address2 || '',
    onChange: function onChange(e) {
      return onAddressChange('address2', e.target.value);
    },
    disabled: isSectionDisabled
  }), /*#__PURE__*/React.createElement(MyAccountInput, {
    id: "city",
    label: t('City'),
    value: address.city || '',
    onChange: function onChange(e) {
      return onAddressChange('city', e.target.value);
    },
    disabled: isSectionDisabled
  }), /*#__PURE__*/React.createElement(RowStyled, null, /*#__PURE__*/React.createElement(MyAccountInput, {
    id: "state",
    label: t('State'),
    value: address.state || '',
    onChange: function onChange(e) {
      return onAddressChange('state', e.target.value);
    },
    disabled: isSectionDisabled
  }), /*#__PURE__*/React.createElement(MyAccountInput, {
    id: "postCode",
    label: t('Zip/Postal Code'),
    value: address.postCode || '',
    onChange: function onChange(e) {
      return onAddressChange('postCode', e.target.value);
    },
    disabled: isSectionDisabled
  })), /*#__PURE__*/React.createElement(ButtonWrapperStyled, null, isSectionDisabled ? /*#__PURE__*/React.createElement(ButtonStyled, {
    onClickFn: function onClickFn() {
      setIsSectionDisabled(false);
      resetMessage();
    },
    width: "100%"
  }, t('Edit Address')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonStyled, {
    theme: "simple",
    onClickFn: function onClickFn() {
      return onCancel();
    }
  }, t('Cancel')), /*#__PURE__*/React.createElement(ButtonStyled, {
    onClickFn: onSubmit,
    disabled: isPending,
    type: "submit",
    theme: "confirm"
  }, isPending && /*#__PURE__*/React.createElement(Loader, {
    buttonLoader: true,
    color: "#ffffff"
  }) || t('Save'))))));
};

AddressDetails.defaultProps = {
  isLoading: false,
  data: {},
  updateCaptureOption: function updateCaptureOption() {}
};
export default AddressDetails;