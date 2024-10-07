const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    
    const inputVal = event.currentTarget.value.trim();
    
    nameOutput.textContent = inputVal === "" ? "Anonymous" : inputVal;
  });