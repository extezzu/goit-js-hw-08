const inputArea = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

inputArea.addEventListener(`input`, (e) => {
const trueInput = inputArea.value.trim(); 
if (!trueInput) {
nameOutput.textContent = `Anonymous`;
} else {
nameOutput.textContent = trueInput;
}
});