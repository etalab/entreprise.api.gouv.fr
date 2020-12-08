---
weight: 8
type: Informations générales
title: Effectifs d'une entreprise
label: effectifs_..._acoss_covid
scope:
  - entreprises
description: Dans le cadre du volet 2 des aides régionales aux TPE pour faire
  face au Covid-19, API Entreprise a mis temporairement à disposition trois
  endpoints permettant de **connaître les effectifs mensuels ou annuels d'une
  entreprise ou d'un établissement**. Ces informations sont délivrées par l'agence centrale des organismes de la sécurité sociale (ACOSS).
usecases:
  - Aide d’urgence Covid-19
opening: Données confidentielles.
providers:
  - acoss
perimeter:
  label: Toutes les entreprises sauf celles dépendant de la MSA.
services:
  service1:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de l'entreprise
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
    label: Effectifs annuels d'une entreprise
    response:
      sample:
        code:
          {
            "siren": "418166096",
            "annee": "2019",
            "effectifs_annuels": 100.5
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: La réponse JSON se compose de l'effectif de l'année précédente. La
        date ainsi que l'effectif de l'entreprise sont indiqués pour un SIREN
        donné. L'effectif est un équivalent temps plein et peut donc être un
        décimal.
  service2:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de l'entreprise
        extra1: Année
        extra2: Mois
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
    label: Effectifs mensuels d'une entreprise
    response:
      sample:
        code:
          {
            "siren": "418166096",
            "annee": "2020",
            "mois": "02",
            "effectifs_mensuels": 100.5
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: La réponse JSON se compose de l'effectif du mois indiqué en
        paramètre d'appel. La date ainsi que l'effectif de l'entreprise sont
        indiqués pour un SIREN donné. L'effectif est un équivalent temps plein
        et peut donc être un décimal.
  service3:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le numéro de SIRET de l'établissement
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
    label: Effectifs mensuels d'un établissement
    response:
      sample:
        code:
          {
            "siret": "41816609600026",
            "annee": "2020",
            "mois": "02",
            "effectifs_mensuels": 100.5
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: La réponse JSON se compose de l'effectif du mois indiqué en
        paramètre d'appel. La date ainsi que l'effectif de l'établissement sont
        indiqués pour un SIREN donné. L'effectif est un équivalent temps plein
        et peut donc être un décimal.
---
