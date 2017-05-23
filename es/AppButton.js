var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from 'react';

// material-ui
import Avatar from 'material-ui/Avatar';

// styles
import styles from './styles';

var AppButton = function (_Component) {
  _inherits(AppButton, _Component);

  function AppButton() {
    _classCallCheck(this, AppButton);

    return _possibleConstructorReturn(this, (AppButton.__proto__ || Object.getPrototypeOf(AppButton)).apply(this, arguments));
  }

  _createClass(AppButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          backgroundColor = _props.backgroundColor;


      return React.createElement(
        'div',
        { style: styles.container },
        React.createElement(
          Avatar,
          { backgroundColor: backgroundColor, size: 50 },
          label[0]
        ),
        React.createElement('br', null),
        React.createElement(
          'div',
          { style: styles.appName },
          label
        )
      );
    }
  }]);

  return AppButton;
}(Component);

AppButton.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string
};
export default AppButton;