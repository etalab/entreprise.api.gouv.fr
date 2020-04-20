---
category: Informations générales
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
access: Restreint mais disponible sous d'autres conditions
providers:
  - insee
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
    description: 'Le numéro de Siret de l’établissement'
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
response:
  format: Données structurées JSON
  timeout: 5 secondes
  description: |-
    Des informations générales sur l’établissement : 

    * S’agit-il du siège social ?
    * Quels sont les codes et libellés naf ?
    * Quelle est la date de mise à jour ? 
    * Combien y-a-t-il de salariés ? 
    * La date de création de l’établissement 

    Des informations géographiques : 

    * commune, région et pays d’implantation 
    * Adresse 

    Enfin, l’état administratif de l’établissement.
history: Lorem ipsum
---
