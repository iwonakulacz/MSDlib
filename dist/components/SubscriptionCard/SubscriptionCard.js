import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import SubscriptionIcon from 'components/SubscriptionIcon';
import Price from 'components/Price';
import { getData } from 'util/appConfigHelper';
import { ReactComponent as BlockedIcon } from 'assets/images/blocked.svg';
import SkeletonWrapper from 'components/SkeletonWrapper';
import { WrapperStyled, InnerWrapper, TitleStyled, DescriptionStyled, PriceWrapperStyled, TrialBadgeStyled, SubBoxStyled, BoxTextStyled } from './SubscriptionCardStyled';

var SubscriptionCard = function SubscriptionCard(_ref) {
  var period = _ref.period,
      title = _ref.title,
      description = _ref.description,
      currency = _ref.currency,
      price = _ref.price,
      isTrialAvailable = _ref.isTrialAvailable,
      showInfoBox = _ref.showInfoBox,
      isSubscriptionOffer = _ref.isSubscriptionOffer,
      isDataLoaded = _ref.isDataLoaded,
      t = _ref.t;
  var isSubscription = getData('CLEENG_OFFER_TYPE') === 'S' || isSubscriptionOffer;
  var mapCode = {
    TO_OFFER_COUNTRY_NOT_ALLOWED: {
      text: t("This plan is <strong>not currently available</strong> in your country or region"),
      icon: BlockedIcon
    },
    ALREADY_HAS_ACCESS: {
      text: t('It looks like you already have access to this offer'),
      icon: BlockedIcon
    },
    TO_FREE_OFFER_NOT_ALLOWED: {
      text: t('Switching from a paid to a free offer is not possible'),
      icon: BlockedIcon
    },
    SUBSCRIPTION_WITH_COUPON_NOT_ALLOWED: {
      text: t('You can`t upgrade your subscription if coupon was applied.'),
      icon: BlockedIcon
    }
  };
  var IconComponent = showInfoBox && mapCode[showInfoBox].icon ? mapCode[showInfoBox].icon : React.Fragment;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WrapperStyled, null, /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded,
    width: 50,
    height: 50
  }, /*#__PURE__*/React.createElement(SubscriptionIcon, {
    period: period
  })), /*#__PURE__*/React.createElement(InnerWrapper, null, /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded,
    width: 200,
    margin: "0 0 10px 10px"
  }, /*#__PURE__*/React.createElement(TitleStyled, null, title)), /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded,
    width: 300,
    margin: "0 0 10px 10px"
  }, /*#__PURE__*/React.createElement(DescriptionStyled, {
    dangerouslySetInnerHTML: {
      __html: description
    }
  }))), /*#__PURE__*/React.createElement(PriceWrapperStyled, null, /*#__PURE__*/React.createElement(SkeletonWrapper, {
    showChildren: isDataLoaded,
    width: 80,
    height: 30
  }, isTrialAvailable && /*#__PURE__*/React.createElement(TrialBadgeStyled, null, t('trial period')), /*#__PURE__*/React.createElement(Price, {
    currency: currency,
    price: price,
    period: isSubscription ? period : null
  })))), showInfoBox ? /*#__PURE__*/React.createElement(SubBoxStyled, null, /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement(BoxTextStyled, {
    dangerouslySetInnerHTML: {
      __html: mapCode[showInfoBox].text
    }
  })) : '');
};

SubscriptionCard.defaultProps = {
  period: '',
  title: '',
  description: '',
  currency: '',
  price: null,
  isTrialAvailable: false,
  showInfoBox: null,
  isSubscriptionOffer: false,
  isDataLoaded: true,
  t: function t(k) {
    return k;
  }
};
export { SubscriptionCard as PureSubscriptionCard };
export default withTranslation()(labeling()(SubscriptionCard));