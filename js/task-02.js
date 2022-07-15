const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


 const addIngredientsMarkup = () => {
ingredients.map(el => {
  const ingredientsEl= document.createElement('li')
  const list = document.querySelector('#ingredients') 
  ingredientsEl.textContent = el
  ingredientsEl.classList.add('item')
  list.append(ingredientsEl)
})}

addIngredientsMarkup()
















