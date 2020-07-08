---
weight: 17
type: Attestations sociales et fiscales
title: Éligibilité cotisations retraite ProBTP
label: eligibilites_cotisation_retraite_probtp
scope:
  - entreprises
description: Savoir si une entreprise est éligible aux cotisations retraite de
  la Protection Sociale du Bâtiment et des Travaux publics (PROBTP). Pour
  obtenir l'attestation de l'entreprise si celle-ci est éligible, veuillez vous
  référer à l'endpoint "Attestation cotisations retraites"
usecases:
  - Aides publiques
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - probtp
new: ""
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
    code: >
      {
        "eligible": true / false 
        "message": "00 Compte éligible pour attestation de cotisation" /"01 Compte non éligible pour attestation de cotisation"
      // Lorque l'entreprise est éligible la réponse est "true" et le message affiché est le "00", 

      // Lorsque l'entreprise est inéligible, la réponse est "false" et le message affiché est le "01".

      }
  timeout: 5 secondes
  format: Donnée structurée JSON
---
