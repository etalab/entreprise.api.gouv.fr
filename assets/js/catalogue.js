window.onload = function (e) {
  let instance = new Mark(document.querySelectorAll('.documentation-card'))
  let searchInput = document.querySelector('input[name="catalogue-search"]')
  let scopeFilter = document.querySelector('select[name="catalogue-scope"]')
  let typeFilter = document.querySelector('select[name="catalogue-type"]')
  let usecaseFilter = document.querySelector('select[name="catalogue-usecase"]')
  let providerFilter = document.querySelector('select[name="catalogue-providers"]')
  let stateFilter = document.querySelector('select[name="catalogue-openstate"]')

  const charts = document.getElementsByClassName('availability-pie')
  const values = [[84, '#17bd3d'], [8, '#ffc107'], [6, '#d19d00'], [2, '#dc3545']]
  let startingPoint = 0

  for (let i = 0; i < charts.length; i++) {
    values.forEach(value => {
      charts[i].prepend(pieChart(value[0], 250, value[1], startingPoint))
      startingPoint += 360 * value[0] / 100
    })
  }
  
  const linkButtons = document.querySelectorAll('.button-link')

  for (let j = 0; j < linkButtons.length; j++) {
    linkButtons[j].addEventListener('click', onButtonClick, false)
  }
  
  const el = document.getElementsByClassName('documentation-card')
  const commentSwitches = document.getElementsByClassName('toggle-comments')

  for (let i = 0; i < el.length; i++) {
    el[i].querySelectorAll('.tab-list a')[0].addEventListener('click', onTabClick, false)
    commentSwitches[i].addEventListener('click', toggleComments, false)
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

  function pieChart(percentage, size, color, rotate) {
    const svgns = "http://www.w3.org/2000/svg"
    const path = document.createElementNS(svgns, "path")
    const unit = (Math.PI * 2) / 100    
    const startangle = 0
    const endangle = percentage * unit - 0.001
    const halfSize = size / 2
    const x1 = halfSize + halfSize * Math.sin(startangle)
    const y1 = halfSize - halfSize * Math.cos(startangle)
    const x2 = halfSize + halfSize * Math.sin(endangle)
    const y2 = halfSize - halfSize * Math.cos(endangle)
    const big = (endangle - startangle > Math.PI) ? 1 : 0
    const d = "M " + halfSize + "," + halfSize +  // Start at circle center
        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
        " A " + halfSize + "," + halfSize +       // Draw an arc of radius r
        " 0 " + big + " 1 " +       // Arc details...
        x2 + "," + y2 +             // Arc goes to to (x2,y2)
        " Z"                       // Close path back to (cx,cy)
      
    path.setAttribute("d", d)
    path.setAttribute("fill", color)
    path.setAttribute("transform", "rotate(" + rotate + ", " + halfSize + ", "+ halfSize +")")
      
    return path
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
}
