const textInput = document.querySelector('#name-input') 
const textOutput = document.querySelector('#name-output')

textInput.addEventListener('input', onInputChange) 
textInput.addEventListener('blur', event => {
    if(event.currentTarget.value.length === 0) {
        textOutput.textContent = 'Anonymous'
    }
})

function onInputChange (event) {
    textOutput.textContent = event.currentTarget.value
}


