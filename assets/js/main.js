window.addEventListener('load', function() {
  init()

  function init() {
    checkExternalLinks()
  }

  function checkExternalLinks() {
    const links = document.querySelectorAll('a')

    for(let i = 0; i < links.length; i++) {
      if (links[i].hasAttribute('target') && links[i].getAttribute('target') === '_blank') {
        links[i].classList.add('external-link')
      }
    }
  }
})
