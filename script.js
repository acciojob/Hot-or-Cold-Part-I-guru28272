//your code here

const input = document.querySelector(`#guess`);

const btn = document.querySelector(`#btn`);
const num = document.querySelector(`#num`);
const response = document.querySelector(`#respond`);

btn.addEventListener(`click`, function () {
  const randomNum = Math.floor(Math.random() * 40) - 20;
	num.textContent = randomNum;
	const diff = Number(randomNum) - Number(input.Value);
	alert(diff)
	if(diff <= 5){
		response.textContent = `Hot`;
	}
	else{
		response.textContent = `Cold`;
	}
});