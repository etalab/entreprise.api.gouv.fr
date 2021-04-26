---
label: entreprises_artisanales_cma
scope:
  - entreprises
providers:
  - cma
history: "##### 15/01/2021 Création de l'endpoint `entreprises_artisanales_cma`"
weight: 7
type: Informations générales
title: Données de référence d'une entreprise artisanale
description: Obtenir des **informations concernant une entité du Répertoire
  National des Métiers (RNM)**, telles que des données générales et juridiques,
  le type d'activité, des données sur les dirigeants, les dates
  clés de l'entreprise et son adresse. Ces données sont fournies par la Chambre des Métiers et de l'Artisanat
  France (CMA France) et sont également disponibles en [API publique et libre
  d'accès sur api.gouv.fr](https://api.gouv.fr/les-api/api_rnm).
usecases:
  - Aides publiques
  - Marchés publics
  - Préremplissage d'un formulaire
  - Détection de la fraude
opening: Données publiques.
perimeter:
  label: Entreprises enregistrées au RNM.
  description: >-
         Cet endpoint couvre toutes les entreprises enregistrées au [Répertoire National des Métiers](https://rnm.artisanat.fr/).
         <br> <br>
         **Sont obligatoirement immatriculées au répertoire des métiers** :
         <br>

          * ✅&nbsp;les entreprises individuelles et les sociétés qui n’emploient pas plus de dix salariés et exercent à titre principal ou secondaire une activité artisanale de production, de transformation, de réparation ou de prestation de service figurant en [annexe du décret du 2 avril 1998](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000021964896/2009-02-02/).


          * ✅&nbsp;Les personnes qui exercent l’activité de fabrication de plats à consommer sur place peuvent également être immatriculées au répertoire des métiers.
          <br>

         **Peuvent être immatriculées au RNM** :
         <br>

          * ✅&nbsp;les entreprises qui dépassent le seuil de dix salariés si leur dirigeant peut se prévaloir de la qualité d’artisan, d’artisan d’art ou de maitre artisan.
services:
  service1:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de l'établissement
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: context
          description: CadreDeLaRequête
        param3:
          label: recipient
          description: BénéficiaireDel’Appel
        param4:
          label: object
          description: RaisonDeL’AppelOuIdentifiant
      url: |-
        **entreprises_artisanales_cma/**SirenDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse se compose d'une clé 'entreprise' regroupant :


        * des **informations générales et juridiques** (nom de l'entreprise, personne physique/morale, forme juridique, effectif, l'origine du fond de commerce, activité permanente/saisonnière, activité ambulante, code du centre de formalité des entreprises (CFE) ayant fait l'inscription et les déclarations, s'il y en a, relatives à un redressement judiciaire ou une liquidation.)

        * le **type d'activité** de l'entreprise (code NAFA et secteur d'activité (NAR)) ;

        * des **informations géographiques**, notamment l'adresse ;

        * des informations sur les **dirigeants** ;

        * les **dates clés** (immatriculation, radiation, début d'activité ...)

        * des informations en cas de **double immatriculation** ;

        * des **informations spécifiques au RNM** (identifiants, dates d'import et **date de mise à jour** des données) ;
      sample:
        code: >+
          {
            "entreprise": {

          // INFORMATIONS GÉNÉRALES ET JURIDIQUES

              "siren": 301123626,
              "denomination_sociale": "DUPOND Jean",
              // Il s'agit du nom porté par la société. Dans le cadre de la création d'une entreprise individuelle (EI, EIRL, ou micro-entreprise), la dénomination sociale se confond avec la raison sociale et correspond au nom de famille du créateur d'entreprise, qui peut s'accompagner de son prénom.
              "sigle": "MSN",
              // Forme réduite de la dénomination ou raison sociale de la personne morale ou de l'organisme public. Souvent les initiales.
              "categorie_personne": "PP",
              // Indique s'il s'agit d'une personne physique "PP" ou d'une personne morale "PM".
              "forme_juridique_id": 5499,
              // Code de la catégorie juridique, issu d'une nomenclature de l'INSEE et servant aux Centres de Formalités des Entreprises (CFE) pour recueillir les déclarations des entreprises. La nomenclature est disponible ici : https://www.insee.fr/fr/information/2028129
              "forme_juridique_label": "Société à responsabilité limitée (sans autre indication)",
              // Intitulé correspondant au code de la catégorie juridique.
              "effectif_salarie": 12,
              // Nombre de salarié dans l'entreprise.
              "effectif_apprenti": 1,
              // Nombre d'apprentis dans l'entreprise.
              "etablissement_origine_id": 3,
              // Indique l'origine du fond ou l'origine de l'activité, telle que déclarée par la personne morale ou physique au moment de la création de l'entreprise artisanale. Elle est donc tirée des formulaires P0 ou M0, disponibles à la lecture ici : https://www.cfe-metiers.com/HTM/cosa.aspx
              // Les valeurs possibles sont "1"(création), "3"(achat), "4"(apport), "6"(prise en location gérance", "7"(partage), "8"(reprise), "F"(gérance-mandat).
              "modalite_exercice": "P",
              // Détermine si l'entreprise a une activité permanente ("P") ou saisonnière ("S"). L'activité est dite saisonnière si chaque année, l'entreprise cesse totalement ses activités pendant plus de 3 mois consécutifs. La valeur "NR" est indiquée si l'information est non renseignée.
              "non_sedentaire": 0,
              // Indique si l'entreprise a une activité ambulante.
              // Les variables possibles sont "0" pour sédentaire, ou "1" pour non-sédentaire.
              "code_cfe": "M7501",
              // L'indentifiant communiqué désigne le Centre de Formalités des Entreprises (CFE) qui a inscrit l'entreprise.
              "declaration_procedures": "30.09.1994 Ouverture de procedure normale de redressement;15.10.1994 Prolongation periode d'observation;11.11.1994 Prolongation periode d'observation;18.01.1995 Prolongation periode d'observation;20.03.1995 Prolongation periode d'observation;10.05.1995 Prolongation periode d'observation;14.07.1995 Prolongation periode d'observation;19.09.1995 Arret du plan de continuation;09.04.2000 Modification des organes de la procedure;28.05.2002 Modification des organes de la procedure",
              //Cette clé regroupe les déclarations de cessation des paiements, des procédures de règlement judiciaire et liquidations des biens ; des procédures tendant à faciliter le redressement économique et financier ; des procédures de sauvegarde, de redressement judiciaire ou de liquidation judiciaire.

          // TYPE D’ACTITVITÉ

              "activite_artisanales_declarees": "PRESTATION DE SERVICE COMMERCE",
              // Indique l'activité pour laquelle l'entreprise a demandé son inscription au répertoire des métiers. La valeur est reprise à l'identique de la liasse déclarative et est purement déclarative (variable E71 selon la norme d'échange).
              "code_norme_activite_entreprises": "9602A",
              // Ce code correspond au code APE de l'entreprise, issu de la nomenclature des activités françaises de l'INSEE. Il définit l'activité principale de l'entreprise. Il est parfois également nommé code NAF.
              "code_nafa_principal": "9602AA",
              // Code issu de la Nomenclature des Activités Françaises de l'Artisanat (NAFA Rèv2) pour l'activité principale au registre des métiers. La liste de ces codes est explorable sur le site de CMA France au lien suivant: http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil
              "code_nafa_libelle": "Coiffure en salon",
              // Libellé du code NAFA.
              "code_nafa_secondaire1": "",
              // Les entreprises artisanales peuvent avoir plusieurs activités d'artisanat. Ce code se réfère à la même nomenclature (NAFA Rèv2) que le code_nafa_principal.
              "code_nafa_secondaire2": "",
              "code_nafa_secondaire3": "",
              "secteur_activite_intitule_nar_4": "SERVICES",
              // Indique le secteur d'activité de l'entreprise selon le code Nomenclature Artisanale Regroupée NAR 4.
              // Les variables possibles sont "ALIMENTATION", "BATIMENT", "PRODUCTION" et "SERVICES".
              "secteur_activite_intitule_nar_20": "TRANSPORT",
              // Indique le secteur d'activité de l'entreprise selon le code Nomenclature Artisanale Regroupée NAR 20. La liste des code et leur libellé est disponible ici : https://entreprise.api.gouv.fr/assets/pdf/liste-nar.pdf

          // INFORMATIONS DIRIGEANTS

              "dirigeant_qualification": "ARTISAN",
              // Indique la qualification artisanale de l'entrepreneur.
              // Les variables possibles sont "ARTISAN", "MAITRE ARTISAN", "ARTISAN D'ART", "MAITRE ARTISAN D'ART", "ARTISAN MAITRE" ET "ARTISAN MAITRE MÉTIERS D'ART". Les deux dernières qualifications sont spécifiques à l'Alsace et la Moselle. Si le dirigeant n'a pas de qualification la mention "SANS QUALIFICATION" est donnée.
              "dirigeant_nom_de_naissance": "DUPONT",
              // Nom dévolu à la personne le jour de la déclaration de sa naissance.
              "dirigeant_nom_usage": "DUTUNNEL",
              // Nom choisi par la personne dont la forme est encadrée (voir bloc question/réponse dans cette documentation).
              "dirigeant_prenom1": "Jean",
              // Le ou les prénoms figurant au registre de l'état civil.
              "dirigeant_prenom2": "Jean",
              "dirigeant_prenom3": "Jean",
              "dirigeant_pseudonyme": "Jean",
              // Nom utilisé par le dirigeant pour se désigner dans l'exercice de son activité, généralement littéraire ou artistique.
              "dirigeant_date_de_naissance": "1950-01-01",
              "dirigeant_lieu_de_naissance": "PARIS",

          // DATES CLÉS

              "date_immatriculation": "1964-06-03T12:00:00Z",
              // Date d'immatriculation au Répertoire des Métiers.
              "date_radiation": "1969-02-03T12:00:00Z",
              // Date de radiation du Répertoire des Métiers. Cette date est déclarative soit d'office.
              "date_debut_activite": "1969-02-03T12:00:00Z",
              // Date de début d'activité déclarée par le dirigeant lors de son immatriculation.
              "date_cessation_activite": "1968-02-01T12:00:00Z",
              // Date de cessation d'activité de la personne morale hors dissolution, appelée aussi mise en sommeil.
              "date_cloture_liquidation": "1979-04-03T12:00:00Z",
              // Date de clôture de la liquidation déclarée lors de la dissolution de la personne morale.
              "date_transfert_patrimoine": "1965-02-04T12:00:00Z",
              // Date de transfert de patrimoine à l'associé unique restant. Cette dissolution de la personne morale résulte du rassemblement de toutes les parts en une seule main.
              "date_dissolution": "1989-02-03T12:00:00Z",
              // Date de dissolution de la personne morale.

          // INFORMATIONS GÉOGRAPHIQUES

              "adresse_numero_voie": 1,
              "adresse_indice_repetition_voie": "B",
              // indique si le numéro de voie est complété par un indicateur de répétition. "B" correspond à bis ; "T" correspond à ter ; "Q" correspond à quater ; et "C" correspond à quinquies.
              "adresse_type_voie": "RUE",
              // désigne le type de voie.
              "adresse_libelle_voie": "DE BELLEVILLE",
              // correspond au libellé de la voie ou au lieu-dit de l'entreprise
              "adresse_complement": "Batiment C",
              "adresse_code_postal": 75010,
              "adresse_commune": "PARIS",
              "adresse_commune_cog": 75119,
              // Code officiel Géographique, plus d'infos : https://www.insee.fr/fr/information/3720946
              "adresse_departement": "PARIS",
              "adresse_region": "ILE-DE-FRANCE",
              "libelle_epci": "Métropole du Grand Paris",
              // Libellé de l'Établissement Public de Coopération Intercommunale correspondant au code officiel géographique de l'entreprise.

          // INFORMATIONS EN CAS DE DOUBLE IMMATRICULATION

          // Certaines entreprises sont assujetties à la double immatriculation Registre du Commerce et des Sociétés / Répertoire des métiers. Il en est notamment ainsi des artisans-commerçants.

              "eirl_id_registre": 1,
              // En cas de double immatriculation, cette clé indique le choix du registre où est déposée la déclaration d'affectation de patrimoine.
              // Deux valeurs possibles sont possible : "1" pour le Registre du Commerce et des Sociétés (RCS) et "2" pour le Répertoire des Métiers (RNM).
              "eirl_denomination": "UMAD Corp EIRL",
              // Dénomination de l'EIRL en cas de double immatriculation. Elle incorpore le nom de l'entrepreneur précédé ou suivi immédiatement des mots : « Entrepreneur Individuel à Responsabilité Limitée » ou des initiales : « EIRL ».
              "eirl_object_activite": "REPARATION ET VENTE DE MATERIELS INFORMATIQUES FORMATION AUDIT ET ASSISTANCE INFORMATIQUE",
              // Objet de l'activité professionnelle à laquelle le patrimoine est affecté en cas de double immatriculation.
              "eirl_date_depot": "1989-02-03T12:00:00Z"
              // Date d'effet du dépôt de la déclaration d'affectation de patrimoine, en cas de double immatriculation.

          // INFORMATIONS SPÉCIFIQUES AU RÉPERTOIRE NATIONAL DES MÉTIERS

              "rnm_id": 123456,
              // Identifiant de l'entreprise, interne à l'API RNM.
              "rnm_numero_gestion": "00012211035",
              // Numéro de gestion interne à l'API RNM. Celui-ci se décompose en trois parties, les trois premiers caractères donnent le code du département ; les deux caractères suivants donnent l'année à laquelle le numéro a été attribué ; et les six derniers sont dédiés au numéro incrémenté.
              "rnm_date_import": "2019-11-02T09:09:25Z",
              // Il s'agit de la date de l'import des données de l'entreprise dans la base de données de l'API RNM.
              "rnm_date_mise_a_jour": "2019-12-02T09:09:25Z",
              // Il s'agit de la date de mise à jour des données transmises. Elle indique donc l'état de fraicheur de chacune des clés de la réponse JSON. La fraicheur des clés effectifs est à prendre avec plus de vigileance (voir bloc question/réponse).

            }
          }

      questions:
        qr1:
          question: Quelle est la fraîcheur de la donnée renvoyée ?
          answer: >-
           ##### Du côté de l'entreprise

           Parmi les événements qui surviennent dans la vie d'une entreprise artisanale, certains d'entre eux doivent être obligatoirement déclarés par l'entreprise à sa chambre de commerce et d'artisanat, c'est à dire son centre de formalité des entreprises.
           **Généralement**, étant donné que toute modification du répertoire implique des coûts, **l'entreprise met à jour l'ensemble de ses données**.
           Voici la liste des évènements qui impliquent obligatoirement une déclaration : Changement d’adresse, changement de nom commercial, changement d’enseigne, modification d’activité(s) de l’entreprise, mise en location gérance, mention de conjoint collaborateur, ouverture ou fermeture d’un établissement, changement de la forme juridique, changement de dirigeant, dissolution de la société, cessation temporaire ou totale d’activité et régularisation d'immatriculation pour les micro-entrepreneurs.
           <br><br>
           Il est à noter que **l'entrepreneur n'a pas d'obligation légale à déclarer un changement d'effectif**. De fait, l'actualisation de cette donnée dépend donc du bon vouloir de l'entrepreneur à revérifier tous les champs du formulaire au moment de sa déclaration d'un événement dit obligatoire.

           ##### Du côté de la réponse JSON

           La fraîcheur des données communiquées par cet endpoint correspond à la date de mise à jour faite dans le RNM suite aux nouvelles informations déclarées par l'entrepreneur. Cette date est indiquée par la clé `rnm_date_mise_a_jour` dans la réponse JSON.
           Dans le cas où il n'y a pas encore eu de changement répertorié, la date d'import `rnm_date_import` fait alors référence.
           <br><br>
           ⚠️ La fraicheur des données d'effectifs `effectif_salarie` et `effectif_apprenti` est à prendre avec vigilance puisque leur mise à jour n'est pas obligatoire.


        qr2:
          question: Qu'est ce que les codes NAFA, NAR 4 et NAR 20 ?
          answer: >-
           ###### Le code NAFA

           Le code NAFA est un identifiant permettant de naviguer dans la Nomenclature d'Activités Françaises de l'Artisanat qui décrit les activités artisanales. Il est composé de six caractères, quatre chiffres et deux lettres. Les cinq premiers caractères sont ceux de l'Activité Principale de l'Entreprise (APE) et correspondent au code NAF. La lettre située en sixième position permet de préciser le contenu du poste NAFA par rapport à la classe NAF.<br />
           <br />
           **Pour en savoir plus :**
           <br>
           La [page dédiée du Ministère de l'économie, des finances et de la relance](https://www.entreprises.gouv.fr/fr/commerce-et-artisanat/la-nomenclature-d-activites-francaise-de-l-artisanat) détaille les lois ayant défini cette nomenclature. Vous y trouverez également plus d'informations sur le lien entre code NAF et NAFA.<br />
           CMA France propose un [registre de la nomenclature](http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil), qui donne un descriptif précis de chaque activité. <br />

           ###### Les codes NAR 4 et 20

           Les codes NAR sont issus des Nomenclatures Artisanales Regroupées. Ils permettent de connaître le secteur d'activité de l'entreprise artisanale.
           Le numéro associé correspond au degré de précision en nombre de secteurs.
           La NAR 4 comprend quatre secteurs d'activités, qui regroupent les vingt secteurs plus précis de la NAR 20.<br />
           <br />
           **Pour en savoir plus :**
           <br> Le site de CMA France tient un [registre de tous les codes NAFA](http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil), accompagné des codes NAR 4 et 20, et même des code NAR 8 et 80.
           <br> Une [liste (non-officielle)](https://entreprise.api.gouv.fr/assets/pdf/liste-nar.pdf) est consultable.
        qr3:
          question: Quelles sont les subtilités des différents noms envoyés ?
          answer: >-
           La réponse JSON vous délivre plusieurs noms et prénoms du dirigeants. Voici l'explication détaillée de trois clés qui peuvent poser question.

           ##### Le nom de naissance

           La clé `dirigeant_nom_de_naissance` délivre le nom de famille **donné à la personne le jour de la déclaration de sa naissance**.
           Ce peut être soit le nom du père, soit le nom de la mère, soit leurs deux noms accolés dans l'ordre choisi par eux dans la limite d'un nom de famille pour chacun d'eux (Article 311-21 du code civil). C'est aussi le nom qui figure au registre de l'état civil. Cette législation est récente et a pris effet au 1er septembre 2003.
           Ce nom **peut être différent du nom de famille** (qui n'est pas donné par l'API) dans le cas où la personne à demander un changement de nom.

           ##### Le nom d'usage

           La clé `dirigeant_nom_usage` indique le nom que la personne a **choisi d'utiliser dans la vie quotidienne**.
           Toutefois, ne sont autorisées que **trois formes de noms d'usage** :
           - un double nom composé du nom de famille de la personne et du nom du parent qui n'a pas transmis son nom à la naissance.
           - un double nom composé du nom de famille de la personne et du nom de la personne avec qui elle est mariée.
           - le nom de la personne avec qui la personne est mariée, ce nom peut alors aussi être dénommé "nom marital".
           <br>
           Le nom d'usage **ne figure ni à l'état civil ni sur le livret de famille** ; il peut figurer sur la carte d'identité ou le passeport. Les administrations se doivent de l'utiliser si cela est demandé par la personne.

           ##### Le pseudonyme

           La clé `dirigeant_pseudonyme` indique le **nom d'emprunt utilisé dans l'exercice de son activité** par le dirigeant pour se désigner, généralement littéraire ou artistique. Le pseudonyme ne correspond pas à un changement de nom, et son choix doit remplir certaines conditions. Il ne doit pas porter atteinte à l'ordre public et il ne doit pas permettre à la personne de s'approprier la renommée ou la parenté d'une personne tiers.
           Le pseudonyme peut être protégé en étant déposé sous la forme d'une marque à l'INPI.

        qr4:
          question: Quelles sont les différents types de déclarations renvoyées ?
          answer: >-
           La clé `declaration_procedures` permet d'obtenir différents types de déclarations :

           * les déclarations de **cessation des paiements** et les décisions intervenues dans les **procédures de règlement judiciaire et de liquidation des biens** en application de la [loi n° 67-563 du 13 juillet 1967](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006398426/1980-05-13/) ;

           * les déclarations intervenues dans les procédures ouvertes en application de l'ordonnance n° 67-820 du 23 septembre 1967 tendant à faciliter le **redressement économique et financier** ;

           * les déclarations de **cessation des paiements** et les décisions suivantes intervenues dans les procédures de **redressement** ou de **liquidation judiciaires** des entreprises ouvertes avant le 1er janvier 2006 en application du code de commerce ;

           * les déclarations intervenues dans les procédures de **sauvegarde**, de **redressement judiciaire** ou de **liquidation judiciaire** ouvertes à compter du 1er janvier 2006.



availability:
  volumetry: 250 requêtes/min. par jeton
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
---
