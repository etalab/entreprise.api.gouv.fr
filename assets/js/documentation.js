window.addEventListener('load', function (e) {
  function initDocumentation() {
    if (window.location.hash) {
      const hash = window.location.hash
      openDetails(hash)
    }

    const links = document.querySelectorAll('.documentation a')

    addAnchorButtonsToDocumentContentPanel();

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', onTitleClick, false)
    }

    var disableSearch = new URLSearchParams(window.location.search).get('disable-search');

    if (!disableSearch && !window.location.hash) {
      setupSearch()
    }
  }

  initDocumentation();
})

function setupSearch() {
  const searchResultsId = '#hits';
  const searchBoxId = '#search-box';

  var lastTitle = null;

  var searchClient = algoliasearch(
    '4NUM23WKJI',
    'b42036d3e76e8385accfb660836a59d1'
  );
  var search = instantsearch({
    indexName: 'entreprise.api.gouv.fr_documentation',
    searchClient,
    routing: true,
    searchFunction: function(helper) {
      helper.on('search', function() {
        lastTitle = null;
      });

      helper.search();
    }
  });

  document.getElementById('search-box-wrapper').classList.remove('hidden');
  document.getElementById('hits').classList.remove('hidden');
  document.getElementById('hits-fallback').classList.add('hidden');

  // https://www.algolia.com/doc/api-reference/api-parameters/filters/
  search.addWidget(
    instantsearch.widgets.configure({
      filters: 'kind:documentation',
      attributesToHighlight: [
        'panel_title',
        'panel_content'
      ],
      highlightPreTag: '<span class="search-highlight">',
      highlightPostTag: '</span>'
    })
  );

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: searchBoxId,
      autofocus: true,
      placeholder: 'Rechercher par mots clés',
      cssClasses: {
        root: 'algolia-search',
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      escapeHTML: false,
      templates: {
        empty: '<h1 class="center">Désolé, votre recherche ne renvoie aucun résultat 😕</h1>',
        item(result) {
          var extraDetails = '';
          var extraTitleCss = '';

          var searchBox = document.getElementsByClassName('ais-SearchBox-input')[0];

          if (searchBox.value != '' && result.__hitIndex == 0) {
            extraDetails += ' open first-result';
          }

          if (result.title != lastTitle) {
            lastTitle = result.title;
            title = `
              <h2 class="category-title ${extraTitleCss}" id="${ result.id }">
                ${ result.title }

                <button class="tpl-button tpl-button--alternate button-link" data-link="doc/#${ result.identifier }" title="Copier le lien vers cette section">
                  <svg class="tpl-icon" viewBox="0 0 24 24">
                    <use xlink:href="#link"></use>
                  </svg>
                </button>
              </h2>
            `;
          }
          else {
            title = '';
          }

          return `
            ${title}

            <details class="fold" id="${ result.panel_id }"${ extraDetails }>
              <summary>
                <h3 class="link-ref">
                  ${instantsearch.highlight({ attribute: 'panel_title', hit: result })}

                  <button class="tpl-button tpl-button--alternate button-link" data-link="doc/#${ result.panel_id }" title="Copier le lien vers cette section">
                    <svg class="tpl-icon" viewBox="0 0 24 24">
                      <use xlink:href="#link"></use>
                    </svg>
                  </button>
                </h3>
              </summary>
              <div class="panel-content">
                ${instantsearch.highlight({ attribute: 'panel_content', hit: result })}
              </div>
            </details>
          `;
        }
      }
    })
  );

  search.start();

  search.on('render', () => {
    addAnchorButtonsToDocumentContentPanel();
    initButtonLink();
    unfoldFirstResult();
  });
}

function addAnchorButtonsToDocumentContentPanel() {
  const panelsContentHeadings = document.querySelectorAll('.documentation .panel-content h4,h5,h6')

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

function unfoldFirstResult() {
  var firstResult = document.querySelectorAll('[first-result]')[0];

  if (firstResult) {
    var detailsLinkWithinFirstResult = firstResult.getElementsByTagName('details');

    for ( var i = 0 ; i < detailsLinkWithinFirstResult.length ; i++ ) {
      detailsLinkWithinFirstResult[i].open = true;
    }
  }
}
