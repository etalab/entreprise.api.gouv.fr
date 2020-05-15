---
type: Informations financières
title: Bilans annuels (3 dernières années)
label: bilans_entreprises_bdf
scope:
  - entreprises
description: Obtenir les trois derniers bilans d’une entreprise détenus par la
  Banque de France.
usecases:
  - Aides publiques
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - inpi
  - agefiph
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
  timeout: 5 secondes
  format: Donnée structurée JSON
---
