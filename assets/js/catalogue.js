window.addEventListener('load', function (e) {
  let instance = new Mark(document.querySelectorAll('.documentation-card'))
  let searchInput = document.querySelector('input[name="catalogue-search"]')
  let scopeFilter = document.querySelector('select[name="catalogue-scope"]')
  let typeFilter = document.querySelector('select[name="catalogue-type"]')
  let usecaseFilter = document.querySelector('select[name="catalogue-usecase"]')
  let providerFilter = document.querySelector('select[name="catalogue-providers"]')
  let stateFilter = document.querySelector('select[name="catalogue-openstate"]')
  
  const el = document.getElementsByClassName('documentation-card')
  const tabs = document.querySelectorAll('.tab-list a')
  const commentSwitches = document.getElementsByClassName('toggle-comments')

  for (let i = 0; i < el.length; i++) {
    commentSwitches[i].addEventListener('click', toggleComments, false)
  }

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', onTabClick, false)
  }

  searchInput.addEventListener("input", delay(performMark))
  scopeFilter.addEventListener("change", toggleNonMarkedPanels)
  typeFilter.addEventListener("change", toggleCategories)
  usecaseFilter.addEventListener("change", toggleNonMarkedPanels)
  providerFilter.addEventListener("change", toggleNonMarkedPanels)
  stateFilter.addEventListener("change", toggleNonMarkedPanels)

  if (window.location.hash) {
    const hash = window.location.hash
    openCatalogue(hash)
  }

  function openCatalogue(hash) {
    const target = document.getElementById(hash.substring(1))
    if (target) {
      target.querySelectorAll('.tab-list a')[0].click()
    }
  }

  fetch('../assets/js/exemple_payload_taux_dispo.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const endpoint = data.endpoint.split('/').pop()
      const panel = document.getElementById(endpoint)

      const rate = panel.getElementsByClassName('rate')[0]
      const spot = panel.getElementsByClassName('spot')[0]
      const currentStatus = panel.getElementsByClassName('availability-status')[0]
      const totalCalls = panel.getElementsByClassName('call-count')[0]
      const fdErrors = panel.getElementsByClassName('fd-errors')[0]
      const callCount = getTotal(data.days_availability)

      let rateClass = ''

      rate.innerHTML = data.total_availability + '%'
      if (typeof data.total_availability === 'number') {
        if (data.total_availability >= 99.5) {
          rateClass = 'spot--sup99'
        } else if (data.total_availability >= 90) {
          rateClass = 'spot--sup90'
        } else if (data.total_availability >= 80) {
          rateClass = 'spot--sup80'
        } else {
          rateClass = 'spot--sub80'
        }
      }
      spot.classList.add(rateClass)

      totalCalls.innerHTML = callCount
      fdErrors.innerHTML = getErrors(data.days_availability, callCount) + '%'
    })

  function getTotal(days) {
    let callCount = 0
    for (const key in days) {
      callCount =+ days[key].total
    }
    return callCount
  }

  function getErrors(days, callCount) {
    let errorCount = 0
    for (const key in days) {
      errorCount =+ days[key]['502']
    }
    return ((callCount - errorCount)/callCount).toFixed(2)
  }

  function buildTable(data) {

  }
  

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

  //search and filtering

  toggleNonMarkedPanels()
  toggleCategories()

  function performMark(event) {
    event.stopPropagation()
    event.preventDefault()

    const keyword = searchInput.value
    instance.unmark({
      done: function() {
        instance.mark(keyword)
        toggleNonMarkedPanels()
      }
    })
  }

  function toggleNonMarkedPanels() {
    const categories = document.querySelectorAll('.catalogue__category')
    const scope = scopeFilter.value
    const usecase = usecaseFilter.value
    const provider = providerFilter.value
    const state = stateFilter.value
    const type = typeFilter.value

    let panels, shouldHide, shouldHideCategory, noResults = true

    for (let i = 0; i < categories.length; i++) {
      panels = categories[i].querySelectorAll('.documentation-card')
      shouldHideCategory = true

      if (type === "0" || type === categories[i].getAttribute('data-category')) {
        categories[i].classList.remove('hidden')

        for (let j = 0; j < panels.length; j++) {
          panels[j].classList.remove('hidden')
          shouldHide = false
          
          if (scope && !panels[j].hasAttribute('data-'+scope)) {
            shouldHide = true
          } 
          if (usecase && !panels[j].hasAttribute('data-'+usecase)) {
            shouldHide = true
          }
          if (provider && !panels[j].hasAttribute('data-'+provider)) {
            shouldHide = true
          }
          if (state && !(panels[j].getAttribute('data-openstate') == state)) {
            shouldHide = true
          }

          if (shouldHide) {
            panels[j].classList.add('hidden')
          } else {
            if (!searchInput.value || searchInput.value !== '' && panels[j].querySelector('mark') !== null) {
              panels[j].classList.remove('hidden')
              shouldHideCategory = false
            } else {
              panels[j].classList.add('hidden')
            }
          }
        }
      } else {
        categories[i].classList.add('hidden')
      }

      if (shouldHideCategory) {
        categories[i].classList.add('hidden')
      } else {
        categories[i].classList.remove('hidden')
        noResults = false
      }
    }

    const emptyPanel = document.getElementById('no-results')

    if (noResults) {
      emptyPanel.classList.remove('hidden')
    } else {
      emptyPanel.classList.add('hidden')
    }

    let panelCount = 0
    const allPanels = document.querySelectorAll('.documentation-card')
    const visibleEndpoints = document.getElementById('visible-endpoints')

    for (let k = 0; k < allPanels.length; k++) {
      if (allPanels[k].offsetParent) {
        panelCount++
      }
    }

    visibleEndpoints.innerHTML = panelCount
  }

  function toggleCategories() {
    const categories = document.querySelectorAll('.catalogue__category')
    const type = typeFilter.value
    let shouldHideCategory

    for (let i = 0; i < categories.length; i++) {
      shouldHideCategory = true
      if (type == "0") {
        categories[i].classList.remove('hidden')
        shouldHideCategory = false
      } else {
        categories[i].classList.add('hidden')
        if (categories[i].getAttribute('data-category') === type) {
          categories[i].classList.remove('hidden')
          shouldHideCategory = false
        }
      }

      if (shouldHideCategory) {
        categories[i].classList.add('hidden')
      } else {
        categories[i].classList.remove('hidden')
        noResults = false
      }
    }
  }

  function delay(fn) {
    let timer = 0
    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(fn.bind(this, ...args), 200)
    }
  }
})
