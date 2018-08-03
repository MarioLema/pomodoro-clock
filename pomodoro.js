"use strict";

//COUNTERS FOR SETINTERVALS

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var counter = void 0,
    breakCounter = void 0;

//=====================CLOCK CLASS CONTAINER=========================

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      buzz: "",
      breaks: 5,
      breaksSeconds: 300,
      minutes: 25,
      minutesSeconds: 1500,
      timeDisplayed: "25:00",
      playing: false,
      session: "session",
      icon: "",
      active: false
    };
    _this.activate = _this.activate.bind(_this);
    _this.togglePlay = _this.togglePlay.bind(_this);
    _this.startPlay = _this.startPlay.bind(_this);
    _this.pausePlay = _this.pausePlay.bind(_this);
    _this.sessionDecrement = _this.sessionDecrement.bind(_this);
    _this.sessionIncrement = _this.sessionIncrement.bind(_this);
    _this.breakDecrement = _this.breakDecrement.bind(_this);
    _this.breakIncrement = _this.breakIncrement.bind(_this);
    _this.timer = _this.timer.bind(_this);
    _this.timerBreak = _this.timerBreak.bind(_this);
    _this.resetState = _this.resetState.bind(_this);
    return _this;
  }
  //  method to transform seconds to timeformat


  _createClass(Clock, [{
    key: "timeFormat",
    value: function timeFormat(num) {
      var leading = "",
          middle = ":";
      num >= 600 ? num % 60 >= 10 ? middle = ":" : middle = ":0" : num % 60 >= 10 ? leading = "0" : (leading = "0", middle = ":0");
      return "" + leading + Math.floor(num / 60) + middle + num % 60;
    }
    // timer methods to run the interval

  }, {
    key: "timer",
    value: function timer() {
      if (this.state.minutesSeconds > 0) {
        var newState = Object.assign({}, this.state);
        newState.minutesSeconds -= 1;
        newState.timeDisplayed = this.timeFormat(newState.minutesSeconds);
        this.setState(newState);
      } else {
        console.log('inished');
      }
      // if (this.state.minutesSeconds > 0) {
      //   let newState = {...this.state};
      //   newState.minutesSeconds -= 1;
      //   newState.timeDisplayed = this.timeFormat(newState.minutesSeconds)
      //   this.setState(newState);
      // } else {
      //   clearInterval(counter);
      //   //stop buzzer
      //   let newState = {...this.state};
      //   newState.minutesSeconds = newState.minutes * 60;
      //   newState.session = 'break';
      //   this.setState(newState);
      //   breakCounter = setInterval(this.timerBreak, 1000);
      // }
    }
  }, {
    key: "timerBreak",
    value: function timerBreak() {
      // if (this.state.breaksSecons > 0) {
      //   let newState = {...this.state};
      //   newState.breaksSeconds -= 1;
      //   newState.timeDisplayed = this.timeFormat(newState.breaksSeconds)
      //   this.setState(newState);
      // } else {
      //   clearInterval(breakCounter);
      //   let newState = {...this.state};
      //   newState.breaksSeconds = newState.breaks * 60;
      //   newState.session = 'session';
      //   this.setState(newState);
      //   counter = setInterval(this.timer, 1000);
      // }
    }
  }, {
    key: "startPlay",
    value: function startPlay() {
      var newState = Object.assign({}, this.state, {
        playing: true,
        icon: 'whatever to start'
      });
      this.setState(newState);
      this.state.session === 'session' ? counter = setInterval(this.timer, 1000) : breakCounter = setInterval(this.timerBreak, 1000);
    }
  }, {
    key: "pausePlay",
    value: function pausePlay() {
      var newState = Object.assign({}, this.state, {
        playing: false,
        icon: 'another icon'
      });
      this.setState(newState);
      this.state.session === 'session' ? clearInterval(counter) : clearInterval(breakCounter);
    }
    // method to control the play button

  }, {
    key: "activate",
    value: function activate() {
      if (this.state.active === false) {
        var newState = Object.assign({}, this.state);
        newState.active = true;
        newState.minutesSeconds = this.state.minutes * 60;
        newState.breaksSeconds = this.state.breaks * 60;
        this.setState(newState, this.togglePlay());
      } else {
        this.togglePlay();
      }
    }
  }, {
    key: "togglePlay",
    value: function togglePlay() {
      console.log(this.state);
      this.state.playing === false ? this.startPlay() : this.pausePlay();
    }
    //MINUTESSECONDS REFER TO NEWSTATE INSIDE NEW STATE. COULD CAUSE PROBLEMS

  }, {
    key: "sessionIncrement",
    value: function sessionIncrement() {
      if (this.state.minutes < 60) {
        var newState = Object.assign({}, this.state);
        newState.minutes += 1;
        // newState.minutesSeconds =  newState.minutes * 60;
        this.setState(newState);
      }
    }
  }, {
    key: "sessionDecrement",
    value: function sessionDecrement() {
      if (this.state.minutes > 1) {
        var newState = Object.assign({}, this.state);
        newState.minutes -= 1;
        // newState.minutesSeconds =  newState.minutes * 60;
        this.setState(newState);
      }
    }
  }, {
    key: "breakIncrement",
    value: function breakIncrement() {
      if (this.state.breaks < 60) {
        var newState = Object.assign({}, this.state);
        newState.breaks += 1;
        // newState.breaksSeconds = newState.breaks * 60;
        this.setState(newState);
      }
    }
  }, {
    key: "breakDecrement",
    value: function breakDecrement() {
      if (this.state.breaks > 1) {
        var newState = Object.assign({}, this.state);
        newState.breaks -= 1;
        // newState.breaksSeconds = newState.breaks * 60;
        this.setState(newState);
      }
    }
    // controls the reset button

  }, {
    key: "resetState",
    value: function resetState() {
      clearInterval(counter);
      clearInterval(breakCounter);
      var newState = Object.assign({}, this.state, {
        playing: false,
        active: false,
        breaks: 5,
        minutes: 25,
        minutesSeconds: 1500,
        breaksSeconds: 600,
        session: "session",
        icon: "icon HTML",
        timeDisplayed: '25:00'
      });
      //  buzz.pause();
      // buzz.currentTime = 0;
      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "pomodoro" },
        React.createElement(
          "div",
          { className: "bubble", id: "break-label" },
          "Breaks"
        ),
        React.createElement(
          "div",
          { className: "bubble", id: "session-label" },
          "Min"
        ),
        React.createElement(
          "div",
          {
            className: "bubble btn",
            id: "session-increment",
            onClick: this.sessionIncrement
          },
          "+"
        ),
        React.createElement(
          "div",
          {
            className: "bubble btn",
            id: "session-decrement",
            onClick: this.sessionDecrement
          },
          "-"
        ),
        React.createElement(
          "div",
          {
            className: "bubble btn",
            id: "break-decrement",
            onClick: this.breakDecrement
          },
          "-"
        ),
        React.createElement(
          "div",
          {
            className: "bubble btn",
            id: "break-increment",
            onClick: this.breakIncrement
          },
          "+"
        ),
        React.createElement(
          "div",
          { className: "bubble", id: "break-length" },
          this.state.breaks
        ),
        React.createElement(
          "div",
          { className: "bubble", id: "session-length" },
          this.state.minutes
        ),
        React.createElement(
          "div",
          { className: "bubble", id: "timer-label" },
          this.state.session
        ),
        React.createElement(
          "div",
          { className: "bubble", id: "time-left" },
          this.state.timeDisplayed
        ),
        React.createElement(
          "div",
          { className: "bubble btn", id: "start_stop", onClick: this.activate },
          React.createElement("i", { className: "fas fa-play" })
        ),
        React.createElement(
          "div",
          { className: "bubble btn", id: "reset", onClick: this.resetState },
          React.createElement("i", { className: "fas fa-redo" })
        ),
        React.createElement("div", { className: "background northWest", id: "back1" }),
        React.createElement("div", { className: "background east", id: "back2" }),
        React.createElement("div", { className: "background southEast", id: "back3" }),
        React.createElement("div", { className: "background southWest", id: "back4" }),
        React.createElement("div", { className: "background north", id: "back5" }),
        React.createElement("div", { className: "background west", id: "back6" }),
        React.createElement("div", { className: "background northWest", id: "back7" }),
        React.createElement("div", { className: "background east", id: "back8" }),
        React.createElement("div", { className: "background southEast", id: "back9" }),
        React.createElement("div", { className: "background south", id: "back10" }),
        React.createElement("div", { className: "background southWest", id: "back11" }),
        React.createElement("div", { className: "background south", id: "back12" }),
        React.createElement("div", { className: "background south", id: "back13" }),
        React.createElement("div", { className: "background southEast", id: "back14" }),
        React.createElement("div", { className: "background southEast", id: "back15" }),
        React.createElement("div", { className: "background northEast", id: "back16" }),
        React.createElement("div", { className: "background northWest", id: "back17" }),
        React.createElement("div", { className: "background north", id: "back18" }),
        React.createElement("div", { className: "background northWest", id: "back19" }),
        React.createElement("div", { className: "background west", id: "back20" }),
        React.createElement("div", { className: "background east", id: "back21" }),
        React.createElement("div", { className: "background northEast", id: "back22" }),
        React.createElement("div", { className: "background east", id: "back23" }),
        React.createElement("div", { className: "background north", id: "back24" }),
        React.createElement("div", { className: "background northEast", id: "back25" }),
        React.createElement("div", { className: "background north", id: "back26" })
      );
    }
  }]);

  return Clock;
}(React.Component);

var domContainer = document.querySelector("#wrapper");
ReactDOM.render(React.createElement(Clock, null), domContainer);