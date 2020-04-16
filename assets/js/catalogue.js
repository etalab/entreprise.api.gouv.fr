window.onload = function (e) {
  function onTabClick(event) {
    event.stopPropagation()
    event.preventDefault()
    const activeTab = document.querySelectorAll('.tab--active')
    const activeTabContent = document.querySelectorAll('.tab-content--active')

    // deactivate existing active tab and panel
    for (let i = 0; i < activeTab.length; i++) {
      activeTab[i].className = activeTab[i].className.replace(' tab--active', '');
    }

    for (let i = 0; i < activeTabContent.length; i++) {
      activeTabContent[i].className = activeTabContent[i].className.replace(' tab-content--active', '');
    }

    // activate new tab and panel
    event.target.className += ' tab--active';
    document.getElementById(event.target.href.split('#')[1]).className += ' tab-content--active';
  }

  const el = document.getElementsByClassName('tab-list')

  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('click', onTabClick, false)
  }
}
