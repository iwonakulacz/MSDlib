import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { getCustomerSubscriptions, getAvailableSwitches } from 'api';
import SectionHeader from 'components/SectionHeader';
import CurrentPlan from 'components/CurrentPlan';
import UpdateSubscription from 'components/UpdateSubscription/UpdateSubscription';
import SubscriptionSwitchesList from 'components/SubscriptionSwitchesList';
import SwitchPlanPopup from 'components/SwitchPlanPopup';
import { WrapStyled } from './PlanDetailsStyled';

var PlanDetails = function PlanDetails(_ref) {
  var planDetails = _ref.planDetails,
      updateList = _ref.updateList,
      innerPopup = _ref.innerPopup,
      hideInnerPopup = _ref.hideInnerPopup,
      setCurrentPlan = _ref.setCurrentPlan,
      setSwitchSettings = _ref.setSwitchSettings,
      setOfferToSwitch = _ref.setOfferToSwitch,
      showInnerPopup = _ref.showInnerPopup,
      t = _ref.t;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoadingCurrentPlan = _useState2[0],
      setIsLoadingCurrentPlan = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoadingChangePlan = _useState4[0],
      setIsLoadingChangePlan = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      isErrorCurrentPlan = _useState6[0],
      setIsErrorCurrentPlan = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      isErrorChangePlan = _useState8[0],
      setIsErrorChangePlan = _useState8[1];

  var didMount = useRef(false);

  var getAndSaveSwitchSettings = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(customerSubscriptions) {
      var result;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              result = customerSubscriptions.map(function (offer) {
                return getAvailableSwitches(offer.offerId).then(function (response) {
                  if (!response.errors.length) {
                    setSwitchSettings({
                      offerId: offer.offerId,
                      settings: response.responseData
                    });
                  } else {
                    setIsErrorChangePlan(response.errors);
                  }
                });
              });
              _context.next = 3;
              return Promise.all(result).then(function () {
                setIsLoadingChangePlan(false);
              }).catch(function (err) {
                setIsErrorChangePlan([err.message]);
                setIsLoadingChangePlan(false);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAndSaveSwitchSettings(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchSubscriptions = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsLoadingCurrentPlan(true);
              setIsLoadingChangePlan(true);
              getCustomerSubscriptions().then(function (response) {
                if (response.errors.length) {
                  setIsErrorCurrentPlan(response.errors);
                } else {
                  var customerSubscriptions = response.responseData.items;
                  setCurrentPlan(customerSubscriptions);

                  var _activeSubscriptions = customerSubscriptions.filter(function (sub) {
                    return sub.status === 'active';
                  });

                  if (_activeSubscriptions.length === 1) {
                    setOfferToSwitch(_activeSubscriptions[0]);
                  }

                  if (_activeSubscriptions.length > 0) {
                    getAndSaveSwitchSettings(customerSubscriptions);
                  }
                }

                setIsLoadingCurrentPlan(false);
              }).catch(function (err) {
                setIsErrorCurrentPlan([err.message]);
                setIsLoadingCurrentPlan(false);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchSubscriptions() {
      return _ref3.apply(this, arguments);
    };
  }();

  useEffect(function () {
    if (innerPopup.isOpen) {
      hideInnerPopup();
      updateList();
    }

    if (planDetails.currentPlan.length === 0) {
      fetchSubscriptions();
    }
  }, []);
  useEffect(function () {
    if (didMount.current) {
      fetchSubscriptions();
    } else {
      didMount.current = true;
    }
  }, [planDetails.updateList]);

  var renderPopup = function renderPopup(type) {
    switch (type) {
      case 'updateSubscription':
        return /*#__PURE__*/React.createElement(UpdateSubscription, {
          hideInnerPopup: hideInnerPopup,
          offerDetails: innerPopup.data.offerData,
          updateList: updateList,
          action: innerPopup.data.action
        });

      case 'switchPlan':
        return /*#__PURE__*/React.createElement(SwitchPlanPopup, {
          toOffer: innerPopup.data.offerData,
          fromOffer: planDetails.offerToSwitch,
          hideInnerPopup: hideInnerPopup,
          updateList: updateList
        });

      default:
        return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
  };

  var activeSubscriptions = planDetails.currentPlan.filter(function (sub) {
    return sub.status === 'active';
  });
  return /*#__PURE__*/React.createElement(WrapStyled, null, innerPopup.isOpen ? renderPopup(innerPopup.type) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeader, {
    marginTop: "0"
  }, t('Current plan')), /*#__PURE__*/React.createElement(CurrentPlan, {
    subscriptions: planDetails.currentPlan,
    errors: isErrorCurrentPlan,
    isLoading: isLoadingCurrentPlan,
    showInnerPopup: showInnerPopup,
    setOfferToSwitch: setOfferToSwitch,
    offerToSwitch: planDetails.offerToSwitch,
    updateList: updateList
  }), activeSubscriptions.length !== 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeader, {
    marginTop: "0"
  }, t('Change Plan')), /*#__PURE__*/React.createElement(SubscriptionSwitchesList, {
    switchSettings: planDetails.switchSettings[planDetails.offerToSwitch.offerId],
    showInnerPopup: showInnerPopup,
    isOfferSelected: !!planDetails.offerToSwitch.offerId,
    isLoading: isLoadingChangePlan || Object.keys(planDetails.switchSettings).length === 0,
    errors: isErrorChangePlan || []
  }))));
};

PlanDetails.defaultProps = {
  planDetails: {
    currentPlan: []
  },
  innerPopup: {},
  t: function t(k) {
    return k;
  }
};
export { PlanDetails as PurePlanDetails };
export default withTranslation()(labeling()(PlanDetails));