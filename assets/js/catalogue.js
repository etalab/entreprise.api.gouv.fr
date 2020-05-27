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
  
  const charts = document.getElementsByClassName('availability-pie')
  const values = [[84, '#17bd3d'], [8, '#ffc107'], [6, '#d19d00'], [2, '#dc3545']]
  let startingPoint = 0

  for (let i = 0; i < charts.length; i++) {
    values.forEach(value => {
      charts[i].prepend(pieChart(value[0], 250, value[1], startingPoint))
      startingPoint += 360 * value[0] / 100
    })
  }
  
  const el = document.getElementsByClassName('documentation-card')
  const commentSwitches = document.getElementsByClassName('toggle-comments')

  for (let i = 0; i < el.length; i++) {
    el[i].querySelectorAll('.tab-list')[0].addEventListener('click', onTabClick, false)
    commentSwitches[i].addEventListener('click', toggleComments, false)
  }
}
