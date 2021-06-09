import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import Loader from './Loader';

storiesOf('Common/Loader', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: 200,
          backgroundColor: 'white',
          padding: 20
        }
      },
      story()
    );
  })
  .add('Default loader', function() {
    return /* #__PURE__ */ React.createElement(Loader, null);
  })
  .add('Button loader', function() {
    return /* #__PURE__ */ React.createElement(Loader, {
      buttonLoader: true
    });
  });
