window.addEventListener('load', function (e) {
  if (window.location.hash) {
    const hash = window.location.hash
    openDetails(hash)
  }

  const links = document.querySelectorAll('.documentation a')

  addAnchorButtonsToDocumentContentPanel();

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', onTitleClick, false)
  }
})

function addAnchorButtonsToDocumentContentPanel() {
  const panelsContentHeadings = document.querySelectorAll('.documentation .panel-content h2,h3,h4,h5,h6')

  for (let i = 0; i < panelsContentHeadings.length; i++) {
    buildAnchorButton(panelsContentHeadings[i]);
  }
}

function buildAnchorButton(heading) {
  var svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgNode.setAttributeNS(null, 'viewBox', '0 0 24 24');
  svgNode.setAttribute('class', 'tpl-icon');

  var buttonNode = document.createElement('button');
  buttonNode.setAttribute('class', 'tpl-button tpl-button--alternate button-link');
  buttonNode.setAttribute('data-link', 'doc/#'+heading.id);
  buttonNode.setAttribute('title', 'Copier le lien vers cette section');

  buttonNode.appendChild(svgNode);
  buttonNode.addEventListener('click', onButtonClick, false);
  heading.appendChild(buttonNode);

  var useSvg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#link');
  svgNode.appendChild(useSvg);
}

function onTitleClick(evt) {
  const href = evt.target.attributes.href.value
  const index = href.indexOf('#')
  if (index >= 0) {
    openDetails(decodeURI(href.substring(index)))
  }
}

function openDetails(hash) {
  const target = document.getElementById(decodeURIComponent(hash.substring(1)))

  if (target) {
    let el = target

    while (el.closest('details')) {
      if (el.tagName.toLowerCase() === 'details') {
        el.open = true
      }
      el = el.parentNode
    }

    setTimeout(function() {
      target.scrollIntoView()
    }, 100);
  }
}
