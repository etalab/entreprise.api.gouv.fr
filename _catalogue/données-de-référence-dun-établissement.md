---
access: Restreint mais disponible sous d'autres conditions, chez
  [api.insee](https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=Sirene&version=V3&provider=insee)
  et [entreprise.data.gouv](https://entreprise.data.gouv.fr/)
providers:
  - insee
response:
  format: Données structurées JSON
  timeout: 5 secondes
  description: >-
    ###### La réponse JSON se décompose en trois catégorie d'informations : 


    * **des données générales** sur l’établissement telles que la date de création, le nombre de salariés et la tranche effectif, l'activité principale et le statut de l'établissement par rapport à l'entreprise : s'agit-il du siège social ?

    * **des données géographiques**, la commune, la région et le pays d'implatation ; ainsi que l'adresse précise reconstruite par API Entreprise.  

    * **une donnée juridique** : l'état administratif de l'établissement et la date de fermeture le cas échéant.
questions:
  qr1:
    answer: >-
      ###### Qu'est-ce qu'un établissement non diffusible ?


      Parmi les personnes physiques présentes dans le Répertoires Sirene, certaines, très majoritairement des entreprises individuelles, ont explicitement demandé de ne pas figurer en diffusion commerciale, en vertu de l'[article A123-96 du Code du Commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=C505A51DBC1A4EB1FFF3764C69ACDB1C.tpdjo11v_1?idArticle=LEGIARTI000020165030&cidTexte=LEGITEXT000005634379&dateTexte=20100702). Cela signifie qu'elles donnent accord de la diffusion de leur données uniquement à des organismes habilités et à des administrations. **De fait, leurs données ne sont pas publiques.**


      ⚠️ D'autres entités, y compris des personnes morales peuvent également être considérées comme non diffusibles, il s'agit notamment de la Défense Nationale, en vertu de l'[article A 123-95 du Code du commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=A50D4E549BAC95B63FFE10B24F86D7A5.tplgfr21s_1?idArticle=LEGIARTI000020165032&cidTexte=LEGITEXT000005634379&dateTexte=20100702), des SIRET immatriculés spécifiquement pour les impôts (Urssaf et comptabilités publiques).


      ###### Comment utiliser les données des non diffusibles?


      En utilisant l'endpoint `entreprise`, vous vous engagez à tenir compte du statut de diffusion le plus récent de chaque personne physique. 


      Dans le cas, où vous utilisez l'endpoint avec l'option d'appel `non_diffusable`, et que le champ `"diffusable_commercialement"` de la réponse JSON affiche `=false`, cela signifie que l'entreprise est non diffusible et que vous vous engagez à n’utiliser ces informations que dans le cadre strict de vos missions de service public, à ne pas les rediffuser ni les divulguer auprès de tiers non autorisés. 


      De fait, **les fonctionnalités de pré-remplissage de formulaires ne peuvent donc bénéficier de ces données au risque de les voir diffusées**. Il est par contre possible d’indiquer aux entreprises qu’elles peuvent modifier leur statut, même provisoirement, auprès de l’INSEE à l’adresse suivante : <https://statut-diffusion-sirene.insee.fr.>
    question: Comment utiliser les données privées des établissements non diffusibles ?
type: Informations générales
title: Données de référence d'un établissement
label: etablissements_insee
scope:
  - entreprises
  - associations
description: Obtenir des informations concernant un établissement d’une personne
  physique ou morale du répertoire Sirene telles que les dates de création et de
  fin, l’adresse ou l’état administratif.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
  - Application de la loi énergie
opening: Données publiques sauf non diffusibles
perimeter:
  perimeter1:
    label: Lorem ipsum
    description: Lorem ipsum
  perimeter2:
    label: Lorem ipsum
    description: Lorem ipsum
  perimeter3:
    label: Lorem ipsum
    description: Lorem ipsum
request:
  id:
    param: SiretDeL’Entreprise
    description: Le numéro de Siret de l’établissement
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
      param: non_diffusable=true
      description: ""
      comment: "Si vous souhaitez accéder aux entreprises non diffusibles :"
history: Lorem ipsum
category: Informations générales
---
