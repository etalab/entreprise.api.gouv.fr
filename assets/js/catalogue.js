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

      const dataset = []
      for (let key in data.days_availability) {
        const daily = (((data.days_availability[key].total -  data.days_availability[key]['502']) / data.days_availability[key].total)* 100).toFixed(2)
        dataset.push({x: key, y: daily})
      }
      
      buildChart(dataset)
    })

  function getTotal(days) {
    let callCount = 0
    for (const key in days) {
      callCount += days[key].total
    }
    return callCount
  }

  function getErrors(days, callCount) {
    let errorCount = 0
    for (const key in days) {
      errorCount += days[key]['502']
    }
    return ((callCount - errorCount)/callCount).toFixed(2)
  }

  function buildChart(dataset) {
    var margin = {top: 10, right: 50, bottom: 50, left: 50}
    , width = 800 - margin.left - margin.right // Use the window's width 
    , height = 300 - margin.top - margin.bottom; // Use the window's height
  
    var n = dataset.length;

    // 5. X scale will use the index of our data
    var xScale = d3.scaleLinear()
        .domain([0, n-1]) // input
        .range([0, width]); // output
    
    // 6. Y scale will use the randomly generate number 
    var yScale = d3.scaleLinear()
        .domain([0, 100]) // input 
        .range([height, 0]); // output 
    
    // 7. d3's line generator
    var line = d3.line()
        .x((d, i) => xScale(i))
        .y(d => yScale(d.y))
        .curve(d3.curveMonotoneX)
    
    
    // 1. Add the SVG to the page and employ #2
    var svg = d3.select("#entreprises-chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // 3. Call the x axis in a group tag
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom
    
    // 4. Call the y axis in a group tag
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    svg.append('linearGradient')
        .attr('id', "availability-gradient")
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', 0)
        .attr('y1', height - margin.bottom)
        .attr('x2', 0)
        .attr('y2', margin.top)
      .selectAll('stop')
        .data([{
          offset: '0%', color: '#D32121'
        }, {
          offset: '90%', color: '#FFAD33'
        }, {
          offset: '99%', color: '#7ED321'
        }])
      .enter().append('stop')
        .attr('offset', d => d.offset)
        .attr('stop-color', d => d.color)

    // 9. Append the path, bind the data, and call the line generator 
    svg.append("path")
        .datum(dataset) // 10. Binds data to the line 
        .attr("class", "line") // Assign a class for styling 
        .attr("d", line) // 11. Calls the line generator

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
