---
weight: 8
type: Informations générales
title: Effectifs d'une entreprise
label: effectifs_annuels/mensuels_acoss_covid
scope:
  - entreprises
description: Obtenir l'effectif d'une entreprise ou d'un etablissement. Ces
  informations concernent l'année ou le mois précédent et sont délivrées par
  l'ACOSS, agence centrale des organismes de sécurité sociale.
usecases:
  - Aides publiques
  - Marchés publics
  - Aide d’urgence Covid-19
opening: Données confidentielles.
providers:
  - acoss
perimeter:
  label: Entreprises et établissements
services:
  service1:
    label: Effectif annuel d'une entreprise
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
    label: Effectif annuel d'une entreprise
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      sample:
        code: |
          {
            "siren": "418166096",
            "annee": "2019",
            "effectifs_annuels": 100.5
          }
  service2:
    request:
      label: Effectif mensuel d'une entreprise
      id:
        label: Annee/Mois
        description: "L'année et le mois recherchés + le paramètre \"entreprise\" + le numéro de SIREN de l'entreprise."
        extra1: entreprise
        extra2: SirenDeL'Entreprise
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
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      sample:
        code: |-
          {
            "siren": "418166096",
            "annee": "2020",
            "mois": "02",
            "effectifs_mensuels": 100.5
          }
  service3:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de siren de la personne physique ou morale recherchée
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
---
