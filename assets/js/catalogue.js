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

  const el = document.getElementsByClassName('tab-list')

  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('click', onTabClick, false)
  }
}
