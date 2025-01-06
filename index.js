
// JS Code : CodingNepal
//**********************************************************

const seconds=document.querySelector(".seconds .number");
const minutes=document.querySelector(".minutes .number");
const hours=document.querySelector(".hours .number");
const days=document.querySelector(".days .number");

const timeFuctionOn=setInterval(() => {
    let currentDate=new Date().getTime();
    // console.log(currentDate);
    let launchDate=new Date('Jan 20, 2025 10:00:00').getTime();
    // console.log(launchDate);
    let duration=launchDate - currentDate;
    //console.log(duration);  //duration milisecond e result dibe, 1 s=1000ms

    let daysValue=Math.floor(duration/(1000*60*60*24));
    // console.log(days);
    let hourValue=Math.floor((duration%(1000*60*60*24))/(1000*60*60));
    let minValue=Math.floor((duration%(1000*60*60))/(1000*60));
    let secValue=Math.floor((duration%(1000*60))/1000);
    // console.log(seconds);


    seconds.textContent=secValue < 10 ? `0${secValue}`: secValue;
    minutes.textContent=minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent=hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent=daysValue < 10 ? `0${daysValue}` : daysValue;

    if(duration<0){
        clearInterval(timeFuctionOn);
    }

}, 1000);