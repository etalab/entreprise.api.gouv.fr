window.addEventListener('load', function (e) {
  const months = {
    01: 'janvier',
    02: 'février',
    03: 'mars',
    04: 'avril',
    05: 'mai',
    06: 'juin',
    07: 'juillet',
    08: 'août',
    09: 'septembre',
    10: 'octobre',
    11: 'novembre',
    12: 'décembre'
  }

  let locale = d3.timeFormatLocale({
    "decimal": ",",
    "thousands": " ",
    "grouping": [3],
    "currency": ["€", ""],
    "dateTime": "%a %b %e %X %Y",
    "date": "%d-%m-%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    "shortDays": ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    "months": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    "shortMonths": ["Jan.", "Fév.", "Mar.", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sep.", "Oct.", "Nov.", "Déc."]
  });

  const formatMillisecond = locale.format(".%L")
  const formatSecond = locale.format(":%S")
  const formatMinute = locale.format("%I:%")
  const formatHour = locale.format("%I %p")
  const formatDay = locale.format("%a %d")
  const formatWeek = locale.format("%b %d")
  const formatMonth = locale.format("%b")
  const formatYear = locale.format("%Y")

  const endpointMatching = {
    'entreprises': 'v3/entreprises_restored',
    'etablissements': 'v3/etablissements_restored',
    'extraits_rcs_infogreffe': 'v2/extraits_rcs_infogreffe',
    'associations': 'v2/associations',
    'documents_associations': 'v2/documents_associations',
    'actes_inpi': 'v2/documents_inpi#actes',
    'conventions_collectives': 'v2/conventions_collectives',
    'exercices': 'v2/exercices',
    'bilans_inpi': 'v2/documents_inpi#bilans',
    'bilans_entreprises_bdf': 'v2/bilans_entreprises_bdf',
    'liasses_fiscales_dgfip': 'v2/liasses_fiscales_dgfip',
    'attestations_fiscales_dgfip': 'v2/attestations_fiscales_dgfip',
    'attestations_sociales_acoss': 'v2/attestations_sociales_acoss',
    'attestations_agefiph': 'v2/attestations_agefiph',
    'cotisations_msa': 'v2/cotisations_msa',
    'cotisation_retraite_probtp': 'v2/eligibilites_cotisation_retraite_probtp',
    'cartes_professionnelles_fntp': 'v2/cartes_professionnelles_fntp',
    'certificats_cnetp': 'v2/certificats_cnetp',
    'certificats_rge_ademe': 'v2/certificats_rge_ademe',
    'certificats_qualibat': 'v2/certificats_qualibat',
    'certificats_opqibi': 'v2/certificats_opqibi',
    'extraits_courts_inpi': 'v2/extraits_courts_inpi'
  }

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

  function getTotal(days) {
    let callCount = 0
    for (const key in days) {
      callCount += days[key].total
    }
    return callCount
  }

  function fetchAvailability(endpoint) {
    fetch('https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/provider_availabilities?period=6M&endpoint=api/'+endpointMatching[endpoint])
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Erreur lors de la récupération des données')
        }
      })
      .then(data => {
        if (!data.error) {
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
            let daily
            if (!data.days_availability[key].total) {
              daily = 100
            } else {
              daily = (((data.days_availability[key].total - data.days_availability[key]['502']) / data.days_availability[key].total)* 100).toFixed(2)
            }
            const month = key.split('-')[1]
            dataset.push({x: new Date(key), y: daily, 'month': month})
          }
          buildChart(endpoint, dataset)
        }
      })
  }

  function getErrors(days, callCount) {
    let errorCount = 0
    for (const key in days) {
      errorCount += days[key]['502']
    }
    return ((callCount - errorCount)/callCount).toFixed(2)
  }

  function buildChart(endpoint, dataset) {
    const margin = {top: 10, right: 50, bottom: 50, left: 150}
    const width = document.getElementById(endpoint+'-chart').offsetWidth - margin.left - margin.right // Use the window's width 
    const height = document.getElementById(endpoint+'-chart').offsetHeight - margin.top - margin.bottom; // Use the window's height
  
    const n = dataset.length;

    // X scale uses success rate by day
    const x = d3.scaconstime()
                .domain(d3.extent(dataset, d => d.x)) // input
                .rangeRound([0, width]) // output
    
    // Y scale uses percentages
    const y = d3.scaleLinear()
                .domain([0, 100]) // input 
                .range([height, 0]) // output 
    
    // Generate line
    const line = d3.line()
                    .x(d => x(d.x))
                    .y(d => y(d.y))
                    .curve(d3.curveMonotoneX)
    
    // Add the SVG to the page
    const svg = d3.select('#'+endpoint+'-chart').append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
    // Create the X axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(multiFormat)) // Create an axis component with d3.axisBottom
        
    // Create the Y axis
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y))
        
    // Create the gradient 
    svg.append('linearGradient')
        .attr('id', "availability-gradient")
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', 0)
        .attr('y1', height - margin.bottom)
        .attr('x2', 0)
        .attr('y2', 0)
      .selectAll('stop')
        .data([{ offset: '0%', color: '#600462' },
               { offset: '70%', color: '#600462' },
               { offset: '78%', color: '#D32121' },
               { offset: '83%', color: '#D32121' },
               { offset: '90%', color: '#FFAD33' },
               { offset: '98%', color: '#FFAD33' },
               { offset: '100%', color: '#7ED321' }])
      .enter().append('stop')
        .attr('offset', d => d.offset)
        .attr('stop-color', d => d.color)

    // Append the path, bind the data, and call the line generator 
    svg.append("path")
        .datum(dataset) // 10. Binds data to the line 
        .attr("class", "line") // Assign a class for styling 
        .attr("d", line) // 11. Calls the line generator

    // Append industrial standard marker, lowered to 99 so it doesn't mix with 100%
    svg.append('line')
        .attr('class', 'standard')
        .style('stroke', '#489CFF')
        .style('stroke-width', '2px')
        .style('stroke-dasharray', ('8, 3'))
        .attr('x1', -35)
        .attr('x2', width)
        .attr('y1', height - (height * 99) / 100)
        .attr('y2', height - (height * 99) / 100)

    // Append industrial standard text, but no wrapping possible in svg
    svg.append('text')
        .attr('class', 'standard-text')
        .style('fill', '#489CFF')
        .style('font-size', '12px')
        .text('standard')
        .attr('x', -40)
        .attr('y', height - (height * 99) / 100)
        .attr('text-anchor', 'end')
      
    svg.append('text')
        .attr('class', 'standard-text')
        .style('fill', '#489CFF')
        .style('font-size', '12px')
        .text('industriel')
        .attr('x', -40)
        .attr('y', height - (height * 99) / 100 + 15)
        .attr('text-anchor', 'end')

    svg.append('text')
        .attr('class', 'standard-text')
        .style('fill', '#489CFF')
        .style('font-size', '12px')
        .text('99,8%')
        .attr('x', -40)
        .attr('y', height - (height * 99) / 100 + 30)
        .attr('text-anchor', 'end')
  }

  function multiFormat(date) {
    return (d3.timeSecond(date) < date ? formatMillisecond
        : d3.timeMinute(date) < date ? formatSecond
        : d3.timeHour(date) < date ? formatMinute
        : d3.timeDay(date) < date ? formatHour
        : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
        : d3.timeYear(date) < date ? formatMonth
        : formatYear)(date)
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
      const activeTabContent = document.getElementById(clickedTab.href.split('#')[1])
      activeTabContent.className += ' tab-content--active'

      if (activeTabContent.classList.contains('availability') && !activeTabContent.querySelector('.chart svg')) {
        fetchAvailability(clickedParent.parentElement.getAttribute('id'))
      }
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
