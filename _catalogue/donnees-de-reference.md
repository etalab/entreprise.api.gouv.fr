---
type: Informations générales
title: Données de référence
label: entreprises_insee
scope:
  - entreprises
  - associations
description: Obtenir des informations concernant une personne physique ou morale
  du répertoire Sirene telles que les dates de création et de fin ; le code
  effectif, le numéro de TVA intracommunautaire ; la forme juridique... ou
  encore les mandataires sociaux et l’état administratif de l’entreprise.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
  - Application de la loi énergie - Art.64
access: Restreint mais disponible sous d'autres conditions, chez
  [api.insee](https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=Sirene&version=V3&provider=insee)
  et [entreprise.data.gouv](https://entreprise.data.gouv.fr/)
opening: Données publiques sauf non diffusibles
providers:
  - insee
  - infogreffe
new: "Vous pouvez accéder aux entreprises non diffusées en ajoutant le paramètre
  `non_diffusables: true`. Un nouveau champ apparaît dans la réponse, sous la
  forme : `diffusable_commercialement`."
perimeter:
  label: |-
    * Entreprises
    * institutions administratives
    * certaines associations et entrepreneurs individuels
  description: >-
    L'endpoint `entreprises_insee` vous donne accès : 


    * aux données tirées du *Répertoire National d'identification des entreprises et des établissements*, géré par l'INSEE au travers du système Sirene

    * ainsi qu'aux observations d'Infogreffe, quand elles sont disponibles pour le SIREN appelé.


    ⚠️ *Il ne concerne pas les établissements, ceux-ci sont appelables avec l'endpoint `etablissement_inse`*`e`


    **Cet endpoint permet donc d'accéder aux informations de référence concernant :**


    * les personnes morales de droit privé : les entreprises. <br> ℹ️ *Toutes les entreprises immatriculées au Registre du Commerce et des Sociétés et au Répertoire des Métiers figurent dans la base Sirene* ; 

    * les personnes morales de droit public : les institutions et services de l’État et les collectivités territoriales ;

    * les entrepreneurs individuels exerçant de manière indépendante une profession non salariée(exemple : un commerçant, un médecin), ayant fait une déclaration d'activité. <br>ℹ️ *Les particuliers employeurs ne font pas partie de la base Sirene* ;

    * les associations ayant, en plus de leur numéro RNA, un numéro de SIREN/SIRET délivré lorsqu'elles :

      * emploient du personnel salarié ; 
      * sont soumises à la TVA ; 
      * ont demandé ou bénéficient de transferts financiers publics.
    * Les organismes publics ou privés et les entreprises étrangères qui ont une représentation ou une activité en France.


    **Périmètre géographique :** La base Sirene concerne les unités implantées en métropole, dans les DOM et dans les collectivités d'Outre-Mer de Saint Pierre et Miquelon, Saint Barthélémy et Saint Martin. <br>⚠️ *Pour la Nouvelle-Calédonie, la Polynésie française, et Wallis-et-Futuna, seul le secteur public administratif, de l'État ou des communes est répertorié.*


    **Pour en savoir plus :** <br> [Contexte juridique du Répertoire National d’identification des entreprises et des établissements](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=134EFA0EE7BDCA89C2D6B31E02C48430.tplgfr30s_3?idSectionTA=LEGISCTA000006178890&cidTexte=LEGITEXT000005634379&dateTexte=20100904)
questions:
  qr1:
    question: Comment utiliser les données (privées) des entreprises non diffusibles ?
    answer: >-
      ###### Qu'est-ce qu'une entreprise non diffusible ?


      Parmi les personnes physiques présentes dans le Répertoires Sirene, certaines, très majoritairement des entreprises individuelles, ont explicitement demandé de ne pas figurer en diffusion commerciale, en vertu de l'[article A123-96 du Code du Commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=C505A51DBC1A4EB1FFF3764C69ACDB1C.tpdjo11v_1?idArticle=LEGIARTI000020165030&cidTexte=LEGITEXT000005634379&dateTexte=20100702). Cela signifie qu'elles donnent accord de la diffusion de leur données uniquement à des organismes habilités et à des administrations. **De fait, leurs données ne sont pas publiques.**


      ⚠️ D'autres entités, y compris des personnes morales peuvent également être considérées comme non diffusibles, il s'agit notamment de la Défense Nationale, en vertu de l'[article A 123-95 du Code du commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=A50D4E549BAC95B63FFE10B24F86D7A5.tplgfr21s_1?idArticle=LEGIARTI000020165032&cidTexte=LEGITEXT000005634379&dateTexte=20100702), des SIRET immatriculés spécifiquement pour les impôts (Urssaf et comptabilités publiques).


      ###### Comment utiliser les données des non diffusibles?


      En utilisant l'endpoint `entreprise`, vous vous engagez à tenir compte du statut de diffusion le plus récent de chaque personne physique. 


      Dans le cas, où vous utilisez l'endpoint avec l'option d'appel `non_diffusable`, et que le champ `"diffusable_commercialement"` de la réponse JSON affiche `=false`, cela signifie que l'entreprise est non diffusible et que vous vous engagez à n’utiliser ces informations que dans le cadre strict de vos missions de service public, à ne pas les rediffuser ni les divulguer auprès de tiers non autorisés. 


      De fait, **les fonctionnalités de pré-remplissage de formulaires ne peuvent donc bénéficier de ces données au risque de les voir diffusées**. Il est par contre possible d’indiquer aux entreprises qu’elles peuvent modifier leur statut, même provisoirement, auprès de l’INSEE à l’adresse suivante : <https://statut-diffusion-sirene.insee.fr.>
  qr2:
    question: ""
    answer: ""
  qr3:
    question: ""
    answer: ""
request:
  id:
    label: SirenDeL’Entreprise
    description: Le numéro de siren de la personne physique ou morale recherchée.
  parameters:
    param1:
      label: token
      description: JetonD’Habilitation
    param2:
      label: context
      description: CadreDeLaRequête
    param3:
      label: recipient
      description: BénéficiaireDeL'appel
    param4:
      label: object
      description: RaisonDeL'AppelOuIdentifiant
  options:
    option1:
      description: pour connaître l’état administratif de l’entité demandée ;
      param: with_etat_administratif
      comment: "Si vous souhaitez également connaitre l'état administratif de
        l’entreprise, ajoutez le paramètre facultatif suivant :"
    option2:
      description: pour accéder aux entreprises non diffusibles.
      param: non_diffusable
      comment: "Si vous souhaitez accéder aux entreprises non diffusibles :"
response:
  format: Données structurées JSON
  timeout: 5 secondes
  description: >-
    La réponse est composée de trois ensembles :

    * **entreprise**, qui contient les données générales, les mandataires sociaux et l’état administratif de la personne physique ou morale ;

    * **établissement siège**, qui contient les données du siège, celles-ci étant disponibles également par l'endpoint `etablissements` ;

    * **gateway error**, indiquant si un fournisseur de données n’a pas fonctionné.
  La réponse est composée de trois ensembles: null
  sample:
    code: >-
      {

      // I- ENTREPRISE 

      // 1-Données générales

      "entreprise": {
        "siren": "000000000",
        "capital_social": 00000,
        "numero_tva_intracommunautaire": "FR00000", // Également appelé numéro d’identification fiscale NIF. Ce numéro est calculé par API Entreprise selon la règle officielle, cette donnée est donc théorique. Dans le cas où l’établissement siège est à l’étranger, la valeur renvoit null. En effet dans ce cas le numéro de TVA est problablement calculé par le pays où se situe l'établissement siège et non par la France. La seule source fiable est alors l'entreprise elle-même.
        "forme_juridique": "Forme juridique",
        "forme_juridique_code": "0000", // Ces deux champs sont issus de la nomenclature des catégories juridiques de l’INSEE
        "nom_commercial": "Mon entreprise",
        "procedure_collective": false, //toujours false et à ignorer, ce champ sera bientôt supprimé. 
        "enseigne": null, // ou quelque chose ?
        "naf_entreprise": "6202A",
        "libelle_naf_entreprise": "Conseil en systèmes et logiciels informatiques", // issu de la nomenclature d’activités française de l’INSEE. 
        "raison_sociale": "mon entreprise",
        "siret_siege_social": "00000000000000",
        "code_effectif_entreprise": "31", //Le code effectif correspond à une fourchette de nombre de salariés, par exemple "31" correspond à "200 à 249 salariés".
        "date_creation": 000000000, // date au format timestamp UNIX
        "nom": null, // ou quelque chose ?
        "prenom": null, // ou quelque chose ?
        "date_radiation": null, // indique null si l’entreprise n’est pas radiée du registre / Dans le cas contraire, la date est fournie au format timestamp UNIX 000000000,
        "categorie_entreprise": "PME", // ou "TPE" ou "ETI"
        "tranche_effectif_salarie_entreprise": {
          "de": 200,
          "a": 249,
          "code": "31",
          "date_reference": "2014",
          "intitule": "200 à 249 salariés" // ces derniers champs correspondent à la nomenclature INSEE
        },
        "mandataires_sociaux": [{
          "nom": "Henri",
          "prenom": "Martin",
          "fonction": "Président du Directoire",
          "dirigeant": true, // toujours true
          "date_naissance": "1965-01-27",
          "date_naissance_timestamp": -155523600,
          "raison_sociale": "",
          "identifiant": "",
          "type": "PP"
        }, {
          "nom": "",
          "prenom": "",
          "fonction": "COMMISSAIRE AUX COMPTES SUPPLEANT",
          "dirigeant": true,
          "date_naissance": "",
          "date_naissance_timestamp": 0,
          "raison_sociale": "BCRH & ASSOCIES - SOCIETE A RESPONSABILITE LIMITEE A ASSOCIE UNIQUE",
          "identifiant": "490092574",
          "type": "PM"
        }],
        "etat_administratif": {
          "value": "C", // A (actif) ou C (cessé)
          "date_cessation": 1315173600 // null quand actif (A), un timestamp (un entier) quand cessé (C )
        },
        "diffusable_commercialement": true// champ uniquement présent avec l'option non_diffusables=true
      },

      "etablissement_siege": {
        "siege_social": true,
        "siret": "41816609600051",
        "naf": "6202A",
        "libelle_naf": "Conseil en systèmes et logiciels informatiques",
        "date_mise_a_jour": 1449183600,
        "tranche_effectif_salarie_etablissement": {
          "de": 200,
          "a": 249,
          "code": "31",
          "date_reference": "2014",
          "intitule": "200 à 249 salariés"
        },
        "date_creation_etablissement": 1108594800,
        "enseigne": null,
        "region_implantation": {
          "code": "11",
          "value": "Île-de-France"
        },
        "commune_implantation": {
          "code": "75108",
          "value": "PARIS 8"
        },
        "pays_implantation": {
          "code": null,
          "value": null
        },
        "diffusable_commercialement": true,
        "adresse": {
          "l1": "OCTO TECHNOLOGY",
          "l2": null,
          "l3": null,
          "l4": "50 AVENUE DES CHAMPS ELYSEES",
          "l5": null,
          "l6": "75008 PARIS",
          "l7": "FRANCE",
          "numero_voie": "50",
          "type_voie": "AV",
          "nom_voie": "DES CHAMPS ELYSEES",
          "complement_adresse": null,
          "code_postal": "75008",
          "localite": "PARIS 8",
          "code_insee_localite": "75108",
          "cedex": null
        },
        "etat_administratif": {
          "value": "F", // A (actif) ou F (fermé)
          "date_fermeture": 1315173600 // null quand actif (A), un timestamp (un entier) quand fermé (F)
          }
        },
        "gateway_error": false
      }
    lang: jsonc
history: |-
  15/01/2020 Ajout d’un champ `non_diffusable`

  03/01/2020 Ajout d’un champ `with_etat_administratif`
category: Informations générales
---
