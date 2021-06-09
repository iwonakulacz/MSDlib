import _taggedTemplateLiteral from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral';

/* istanbul ignore file */
import { css } from 'styled-components';

function _templateObject2() {
  const data = _taggedTemplateLiteral([
    '\n    @media only screen and (min-width: ',
    'px) {\n      ',
    '\n    }\n  '
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral([
    '\n    @media only screen and (max-width: ',
    'px) {\n      ',
    '\n    }\n  '
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
export var breakPoints = {
  smallest: 480,
  small: 768,
  medium: 1024,
  avarage: 1200,
  big: 1280,
  bigger: 1440,
  largest: 1920
};
export var media = Object.keys(breakPoints).reduce(function(acc, label) {
  acc[label] = function() {
    return css(
      _templateObject(),
      breakPoints[label],
      css.apply(void 0, arguments)
    );
  };

  return acc;
}, {});
export var mediaFrom = Object.keys(breakPoints).reduce(function(acc, label) {
  acc[label] = function() {
    return css(
      _templateObject2(),
      breakPoints[label],
      css.apply(void 0, arguments)
    );
  };

  return acc;
}, {});
