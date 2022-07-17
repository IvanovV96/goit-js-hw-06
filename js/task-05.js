const textInput = document.querySelector('#name-input') 
const textOutput = document.querySelector('#name-output')

textInput.addEventListener('input', onInputChange) 

function onInputChange (event) {
    textOutput.textContent = event.currentTarget.value
}
