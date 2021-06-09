import React from 'react';
import SkeletonWrapper from 'components/SkeletonWrapper';
import { WrapStyled, DetailsStyled, PhotoStyled, NameStyled, MailStyled, TextStyled } from './MyAccountUserInfoStyled';

var MyAccountUserInfo = function MyAccountUserInfo(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      email = _ref.email,
      subscription = _ref.subscription,
      isDataLoaded = _ref.isDataLoaded;
  var isNameSetted = firstName || lastName;
  return /*#__PURE__*/React.createElement(WrapStyled, null, /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded,
    circle: true,
    width: 80,
    height: 80
  }, /*#__PURE__*/React.createElement(PhotoStyled, null)), /*#__PURE__*/React.createElement(DetailsStyled, {
    isEmpty: !email
  }, /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded,
    height: 26
  }, isNameSetted && /*#__PURE__*/React.createElement(NameStyled, null, "".concat(firstName, " ").concat(lastName))), /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded
  }, /*#__PURE__*/React.createElement(MailStyled, {
    bigger: !isNameSetted
  }, email)), /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded,
    height: 36,
    margin: "0px"
  }, subscription && /*#__PURE__*/React.createElement(TextStyled, null, subscription))));
};

export default MyAccountUserInfo;
MyAccountUserInfo.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  subscription: '',
  isDataLoaded: false
};