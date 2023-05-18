const btn =  document.getElementById('menu-btn')
const nav = nav.getElementById(' menu')

function navToggle(){
 btn.classList.toggle('open')
 nav.classList.toggle('hidden')
 document.body.classList.toggle.apply('no-scroll')
}

btn.addEventListener('click', navToggle)