'use strict';


//COUNTERS FOR SETINTERVALS
let counter, breakCounter;

//=====================CLOCK CLASS CONTAINER=========================
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buzz: '',
      breaks: 5,
      breaksSeconds: 300,
      minutes: 25,
      minutesSeconds: 1500,
      timeLeft: '25:00',
      playing: false,
      session: 'session',
      icon: '',
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.timer = this.timer.bind(this);
    this.resetState = this.resetState.bind(this);
  }
//  method to transform seconds to timeformat
  timeFormat(num){
    let leading = '',
        middle = ':';
    num >= 600 ?
            num % 60 >= 10 ? middle = ':' : middle = ':0' 
            :
            num % 60 >= 10 ? leading = '0' : (leading = '0', middle = ':0' );
    return `${leading}${Math.floor(num/60)}${middle}${num % 60}`
  }
// timer methods to run the interval 
  timer(){
    if(this.state.minutesSeconds > 0){
      let newState = {...this.state, 
        minutesSeconds: this.state.minutesSeconds -= 1,
        session: 'session'
      };
      this.setState(newState);
    }
    else{
        clearInterval(counter)
        //stop buzzer
        let newState = {...this.state,
        minutesSeconds: this.state.minutes*60
        };
        this.setState(newState);
        breakCounter = setInterval(timerBreak,1000);
    }
  }
  timerBreak(){
    if(this.state.breaksSecons > 0){
      let newState = {...this.state,
      breaksSeconds:this.state.breaksSeconds -= 1
      };
      this.setState(newState);
    }
    else{
      clearInterval(breakCounter)
      let newState = {...this.state,
      //stop buzzer
      breaksSeconds: this.state.breaks*60
      };
      this.setState(newState);
      counter = setInterval(timer,1000);
    }
  }
// method to control the play button
  togglePlay(){
    if(this.state.playing === false){
      let newState = {...this.state,
        playing: true,
        icon: 'NEWICONGOESHERE'
        };
        this.setState(newState);
        this.state.session === 'session' ?  counter = setInterval(this.timer, 1000) :  breakCounter = setInterval(this.timerBreak, 1000);
    }
    else{
      let newState = {...this.state,
        playing: false,
        icon: 'NEWICONGOESHERE'
      };
  
      this.setState(newState);
      this.state.session === 'session' ?  clearInterval(counter) : clearInterval(breakCounter);
    }
  }
//MINUTESSECONDS REFER TO NEWSTATE INSIDE NEW STATE. COULD CAUSE PROBLEMS
  sessionIncrement(){
    if(this.state.minutes < 60){
      let newState = {...this.state,
        minutes: this.state.minutes += 1,
        minutesSeconds: this.minutes*60
      };
      this.setState(newState);
    }
  }

  sessionDecrement(){
    if(this.state.minutes > 1){
      let newState = {...this.state,
        minutes: this.state.minutes -= 1,
        minutesSeconds: this.minutes*60
      };
      this.setState(newState);
    }
  }

  breakIncrement(){
    if(this.state.breaks < 60){
      let newState = {...this.state,
        breaks: this.state.breaks += 1,
        breaksSeconds: this.breaks*60
      };
      this.setState(newState);
    }
  }

  breakDecrement(){
    if(this.state.breaks > 1){
      let newState = {...this.state,
      breaks: this.state.breaks -= 1,
      breaksSeconds: this.breaks*60
    };
      this.setState(newState);
    }
  }
// controls the reset button
  resetState(){
    clearInterval(counter);
    clearInterval(breakCounter);
    let newState = {...this.state,
      playing: false,
      breaks: 5,
      minutes: 25,
      minutesSeconds: 1500,
      breaksSeconds: 600,
      session: 'session',
      icon: 'icon HTML'
    };
    //  buzz.pause();
    // buzz.currentTime = 0;
    this.setState(newState);
  }



  render() {
    return (
      <div id='pomodoro'>
      <div className='bubble' id='break-label'>Breaks</div>
      <div className='bubble' id='session-label'>Min</div>
      <div className='bubble btn' id='session-increment' onClick={this.sessionIncrement}>+</div>
      <div className='bubble btn' id='session-decrement' onClick={this.sessionDecrement}>-</div>
      <div className='bubble btn' id='break-decrement' onClick={this.breakDecrement}>-</div>
      <div className='bubble btn' id='break-increment' onClick={this.breakIncrement}>+</div>
      <div className='bubble'  id='break-length'>{this.state.breaks}</div>
      <div className='bubble' id='session-length'>{this.state.minutes}</div>
      <div className='bubble' id='timer-label'>{this.state.session}</div>
      <div className='bubble' id='time-left'>{this.state.timeLeft}</div>
      <div className='bubble btn' id='start_stop' onClick={this.togglePlay}><i className="fas fa-play"></i></div>
      <div className='bubble btn' id='reset' onClick={this.resetState}><i className="fas fa-redo"></i></div>
        
        
        <div className='background northWest' id='back1'></div>
        <div className='background east' id='back2'></div>
        <div className='background southEast' id='back3'></div>
        <div className='background southWest' id='back4'></div>
        <div className='background north' id='back5'></div>
        <div className='background west' id='back6'></div>
        <div className='background northWest' id='back7'></div>
        <div className='background east' id='back8'></div>
        <div className='background southEast' id='back9'></div>
        <div className='background south' id='back10'></div>
        <div className='background southWest' id='back11'></div>
        <div className='background south' id='back12'></div>
        <div className='background south' id='back13'></div>
        <div className='background southEast' id='back14'></div>
        <div className='background southEast' id='back15'></div>
        <div className='background northEast' id='back16'></div>
        <div className='background northWest' id='back17'></div>
        <div className='background north' id='back18'></div>
        <div className='background northWest' id='back19'></div>
        <div className='background west' id='back20'></div>
        <div className='background east' id='back21'></div>
        <div className='background northEast' id='back22'></div>
        <div className='background east' id='back23'></div>
        <div className='background north' id='back24'></div>
        <div className='background northEast' id='back25'></div>
        <div className='background north' id='back26'></div>
      </div>
    );
  }
}

let domContainer = document.querySelector('#wrapper');
ReactDOM.render(<Clock />, domContainer);




//=================================================================

//<i class="fas fa-pause"></i>
// $(function(){
  
//   // //accesses the audio
//   // let buzz = $('#beep')[0];
//   // //will be used to set #session-length
//   // let minutes = 25;
//   // //will be used to set #break-length
//   // let breaks = 5;
//   // //will be used for the countdown as raw seconds
//   // let rawTime = minutes*60;
//   // //will be used for the countdown as raw seconds
//   // let rawBreak = breaks*60;
//   // //used to toggle play pause
//   // let playing = false;
//   // // global variable for the session setInterval
//   // let counter;
//   // //global variable for the break setInterval
//   // let breakCounter;
//   // //used to toggle between break and session when pausing
//   // let session = 'session';
//   // let iconplay = '<i class="fas fa-play"></i>';
//   // let iconpause = '<i class="fas fa-pause"></i>';
  
// //function clockTime transforms a raw number to 00:00
//   // let clockTime = (num) => {
//   //   if(num >= 600){
//   //         if(num % 60 >= 10 ){
//   //         return  Math.floor(num/60) + ':' + num % 60;
//   //         }else{
//   //         return Math.floor(num/60) + ':0' + num % 60;
//   //         }
//   //   }else{
//   //     if(num % 60 >= 10 ){
//   //         return  '0' + Math.floor(num/60) + ':' + num % 60;
//   //         }else{
//   //         return '0' + Math.floor(num/60) + ':0' + num % 60;
//   //   };
//   //   }
//   // };
  
//   // display the initial values to the DOM
//   // $('#session-length').html(minutes);
//   // $('#break-length').html(breaks);
//   // $('#time-left').html(clockTime(rawTime));
//   // $('#timer-label').html(session);
  
  
//   //Used in the setInterval method to set a timer on sessions
// //   function timer(){
// //       session = 'session';
// //       $('#timer-label').html(session);
// //       $('#time-left').html(clockTime(rawTime));
// //       if(rawTime > 0){
// //          rawTime -= 1;
// //          $('#time-left').html(clockTime(rawTime));
// //       }else if(rawTime === 0){
// //         //stops the interval
// //          clearInterval(counter);
// //         //buzzer doesn't work yet because of the setTime out I think
// //          buzz.play();
// //         //after running the sesssion timer sets rawBreak to breaks*60
// //         //otherwise it would clash with if statements
// //          rawBreak = breaks*60;
// //         //starts the breakCounter setInterval after finishing with session counter
// //          breakCounter = setInterval(timerBreak,1000);
// //           }
             
// // };
//   //Used in the setInterval method to set a timer on breaks
//   // function timerBreak(){
//   //   session = 'break';
//   //   $('#timer-label').html(session);
//   //  if(rawBreak > 0){
//   //        $('#time-left').html(clockTime(rawBreak));
//   //        rawBreak -= 1;
//   //     }else if(rawBreak === 0){
//   //        $('#time-left').html(clockTime(rawBreak));
//   //        clearInterval(breakCounter);
//   //        buzz.play();
//   //        rawTime = minutes*60;
//   //        counter = setInterval(timer,1000);
//   //         } 
//   // }
  
// /*used with the #start_stop on click
// calls setInterval methods depending on the value of session that gets changed at the beginning
// of both timer and timerBreak*/
//   // function startPlay(){
//   //   playing = true;
//   //   $('#start_stop').html(iconplay);
//   //   if(session === 'session'){
//   //     counter = setInterval(timer,1000);
//   //   }else{
//   //     breakCounter = setInterval(timerBreak,1000);
//   //   }
//   // };
  
  
//   // //used with the #start_stop on click to clear intervals but does not change values of raw seconds so it can continue later
//   // function stopPlay(){
//   //   playing = false;
//   //   $('#start_stop').html(iconpause);
//   //   if(session === 'session'){
//   //     clearInterval(counter);
//   //   }else{
//   //     clearInterval(breakCounter)
//   //   }
//   // };
  
//   // //toggles between functions to play pause
//   // $('#start_stop').click( () => {
//   //   playing === false ? startPlay() : stopPlay();
//   // });
   

  

  
//   /*the four increment decrement buttons add or detract 1 if minutes is less than 60 and more than 1
//   It resets rawtime and the timer displayed anytime it is clicked, even when playing. Could it be a problem here?*/
//   // $('#session-increment').click( () => {
//   //     minutes < 60 ? minutes += 1 : minutes;
//   //     rawTime = minutes*60;
//   //     $('#session-length').html(minutes);
//   //     $('#time-left').html(clockTime(rawTime));
//   //     event.preventDefault();
//   // });
  
//   //   $('#session-decrement').click( () => {
//   //   minutes > 1 ? minutes -= 1 : minutes;
//   //   rawTime = minutes*60;
//   //   $('#session-length').html(minutes);
//   //   $('#time-left').html(clockTime(rawTime));
//   //   event.preventDefault();
//   //   }
//   // );
  
//   //   $('#break-increment').click( () => {
//   //   breaks < 60 ? breaks += 1 : breaks;
//   //   rawBreak = breaks*60;
//   //    $('#break-length').html(breaks);
//   //    event.preventDefault();
//   //   }
//   // );
  
//   //   $('#break-decrement').click( () => {
//   //     breaks > 1 ? breaks -= 1 : breaks;
//   //     rawBreak = breaks*60;
//   //     $('#break-length').html(breaks);
//   //     event.preventDefault();
//   //   }
//   // );
  
//   //with reset all values are set back to their original values and the intervals cleared.
//   // $('#reset').click( () => {
//   //   clearInterval(counter);
//   //   clearInterval(breakCounter)
//   //   playing = false;
//   //   minutes = 25;
//   //   breaks = 5;
//   //   rawTime = minutes*60;
//   //   rawBreak = breaks*60;
//   //   buzz.pause();
//   //   buzz.currentTime = 0;
//   //   session = 'session';
//   //   $('#break-label').addClass('turn');
//   //   $('#session-label').addClass('turn');
//   //   $('#timer-label').addClass('turn');
//   //   $('#time-left').addClass('turn');

//   //   $('#timer-label').html(session);
//   //   $('#session-length').html(minutes);
//   //   $('#break-length').html(breaks);
//   //   $('#time-left').html(clockTime(rawTime));
    
//   //   setTimeout(function(){
//   //   $('#break-label').removeClass('turn');
//   //   $('#session-label').removeClass('turn');
//   //   $('#timer-label').removeClass('turn');
//   //   $('#time-left').removeClass('turn');
      
//   //   }, 2000);
//   //   event.preventDefault();
//   // })
  
  
// });
