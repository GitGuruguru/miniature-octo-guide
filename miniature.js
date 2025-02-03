let button = document.querySelector('#mode')
let button2 = document.querySelector('#mode2')
let button3 = document.querySelector('#mode3')

let namee = document.querySelector('#name')
let name2 = document.querySelector('#name2')
button.addEventListener('click', function() {
    namee.innerHTML = 'miniature'
    name2.innerHTML = 'Miniature'
})
button2.addEventListener('click', function() {
      namee.innerHTML = 'Kanban'
      name2.innerHTML = 'kanban'
})
button3.addEventListener('click', function() {
      namee.innerHTML = 'Aleow'
      name2.innerHTML = 'aleow'
})