window.addEventListener('load', function (e) {
  const months = {
    0: 'janvier',
    1: 'février',
    2: 'mars',
    3: 'avril',
    4: 'mai',
    5: 'juin',
    6: 'juillet',
    7: 'août',
    8: 'septembre',
    9: 'octobre',
    10: 'novembre',
    11: 'décembre'
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

  const endpointMatching = {
    'entreprises': {
      'availability': 'v3/entreprises_restored',
      'current_status': 'apie_2_etablissements'
    },
    'etablissements': {
      'availability': 'v3/etablissements_restored',
      'current_status': 'apie_2_etablissements'
    },
    'extraits_rcs_infogreffe': {
      'availability': 'v2/extraits_rcs_infogreffe',
      'current_status': 'apie_2_extraits_rcs_infogreffe'
    },
    'associations': {
      'availability': 'v2/associations',
      'current_status': 'apie_2_associations_rna'
    },
    'documents_associations': {
      'availability': 'v2/documents_associations',
      'current_status': 'apie_2_documents_associations_rna'
    },
    'actes_inpi': {
      'availability': 'v2/documents_inpi#actes',
      'current_status': 'apie_2_actes_inpi'
    },
    'conventions_collectives': {
      'availability': 'v2/conventions_collectives',
      'current_status': 'apie_2_conventions_collectives'
    },
    'exercices': {
      'availability': 'v2/exercices',
      'current_status': 'apie_2_exercices_dgfip'
    },
    'bilans_inpi': {
      'availability': 'v2/documents_inpi#bilans',
      'current_status': 'apie_2_bilans_inpi'
    },
    'bilans_entreprises_bdf': {
      'availability': 'v2/bilans_entreprises_bdf',
      'current_status': 'apie_2_bilans_entreprises_bdf'
    },
    'liasses_fiscales_dgfip': {
      'availability': 'v2/liasses_fiscales_dgfip',
      'current_status': 'apie_2_liasses_fiscales_dgfip_declaration'
    },
    'attestations_fiscales_dgfip': {
      'availability': 'v2/attestations_fiscales_dgfip',
      'current_status': 'apie_2_attestations_fiscales_dgfip'
    },
    'attestations_sociales_acoss': {
      'availability': 'v2/attestations_sociales_acoss',
      'current_status': ''
    },
    'attestations_agefiph': {
      'availability': 'v2/attestations_agefiph',
      'current_status': 'apie_2_attestations_agefiph'
    },
    'cotisations_msa': {
      'availability': 'v2/cotisations_msa',
      'current_status': 'apie_2_cotisations_msa'
    },
    'cotisation_retraite_probtp': {
      'availability': 'v2/eligibilites_cotisation_retraite_probtp',
      'current_status': 'apie_2_eligibilites_cotisation_retraite_probtp'
    },
    'cartes_professionnelles_fntp': {
      'availability': 'v2/cartes_professionnelles_fntp',
      'current_status': 'apie_2_cartes_professionnelles_fntp'
    },
    'certificats_cnetp': {
      'availability': 'v2/certificats_cnetp',
      'current_status': 'apie_2_certificats_cnetp'
    },
    'certificats_rge_ademe': {
      'availability': 'v2/certificats_rge_ademe',
      'current_status': 'apie_2_certificats_rge_ademe'
    },
    'certificats_qualibat': {
      'availability': 'v2/certificats_qualibat',
      'current_status': 'apie_2_certificats_qualibat'
    },
    'certificats_opqibi': {
      'availability': 'v2/certificats_opqibi',
      'current_status': 'apie_2_certificats_opqibi'
    },
    'extraits_courts_inpi': {
      'availability': 'v2/extraits_courts_inpi',
      'current_status': 'apie_2_extraits_courts_inpi'
    }    
  }

  const instance = new Mark(document.querySelectorAll('.documentation-card'))
  const searchInput = document.querySelector('input[name="catalogue-search"]')
  const scopeFilter = document.querySelector('select[name="catalogue-scope"]')
  const typeFilter = document.querySelector('select[name="catalogue-type"]')
  const usecaseFilter = document.querySelector('select[name="catalogue-usecase"]')
  const providerFilter = document.querySelector('select[name="catalogue-providers"]')
  const stateFilter = document.querySelector('select[name="catalogue-openstate"]')
  const el = document.getElementsByClassName('documentation-card')
  const tabs = document.querySelectorAll('.tab-list a')
  const commentSwitches = document.getElementsByClassName('toggle-comments')

  init()

  function init() {
    for (let i = 0; i < el.length; i++) { commentSwitches[i].addEventListener('click', toggleComments, false) }
    for (let i = 0; i < tabs.length; i++) { tabs[i].addEventListener('click', onTabClick, false) }
    searchInput.addEventListener("input", delay(performMark))
    scopeFilter.addEventListener("change", toggleNonMarkedPanels)
    typeFilter.addEventListener("change", toggleCategories)
    usecaseFilter.addEventListener("change", toggleNonMarkedPanels)
    providerFilter.addEventListener("change", toggleNonMarkedPanels)
    stateFilter.addEventListener("change", toggleNonMarkedPanels)
  
    checkAnchor()

    //search and filtering
    toggleNonMarkedPanels()
    toggleCategories()

    initEndpointStatus()
  }

  function checkAnchor() {
    if (window.location.hash) {
      const hash = window.location.hash
      openCatalogue(hash)
    }
  }

  function openCatalogue(hash) {
    const target = document.getElementById(hash.substring(1))
    if (target) {
      target.querySelector('.tab-list a').click()
    }
  }

  /* highlight on search */

  // init mark.js
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
  
  // wait for user to stop typing
  function delay(fn) {
    let timer = 0
    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(fn.bind(this, ...args), 200)
    }
  }

  // hide panel if they don't match search criterias
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
          
          if (scope && !panels[j].hasAttribute('data-'+scope)) { shouldHide = true } 
          if (usecase && !panels[j].hasAttribute('data-'+usecase)) { shouldHide = true }
          if (provider && !panels[j].hasAttribute('data-'+provider)) { shouldHide = true }
          if (state && !(panels[j].getAttribute('data-openstate') == state)) { shouldHide = true }

          if (shouldHide) { panels[j].classList.add('hidden') }
          else {
            if (!searchInput.value || searchInput.value !== '' && panels[j].querySelector('mark') !== null) {
              panels[j].classList.remove('hidden')
              shouldHideCategory = false
            } else {
              panels[j].classList.add('hidden')
            }
          }
        }
      } else { categories[i].classList.add('hidden') }

      if (shouldHideCategory) { categories[i].classList.add('hidden') }
      else {
        categories[i].classList.remove('hidden')
        noResults = false
      }
    }

    const emptyPanel = document.getElementById('no-results')

    if (noResults) { emptyPanel.classList.remove('hidden') }
    else { emptyPanel.classList.add('hidden')}

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

  // hide a category if no children match search criteria
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

  // technical doc and availability tab behaviour
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
    if (clickedTab.href && clickedTab != activeTab[0]) {
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
    const container = toggle.closest('.json-example').querySelector('code')
    
    const comments = container.querySelectorAll('.c1, .err')

    for (i = 0; i < comments.length; i++) {
      if (toggle.checked) {
        comments[i].style.display = 'inline'
      } else {
        comments[i].style.display = 'none'
      }
    }
  }

  /* availability */

  function initEndpointStatus() {
    fetch('https://dashboard.entreprise.api.gouv.fr/api/watchdoge/dashboard/current_status')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Erreur lors de la récupération des statuts')
        }
      })
      .then(data => {
        if (!data.error) {
          for (let i = 0; i < el.length; i++) {
            const id = el[i].getAttribute('id')
            const status = el[i].querySelector('.status-marker')
            const uname = endpointMatching[id].current_status
  
            for (key in data.results) {
              if (data.results[key].uname == uname) {
                switch (data.results[key].code) {
                  case 200:
                    status.innerHTML = 'OK'
                    status.classList.add('success')
                    break
                  default:
                    status.innerHTML = 'Non disponible'
                }
              }
            }
          }
        }
      })
  }

  function fetchAvailability(endpoint) {
    fetch('https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/provider_availabilities?period=6M&endpoint=api/'+endpointMatching[endpoint].availability)
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
          const callCount = getTotal(data.days_availability)
          let rateClass = ''
    
          if (typeof data.total_availability === 'number') {
            if (data.total_availability >= 99.5) { rateClass = 'spot--sup99' }
            else if (data.total_availability >= 90) { rateClass = 'spot--sup90' }
            else if (data.total_availability >= 80) { rateClass = 'spot--sup80' }
            else { rateClass = 'spot--sub80' }
          }

          panel.querySelector('.spot').classList.add(rateClass)
          panel.querySelector('.rate').innerHTML = data.total_availability + '%'
          panel.querySelector('.call-count').innerHTML = callCount
          panel.querySelector('.fd-errors').innerHTML = getErrors(data.days_availability, callCount) + '%'
    
          const dataset = buildDataset(data)
          buildChart(endpoint, dataset)
          buildTable(panel.querySelector('.availability-table'), dataset)
        }
      })
  }

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

  function buildDataset(data) {
    let dataset = []
    for (let key in data.days_availability) {
      let daily
      if (!data.days_availability[key].total) {
        daily = 100
      } else {
        daily = (((data.days_availability[key].total - data.days_availability[key]['502']) / data.days_availability[key].total)* 100).toFixed(2)
      }
      dataset.push({x: new Date(key), y: daily, 'month': key.split('-')[1]})
    }
    return dataset
  }

  function buildChart(endpoint, dataset) {
    const margin = {top: 10, right: 50, bottom: 50, left: 100}
    const width = document.getElementById(endpoint+'-chart').offsetWidth - margin.left - margin.right // container width 
    const height = document.getElementById(endpoint+'-chart').offsetHeight - margin.top - margin.bottom; // container height
    const n = dataset.length;

    // X scale uses success rate by day
    const x = d3.scaleTime()
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
        .call(d3.axisBottom(x).tickFormat(locale.format("%b"))) // Create an axis component with d3.axisBottom
        
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

  function buildTable(container, dataset) {
    let currentMonth = ''
    let currentColumn
    dataset.forEach(d => {
      let rateClass = ''
      let monthLegend = ''
      const month = d.x.getMonth()

      if (currentMonth !== month) {
        currentMonth = month
        currentColumn = document.createElement('div')
        currentColumn.classList.add('month')
        currentColumn.dataset.month = months[month]
        container.append(currentColumn)
      }

      const day = document.createElement('div')
      day.classList.add('day')
      currentColumn.prepend(day)
      if (d.y >= 99.5) { rateClass = 'legend--sup99' }
      else {
        if (d.y >= 90) { rateClass = 'legend--sup90' }
        else if (d.y >= 80) { rateClass = 'legend--sup80' }
        else { rateClass = 'legend--sub80' }
        day.innerHTML = d.y + '%'
      }
      day.classList.add(rateClass)
      day.dataset.day = `${d.x.toLocaleDateString('fr-FR')} ${d.y}%`
    })
  }
})
