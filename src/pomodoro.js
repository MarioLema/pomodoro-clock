"use strict";

//COUNTERS FOR SETINTERVALS
let counter, breakCounter;

//=====================CLOCK CLASS CONTAINER=========================
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buzz: "",
      breaks: 5,
      breaksSeconds: 300,
      minutes: 25,
      minutesSeconds: 1500,
      timeDisplayed: "25:00",
      playing: false,
      session: "session",
      icon: ""
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.startPlay = this.startPlay.bind(this);
    this.pausePlay = this.pausePlay.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.timer = this.timer.bind(this);
    this.timerBreak = this.timerBreak.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  //  method to transform seconds to timeformat
  timeFormat(num) {
    let leading = "",
      middle = ":";
    num >= 600
      ? num % 60 >= 10
        ? (middle = ":")
        : (middle = ":0")
      : num % 60 >= 10
        ? (leading = "0")
        : ((leading = "0"), (middle = ":0"));
    return `${leading}${Math.floor(num / 60)}${middle}${num % 60}`;
  }
  // timer methods to run the interval
  timer() {
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

  timerBreak() {
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
  startPlay(){
    let newState = {...this.state,
      playing: true,
      icon: 'whatever to start'
    };
    this.setState(newState);
    this.state.session === 'session' ? counter = setInterval(this.timer,1000) : breakCounter = setInterval(this.timerBreak,1000);
  }
  pausePlay(){
    let newState = {...this.state,
      playing: false,
      icon: 'another icon'  
    };
    this.setState(newState);
    this.state.session === 'session' ? clearInterval(counter) :  clearInterval(breakCounter);
  }
  // method to control the play button
  togglePlay() {
    this.state.playing === false ? this.startPlay() : this.pausePlay();
  }
  //MINUTESSECONDS REFER TO NEWSTATE INSIDE NEW STATE. COULD CAUSE PROBLEMS
  sessionIncrement() {
    if (this.state.minutes < 60 && this.state.playing === false) {
      let newState = {
        ...this.state,
        minutes: (this.state.minutes += 1),
        minutesSeconds: this.minutes * 60
      };
      this.setState(newState);
    }
  }

  sessionDecrement() {
    if (this.state.minutes > 1) {
      let newState = {
        ...this.state,
        minutes: (this.state.minutes -= 1),
        minutesSeconds: this.minutes * 60
      };
      this.setState(newState);
    }
  }

  breakIncrement() {
    if (this.state.breaks < 60) {
      let newState = {
        ...this.state,
        breaks: (this.state.breaks += 1),
        breaksSeconds: this.breaks * 60
      };
      this.setState(newState);
    }
  }

  breakDecrement() {
    if (this.state.breaks > 1) {
      let newState = {
        ...this.state,
        breaks: (this.state.breaks -= 1),
        breaksSeconds: this.breaks * 60
      };
      this.setState(newState);
    }
  }
  // controls the reset button
  resetState() {
    clearInterval(counter);
    clearInterval(breakCounter);
    let newState = {
      ...this.state,
      playing: false,
      breaks: 5,
      minutes: 25,
      minutesSeconds: 1500,
      breaksSeconds: 600,
      session: "session",
      icon: "icon HTML",
      timeDisplayed: '25:00'
    };
    //  buzz.pause();
    // buzz.currentTime = 0;
    this.setState(newState);
  }

  render() {
    return (
      <div id="pomodoro">
        <div className="bubble" id="break-label">
          Breaks
        </div>
        <div className="bubble" id="session-label">
          Min
        </div>
        <div
          className="bubble btn"
          id="session-increment"
          onClick={this.sessionIncrement}
        >
          +
        </div>
        <div
          className="bubble btn"
          id="session-decrement"
          onClick={this.sessionDecrement}
        >
          -
        </div>
        <div
          className="bubble btn"
          id="break-decrement"
          onClick={this.breakDecrement}
        >
          -
        </div>
        <div
          className="bubble btn"
          id="break-increment"
          onClick={this.breakIncrement}
        >
          +
        </div>
        <div className="bubble" id="break-length">
          {this.state.breaks}
        </div>
        <div className="bubble" id="session-length">
          {this.state.minutes}
        </div>
        <div className="bubble" id="timer-label">
          {this.state.session}
        </div>
        <div className="bubble" id="time-left">
          {this.state.timeDisplayed}
        </div>
        <div className="bubble btn" id="start_stop" onClick={this.togglePlay}>
          <i className="fas fa-play" />
        </div>
        <div className="bubble btn" id="reset" onClick={this.resetState}>
          <i className="fas fa-redo" />
        </div>

        <div className="background northWest" id="back1" />
        <div className="background east" id="back2" />
        <div className="background southEast" id="back3" />
        <div className="background southWest" id="back4" />
        <div className="background north" id="back5" />
        <div className="background west" id="back6" />
        <div className="background northWest" id="back7" />
        <div className="background east" id="back8" />
        <div className="background southEast" id="back9" />
        <div className="background south" id="back10" />
        <div className="background southWest" id="back11" />
        <div className="background south" id="back12" />
        <div className="background south" id="back13" />
        <div className="background southEast" id="back14" />
        <div className="background southEast" id="back15" />
        <div className="background northEast" id="back16" />
        <div className="background northWest" id="back17" />
        <div className="background north" id="back18" />
        <div className="background northWest" id="back19" />
        <div className="background west" id="back20" />
        <div className="background east" id="back21" />
        <div className="background northEast" id="back22" />
        <div className="background east" id="back23" />
        <div className="background north" id="back24" />
        <div className="background northEast" id="back25" />
        <div className="background north" id="back26" />
      </div>
    );
  }
}

let domContainer = document.querySelector("#wrapper");
ReactDOM.render(<Clock />, domContainer);





