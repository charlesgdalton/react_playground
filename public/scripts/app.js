"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// let tester = 0;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleButton = _this.handleButton.bind(_this);
    _this.state = {
      index: 0,
      tester: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleButton",
    value: function handleButton() {
      window.postMessage({ type: "FROM_PAGE", method: "transfer", payee: "0x0", amount: "100" }, "*");
      this.setState(function (prevState) {
        return {
          index: prevState.index + 1,
          tester: document.tester
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "React Playground"
        ),
        React.createElement(
          "p",
          null,
          "Play around, here's some sample text"
        ),
        React.createElement(
          "button",
          { onClick: this.handleButton },
          "Transfer 100 to 0x0"
        ),
        React.createElement(
          "p",
          null,
          "Index: ",
          this.state.index
        ),
        React.createElement(
          "p",
          null,
          "Hello : ",
          this.state.tester,
          " : ",
          window.tester,
          " : ",
          window.document.testVar,
          " "
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
