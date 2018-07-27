//<i class="fas fa-pause"></i>
$(function(){
  
    //accesses the audio
    let buzz = $('#beep')[0];
    //will be used to set #session-length
    let minutes = 25;
    //will be used to set #break-length
    let breaks = 5;
    //will be used for the countdown as raw seconds
    let rawTime = minutes*60;
    //will be used for the countdown as raw seconds
    let rawBreak = breaks*60;
    //used to toggle play pause
    let playing = false;
    // global variable for the session setInterval
    let counter;
    //global variable for the break setInterval
    let breakCounter;
    //used to toggle between break and session when pausing
    let session = 'session';
    let iconplay = '<i class="fas fa-play"></i>';
    let iconpause = '<i class="fas fa-pause"></i>';
    
  //function clockTime transforms a raw number to 00:00
    let clockTime = (num) => {
      if(num >= 600){
            if(num % 60 >= 10 ){
            return  Math.floor(num/60) + ':' + num % 60;
            }else{
            return Math.floor(num/60) + ':0' + num % 60;
            }
      }else{
        if(num % 60 >= 10 ){
            return  '0' + Math.floor(num/60) + ':' + num % 60;
            }else{
            return '0' + Math.floor(num/60) + ':0' + num % 60;
      };
      }
    };
    
    // display the initial values to the DOM
    $('#session-length').html(minutes);
    $('#break-length').html(breaks);
    $('#time-left').html(clockTime(rawTime));
    $('#timer-label').html(session);
    
    
    //Used in the setInterval method to set a timer on sessions
    function timer(){
        session = 'session';
        $('#timer-label').html(session);
        $('#time-left').html(clockTime(rawTime));
        if(rawTime > 0){
           rawTime -= 1;
           $('#time-left').html(clockTime(rawTime));
        }else if(rawTime === 0){
          //stops the interval
           clearInterval(counter);
          //buzzer doesn't work yet because of the setTime out I think
           buzz.play();
          //after running the sesssion timer sets rawBreak to breaks*60
          //otherwise it would clash with if statements
           rawBreak = breaks*60;
          //starts the breakCounter setInterval after finishing with session counter
           breakCounter = setInterval(timerBreak,1000);
            }
               
  };
    //Used in the setInterval method to set a timer on breaks
    function timerBreak(){
      session = 'break';
      $('#timer-label').html(session);
     if(rawBreak > 0){
           $('#time-left').html(clockTime(rawBreak));
           rawBreak -= 1;
        }else if(rawBreak === 0){
           $('#time-left').html(clockTime(rawBreak));
           clearInterval(breakCounter);
           buzz.play();
           rawTime = minutes*60;
           counter = setInterval(timer,1000);
            } 
    }
    
  /*used with the #start_stop on click
  calls setInterval methods depending on the value of session that gets changed at the beginning
  of both timer and timerBreak*/
    function startPlay(){
      playing = true;
      $('#start_stop').html(iconplay);
      if(session === 'session'){
        counter = setInterval(timer,1000);
      }else{
        breakCounter = setInterval(timerBreak,1000);
      }
    };
    
    
    //used with the #start_stop on click to clear intervals but does not change values of raw seconds so it can continue later
    function stopPlay(){
      playing = false;
      $('#start_stop').html(iconpause);
      if(session === 'session'){
        clearInterval(counter);
      }else{
        clearInterval(breakCounter)
      }
    };
    
    //toggles between functions to play pause
    $('#start_stop').click( () => {
      playing === false ? startPlay() : stopPlay();
    });
     
  
    
  
    
    /*the four increment decrement buttons add or detract 1 if minutes is less than 60 and more than 1
    It resets rawtime and the timer displayed anytime it is clicked, even when playing. Could it be a problem here?*/
    $('#session-increment').click( () => {
        minutes < 60 ? minutes += 1 : minutes;
        rawTime = minutes*60;
        $('#session-length').html(minutes);
        $('#time-left').html(clockTime(rawTime));
        event.preventDefault();
    });
    
      $('#session-decrement').click( () => {
      minutes > 1 ? minutes -= 1 : minutes;
      rawTime = minutes*60;
      $('#session-length').html(minutes);
      $('#time-left').html(clockTime(rawTime));
      event.preventDefault();
      }
    );
    
      $('#break-increment').click( () => {
      breaks < 60 ? breaks += 1 : breaks;
      rawBreak = breaks*60;
       $('#break-length').html(breaks);
       event.preventDefault();
      }
    );
    
      $('#break-decrement').click( () => {
        breaks > 1 ? breaks -= 1 : breaks;
        rawBreak = breaks*60;
        $('#break-length').html(breaks);
        event.preventDefault();
      }
    );
    
    //with reset all values are set back to their original values and the intervals cleared.
    $('#reset').click( () => {
      clearInterval(counter);
      clearInterval(breakCounter)
      playing = false;
      minutes = 25;
      breaks = 5;
      rawTime = minutes*60;
      rawBreak = breaks*60;
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
      
      setTimeout(function(){
      $('#break-label').removeClass('turn');
      $('#session-label').removeClass('turn');
      $('#timer-label').removeClass('turn');
      $('#time-left').removeClass('turn');
        
      }, 2000);
      event.preventDefault();
    })
    
    
  });