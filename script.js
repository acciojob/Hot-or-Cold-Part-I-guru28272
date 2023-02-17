//your code here

const input = document.querySelector(`#guess`);

const btn = document.querySelector(`#btn`);
const num = document.querySelector(`#num`);
const response = document.querySelector(`#respond`);

let result = Math.ceil(Math.random() * 20);
let result1 = Math.floor(Math.random() * -20 - 1);

btn.addEventListener(`click`, function () {
	num.textContent = btn.nodeValue;
  if (input.value >= result1 && input.value <= result) {
    response.textContent = `Hot`;
  } else {
    response.textContent = `Cold`;
  }
});