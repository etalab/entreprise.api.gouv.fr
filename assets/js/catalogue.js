window.onload = function (e) {
  function onTabClick(event) {
    event.stopPropagation()
    event.preventDefault()

    const clickedTab = event.target
    const clickedParent = clickedTab.closest('.documentation__tabs')
    const activeTab = clickedParent.querySelectorAll('.tab--active')
    const activeTabContent = clickedParent.querySelectorAll('.tab-content--active')

    // deactivate existing active tab and panel
    if (activeTab.length) {
      activeTab[0].classList.remove('tab--active')
      activeTabContent[0].classList.remove('tab-content--active')
    }

    // activate new tab and panel
    if (clickedTab != activeTab[0]) {
      clickedTab.className += ' tab--active';
      document.getElementById(clickedTab.href.split('#')[1]).className += ' tab-content--active'
    }
  }

  function toggleComments(event) {
    const toggle = event.target
    const container = toggle.closest('.json-example').querySelectorAll('code')
    
    const comments = container[0].querySelectorAll('.c1, .err')

    for (i = 0; i < comments.length; i++) {
      if (toggle.checked) {
        comments[i].style.display = 'inline'
      } else {
        comments[i].style.display = 'none'
      }
    }
  }

  const el = document.getElementsByClassName('documentation-card')
  const commentSwitches = document.getElementsByClassName('toggle-comments')

  for (let i = 0; i < el.length; i++) {
    el[i].querySelectorAll('.tab-list')[0].addEventListener('click', onTabClick, false)
    commentSwitches[i].addEventListener('click', toggleComments, false)
  }
}
