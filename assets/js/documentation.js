window.onload = function (e) {
  if (window.location.hash) {
    console.log('pouet')
    const hash = window.location.hash
    openDetails(hash)
  }

  const links = document.querySelectorAll('.tpl-documentation__links a')

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', onTitleClick, false)
  }

  function onTitleClick(evt) {
    evt.stopPropagation()
    evt.preventDefault()
    openDetails(evt.target.attributes.href.value)
  }

  function openDetails(hash) {
    const target = document.getElementById(hash.substring(1))
    if (target) {
      if (target.tagName.toLowerCase() === 'details') {
        target.open = true;
      }

      target.scrollIntoView()
    } 
  }
}