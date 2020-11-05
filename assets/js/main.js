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

    var search = instantsearch({
      appId: '4NUM23WKJI',
      apiKey: 'b42036d3e76e8385accfb660836a59d1',
      indexName: 'prod_api_entreprise_site',
      routing: true,
      searchFuntion: function(helper) {
        var searchResults = $(searchResultsId);

        console.log(helper.state.query);
        if (helper.state.query === '') {
          searchResults.hide();
          return;
        }
        console.log('search');

        helper.search();
        searchResults.show();
      }
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: searchBoxId,
        placeholder: 'Rechercher',
        cssClasses: {
          root: 'algolia-search',
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: '<h5>' +
              'Pas de résultat à votre recherche' +
            '</h5>',
          item: '<a class="" href="{{url}}">' +
            '<div class="">' +
              '{{{_highlightResult.name.value}}}' +
            '</div>' +
          '</a>'
        }
      })
    );

    search.start();
  }
})
