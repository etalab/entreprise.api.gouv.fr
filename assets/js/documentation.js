window.onload = function (e) {
  if (window.location.hash) {
    const hash = window.location.hash
    openDetails(hash)
  }

  const links = document.querySelectorAll('.documentation a')

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', onTitleClick, false)
  }

  function onTitleClick(evt) {
    const href = evt.target.attributes.href.value
    const index = href.indexOf('#')
    if (index >= 0) {
      openDetails(decodeURI(href.substring(index)))
    }
  }

  function openDetails(hash) {
    const target = document.getElementById(hash.substring(1))
    if (target) {
      let el = target

      while (el.closest('details')) {
        if (el.tagName.toLowerCase() === 'details') {
          el.open = true
        }
        el = el.parentNode
      }

      target.scrollIntoView()
    } 
  }
}