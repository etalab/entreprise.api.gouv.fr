---
providers:
  - probtp
new: ""
access: Restreint
weight: 17
type: Attestations sociales et fiscales
title: Cotisations retraite bâtiment
label: cotisation_retraite_probtp
scope:
  - entreprises
description: Savoir si une **entreprise est à jour de ses cotisations retraite**
  à la Protection Sociale du Bâtiment et des Travaux publics (PROBTP) et obtenir
  l'**attestation** de l'entreprise si celle-ci est éligible.
usecases:
  - Aides publiques
  - Marchés publics
  - Détection de la fraude
opening: Données confidentielles.
availability:
  normal_availability: 7jours/7 et 24h/24
  volumetry: 2000 requêtes/10 minutes par IP
  unavailability_types: /
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
perimeter:
  label: Entreprises.
services:
  service1:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le numéro de SIRET de l'entreprise.
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
        **eligibilites_cotisation_retraite_probtp/**SiretDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
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
        La réponse indique, par un champ `true`/`false`, si l'entreprise est
        éligible à l'attestation de cotisation retraite, 


        ℹ️ Si l'entreprise est éligible, cela signifie en creux qu'elle est en règle de ses cotisations retraites.
      questions:
        qr1:
          question: Que signifie le code erreur 404 ?
          answer: Lorsque l'entreprise est inconnue de PROBTP, un code erreur (404) est
            renvoyé.
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
        label: SiretDeL'Entreprise
        description: Le numéro de SIRET de l'entreprise.
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
      url: |-
        **attestations_cotisation_retraite_probtp/**SiretDeL'Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
---
