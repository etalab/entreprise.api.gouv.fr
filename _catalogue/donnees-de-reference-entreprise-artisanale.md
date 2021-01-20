---
label: entreprises_artisanales
scope:
  - entreprises
providers:
  - cma
history: "##### 15/01/2021 Création de l'endpoint `entreprises_artisanales`"
weight: 7
type: Informations générales
title: Données de références d'une entreprise artisanale
description: Obtenir des **informations concernant une entité du Répertoire
  National des Métiers (RNM)**, telles que des données générales et juridiques,
  le type d'activité, l'adresse, des données sur les dirigeants et les dates
  clés. Ces données sont fournies par la Chambre des Métiers de l'Artisanat
  France (CMA France) et sont également disponibles en [API publique et libre
  d'accès sur api.gouv.fr](https://api.gouv.fr/les-api/api_rnm).
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
opening: Données publiques.
perimeter:
  label: Entreprises enregistrées au RNM.
  description: Cet endpoint couvre toutes les entreprises enregistrées au
    Répertoire National des Métiers.
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
        **entreprises_artisanales/**SirenDeL’Entreprise
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

        * des **informations spécifiques au RNM** (identifiants, dates d'import et mise à jour) ;
      sample:
        code: >+
          {
            "entreprise": {

          // INFORMATIONS GÉNÉRALES ET JURIDIQUES
            
              "siren": 301123626,
              "denomination_sociale": "DUPOND Jean",
              // Il s'agit du nom porté par la société.
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
              // Indique l'origine du fond ou l'origine de l'activité, telle que déclarée par la personne morale ou physique au moment de la création de l'entreprise artisanale. Elle est donc tirée des formulaires P0 ou M0.
              // Les valeurs possibles sont "1"(création), "3"(achat), "4"(apport), "6"(prise en location gérance", "7"(partage), "8"(reprise), "F"(gérance-mandat).   
              "modalite_exercice": "P",
              // Détermine si l'entreprise a une activité permanente ("P") ou saisonnière ("S"). L'activité est dite saisonnière si chaque année, l'entreprise cesse totalement ses activités pendant plus de 3 mois consécutifs. La valeur "NR" est indiquée si l'information est non renseignée.
              "non_sedentaire": 0,
              // Indique si l'entreprise a une activité ambulante.
              "code_cfe": "M7501",
              // L'indentifiant communiqué désigne le Centre de Formalités des Entreprises (CFE) qui a inscrit l'entreprise. 
              "declaration_procedures": "",
              //Cette clé regroupe les déclarations de cessation des paiements, des procédures de règlement judiciaire et liquidations des biens ; des procédures tendant à faciliter le redressement économique et financier ; des procédures de sauvegarde, de redressement judiciaire ou de liquidation judiciaire.

          // TYPE D’ACTITVITÉ

              "activite_artisanales_declarees": "PRESTATION DE SERVICE COMMERCE",
              // Indique l'activité pour laquelle l'entreprise a demandé son inscription au répertoire des métiers. La valeur est reprise à l'identique de la liasse déclarative et est purement déclarative (variable E71 selon la norme d'échange).
              "code_norme_activite_entreprises": "9602A",
              // Ce code correspond au code APE de l'entreprise, issu de la nomenclature des activités françaises de l'INSEE. Il définit l'activité principale de l'entreprise.
              "code_nafa_principal": "9602AA",
              // Code issu de la Nomenclature des Activités Françaises de l'Artisanat (NAFA Rèv2) pour l'activité principale au registre des métiers. La liste de ces codes est explorable sur le site de CMA France au lien suivant: http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil
              "code_nafa_libelle": "Coiffure en salon",
              // Libellé du code NAFA
              "code_nafa_secondaire1": "",
              // Les entreprises artisanales peuvent avoir plusieurs activités d'artisanat. Ce code se réfère à la même nomenclature (NAFA Rèv2) que le code_nafa_principal.
              "code_nafa_secondaire2": "",
              "code_nafa_secondaire3": "",
              "secteur_activite_intitule_nar_4": "SERVICES",
              // Indique le secteur d'activité de l'entreprise selon le code Nomenclature Artisanale Regroupée NAR 4. La liste des code et leur libellé est disponible ici : https://entreprise.api.gouv.fr/assets/pdf/liste-nar.pdf
              "secteur_activite_intitule_nar_20": "TRANSPORT",
              // Indique le secteur d'activité de l'entreprise selon le code Nomenclature Artisanale Regroupée NAR 20. La liste des code et leur libellé est disponible ici : https://entreprise.api.gouv.fr/assets/pdf/liste-nar.pdf


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

          // INFORMATIONS DIRIGEANTS

              "dirigeant_qualification": "ARTISAN",
              // Indique la qualification artisanale de l'entrepreneur. 
              // Les variables possibles sont "ARTISAN", "MAITRE ARTISAN", "ARTISAN D'ART", "MAITRE ARTISAN D'ART", "ARTISAN MAITRE" ET "ARTISAN MAITRE MÉTIERS D'ART". Les deux dernières qualifications sont spécifiques à l'Alsace et la Moselle. Si le dirigeant n'a pas de qualification la mention "SANS QUALIFICATION" est donnée.
              "dirigeant_nom_de_naissance": "DUPONT",
              // Nom dévolu à la personne le jour de la déclaration de sa naissance.
              "dirigeant_nom_usage": "DUTUNNEL",
              // Nom choisi par la personne.
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
              // Il s'agit de la date de mise à jour des données de la base de données de l'API RNM.

            }
          }

      questions:
        qr1:
          question: Qu'est ce que les codes NAFA, NAR 4 et NAR 20 ?
          answer: >- 
           Il s'agit de la Nomenclature D'Activités Française pour l'Artisanat. 
           Les codes de la NAFA ont six caractères, quatre chiffres et deux lettres. Les cinq premiers caractères sont ceux de la NAF. La lettre située en sixième position permet de préciser le contenu des postes NAFA au sein d'une sous-classe NAF. <br /> <br /> **Ressources** <br /> <br />
           Définition officielle : [Nomenclature d'activités française pour l'artisanat / NAFA](https://www.insee.fr/fr/metadonnees/definition/c1580) <br /> *Registre de tous les codes NAFA, proposée par CMA France* : [Nomenclature d'Activités Française de l'Artisanat](http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil) <br /> *Le ministère de l'économie, des finances et de la relance possède une page dédiée à l'adresse suivante* : [LA NOMENCLATURE D'ACTIVITÉS FRANÇAISE DE L'ARTISANAT](https://www.entreprises.gouv.fr/fr/commerce-et-artisanat/la-nomenclature-d-activites-francaise-de-l-artisanat)
           Il s'agit de la Nomemclature Artisanale Regroupée. <br /> <br />
           Le site de CMA France tient un registre de tous les codes NAFA, accompagné des codes NARs, à l'adresse suivante: [Nomenclature d'Activités Française de l'Artisanat](http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil) <br /> <br />
           Vous pouvez trouver une liste (non-officielle) à l'adresse suivante: [liste-nar.pdf](https://entreprise.api.gouv.fr/assets/pdf/liste-nar.pdf)  
        qr2:
          question: Question 2
          answer: Question 2
        qr3:
          question: Question 3
          answer: Question 3
availability:
  volumetry: 2000 requêtes / 10 minutes par IP
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
---
