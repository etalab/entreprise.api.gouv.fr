---
weight: 1
title: "Étape 1 : L’API Entreprise correspond-elle à mon besoin ?"
identifier: besoins
panels:
  panel1:
    title: Les cas d’usage d’API Entreprise
    id: cas-usage
    content: >-
      <br>API Entreprise répond à deux grands types d’usages :


      <details class="fold">

      <summary>

      ###### Le pré-remplissage d'un formulaire à destination du public

      </summary>


      Vous pouvez mettre en place une aide à la saisie pour vos usagers, avec les endpoints `entreprises`, `etablissements` et `associations`. L’usager renseigne son numéro de SIRET, ou toute autre valeur discriminante ; le formulaire est alors pré-rempli des champs disponibles par votre API.


      {:.example}

      **L'exemple du formulaire DUME**<br>

      L'AIFE a mis en place une démarche dématérialisée pour permettre aux entreprises d’obtenir leur [document Unique de Marché Européen](https://dume.chorus-pro.gouv.fr/). Elle utilise l'API Entreprise pour pré-remplir les formulaires de ses utilisateurs.<br><br><video controls width="400"><source src="../assets/videos/video-cas-usage-preremplissage-dume.mp4"
              type="video/mp4">
       Nous sommes désolés, votre navigateur ne supporte pas les vidéos.
      </video>

      {:.example}


      **Quel avantage à passer par API Entreprise si les données sont libres ?** API Entreprise vous simplifie l'implémentation de cette aide à la saisie, en vous donnant accès à une information structurée, facilement intégrable dans votre produit.

      <br>

      <br>


      {:.tpl-notification.tpl--danger}

      **Le pré-remplissage est possible uniquement pour des APIs distribuant des informations publiques.**

      Par exemple, [l’endpoint `entreprise`](../catalogue/#entreprises){:target="_blank"} qui regroupe des données ouvertes et fermées, ne peut être utilisé pour le pré-remplissage, que **si et seulement si** les entreprises non-diffusibles (dont les données sont confidentielles) ne sont pas appelées.


      {:.tpl-notification.tpl--success}

      La création d’un formulaire pré-rempli est faite pour assister l’usager, celui-ci doit toujours pouvoir amender, rectifier ces mêmes informations sans difficultés.



      </details>


      <details class="fold">

      <summary>

      ###### L’obtention d’une donnée en back office par un agent habilité

      </summary>


      L'API entreprise sert aux agents habilités à récupérer automatiquement des informations, elle donne accès : 


      * soit à des justificatifs, certificats, bilans, ... papiers numérisés ou document PDF ;

      * soit à la donnée brute, décrite par un champ JSON, qui permet une automatisation plus performante encore ;

      * soit les deux.


      </details>


      <center>

      <a class="tpl-button tpl-button--primary" href="../cas_usage/">Découvrir tous les cas d'usage</a>

      </center>
  panel2:
    title: "Le service : une API, plusieurs données et plusieurs fournisseurs"
    id: service
    content: >-
      #### Les qualités du service


      **API Entreprise démarche les administrations et fait les différentes demandes d’accès auprès des multiples fournisseurs.** Si votre demande d'habilitation est validée, vous avez une seule clé d’accès sécurisée. De plus, API Entreprise agrège et vous restitue les connaissances techniques et métiers de chaque API.


      {:.tpl-notification.tpl--success}

      Sans API Entreprise, vous êtes obligé de demander toutes les APIs nécessaires à votre service, auprès des différentes administrations. Cette recherche n'est pas toujours fructueuse car les organisations n'ont pas toutes un site ou un contact public pour leurs APIs. Par ailleurs, vous devez ensuite comprendre plusieurs systèmes techniques, générer plusieurs mots de passe, collaborer avec plusieurs contacts techniques et métiers.


      #### La liste exhaustive des données


      ##### Informations générales <a id="infos_generales"></a>


      {:.tpl-table}

      | Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |

      | ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|

      | [Données de référence d'une entreprise](../catalogue/#entreprises){:target="_blank"}                  |    INSEE & Infogreffe    |            `entreprises`            |    données JSON     |    publiques    |

      | [Données de référence d'un établissement](../catalogue/#etablissements){:target="_blank"}                |          INSEE           |          `etablissements`           |    données JSON     |    publiques    |

      | [Extrait  RCS](../catalogue/#extrait_rcs_infogreffe){:target="_blank"}                                           |        Infogreffe        |         `extraits_rcs_infogreffe`         |    données JSON     |    publiques    |

      | [Informations déclaratives d'une association](../catalogue/#associations){:target="_blank"}                 | Ministère de l'Intérieur |              `associations`               |    données JSON     |    publiques    |

      | [Divers documents d'une association](../catalogue/#documents_associations){:target="_blank"}                     | Ministère de l'Intérieur |         `documents_associations`          |     PDF (image)     |    publiques    |

      | [Actes](../catalogue/#actes_inpi){:target="_blank"}                     | INPI |         `actes_inpi`          |       Archive ZIP (PDF et XML)   |    publiques    |


      ##### Informations financières <a id="infos_financieres"></a>


      {:.tpl-table}

      | Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |

      | ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|

      | [Chiffre d'affaires](../catalogue/#exercices){:target="_blank"}                                     |          DGFIP           |                `exercices`                |    données JSON     | confidentielles |

      | [Bilans annuels](../catalogue/#bilans_inpi){:target="_blank"}                                      |     INPI     |         `bilans_inpi`          |    données JSON     | publiques et confidentielles |

      | [3 derniers bilans annuels](../catalogue/#bilans_entreprises_bdf){:target="_blank"}                                      |     Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |

      | [Déclarations de résultats](../catalogue/#liasses_fiscales_dgfip){:target="_blank"}       |          DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |


      ##### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


      {:.tpl-table}

      | Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |

      | ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|

      | [Attestation fiscale](../catalogue/#liasses_fiscales_dgfip){:target="_blank"}                                    |          DGFIP           |       `attestations_fiscales_dgfip`       |     PDF (texte)     | confidentielles |

      | [Attestation de vigilance](../catalogue/#attestations_sociales_acoss){:target="_blank"}                               |          ACOSS           |       `attestations_sociales_acoss`       |     PDF (texte)     | confidentielles |

      | [Conformité emploi des travailleurs handicapés](../catalogue/#attestations_agefiph){:target="_blank"}  |         AGEFIPH          |          `attestations_agefiph`           |    données JSON     | confidentielles |

      | [Cotisation de sécurité sociale agricole](../catalogue/#cotisations_msa){:target="_blank"}                |           MSA            |             `cotisations_msa`             |    données JSON     | confidentielles |

      | [Cotisations retraite bâtiment](../catalogue/#cotisation_retraite_probtp){:target="_blank"}                       |          PROBTP          | `attestations_cotisation_retraite_probtp` |    données JSON     |    publiques    |

      | [Carte professionnelle travaux publics](../catalogue/#cartes_professionnelles_fntp){:target="_blank"}         |          FNTP           |            `cartes_professionnelles_ftp`            |         PDF         |    publiques    |

      | [Cotisations congés payés & chômage intempéries](../catalogue/#certificats_cnetp){:target="_blank"}         |          CNETP           |            `certificats_cnetp`            |         PDF         |    publiques    |


      ##### Certifications professionnelles <a id="certificats_pro"></a>


      {:.tpl-table}

      | Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |

      | ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|

      | [Certification RGE](../catalogue/#certificats_rge_ademe){:target="_blank"}                                      |          ADEME           |          `certificats_rge_ademe`          | données JSON et PDF |    publiques    |

      | [Certification de qualification bâtiment](../catalogue/#certificats_qualibat){:target="_blank"}                  |          OPQIBI          |           `certificats_qualibat`            |    données JSON     |    publiques    |

      | [Certification de qualification d'ingénierie](../catalogue/#certificats_opqibi){:target="_blank"}                  |          OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |


      ##### Propriété intellectuelle <a id="propriete_intellectuelle"></a>


      {:.tpl-table}

      | Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |

      | ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|

      | [Brevets, modèles et marques déposés](../catalogue/#extraits_courts_inpi){:target="_blank"}                   |           INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |


      <br>


      #### Une documentation technique et métier par endpoint


      Toutes les données de la liste précédente sont détaillées dans le [catalogue de données](../catalogue/).


      |-------------------|:---------------:|

      | Dans ce catalogue, une barre de recherche est à votre disposition pour filtrer les données :              |        ![](../assets/images/documentation/catalogue-barre-de-recherche.png)       |

      |    |        |

      | Chaque endpoint est présenté de façon synthétique :         |       ![](../assets/images/documentation/catalogue-endpoint-presentation.png)      |

      |    |        |

      | Des informations complémentaires, dont le détail précis des champs délivrés par l’API sont disponibles en cliquant sur le bouton “documentation” :         |       ![](../assets/images/documentation/catalogue-documentation-presentation.png)     |


      <center>

      <a class="tpl-button tpl-button--primary" href="../catalogue/">Parcourir le catalogue des données</a>

      </center>


      #### Nos engagements


      Utiliser le service API Entreprise, c'est aussi bénéficier des engagements de la Direction du Numérique : 


      * **L’engagement de disponibilité est de 99,5 %.**
        La disponibilité des données est consultable en temps réel pour chaque endpoint dans le catalogue des donnée. Une historisation est aussi publiée, ainsi que les rapports d’incidents et les perspectives de résolution. Par ailleurs, les informations sur votre consommation sont disponibles dans votre tableau de bord.

        {:.tpl-notification}
        Toutefois, ce service agrégeant de nombreux fournisseurs de données et étant donc dépendant de leurs disponibilités, **API Entreprise ne porte donc aucune responsabilité s’agissant de la qualité ou du contenu intrinsèque des données.** Par ailleurs, le service ne modifie pas les données à l’exception d’une standardisation contextuelle limitée (minuscule vers majuscule, format de date, nombre d’espaces).
      * **L’utilisation d’API Entreprise est gratuite.**
        Les coûts d’investissements et de fonctionnement sont pris en charge par la DINUM. En revanche, les coûts de raccordement à API Entreprise vous incombent.
      * **API Entreprise propose une assistance technique et fonctionnelle** permettant aux utilisateurs de définir et de mettre en œuvre au mieux leur projet.

      * **API Entreprise respecte le cadre légal.**
        Le service s'engage à respecter en totalité les conditions de protection des données et les règles de confidentialité.
  panel3:
    title: "Un accès sous habilitation et sous conditions 🔐 "
    id: acces
    content: >
      #### Une habilitation instruite par la DINUM


      Tout accès à l'API Entreprise se fait sous réserve d'en [avoir obtenu l’habilitation](#demande-habilitation).


      L'API entreprise est **réservée aux acteurs publics investis d’une mission de service public** : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.

      Leurs prestataires privés peuvent être destinataires des informations techniques permettant l'usage de l'API mais en aucun cas des données elles-même.


      #### S'engager à ne pas diffuser les données reçues


      Premièrement, avant toute transmission de données, l’usager doit être informé, et en cas d’exposition des données, son consentement doit être explicite.


      ###### Dans le cas d’un pré-remplissage à destination du public


      Une partie des données des endpoints `entreprise`, `etablissement` et `associations`, les données publiques, peuvent servir au pré-remplissage de formulaires publics. Même si ces données ne sont pas confidentielles, le fournisseur de service s’engage à ne pas commercialiser les données reçues au travers d'API Entreprise et à ne pas les communiquer à des tiers en dehors des cas prévus par la loi.


      ###### Dans le cas d’une utilisation par un agent habilité en back office


      La plupart des données disponibles sur API Entreprise sont protégées par des secrets. Vous assurez donc la protection de ces données et le respect des règles de confidentialité.


      Entre autres, le service ne doit pas permettre à quiconque n’ayant pas un niveau d’authentification suffisant, d’accéder à des données. Leur accès est restreint aux seuls agents dûment habilités, dont les requêtes sont tracées pour une durée de 36 mois.


      #### Avoir un équipement technique minimal


      Vous êtes techniquement en mesure de pouvoir démarrer avec API Entreprise si :


      * vous travaillez ou vous vous apprêtez à travailler avec un éditeur de logiciel.
        Celui-ci doit être en mesure d’intégrer API Entreprise.
      * ou bien vous avez une direction des systèmes d’information (DSI) qui peut intégrer des APIs.


      Pour comprendre en détail les éléments techniques nécessaires consulter la rubrique [Les fondamentaux à mettre en place avec l'équipe technique](#fondamentaux).
---
