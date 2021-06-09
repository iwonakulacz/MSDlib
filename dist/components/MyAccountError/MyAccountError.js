/* istanbul ignore file */
import React from 'react';
import Button from 'components/Button';
import { ReactComponent as serverIcon } from 'assets/images/errors/sad_server.svg';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { WrapStyled, TitleStyled, SubTitleStyled, IconStyled } from './MyAccountErrorStyled';

var MyAccountError = function MyAccountError(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon,
      generalError = _ref.generalError,
      withBorder = _ref.withBorder,
      fullHeight = _ref.fullHeight,
      centered = _ref.centered,
      margin = _ref.margin,
      fullWidth = _ref.fullWidth,
      t = _ref.t;
  var IconComponent = generalError ? serverIcon : icon;
  return /*#__PURE__*/React.createElement(WrapStyled, {
    withBorder: withBorder,
    fullHeight: fullHeight,
    centered: centered,
    margin: margin,
    fullWidth: fullWidth
  }, (icon || generalError) && /*#__PURE__*/React.createElement(IconStyled, null, /*#__PURE__*/React.createElement(IconComponent, null)), /*#__PURE__*/React.createElement(TitleStyled, null, generalError ? t('Oops, something went wrong!') : title), /*#__PURE__*/React.createElement(SubTitleStyled, null, generalError ? t('Please try again in a few moments.') : subtitle), generalError && /*#__PURE__*/React.createElement(Button, {
    margin: "20px auto auto auto",
    width: "auto",
    onClickFn: function onClickFn() {
      return window.location.reload();
    }
  }, t('Try again')));
};

MyAccountError.defaultProps = {
  title: '',
  subtitle: '',
  icon: '',
  generalError: false,
  withBorder: false,
  fullHeight: false,
  centered: false,
  margin: '',
  fullWidth: false,
  t: function t(k) {
    return k;
  }
};
export { MyAccountError as PureMyAccountError };
export default withTranslation()(labeling()(MyAccountError));