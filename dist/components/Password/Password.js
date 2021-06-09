import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import Card from 'components/Card';
import Button from 'components/Button';
import { WrapStyled, InnerWrapperStyled, OldPasswordStyled } from './PasswordStyled';

var Password = function Password(_ref) {
  var showInnerPopup = _ref.showInnerPopup,
      t = _ref.t;
  return /*#__PURE__*/React.createElement(WrapStyled, null, /*#__PURE__*/React.createElement(Card, {
    withBorder: true
  }, /*#__PURE__*/React.createElement(InnerWrapperStyled, null, /*#__PURE__*/React.createElement(OldPasswordStyled, null, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"), /*#__PURE__*/React.createElement(Button, {
    width: "auto",
    onClickFn: function onClickFn() {
      return showInnerPopup({
        type: 'editPassword'
      });
    }
  }, t('Edit Password')))));
};

Password.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { Password as PurePassword };
export default withTranslation()(labeling()(Password));