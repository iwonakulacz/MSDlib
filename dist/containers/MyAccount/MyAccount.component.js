import _toConsumableArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";

/* eslint-disable react/no-unused-state */

/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from 'services/privateRoute';
import MyAccountMenu from 'components/MyAccountMenu';
import MyAccountUserInfo from 'components/MyAccountUserInfo';
import MyAccountContent from 'components/MyAccountContent';
import PlanDetails from 'containers/PlanDetails';
import PaymentInfo from 'containers/PaymentInfo';
import UpdateProfile from 'containers/UpdateProfile';
import Popup from 'components/Popup/Popup';
import { getCustomerSubscriptions, getCustomer, getCustomerConsents } from 'api';
import Footer from 'components/Footer';
import { isHosted } from 'util/appConfigHelper';
import MyAccountError from 'components/MyAccountError/MyAccountError';
import { WrapperStyled, HeaderStyled } from './MyAccountStyled';
var POPUP_TYPE = {
  notCheckedTerms: 'notCheckedTerms',
  complexUpdate: 'complexUpdate',
  termsUpdateRequired: 'termsUpdateRequired',
  consentsUpdateRequired: 'consentsUpdateRequired'
};

var MyAccount = /*#__PURE__*/function (_Component) {
  _inherits(MyAccount, _Component);

  var _super = _createSuper(MyAccount);

  function MyAccount(props) {
    var _this;

    _classCallCheck(this, MyAccount);

    _this = _super.call(this, props);
    _this.state = {
      errors: []
    };
    return _this;
  }

  _createClass(MyAccount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          planDetails = _this$props.planDetails,
          userProfile = _this$props.userProfile,
          setCurrentPlan = _this$props.setCurrentPlan,
          setCurrentUser = _this$props.setCurrentUser,
          setConsents = _this$props.setConsents,
          setConsentsError = _this$props.setConsentsError;
      document.title = 'My Account';

      if (userProfile.consents.length === 0) {
        getCustomerConsents().then(function (response) {
          if (!response.errors.length) {
            setConsents(response.responseData.consents);

            _this2.checkTerms();
          } else {
            setConsentsError(response.errors[0]);
          }
        }).catch(function (err) {
          return setConsentsError(err.message);
        });
      }

      if (planDetails.currentPlan.length === 0) {
        getCustomerSubscriptions().then(function (response) {
          if (response.errors.length) {
            _this2.setState({
              errors: response.errors
            });
          } else {
            setCurrentPlan(response.responseData.items);
          }
        });
      }

      if (!userProfile.user) {
        getCustomer().then(function (response) {
          if (response.errors.length) {
            _this2.setState({
              errors: response.errors
            });
          } else {
            setCurrentUser(response.responseData);
          }
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var consents = this.props.userProfile.consents;

      if (prevProps.userProfile.consents !== consents) {
        this.checkTerms();
      }
    }
  }, {
    key: "checkTerms",
    value: function checkTerms() {
      var consents = this.props.userProfile.consents;

      if (consents.length !== 0) {
        // Not checked required terms
        var notCheckedTerms = consents.filter(function (item) {
          return item.required && item.state === 'declined' && item.version === item.newestVersion;
        });

        if (notCheckedTerms.length) {
          this.renderPopup(true, POPUP_TYPE.notCheckedTerms, notCheckedTerms);
          return;
        } // New version of terms and consents


        var consentsUpdateRequired = consents.filter(function (item) {
          return !item.required && item.needsUpdate === true;
        });
        var termsUpdateRequired = consents.filter(function (item) {
          return item.required && item.version !== item.newestVersion;
        });

        if (termsUpdateRequired.length && consentsUpdateRequired.length) {
          this.renderPopup(true, POPUP_TYPE.complexUpdate, [].concat(_toConsumableArray(termsUpdateRequired), _toConsumableArray(consentsUpdateRequired)));
        } else if (termsUpdateRequired.length) {
          this.renderPopup(true, POPUP_TYPE.termsUpdateRequired, termsUpdateRequired);
        } else if (consentsUpdateRequired.length) {
          this.renderPopup(true, POPUP_TYPE.consentsUpdateRequired, consentsUpdateRequired);
        } else {
          // hide popup after submitting
          this.renderPopup(false);
        }
      }
    }
  }, {
    key: "renderPopup",
    value: function renderPopup(isOpen) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var consents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var _this$props2 = this.props,
          showPopup = _this$props2.showPopup,
          hidePopup = _this$props2.hidePopup;

      if (isOpen) {
        showPopup({
          type: type,
          consents: consents
        });
      } else hidePopup();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          routeMatch = _this$props3.routeMatch,
          currentPlan = _this$props3.planDetails.currentPlan,
          _this$props3$userProf = _this$props3.userProfile,
          user = _this$props3$userProf.user,
          consentsError = _this$props3$userProf.consentsError,
          setConsents = _this$props3.setConsents,
          _this$props3$popup = _this$props3.popup,
          isPopupShown = _this$props3$popup.isPopupShown,
          popupType = _this$props3$popup.popupType,
          consents = _this$props3$popup.consents,
          hidePopup = _this$props3.hidePopup;
      var path = routeMatch.path;
      var firstPageUrl = "".concat(path, "/plan-details");
      return /*#__PURE__*/React.createElement(React.Fragment, null, consentsError ? /*#__PURE__*/React.createElement(MyAccountError, {
        generalError: true,
        fullHeight: true
      }) : isPopupShown ? /*#__PURE__*/React.createElement(Popup, {
        setConsents: setConsents,
        popupType: popupType,
        consents: consents,
        customerEmail: user ? user.email : '',
        hidePopup: hidePopup
      }) : /*#__PURE__*/React.createElement(WrapperStyled, {
        hosted: isHosted()
      }, /*#__PURE__*/React.createElement(HeaderStyled, null, /*#__PURE__*/React.createElement(MyAccountUserInfo, {
        firstName: user ? user.firstName : '',
        lastName: user ? user.lastName : '',
        email: user ? user.email : '',
        subscription: currentPlan[0] ? currentPlan[0].offerTitle : '',
        isDataLoaded: !!user && !!currentPlan
      }), /*#__PURE__*/React.createElement(MyAccountMenu, {
        routeMatch: routeMatch
      }), /*#__PURE__*/React.createElement(Footer, {
        isCheckout: false,
        isTransparent: true
      })), /*#__PURE__*/React.createElement(MyAccountContent, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(PrivateRoute, {
        isMyAccount: true,
        exact: true,
        path: path,
        component: function component() {
          return /*#__PURE__*/React.createElement(Redirect, {
            to: firstPageUrl
          });
        }
      }), /*#__PURE__*/React.createElement(PrivateRoute, {
        isMyAccount: true,
        path: "".concat(path, "/plan-details"),
        component: PlanDetails
      }), /*#__PURE__*/React.createElement(PrivateRoute, {
        isMyAccount: true,
        path: "".concat(path, "/payment-info"),
        component: PaymentInfo
      }), /*#__PURE__*/React.createElement(PrivateRoute, {
        isMyAccount: true,
        path: "".concat(path, "/update-profile"),
        component: UpdateProfile
      })))));
    }
  }]);

  return MyAccount;
}(Component);

export default MyAccount;
MyAccount.defaultProps = {
  routeMatch: {},
  userProfile: {
    user: null
  },
  planDetails: {
    currentPlan: []
  },
  popup: {
    isPopupShown: false
  }
};