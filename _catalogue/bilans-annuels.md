---
weight: 5
type: Informations financières
title: Bilans annuels
label: bilans_inpi
scope:
  - entreprises
description: Obtenir les comptes annuels d’une entreprise tels que transmis par
  les greffes à l’Institut National de Propriété Industrielle (INPI).
usecases:
  - Aides publiques
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - inpi
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
  format: Archive ZIP contenant PDF ou JPEG
  timeout: 12 secondes
---
