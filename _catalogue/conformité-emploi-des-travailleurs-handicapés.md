---
providers:
  - agefiph
access: Restreint
weight: 15
type: Attestations sociales et fiscales
title: Conformité emploi des travailleurs handicapés
label: attestations_agefiph
scope:
  - entreprises
description: Obtenir la **dernière année connue de conformité** d’une entreprise
  au regard de l'obligation d'emploi des travailleurs handicapés.
usecases:
  - Marchés publics
  - Détection de la fraude
opening: Données publiques.
services:
  service1:
    request:
      id:
        label: SiretDeL’Etablissement
        description: Le numéro de SIRET de l'établissement.
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
        **attestations_agefiph/**SiretDeL’Etablissement
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      sample:
        code: |
          {
            "derniere_annee_de_conformite_connue": "2016",
            "dump_date": 1490693291
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse se compose de :


        * la dernière année de conformité connue de l'entreprise ;

        * la dernière date de validité des informations renvoyées.
          ℹ️ Cette donnée étant issue d'un dump fourni par l'AGEFIPH,API Entreprise vous la transmet.
availability:
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
  volumetry: max. 250 requêtes/min/jeton.
---
