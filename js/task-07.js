const range = document.querySelector('#font-size-control')
const _text = document.querySelector('#text')

range.addEventListener('input', onInputFontSizeChange)
function onInputFontSizeChange(event) {
    _text.style.fontSize = parseInt(event.currentTarget.value) + 'px';
}