
const openMenu = document.querySelector('.open')
const closeMenu = document.querySelector('.close')
const menu = document.querySelector('.menu')
const main = document.querySelector('#content')


openMenu.addEventListener('click', toggleMenu)

closeMenu.addEventListener('click', toggleMenu)

function toggleMenu(){

  openMenu.classList.toggle('hide')
  closeMenu.classList.toggle('hide')
  menu.classList.toggle('hide')
  main.classList.toggle('hide')

}