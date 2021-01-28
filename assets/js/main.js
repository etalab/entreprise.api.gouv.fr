window.addEventListener('load', function() {
  init()

  function init() {
    checkExternalLinks()
    setupSearch()
  }

  function checkExternalLinks() {
    const links = document.querySelectorAll('a')

    for(let i = 0; i < links.length; i++) {
      if (links[i].hasAttribute('target') && links[i].getAttribute('target') === '_blank') {
        links[i].classList.add('external-link')
      }
    }
  }

  function setupSearch() {
    const searchResultsId = '#hits';
    const searchBoxId = '#search-box';

    var searchClient = algoliasearch(
      '4NUM23WKJI',
      'b42036d3e76e8385accfb660836a59d1'
    );
    var search = instantsearch({
      indexName: 'prod_api_entreprise_site',
      searchClient
    });

    // https://www.algolia.com/doc/api-reference/api-parameters/filters/
    search.addWidget(
      instantsearch.widgets.configure({
        filters: 'enable:true AND kind:support',
        attributesToHighlight: [
          'question',
          'answer'
        ],
        highlightPreTag: '<span class="search-highlight">',
        highlightPostTag: '</span>'
      })
    );

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: searchBoxId,
        placeholder: 'Écrivez votre question ici',
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
          empty: '',
          item(result) {
            return `
              <details class="entry fold" id="${ result.objectID }">
                <summary>
                  <h3>
                    ${instantsearch.highlight({ attribute: 'question', hit: result })}
                  </h3>
                  <span class="label">
                    ${ result.label }
                  </span>
                </summary>
                <div class="panel-content">
                  ${instantsearch.highlight({ attribute: 'answer', hit: result })}
                </div>
            `;
          }
        }
      })
    );

    search.start();
  }
})
