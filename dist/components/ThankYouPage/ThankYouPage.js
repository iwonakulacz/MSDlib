import React from 'react';
import { withTranslation } from 'react-i18next';
import Header from 'components/Header';
import Logout from 'components/Logout';
import Footer from 'components/Footer';
import labeling from 'containers/labeling';
import checkmarkIcon from 'assets/images/checkmark.svg';
import {
  ThankYouPageStyled,
  TitleStyled,
  MessageStyled,
  LinkStyled,
  IconStyled
} from './ThankYouPageStyled';

const ThankYouPage = function ThankYouPage(_ref) {
  const { t } = _ref;
  return /* #__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* #__PURE__ */ React.createElement(
      Header,
      null,
      /* #__PURE__ */ React.createElement(Logout, null)
    ),
    /* #__PURE__ */ React.createElement(
      ThankYouPageStyled,
      null,
      /* #__PURE__ */ React.createElement(IconStyled, {
        src: checkmarkIcon,
        alt: 'checkmark icon'
      }),
      /* #__PURE__ */ React.createElement(TitleStyled, null, t('Thank You!')),
      /* #__PURE__ */ React.createElement(
        MessageStyled,
        null,
        /* #__PURE__ */ React.createElement(
          'strong',
          null,
          t('Your purchase has been successfully completed.')
        )
      ),
      /* #__PURE__ */ React.createElement(
        MessageStyled,
        null,
        t(
          'We hope you love it. If you need help from us with your account, you can always find it'
        ),
        /* #__PURE__ */ React.createElement(
          LinkStyled,
          {
            href: 'https://www.cleeng.com',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          t('here'),
          '.'
        )
      )
    ),
    /* #__PURE__ */ React.createElement(Footer, null)
  );
};

/* istanbul ignore next */
ThankYouPage.defaultProps = {
  t: function t(k) {
    return k;
  }
};
export { ThankYouPage as PureThankYouPage };
export default withTranslation()(labeling()(ThankYouPage));
