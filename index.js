//
function toggleMenu() {
  const navItems = document.querySelector('.nav-items')
  const login = document.querySelector('.login')
  const removebg = document.querySelector('.RemoveBg')
  navItems.classList.toggle('mobile-active')
  login.classList.toggle('mobile-active')
  removebg.classList.toggle('mobile-active')
}

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault()

  let message = []
  const email = document.getElementById('email').value
  if (email === '' || email == null) {
    message.push('Input E-mail')
  } else {
    window.location.href = 'https://www.youtube.com/account'
  }

  if (message.length > 0) {
    const error = document.querySelector('.error')
    error.innerText = message.join(' , ')
  }
})
