
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const btnEl = document.querySelector('button[data-start]');
const spanDayEl = document.querySelector('span[data-days]');
const spanHoursEl = document.querySelector(`span[data-hours]`);
const spanMinutesEl = document.querySelector('span[data-minutes]');
const spanSecondsEl = document.querySelector(`span[data-seconds]`)




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
    btnEl.disabled = true;
      alert('Please choose a date in the future');
    }
     else {
      btnEl.disabled = false;
     }     
    }
  }; 

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  const input = document.querySelector('#datetime-picker');

  btnEl.addEventListener('click', onStartTimer);

function addLeadingZero(value) {
  return String(value).padStart(2,`0`)
  }

 function onStartTimer (event) {

  let timer = setInterval(() => {
    const value = input.value;
    const date = new Date(value) - new Date() ;
    if(date >= 0) {
      let time = convertMs(date)
     spanDayEl.textContent = addLeadingZero(time.days);
     spanHoursEl.textContent = addLeadingZero(time.hours);
     spanMinutesEl.textContent = addLeadingZero(time.minutes);
     spanSecondsEl.textContent = addLeadingZero(time.seconds);
    }
    else {
      clearInterval(timer)
    }
 } )
}

flatpickr('input#datetime-picker', options);


 
 
 