let counterValue = 0;
const counter = document.querySelector('#value')
const decrBtn = document.querySelector('button[data-action="decrement"]')
const incrBtn = document.querySelector('button[data-action="increment"]')
const resetBtn = document.querySelector('button[data-action="reset"]')


decrBtn.addEventListener('click', () =>  {
    counterValue -= 1
    counter.innerHTML = counterValue
})
incrBtn.addEventListener('click', () =>  {
    counterValue += 1
    counter.innerHTML = counterValue
})
resetBtn.addEventListener('click', () => {
    counterValue = 0
    counter.innerHTML = counterValue
})




