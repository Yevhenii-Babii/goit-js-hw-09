!function(){document.querySelector(".form");var e={firstDelayEl:document.querySelector("input[name=delay]"),stepDelayEl:document.querySelector("input[name=step]"),amountEl:document.querySelector("input[name=amount]"),btnCreatePromise:document.querySelector("button")};e.btnCreatePromise.addEventListener("click",(function(t){t.preventDefault();var n=Number(e.firstDelayEl.value);Number(e.stepDelayEl.value);(function(t,n){return new Promise((function(o,i){setTimeout((function(){Math.random()>.3?o({position:t,delay:n}):i({position:t,delay:n})}),e.firstDelayEl)}))})(position,n).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.97de1695.js.map
