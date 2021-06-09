/* istanbul ignore file */
import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { isHosted } from 'util/layoutHelper';
import 'i18NextInit';
import RedirectWithQuery from 'components/RedirectWithQuery';
import Loader from 'components/Loader';
import PrivateRoute from 'services/privateRoute';
import PublicRoute from 'services/publicRoute';
import Capture from 'components/Capture/Capture';
import CheckoutConsents from 'components/CheckoutConsents';
import history from '../../history';
import OfferContainer from '../OfferContainer';
import { AppStyled, AppContentStyled } from './AppStyled';
var Register = React.lazy(function () {
  return import('components/RegisterPage/Register');
});
var Login = React.lazy(function () {
  return import('components/LoginPage/Login');
});
var PasswordReset = React.lazy(function () {
  return import('components/PasswordReset');
});
var PasswordResetSuccess = React.lazy(function () {
  return import('components/PasswordResetSuccess');
});
var ThankYouPage = React.lazy(function () {
  return import('components/ThankYouPage/ThankYouPage');
});
var ErrorPage = React.lazy(function () {
  return import('components/ErrorPage');
});
var MyAccount = React.lazy(function () {
  return import('../MyAccount/MyAccount.container');
});

var App = function App() {
  var path = history.location.hash.slice(1);

  if (path) {
    history.replace(path);
  }

  var isAppHosted = isHosted();
  return /*#__PURE__*/React.createElement(AppStyled, {
    hosted: isAppHosted
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(Loader, {
      centered: true
    })
  }, /*#__PURE__*/React.createElement(Router, {
    history: history
  }, /*#__PURE__*/React.createElement(AppContentStyled, {
    hosted: isAppHosted
  }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(PublicRoute, {
    path: "/",
    exact: true,
    component: RedirectWithQuery
  }), /*#__PURE__*/React.createElement(PublicRoute, {
    path: "/login",
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(Login, {
        urlProps: urlProps
      });
    }
  }), /*#__PURE__*/React.createElement(PublicRoute, {
    path: "/my-account/login",
    isMyAccount: true,
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(Login, {
        urlProps: urlProps,
        isMyAccount: true
      });
    }
  }), /*#__PURE__*/React.createElement(PublicRoute, {
    path: "/register",
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(Register, {
        urlProps: urlProps
      });
    }
  }), /*#__PURE__*/React.createElement(PublicRoute, {
    path: "/reset-password/",
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(PasswordReset, {
        onSuccess: function onSuccess(value) {
          return history.push("/password-reset-success/".concat(encodeURIComponent(value)));
        },
        urlProps: urlProps
      });
    }
  }), /*#__PURE__*/React.createElement(PublicRoute, {
    path: "/password-reset-success/:email",
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(PasswordResetSuccess, {
        email: decodeURIComponent(urlProps.match.params.email)
      });
    }
  }), /*#__PURE__*/React.createElement(PrivateRoute, {
    path: "/capture",
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(Capture, {
        urlProps: urlProps,
        settings: urlProps.location.state.settings,
        redirectUrl: urlProps.location.state.redirectUrl
      });
    }
  }), /*#__PURE__*/React.createElement(PrivateRoute, {
    path: "/consents",
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(CheckoutConsents, {
        urlProps: urlProps,
        redirectUrl: urlProps.location.state.redirectUrl
      });
    }
  }), /*#__PURE__*/React.createElement(PrivateRoute, {
    path: "/offer",
    component: function component(urlProps) {
      return /*#__PURE__*/React.createElement(OfferContainer, {
        onPaymentComplete: function onPaymentComplete() {
          return history.push('/thankyou');
        },
        urlProps: urlProps
      });
    }
  }), /*#__PURE__*/React.createElement(PrivateRoute, {
    path: "/thankyou",
    component: function component() {
      return /*#__PURE__*/React.createElement(ThankYouPage, null);
    }
  }), /*#__PURE__*/React.createElement(PrivateRoute, {
    isMyAccount: true,
    path: "/my-account",
    component: function component(_ref) {
      var match = _ref.match;
      return /*#__PURE__*/React.createElement(MyAccount, {
        routeMatch: match
      });
    }
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    render: function render() {
      return /*#__PURE__*/React.createElement(ErrorPage, {
        type: "generalError"
      });
    }
  }))))));
};

export default App;