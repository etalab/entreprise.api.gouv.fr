window.addEventListener('load', function() {
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
    let textArea = document.createElement("textarea")
    textArea.value = text

    // Avoid scrolling to bottom
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'successful' : 'unsuccessful'
    } catch (err) {
        console.error('Le texte n’a pas pu être copié : ', err)
    }

    document.body.removeChild(textArea)
  }
})