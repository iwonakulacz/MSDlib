import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import jwtDecode from 'jwt-decode';
import { getData, setData, removeData } from 'util/appConfigHelper';
import { getCaptureStatus, getCustomerConsents } from 'api';
import history from '../history';

const Auth = /* #__PURE__ */ (function() {
  function Auth() {
    _classCallCheck(this, Auth);

    this.isAuthenticated = false;
    this.myAccount = {
      mainPage: '/my-account/plan-details',
      loginPage: '/my-account/login'
    };
    this.checkout = {
      mainPage: '/offer',
      loginPage: '/login'
    };
    this.capturePage = '/capture';
    this.consentsPage = '/consents';
  }

  _createClass(Auth, [
    {
      key: 'login',
      value: function login() {
        const _this = this;

        const isMyAccount =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : false;
        const isRegister =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : false;
        const email = arguments.length > 2 ? arguments[2] : undefined;
        const jwt = arguments.length > 3 ? arguments[3] : undefined;
        const cb =
          arguments.length > 4 && arguments[4] !== undefined
            ? arguments[4]
            : function() {};
        const args =
          arguments.length > 5 && arguments[5] !== undefined
            ? arguments[5]
            : [];
        this.isAuthenticated = true;
        setData('CLEENG_AUTH_TOKEN', jwt);
        setData('CLEENG_CUSTOMER_EMAIL', email);
        cb.apply(this, args);
        const redirectUrl = isMyAccount
          ? this.myAccount.mainPage
          : this.checkout.mainPage;
        let shouldConsentsBeDisplayed = false;
        let shouldCaptureBeDisplayed = false;
        let data = {};
        const consentsResponse = getCustomerConsents().then(function(resp) {
          const { consents } = resp.responseData;
          shouldConsentsBeDisplayed = isRegister
            ? false
            : consents.some(function(consent) {
                return (
                  consent.newestVersion > consent.version ||
                  consent.needsUpdate === true
                );
              });
        });
        const captureResponse = getCaptureStatus().then(function(resp) {
          if (resp.responseData.shouldCaptureBeDisplayed === true) {
            shouldCaptureBeDisplayed = true;
            data = _objectSpread(
              _objectSpread({}, data),
              {},
              {
                settings: resp.responseData.settings
              }
            );
          }
        });
        Promise.allSettled([consentsResponse, captureResponse]).then(
          function() {
            data = _objectSpread(
              _objectSpread({}, data),
              {},
              {
                redirectUrl: [
                  shouldCaptureBeDisplayed ? _this.capturePage : null,
                  shouldConsentsBeDisplayed ? _this.consentsPage : null,
                  redirectUrl
                ].filter(Boolean)
              }
            );
            const currentRedirection = data.redirectUrl.shift();
            history.push(currentRedirection, data);
          }
        );
      }
    },
    {
      key: 'logout',
      value: function logout() {
        const isMyAccount =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : false;
        const queryParam =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : '';
        this.isAuthenticated = false;
        removeData('CLEENG_AUTH_TOKEN');
        removeData('CLEENG_ORDER_ID');
        removeData('CLEENG_PP_SUCCESS');
        removeData('CLEENG_PP_CANCEL');
        removeData('CLEENG_PP_ERROR');
        history.push(
          isMyAccount
            ? this.myAccount.loginPage + queryParam
            : this.checkout.loginPage
        );
      }
    },
    {
      key: 'isLogged',
      value: function isLogged() {
        const jwt = getData('CLEENG_AUTH_TOKEN');

        if (!jwt) {
          this.isAuthenticated = false;
          return this.isAuthenticated;
        }

        const decoded = jwtDecode(jwt);
        const now = Date.now() / 1000;
        const isExpired = now > decoded.exp;

        if (isExpired) {
          this.logout();
        } else {
          this.isAuthenticated = true;
        }

        return this.isAuthenticated;
      }
    }
  ]);

  return Auth;
})();

export default new Auth();
