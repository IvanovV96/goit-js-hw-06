const _input = document.querySelector('#validation-input')
_input.addEventListener('blur', onInputChange)
function onInputChange (event) {
    if(event.currentTarget.value.length < _input.dataset.length) {
        _input.classList.add('invalid')
        _input.classList.remove('valid')
    } else {
        _input.classList.add('valid')
        _input.classList.remove('invalid')
    }
}

console.log(_input)