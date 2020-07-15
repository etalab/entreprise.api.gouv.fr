---
weight: 17
type: Attestations sociales et fiscales
title: Éligibilité cotisations retraite ProBTP
label: eligibilites_cotisation_retraite_probtp
scope:
  - entreprises
description: Savoir si une entreprise est à jour de ses cotisations retraite à
  la Protection Sociale du Bâtiment et des Travaux publics (PROBTP) et obtenir
  l'attestation de l'entreprise si celle-ci est éligible.
usecases:
  - Aides publiques
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - probtp
new: ""
service2:
  label: Obtenir l'attestation de l'entreprise
  request:
    id:
      label: SirenDeLEntreprise
      description: Le numéro de siren de la personne physique ou morale recherchée
    parameters:
      param1:
        label: token
      param2:
        label: context
      param3:
        label: recipient
      param4:
        label: object
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
        code: >
          {
            "eligible": true / false 
            "message": "00 Compte éligible pour attestation de cotisation" /"01 Compte non éligible pour attestation de cotisation"
          // Lorque l'entreprise est éligible la réponse est "true" et le message affiché est le "00", 

          // Lorsque l'entreprise est inéligible, la réponse est "false" et le message affiché est le "01".

          }
      timeout: 5 secondes
      format: Donnée structurée JSON
      description: La réponse se compose de l'information sur la régularité (oui/non)
        de l'entreprise ou d'une notification si l'entreprise n'est pas connue
        des services de PROBTP.
    label: Savoir si l'entreprise est à jour de ses cotisations
  service2:
    label: Obtenir l'attestation de l'entreprise
    response:
      sample:
        code: >
          {
            "url":"https://storage.entreprise.api.gouv.fr/siade_dev/1569139162-b99824d9c764aae19a862a0af-attestation_cotisation_retraite_probtp.pdf"
          }
    request:
      id:
        label: SirenDeL'Entreprise
        description: Le numéro de siren de la personne physique ou morale recherchée
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          description: CadreDeLaRequête
          label: context
        param3:
          description: BénéficiaireDel’Appel
          label: recipient
        param4:
          description: RaisonDeL’AppelOuIdentifiant
          label: object
---
