// here access btns by id
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// here intialize the value of timer obj
 let hour = 00;
 let minute = 00;
 let second = 00;
//  let count = 00;

//  here used function for start timer

startBtn.addEventListener('click',function(){
    timer =true;
    stopWatch();
});

// here used fuction to stop timer

stopBtn.addEventListener('click',function(){
    timer=false;

});

// here used function to reset the timer

resetBtn.addEventListener('click',function(){
    timer=false;
    hour= 0;
    minute= 0;
    second= 0;
    // count= 0;

    document.getElementById('hr').innerHTML= "00";
    document.getElementById('min').innerHTML= "00";
    document.getElementById('sec').innerHTML= "00";
    // document.getElementById('count').innerHTML= "00";
});
// here used function to perform 

function stopWatch(){
     if(timer){
        // count++;
        second++;

        // if(count== 100){
        //     second++;
        //     count= 0;
        // }
        if(second== 60){
            minute++;
            second= 0;
        }
        if(minute==60){
            hour++;
            minute=0;
            second=0;
        }

    let Counthr = hour;
    let countmin =minute;
    let countsec = second;
    // let countCounter= count;
// here condition for single digit number show

     if(hour<10){
        Counthr = "0" + Counthr;
     }

     if(minute<10){
        countmin = "0" + countmin;
     }

     if(second<10){
        countsec = "0" + countsec;
     }

    //  if(count<10){
    //     countCounter = "0" + countCounter;
    //  }
//   here  access element to show count

    //  document.getElementById('hr').innerHTML= Counthr;
    document.getElementById('min').innerHTML= countmin;
    document.getElementById('sec').innerHTML= countsec;
    // document.getElementById('count').innerHTML= countCounter;
    setTimeout(stopWatch,1000);

     }
}