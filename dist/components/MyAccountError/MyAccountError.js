/* istanbul ignore file */
import React from 'react';
import Button from 'components/Button';
import { ReactComponent as serverIcon } from 'assets/images/errors/sad_server.svg';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import {
  WrapStyled,
  TitleStyled,
  SubTitleStyled,
  IconStyled
} from './MyAccountErrorStyled';

const MyAccountError = function MyAccountError(_ref) {
  const { title } = _ref;
  const { subtitle } = _ref;
  const { icon } = _ref;
  const { generalError } = _ref;
  const { withBorder } = _ref;
  const { fullHeight } = _ref;
  const { centered } = _ref;
  const { margin } = _ref;
  const { fullWidth } = _ref;
  const { t } = _ref;
  const IconComponent = generalError ? serverIcon : icon;
  return /* #__PURE__ */ React.createElement(
    WrapStyled,
    {
      withBorder,
      fullHeight,
      centered,
      margin,
      fullWidth
    },
    (icon || generalError) &&
      /* #__PURE__ */ React.createElement(
        IconStyled,
        null,
        /* #__PURE__ */ React.createElement(IconComponent, null)
      ),
    /* #__PURE__ */ React.createElement(
      TitleStyled,
      null,
      generalError ? t('Oops, something went wrong!') : title
    ),
    /* #__PURE__ */ React.createElement(
      SubTitleStyled,
      null,
      generalError ? t('Please try again in a few moments.') : subtitle
    ),
    generalError &&
      /* #__PURE__ */ React.createElement(
        Button,
        {
          margin: '20px auto auto auto',
          width: 'auto',
          onClickFn: function onClickFn() {
            return window.location.reload();
          }
        },
        t('Try again')
      )
  );
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
