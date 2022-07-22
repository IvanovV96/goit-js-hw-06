const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const input = document.querySelector('#controls > input')
const boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', () => createBoxes(parseInt(input.value)))
destroyBtn.addEventListener('click', () => destroyBoxes())

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for(let i = 0; i < amount; i += 1) {
    const div = document.createElement('div')
    boxes.appendChild(div)
    div.style.width = 30 + i * 10 +'px'
    div.style.height = 30 + i * 10 + 'px'
    div.style.backgroundColor = getRandomHexColor()
  }
}

function destroyBoxes() {
  input.value = ''
  boxes.innerHTML = ''
}






