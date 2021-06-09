import React from 'react';
import SkeletonWrapper from 'components/SkeletonWrapper';
import {
  WrapStyled,
  DetailsStyled,
  PhotoStyled,
  NameStyled,
  MailStyled,
  TextStyled
} from './MyAccountUserInfoStyled';

const MyAccountUserInfo = function MyAccountUserInfo(_ref) {
  const { firstName } = _ref;
  const { lastName } = _ref;
  const { email } = _ref;
  const { subscription } = _ref;
  const { isDataLoaded } = _ref;
  const isNameSetted = firstName || lastName;
  return /* #__PURE__ */ React.createElement(
    WrapStyled,
    null,
    /* #__PURE__ */ React.createElement(
      SkeletonWrapper,
      {
        showChildren: isDataLoaded,
        circle: true,
        width: 80,
        height: 80
      },
      /* #__PURE__ */ React.createElement(PhotoStyled, null)
    ),
    /* #__PURE__ */ React.createElement(
      DetailsStyled,
      {
        isEmpty: !email
      },
      /* #__PURE__ */ React.createElement(
        SkeletonWrapper,
        {
          showChildren: isDataLoaded,
          height: 26
        },
        isNameSetted &&
          /* #__PURE__ */ React.createElement(
            NameStyled,
            null,
            ''.concat(firstName, ' ').concat(lastName)
          )
      ),
      /* #__PURE__ */ React.createElement(
        SkeletonWrapper,
        {
          showChildren: isDataLoaded
        },
        /* #__PURE__ */ React.createElement(
          MailStyled,
          {
            bigger: !isNameSetted
          },
          email
        )
      ),
      /* #__PURE__ */ React.createElement(
        SkeletonWrapper,
        {
          showChildren: isDataLoaded,
          height: 36,
          margin: '0px'
        },
        subscription &&
          /* #__PURE__ */ React.createElement(TextStyled, null, subscription)
      )
    )
  );
};

export default MyAccountUserInfo;
MyAccountUserInfo.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  subscription: '',
  isDataLoaded: false
};
