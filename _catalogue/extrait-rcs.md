---
weight: 3
type: Informations générales
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
opening: Données confidentielles
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
  description: >-
    Cet endpoint permet d'accéder à **un extrait des données** présentes dans le
    Registre du commerce et des sociétés pour un numéro de siren donné. ⚠️ *Il
    ne s'agit donc pas de la totalité des données présentes sur le Kbis mais
    d'une partie succincte.* 


    En revanche, l'endpoint **délivre tous les commentaires laissés par les greffiers**. Ces observations concernent entre autres les changements de capital, les transferts de siège, les fusions, les redressements et liquidations judiciaires (si publiques).
  label: Toutes les entreprises présentes dans le Registre du commerce et des
    sociétés.
services:
  service1:
    request:
      id:
        param: SirenDeL’Entreprise
        description: Le numéro de siren de l’entreprise
        label: SirenDeL'Entreprise
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
          param: ""
          description: ""
          comment: ""
        option2:
          param: ""
          description: ""
          comment: ""
        option3:
          param: ""
          description: ""
          comment: ""
    response:
      format: Données structurées JSON
      timeout: 5 secondes
      description: La réponse se compose des informations génériques de l'extrait et
        de la liste des observations.
      sample:
        code: >-
          {
            "siren": "418166096",
            "date_immatriculation": "1998-03-27",
            "date_immatriculation_timestamp": 890953200, 
            // Cette date d'immatriculation n'est pas n'est pas la même que celle délivrée par l'INSEE. Elle ne correspond pas non plus à la date du début d'activité. C'est la date où la société est immatriculée au Registre du Commerce et des Sociétés (RCS), c'est à compter de cette date que les sociétés jouissent de la personnalité morale.
            "date_extrait": "21 AVRIL 2017",
            "observations": [
              {
                "date": "2000-02-23",
                "date_timestamp": 951260400,
                "numero": "12197",
                "libelle": " LA SOCIETE NE CONSERVE AUCUNE ACTIVITE A SON ANCIEN SIEGE "
              },
              {
                "date": "2017-07-19",
                "date_timestamp": 951260400,
                "numero": "14127",
                "libelle": "AUGMENTATION DE CAPITAL"
              }
            ]
          }
history: Lorem Ipsum
category: Informations générales
---
