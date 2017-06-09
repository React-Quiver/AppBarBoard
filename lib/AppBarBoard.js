'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _apps = require('material-ui/svg-icons/navigation/apps');

var _apps2 = _interopRequireDefault(_apps);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _AppButton = require('./AppButton');

var _AppButton2 = _interopRequireDefault(_AppButton);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// material-ui


// open source components


// styles


var AppBarBoard = function (_Component) {
  _inherits(AppBarBoard, _Component);

  function AppBarBoard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppBarBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppBarBoard.__proto__ || Object.getPrototypeOf(AppBarBoard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppBarBoard, [{
    key: 'getAppButtons',
    value: function getAppButtons() {
      var apps = this.props.apps;

      var JSX = [];

      for (var k in apps) {
        if (apps.hasOwnProperty(k)) {
          (function () {
            var app = apps[k];
            JSX.push(_react2.default.createElement(
              'div',
              {
                key: k,
                onMouseDown: function onMouseDown() {
                  _reactCookie2.default.save('lastAppRequested', app.url, { path: '/' });
                  window.location.replace('https://' + app.url);
                }
              },
              _react2.default.createElement(_AppButton2.default, { backgroundColor: app.color, label: app.name })
            ));
          })();
        }
      }

      return JSX;
    }
  }, {
    key: 'openBoard',
    value: function openBoard() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'closeMyAccount',
    value: function closeMyAccount() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          homeUrl = _props.homeUrl,
          iconStyle = _props.iconStyle;
      var isOpen = this.state.isOpen;


      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: this.context.muiTheme },
        _react2.default.createElement(
          'div',
          {
            style: { margin: 12 },
            tabIndex: 1,
            onBlur: this.closeMyAccount.bind(this)
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_apps2.default, {
              style: {
                color: iconStyle && iconStyle.color ? iconStyle.color : 'white',
                cursor: 'pointer' },
              onClick: function onClick() {
                _this2.openBoard();
              }
            }),
            isOpen ? _react2.default.createElement(
              _Paper2.default,
              {
                style: _styles2.default.containerB
              },
              _react2.default.createElement(
                'div',
                {
                  style: _styles2.default.subContainer
                },
                this.getAppButtons()
              ),
              _react2.default.createElement(
                'div',
                {
                  style: _styles2.default.moreContainer
                },
                _react2.default.createElement(_FlatButton2.default, {
                  label: 'Home',
                  backgroundColor: 'white',
                  hoverColor: '#e0e0e0',
                  onMouseDown: function onMouseDown() {
                    window.location.replace('https://' + homeUrl);
                  }
                })
              )
            ) : null
          )
        )
      );
    }
  }]);

  return AppBarBoard;
}(_react.Component);

AppBarBoard.propTypes = {
  apps: _react.PropTypes.array,
  homeUrl: _react.PropTypes.string,
  iconStyle: _react.PropTypes.object
};
AppBarBoard.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired,
  router: _react2.default.PropTypes.object
};
exports.default = AppBarBoard;
module.exports = exports['default'];