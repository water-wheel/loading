'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

require('./index.scss');

var _jsxFileName = 'src/index.js',
    _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by David Feng<sublime3@163.com>.
                                                                                                                                                                                                                              * ComponentName Loading
                                                                                                                                                                                                                              * Desc loading 菊花
                                                                                                                                                                                                                              * GroupName flash-component
                                                                                                                                                                                                                              */


var propTypes = {
    open: _propTypes.default.bool.isRequired
};

var defaultProps = {
    open: false
};

var Loading = function Loading(_ref) {
    var open = _ref.open,
        others = _objectWithoutProperties(_ref, ['open']);

    var loadingShowClass = (0, _classnames.default)({
        "loading-panel": true,
        "hidden": !open
    });

    return _react.default.createElement(
        'div',
        _defineProperty({ className: loadingShowClass, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
            },
            __self: _this
        }, '__self', _this),
        _react.default.createElement('div', _defineProperty({ className: 'loading-icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
            },
            __self: _this
        }, '__self', _this))
    );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

var _default = Loading;
exports.default = _default;
module.exports = exports['default'];