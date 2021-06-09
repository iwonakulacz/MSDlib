import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';
import SectionHeader from './SectionHeader';

storiesOf('Common/SectionHeader', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: 400,
          backgroundColor: 'white',
          padding: 20,
          position: 'relative'
        }
      },
      story()
    );
  })
  .add('Default', function() {
    return /* #__PURE__ */ React.createElement(
      SectionHeader,
      null,
      text('text', 'Default heading')
    );
  });
