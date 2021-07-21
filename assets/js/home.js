window.addEventListener('load', function (_e) {
  function init() {
    setupHomeSearch();
  }

  init();
});

function setupHomeSearch() {
  const searchBoxId = '#search-box';

  var searchClient = algoliasearch(
    '4NUM23WKJI',
    'b42036d3e76e8385accfb660836a59d1'
  );

  var search = instantsearch({
    indexName: 'entreprise.api.gouv.fr_documentation_home',
    searchClient,
    routing: true,
    searchFunction: function(helper) {
      if (helper.state.query == '') {
        document.getElementById('hits').classList.add('hidden')
      }
      else {
        document.getElementById('hits').classList.remove('hidden')
      }

      helper.search();
    }
  });

  document.getElementById('search-box-wrapper').classList.remove('hidden');

  search.addWidgets([
    instantsearch.widgets.configure({
      filters: 'kind:documentation',
      hitsPerPage: 4,
    }),

    instantsearch.widgets.searchBox({
      container: searchBoxId,
      autofocus: true,
      placeholder: 'Recherche par mot clé dans le site internet (documentation, catalogue des données disponibles, ...)',
      cssClasses: {
        root: 'algolia-search',
      }
    }),

    instantsearch.widgets.hits({
      container: '#hits-documentation',
      escapeHTML: false,
      templates: {
        empty(results) {
          handleSiretSearch(results.query);
          return 'Aucun résultat';
        },
        item(result) {
          resultTemplate = `<a class="result" href="doc/#${ result.panel_id }">
                              ${ result.panel_title }
                            </a>`;

          if (result.__hitIndex == 3) {
            query = document.getElementsByClassName('ais-SearchBox-input')[0].value;
            resultTemplate += `
                              <div class="see-more">
                                Pour consulter l'ensemble des occurences, poursuivez-votre recherche sur
                                la page
                                <a href="doc/?entreprise.api.gouv.fr_documentation%5Bquery%5D=${ query }">Documentation générale</a>
                              </div>
              `;
          }

          return resultTemplate;
        }
      }
    }),

    instantsearch.widgets
      .index({ indexName: 'entreprise.api.gouv.fr_support_home' })
      .addWidgets(
        [
          instantsearch.widgets.configure({
            filters: 'enable:true AND kind:support',
          }),
          instantsearch.widgets.hits({
            container: '#hits-support',
            escapeHTML: false,
            templates: {
              empty() {
                return 'Aucun résultat';
              },
              item(result) {
                return `<a class="result" href="support/#${ result.id }">
                          ${ result.question }
                        </a>
                  `;
              }
            }
          })
        ]
      ),

    instantsearch.widgets
      .index({ indexName: 'entreprise.api.gouv.fr_catalogue_home' })
      .addWidgets(
        [
          instantsearch.widgets.configure({
            filters: 'kind:catalogue',
          }),
          instantsearch.widgets.hits({
            container: '#hits-catalogue',
            escapeHTML: true,
            templates: {
              empty() {
                return 'Aucune donnée';
              },
              item(result) {
                descriptionBlock = document.createElement('p');
                descriptionBlock.innerHTML = result.description;
                descriptionLinks = descriptionBlock.querySelectorAll('a');

                descriptionLinks.forEach(link => {
                  const el = document.createElement('span');
                  el.textContent = link.textContent
                  link.parentNode.replaceChild(el, link);
                });

                return `<a class="result" href="catalogue/#a-${ result.label }">
                          <div class="header">
                            <strong>
                              ${ result.title }
                            </strong>
                            -
                            <span class="providers">
                              ${ result.providers.join(', ') }
                            </span>

                            <div class="type">
                              ${ result.type }
                            </div>
                          </div>

                          <div class="description">
                            ${ descriptionBlock.innerHTML }
                          </div>
                        </a>
                  `;
              }
            }
          })
        ]
      ),

    instantsearch.widgets
      .index({ indexName: 'entreprise.api.gouv.fr_use_cases' })
      .addWidgets(
        [
          instantsearch.widgets.configure({
            filters: 'kind:use_case',
            restrictSearchableAttributes: [
              'title',
            ],
          }),
          instantsearch.widgets.hits({
            container: '#hits-use-cases',
            escapeHTML: false,
            templates: {
              empty() {
                return 'Aucun résultat';
              },
              item(result) {
                return `<a class="result" href="use_cases/${ result.id }/">
                          ${ result.title }
                        </a>
                  `;
              }
            }
          })
        ]
      ),
    ]
  );

  search.start();
}

function handleSiretSearch(query) {
  var sirenRegex = /\d{9}/;
  var siretRegex = /\d{14}/;

  var sanitizedQuery = query.replace(/\s/g, '');
  var sirenMatches = sanitizedQuery.match(sirenRegex);
  var siretMatches = sanitizedQuery.match(siretRegex);
  var str;

  if (sirenMatches) {
    str = 'Il semblerait que vous essayez de rechercher des informations sur un siret ou siren spécifique, vous pouvez effectuer cette recherche sur le site <a href="https://annuaire-entreprises.data.gouv.fr/" target="_blank">https://annuaire-entreprises.data.gouv.fr/</a>.';

    if (siretMatches) {
      str += '<br /><br />';
      str += 'Vous pouvez obtenir les informations du siret '+siretMatches[0]+' en suivant <a href="https://annuaire-entreprises.data.gouv.fr/etablissement/'+siretMatches[0]+'" target="_blank">ce lien</a>.';
    }

    str += '<br /><br />';
  }
  else {
    str = '';
  }

  document.getElementById('hits-disclaimer').innerHTML = str;
}
