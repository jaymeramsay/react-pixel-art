'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PixelArtMaker = function (_React$Component) {
    _inherits(PixelArtMaker, _React$Component);

    function PixelArtMaker(props) {
        _classCallCheck(this, PixelArtMaker);

        var _this = _possibleConstructorReturn(this, (PixelArtMaker.__proto__ || Object.getPrototypeOf(PixelArtMaker)).call(this, props));

        _this.state = {
            pixels: props.pixels
        };
        return _this;
    }

    _createClass(PixelArtMaker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello'
                ),
                React.createElement(PixelBoard, {
                    pixels: this.state.pixels
                }),
                React.createElement(Toolbar, null)
            );
        }
    }]);

    return PixelArtMaker;
}(React.Component);

PixelArtMaker.defaultProps = {
    colors: [1, 2, 3],
    pixels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180]
};

var PixelBoard = function PixelBoard(props) {
    console.log(props);
    return React.createElement(
        'div',
        null,
        'This is my pixel board',
        props.pixels.map(function (pixel) {
            return React.createElement(Pixel, {
                key: pixel
            });
        })
    );
};

var Pixel = function (_React$Component2) {
    _inherits(Pixel, _React$Component2);

    function Pixel() {
        _classCallCheck(this, Pixel);

        return _possibleConstructorReturn(this, (Pixel.__proto__ || Object.getPrototypeOf(Pixel)).apply(this, arguments));
    }

    _createClass(Pixel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    'p'
                )
            );
        }
    }]);

    return Pixel;
}(React.Component);

var Toolbar = function (_React$Component3) {
    _inherits(Toolbar, _React$Component3);

    function Toolbar() {
        _classCallCheck(this, Toolbar);

        return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
    }

    _createClass(Toolbar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Toolbar'
                )
            );
        }
    }]);

    return Toolbar;
}(React.Component);

ReactDOM.render(React.createElement(PixelArtMaker, null), document.getElementById('app'));
