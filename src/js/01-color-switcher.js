
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  stopBtn.disabled = true;
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    if(startBtn) {
        startBtn.disabled = true;
        stopBtn.disabled = false;}
       
    const bodyEl = document.querySelector(`body`);
bodyEl.style.backgroundColor = getRandomHexColor(); 
 
  }, 1000);
});


stopBtn.addEventListener("click", () => {
        startBtn.disabled = false;
        stopBtn.disabled = true;
  clearInterval(timerId) 
  
});