function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color')
const colorText = document.querySelector('.color')

changeColorBtn.addEventListener('click', onChangeColorBtn)

function onChangeColorBtn (event) {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor
  colorText.textContent = randomColor
}