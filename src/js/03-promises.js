const form = document.querySelector(`.form`)
const refs = {
  firstDelayEl: document.querySelector('input[name=delay]'),
stepDelayEl: document.querySelector(`input[name=step]`),
amountEl: document.querySelector('input[name=amount]'),
btnCreatePromise: document.querySelector('button'),
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
      const shouldResolve = Math.random() > 0.3;

      if(shouldResolve) {
      resolve({position,delay})
      }
      else {
reject({position,delay})
      }
    },refs.firstDelayEl)
  })

  return promise
}


 refs.btnCreatePromise.addEventListener ('click', onCreatePromiseClick)

 function onCreatePromiseClick (event) {
  event.preventDefault();
let delay = Number(refs.firstDelayEl.value);
const stepDelay = Number(refs.stepDelayEl.value);
const amountValue = Number(refs.amountEl.value)
for (i=1; i < amountValue; i++) {
  delay += stepDelay

createPromise(i,delay)
  .then(({ position, delay }) => { setTimeout(() => {console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);},delay)
    
  })
  .catch(({ position, delay }) => { setTimeout(()=>{console.log(`❌ Rejected promise ${position} in ${delay}ms`)},delay)
  });


}




}