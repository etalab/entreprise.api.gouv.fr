---
category: Informations générales
title: Extrait RCS
label: extrait_rcs_infogreffe
scope:
  - entreprises
description: Obtenir un extrait des données présentes dans le Registre du
  commerce et des sociétés ; dont les observations qui permettent de savoir si
  une entreprise est en redressement judiciaire.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
access: Restreint
providers:
  - infogreffe
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
    param: SirenDeL’Entreprise
    description: 'Le numéro de siren de l’entreprise'
  parameters:
    param1:
      label: token
      description: JetonD'Habilitation
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
      param: Lorem Ipsum
      description: Lorem Ipsum
      comment: Lorem Ipsum
    option2:
      param: Lorem Ipsum
      description: Lorem Ipsum
      comment: Lorem Ipsum
    option3:
      param: Lorem Ipsum
      description: Lorem Ipsum
      comment: Lorem Ipsum
response:
  format: Données structurées JSON
  timeout: 5 secondes
  description: |-
    * Date d'immatriculation RCS
    * Observation sur l'extrait de données
    * Date de l'extrait de données
history: Lorem Ipsum
---
