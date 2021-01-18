---
label: entreprises_artisanales
scope:
  - entreprises
providers:
  - cma
history: "##### 15/01/2021 Création de l'endpoint `entreprises_artisanales`"
faq:
  q1:
    question: Qu'est-ce que le code NAFA ?
    answer: >-
      Il s'agit de la Nomenclature D'Activités Française pour l'Artisanat. <br
      /> <br />

      Les codes de la NAFA ont six caractères, quatre chiffres et deux lettres. Les cinq premiers caractères sont ceux de la NAF. La lettre située en sixième position permet de préciser le contenu des postes NAFA au sein d'une sous-classe NAF. <br /> <br /> **Ressources** <br /> <br />

      *Définition officielle* : [Nomenclature d'activités française pour l'artisanat / NAFA](https://www.insee.fr/fr/metadonnees/definition/c1580) <br /> *Registre de tous les codes NAFA, proposée par CMA France* : [Nomenclature d'Activités Française de l'Artisanat](http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil) <br /> *Le ministère de l'économie, des finances et de la relance possède une page dédiée à l'adresse suivante* : [LA NOMENCLATURE D'ACTIVITÉS FRANÇAISE DE L'ARTISANAT](https://www.entreprises.gouv.fr/fr/commerce-et-artisanat/la-nomenclature-d-activites-francaise-de-l-artisanat)
  q2:
    question: Qu'est-ce que le code NAR 4 et NAR 20 ?
    answer: >-
      Il s'agit de la Nomemclature Artisanale Regroupée. <br /> <br />

      Le site de CMA France tient un registre de tous les codes NAFA, accompagné des codes NARs, à l'adresse suivante: [Nomenclature d'Activités Française de l'Artisanat](http://nafa.apcma.fr/jlbweb/jlbWeb?html=NAFA/accueil) <br /> <br />

      Vous pouvez trouver une liste (non-officielle) à l'adresse suivante: [liste-nar.pdf](https://entreprise.api.gouv.fr/assets/pdf/liste-nar.pdf)
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
            
            //INFORMATIONS GÉNÉRALES ET JURIDIQUES
            
              "siren": 301123626,
              "denomination_sociale": "DUPOND Jean",
              "sigle": "MSN",
              "categorie_personne": "PP",
              "forme_juridique_id": 5499,
              "forme_juridique_label": "Société à responsabilité limitée (sans autre indication)",
              "effectif_salarie": 12,
              "effectif_apprenti": 1,
              "etablissement_origine_id": 3,
              "modalite_exercice": "P",
              "non_sedentaire": 0,
              "code_cfe": "M7501",
              "declaration_procedures": "",

          // TYPE D’ACTITVITÉ

              "activite_artisanales_declarees": "PRESTATION DE SERVICE COMMERCE",
              "code_norme_activite_entreprises": "9602A",
          //
              "code_nafa_principal": "9602AA",
              "code_nafa_libelle": "Coiffure en salon",
              "code_nafa_secondaire1": "",
              "code_nafa_secondaire2": "",
              "code_nafa_secondaire3": "",
              "secteur_activite_intitule_nar_4": "SERVICES",
              "secteur_activite_intitule_nar_20": "TRANSPORT",



          // INFORMATIONS GÉOGRAPHIQUES

              "adresse_numero_voie": 1,
              "adresse_indice_repetition_voie": "B",
              "adresse_type_voie": "RUE",
              "adresse_libelle_voie": "DE BELLEVILLE",
              "adresse_complement": "Batiment C",
              "adresse_code_postal": 75010,
              "adresse_commune": "PARIS",
              "adresse_commune_cog": 75119,
              "adresse_departement": "PARIS",
              "adresse_region": "ILE-DE-FRANCE",
              "libelle_epci": "Métropole du Grand Paris",

          // INFORMATIONS DIRIGEANTS

              "dirigeant_qualification": "ARTISANT",
              "dirigeant_nom_de_naissance": "DUPONT",
              "dirigeant_nom_usage": "DUTUNNEL",
              "dirigeant_prenom1": "Jean",
              "dirigeant_prenom2": "Jean",
              "dirigeant_prenom3": "Jean",
              "dirigeant_pseudonyme": "Jean",
              "dirigeant_date_de_naissance": "1950-01-01",
              "dirigeant_lieu_de_naissance": "PARIS",

          // DATES CLÉS

              "date_immatriculation": "1964-06-03T12:00:00Z",
              "date_radiation": "1969-02-03T12:00:00Z",
              "date_debut_activite": "1969-02-03T12:00:00Z",
              "date_cessation_activite": "1968-02-01T12:00:00Z",
              "date_cloture_liquidation": "1979-04-03T12:00:00Z",
              "date_transfert_patrimoine": "1965-02-04T12:00:00Z",
              "date_dissolution": "1989-02-03T12:00:00Z",


          // INFORMATIONS EN CAS DE DOUBLE IMMATRICULATION

              "eirl_id_registre": 1,
              "eirl_denomination": "UMAD Corp EIRL",
              "eirl_object_activite": "REPARATION ET VENTE DE MATERIELS INFORMATIQUES FORMATION AUDIT ET ASSISTANCE INFORMATIQUE",
              "eirl_date_depot": "1989-02-03T12:00:00Z"

          // INFORMATIONS SPÉCIFIQUES AU RÉPERTOIRE NATIONAL DES MÉTIERS

              "rnm_id": 123456,
              "rnm_numero_gestion": "00012211035",
              "rnm_date_import": "2019-11-02T09:09:25Z",
              "rnm_date_mise_a_jour": "2019-12-02T09:09:25Z",

            }
          }

availability:
  volumetry: 2000 requêtes / 10 minutes par IP
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
---
