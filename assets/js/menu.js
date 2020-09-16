window.addEventListener('load', () => {
  const menu = document.getElementById('toggle-nav')
  menu.addEventListener('click', (evt) => {
    const button = evt.target

    if (button.classList.contains('active')) {
      button.classList.remove('active')
    }
    else {
      button.classList.add('active')
    }
  })
})