"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MovieCard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieCard = exports.MovieCard = function (_React$Component) {
    _inherits(MovieCard, _React$Component);

    function MovieCard() {
        _classCallCheck(this, MovieCard);

        return _possibleConstructorReturn(this, (MovieCard.__proto__ || Object.getPrototypeOf(MovieCard)).apply(this, arguments));
    }

    _createClass(MovieCard, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                movie = _props.movie,
                onMovieClick = _props.onMovieClick;

            return _react2.default.createElement(
                "div",
                { className: "movie-card", onClick: function onClick() {
                        onMovieClick(movie);
                    } },
                " ",
                movie.Title,
                " "
            );
        }
    }]);

    return MovieCard;
}(_react2.default.Component);
