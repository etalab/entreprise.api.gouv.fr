---
weight: 17
type: Attestations sociales et fiscales
title: Cotisations retraite bâtiment
label: cotisation_retraite_probtp
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
        code: |+
          // Lorque l'entreprise est à jour de ses cotisations retraite :
          {
            "eligible": true
            "message": "00 Compte éligible pour attestation de cotisation"
          }

          // Lorque l'entreprise n'est pas à jour de ses cotisations retraite :

          {
            "eligible": false 
            "message": "01 Compte non éligible pour attestation de cotisation"
          }

      timeout: 5 secondes
      format: Donnée structurée JSON
      description: >-
        La réponse se compose de l'information sur l'éligibilité de l'entreprise
        à l'attestation de cotisation retraite, ce qui indique en creux si
        l'entreprise est en règle de ses cotisations retraites.


        Lorsque l'entreprise est inconnue de PROBTP, un code erreur (404) est renvoyé.
    label: Savoir si l'entreprise est à jour de ses cotisations
  service2:
    label: Obtenir l'attestation de l'entreprise
    response:
      sample:
        code: >
          {
            "url":"https://storage.entreprise.api.gouv.fr/siade_dev/1569139162-b99824d9c764aae19a862a0af-attestation_cotisation_retraite_probtp.pdf"
          }
      format: Document PDF
      timeout: 12 secondes
      description: La réponse se compose de l’URL d’accès à l'attestation de
        l’entreprise au format PDF quand celle-ci est disponible.
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
