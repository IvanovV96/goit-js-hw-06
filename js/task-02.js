const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const createIngredientsMarkup = ingredients => {
    return ingredients.map(el => {
    const ingredientsEl= document.createElement('li')
    ingredientsEl.textContent = el
    ingredientsEl.classList.add('item')
    return ingredientsEl
  })
}

const elements = createIngredientsMarkup(ingredients)
list.append(...elements)

















