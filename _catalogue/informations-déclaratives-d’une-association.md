---
weight: 4
type: Informations générales
title: Informations déclaratives  d’une association
label: associations
scope:
  - associations
description: Obtenir les informations déclarées par une association à la
  préfecture ; informations générales issues du Répertoire National des
  Associations (RNA) telles que la date de création, l’ adresse du siège et les
  dirigeants.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
access: Restreint, disponible sous d'autres conditions
opening: Données publiques
providers:
  - mi
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
    description: Le numéro de Siret de l’association ou le numéro RNA
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
    Des informations générales sur l’association : 

    * le numéro de siret du siège social
    * les dates de création, publication et de dissolution
    * l’adresse du siège
    * des informations sur les dirigeants ...
history: Lorem Ipsum
category: Informations générales
---
