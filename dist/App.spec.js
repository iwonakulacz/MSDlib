import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.component';

it('should render without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(/* #__PURE__ */ React.createElement(App, null), div);
  ReactDOM.unmountComponentAtNode(div);
});
