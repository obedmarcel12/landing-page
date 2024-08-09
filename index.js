function toggleMenu() {
  const navItems = document.querySelector('.nav-items')
  const login = document.querySelector('.login')
  const removebg = document.querySelector('.RemoveBg')
  navItems.classList.toggle('mobile-active')
  login.classList.toggle('mobile-active')
  removebg.classList.toggle('mobile-active')
}
