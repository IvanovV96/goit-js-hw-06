const showCategories = () => {
const elemCategory = document.querySelectorAll('.item')

console.log('Number of categories: ', elemCategory.length)
elemCategory.forEach(elem => 
    console.log(
    `Category: ${elem.querySelector('.item__title').textContent} 
Elements: ${elem.querySelector('ul').children.length}`))
}

showCategories()

