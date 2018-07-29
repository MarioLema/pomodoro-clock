'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      buzz: '',
      breaks: 5,
      breaksSecons: 300,
      minutes: 25,
      minutesSeconds: 1500,
      timeLeft: '25:00',
      playing: false,
      session: 'session',
      icon: ''
    };
    _this.startPlay = _this.startPlay.bind(_this);
    _this.stopPlay = _this.stopPlay.bind(_this);
    _this.togglePlay = _this.togglePlay.bind(_this);
    return _this;
  }

  _createClass(Clock, [{
    key: 'timeFormat',
    value: function timeFormat(num) {
      var leading = '',
          middle = ':';
      num >= 600 ? num % 60 >= 10 ? middle = ':' : middle = ':0' : num % 60 >= 10 ? leading = '0' : (leading = '0', middle = ':0');
      return '' + leading + Math.floor(num / 60) + middle + num % 60;
    }
    //COUNTER BREAKCOUNTER AREN'T GLOBAL POSSIBLE PROBLEM

  }, {
    key: 'startPlay',
    value: function startPlay() {
      var newState = Object.assign({}, this.state),
          counter = void 0,
          breakCounter = void 0;
      newState.playing = true;
      newState.icon = 'NEWICONGOESHERE';
      thi.setState(newState);
      this.state.session === 'session' ? counter = setInterval(timer, 1000) : breakCounter = setInterval(timerBreak, 1000);
    }
  }, {
    key: 'stopPlay',
    value: function stopPlay() {
      var newState = Object.assign({}, this.state);
      newState.playing = false;
      newState.icon = 'NEWICONGOESHERE';
      thi.setState(newState);
      this.state.session === 'session' ? clearInterval(counter) : clearInterval(breakCounter);
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      this.state.playing === false ? this.startPlay() : this.stopPlay();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'pomodoro' },
        React.createElement(
          'div',
          { 'class': 'bubble', id: 'break-label' },
          'Breaks'
        ),
        React.createElement(
          'div',
          { 'class': 'bubble', id: 'session-label' },
          'Min'
        ),
        React.createElement(
          'div',
          { 'class': 'bubble btn', id: 'session-increment' },
          '+'
        ),
        React.createElement(
          'div',
          { 'class': 'bubble btn', id: 'session-decrement' },
          '-'
        ),
        React.createElement(
          'div',
          { 'class': 'bubble btn', id: 'break-decrement' },
          '-'
        ),
        React.createElement(
          'div',
          { 'class': 'bubble btn', id: 'break-increment' },
          '+'
        ),
        React.createElement(
          'div',
          { 'class': 'bubble', id: 'break-length' },
          this.state.breaks
        ),
        React.createElement(
          'div',
          { 'class': 'bubble', id: 'session-length' },
          this.state.minutes
        ),
        React.createElement(
          'div',
          { 'class': 'bubble', id: 'timer-label' },
          this.state.label
        ),
        React.createElement(
          'div',
          { 'class': 'bubble', id: 'time-left' },
          this.state.timeLeft
        ),
        React.createElement(
          'div',
          { 'class': 'bubble btn', id: 'start_stop' },
          React.createElement('i', { 'class': 'fas fa-play' })
        ),
        React.createElement(
          'div',
          { 'class': 'bubble btn', id: 'reset' },
          React.createElement('i', { 'class': 'fas fa-redo' })
        ),
        React.createElement('div', { 'class': 'background northWest', id: 'back1' }),
        React.createElement('div', { 'class': 'background east', id: 'back2' }),
        React.createElement('div', { 'class': 'background southEast', id: 'back3' }),
        React.createElement('div', { 'class': 'background southWest', id: 'back4' }),
        React.createElement('div', { 'class': 'background north', id: 'back5' }),
        React.createElement('div', { 'class': 'background west', id: 'back6' }),
        React.createElement('div', { 'class': 'background northWest', id: 'back7' }),
        React.createElement('div', { 'class': 'background east', id: 'back8' }),
        React.createElement('div', { 'class': 'background southEast', id: 'back9' }),
        React.createElement('div', { 'class': 'background south', id: 'back10' }),
        React.createElement('div', { 'class': 'background southWest', id: 'back11' }),
        React.createElement('div', { 'class': 'background south', id: 'back12' }),
        React.createElement('div', { 'class': 'background south', id: 'back13' }),
        React.createElement('div', { 'class': 'background southEast', id: 'back14' }),
        React.createElement('div', { 'class': 'background southEast', id: 'back15' }),
        React.createElement('div', { 'class': 'background northEast', id: 'back16' }),
        React.createElement('div', { 'class': 'background northWest', id: 'back17' }),
        React.createElement('div', { 'class': 'background north', id: 'back18' }),
        React.createElement('div', { 'class': 'background northWest', id: 'back19' }),
        React.createElement('div', { 'class': 'background west', id: 'back20' }),
        React.createElement('div', { 'class': 'background east', id: 'back21' }),
        React.createElement('div', { 'class': 'background northEast', id: 'back22' }),
        React.createElement('div', { 'class': 'background east', id: 'back23' }),
        React.createElement('div', { 'class': 'background north', id: 'back24' }),
        React.createElement('div', { 'class': 'background northEast', id: 'back25' }),
        React.createElement('div', { 'class': 'background north', id: 'back26' })
      );
    }
  }]);

  return Clock;
}(React.Component);

var domContainer = document.querySelector('#wrapper');
ReactDOM.render(React.createElement(Clock, null), domContainer);

//=================================================================

//<i class="fas fa-pause"></i>
$(function () {

  // //accesses the audio
  // let buzz = $('#beep')[0];
  // //will be used to set #session-length
  // let minutes = 25;
  // //will be used to set #break-length
  // let breaks = 5;
  // //will be used for the countdown as raw seconds
  // let rawTime = minutes*60;
  // //will be used for the countdown as raw seconds
  // let rawBreak = breaks*60;
  // //used to toggle play pause
  // let playing = false;
  // // global variable for the session setInterval
  // let counter;
  // //global variable for the break setInterval
  // let breakCounter;
  // //used to toggle between break and session when pausing
  // let session = 'session';
  // let iconplay = '<i class="fas fa-play"></i>';
  // let iconpause = '<i class="fas fa-pause"></i>';

  //function clockTime transforms a raw number to 00:00
  // let clockTime = (num) => {
  //   if(num >= 600){
  //         if(num % 60 >= 10 ){
  //         return  Math.floor(num/60) + ':' + num % 60;
  //         }else{
  //         return Math.floor(num/60) + ':0' + num % 60;
  //         }
  //   }else{
  //     if(num % 60 >= 10 ){
  //         return  '0' + Math.floor(num/60) + ':' + num % 60;
  //         }else{
  //         return '0' + Math.floor(num/60) + ':0' + num % 60;
  //   };
  //   }
  // };

  // display the initial values to the DOM
  // $('#session-length').html(minutes);
  // $('#break-length').html(breaks);
  // $('#time-left').html(clockTime(rawTime));
  // $('#timer-label').html(session);


  //Used in the setInterval method to set a timer on sessions
  function timer() {
    session = 'session';
    $('#timer-label').html(session);
    $('#time-left').html(clockTime(rawTime));
    if (rawTime > 0) {
      rawTime -= 1;
      $('#time-left').html(clockTime(rawTime));
    } else if (rawTime === 0) {
      //stops the interval
      clearInterval(counter);
      //buzzer doesn't work yet because of the setTime out I think
      buzz.play();
      //after running the sesssion timer sets rawBreak to breaks*60
      //otherwise it would clash with if statements
      rawBreak = breaks * 60;
      //starts the breakCounter setInterval after finishing with session counter
      breakCounter = setInterval(timerBreak, 1000);
    }
  };
  //Used in the setInterval method to set a timer on breaks
  function timerBreak() {
    session = 'break';
    $('#timer-label').html(session);
    if (rawBreak > 0) {
      $('#time-left').html(clockTime(rawBreak));
      rawBreak -= 1;
    } else if (rawBreak === 0) {
      $('#time-left').html(clockTime(rawBreak));
      clearInterval(breakCounter);
      buzz.play();
      rawTime = minutes * 60;
      counter = setInterval(timer, 1000);
    }
  }

  /*used with the #start_stop on click
  calls setInterval methods depending on the value of session that gets changed at the beginning
  of both timer and timerBreak*/
  // function startPlay(){
  //   playing = true;
  //   $('#start_stop').html(iconplay);
  //   if(session === 'session'){
  //     counter = setInterval(timer,1000);
  //   }else{
  //     breakCounter = setInterval(timerBreak,1000);
  //   }
  // };


  // //used with the #start_stop on click to clear intervals but does not change values of raw seconds so it can continue later
  // function stopPlay(){
  //   playing = false;
  //   $('#start_stop').html(iconpause);
  //   if(session === 'session'){
  //     clearInterval(counter);
  //   }else{
  //     clearInterval(breakCounter)
  //   }
  // };

  // //toggles between functions to play pause
  // $('#start_stop').click( () => {
  //   playing === false ? startPlay() : stopPlay();
  // });


  /*the four increment decrement buttons add or detract 1 if minutes is less than 60 and more than 1
  It resets rawtime and the timer displayed anytime it is clicked, even when playing. Could it be a problem here?*/
  $('#session-increment').click(function () {
    minutes < 60 ? minutes += 1 : minutes;
    rawTime = minutes * 60;
    $('#session-length').html(minutes);
    $('#time-left').html(clockTime(rawTime));
    event.preventDefault();
  });

  $('#session-decrement').click(function () {
    minutes > 1 ? minutes -= 1 : minutes;
    rawTime = minutes * 60;
    $('#session-length').html(minutes);
    $('#time-left').html(clockTime(rawTime));
    event.preventDefault();
  });

  $('#break-increment').click(function () {
    breaks < 60 ? breaks += 1 : breaks;
    rawBreak = breaks * 60;
    $('#break-length').html(breaks);
    event.preventDefault();
  });

  $('#break-decrement').click(function () {
    breaks > 1 ? breaks -= 1 : breaks;
    rawBreak = breaks * 60;
    $('#break-length').html(breaks);
    event.preventDefault();
  });

  //with reset all values are set back to their original values and the intervals cleared.
  $('#reset').click(function () {
    clearInterval(counter);
    clearInterval(breakCounter);
    playing = false;
    minutes = 25;
    breaks = 5;
    rawTime = minutes * 60;
    rawBreak = breaks * 60;
    buzz.pause();
    buzz.currentTime = 0;
    session = 'session';
    $('#break-label').addClass('turn');
    $('#session-label').addClass('turn');
    $('#timer-label').addClass('turn');
    $('#time-left').addClass('turn');

    $('#timer-label').html(session);
    $('#session-length').html(minutes);
    $('#break-length').html(breaks);
    $('#time-left').html(clockTime(rawTime));

    setTimeout(function () {
      $('#break-label').removeClass('turn');
      $('#session-label').removeClass('turn');
      $('#timer-label').removeClass('turn');
      $('#time-left').removeClass('turn');
    }, 2000);
    event.preventDefault();
  });
});