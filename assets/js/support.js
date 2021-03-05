window.addEventListener('load', function() {
  init()

  function init() {
    var disableSearch = new URLSearchParams(window.location.search).get('disable-search');

    if (window.location.hash) {
      const hash = window.location.hash
      openDetails(hash)
    }

    if (!disableSearch && !window.location.hash) {
      setupSearch()
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
      indexName: 'entreprise.api.gouv.fr_support',
      searchClient,
      routing: true
    });

    document.getElementById('hits').classList.remove('hidden');
    document.getElementById('hits-fallback').classList.add('hidden');

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
        autofocus: true,
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
            var extra = '';
            var searchBox = document.getElementsByClassName('ais-SearchBox-input')[0];

            if (searchBox.value != '' && result.__hitIndex == 0) {
              extra += ' open';
            }

            return `
              <details class="entry fold" id="${ result.objectID }"${ extra }>
                <summary>
                  <h3>
                    ${instantsearch.highlight({ attribute: 'question', hit: result })}
                  </h3>
                  <span class="label hide-xs">
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

  function openDetails(hash) {
    const target = document.getElementById(decodeURIComponent(hash.substring(1)))

    if (target) {
      let el = target.children[0]

      if (el) {
        el.open = true
      }

      setTimeout(function() {
        target.scrollIntoView()
      }, 100);
    }
  }
})
