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

  const linkButtons = document.querySelectorAll('.button-link')

  for (let j = 0; j < linkButtons.length; j++) {
    linkButtons[j].addEventListener('click', onButtonClick, false)
  }

  function onButtonClick(evt) {
    const target = evt.target
    if (target) {
      const link = target.getAttribute('data-link')
      if (link) {
        copyTextToClipboard(link)
      }
    }
  }
  
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text)
      return
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Le lien a bien été copié')
      const flash = document.getElementById('flash')
      flash.innerHTML = 'Le lien a bien été copié'
      flash.style.display = 'block'
      setTimeout(() => {
        flash.style.display = 'none'
      }, 2500)
    }, function(err) {
      console.error('Le texte n’a pas pu être copié : ', err)
    })
  }

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea")
    textArea.value = text
    
    // Avoid scrolling to bottom
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"
  
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
  
    try {
      var successful = document.execCommand('copy')
      var msg = successful ? 'successful' : 'unsuccessful'
      console.log('Le texte a bien été copié')
    } catch (err) {
      console.error('Le texte n’a pas pu être copié : ', err)
    }
  
    document.body.removeChild(textArea)
  }
}