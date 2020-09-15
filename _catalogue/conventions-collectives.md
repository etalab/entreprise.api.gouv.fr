---
weight: 7
type: Informations générales
title: Conventions collectives
label: conventions_collectives
scope:
  - entreprises
description: Connaître toutes les conventions collectives auxquelles est
  rattachée une entreprise et obtenir des informations telles que l'identifiant
  de la convention et le lien vers le texte en vigueur.
usecases:
  - Marchés publics
  - Aides publiques
  - Répertoire de tiers
opening: Données publiques.
providers:
  - fabsocial
perimeter:
  label: Toutes les entreprises
services:
  service1:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le numéro de SIRET de l'entreprise
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
        code: >
          {
            "siret": "82161143100015",
            "conventions": [
              {
                "active": true,
                "date_publication": "1988-01-01T00:00:00.000Z",
                "etat": "VIGUEUR_ETEN",
                "numero": 1486,
                // Ce numéro correspond à l'indentifiant de la convention collective (IDCC).
                "titre_court": "Bureaux d'études techniques, cabinets d'ingénieurs-conseils et sociétés de conseils",
                "titre": "Convention collective nationale des bureaux d'études techniques, des cabinets d'ingénieurs-conseils et des sociétés de conseils du 15 décembre 1987. ",
                "url": "https://www.legifrance.gouv.fr/affichIDCC.do?idConvention=KALICONT000005635173"
                // Ce lien vous permet d'accéder au texte en vigueur de la convention collective sur Legifrance Beta.
              }
            ]
          }
  service2:
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
