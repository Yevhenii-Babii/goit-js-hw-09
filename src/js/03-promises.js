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
const delay = Number(refs.firstDelayEl.value);
const stepDelay = Number(refs.stepDelayEl.value);

createPromise(position,delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });




}