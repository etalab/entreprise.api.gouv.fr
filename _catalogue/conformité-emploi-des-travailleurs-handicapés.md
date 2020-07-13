---
weight: 15
type: Attestations sociales et fiscales
title: Conformité emploi des travailleurs handicapés
label: attestations_agefiph
scope:
  - entreprises
description: Obtenir la dernière année connue de conformité d’une entreprise au
  regard de l'obligation d'emploi des travailleurs handicapés.
usecases:
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - agefiph
services:
  service1:
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
        La réponse se compose de deux clés : 


        * la dernière année de conformité de l'entreprise ;

        * la dernière date de validité des informations renvoyées. \
          *(Cette donnée étant issue d'un dump fourni par l'AGEFIPH, nous vous le transmettons)*
---
