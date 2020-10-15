---
providers:
  - fntp
access: restreint, disponible sans API [sur le site de la
  FNTP](https://www.fntp.fr/outils/annuaire-carte-professionnelle)
weight: 19
type: Attestations sociales et fiscales
title: Carte professionnelle travaux publics
label: cartes_professionnelles_fntp
scope:
  - entreprises
description: Récupérer la **carte professionnelle** d’entrepreneur de travaux
  publics, délivrée à une entreprise de travaux publics en règle de ses
  **obligations sociales, administratives et juridiques**.
usecases:
  - Marchés publics
opening: Données publiques.
perimeter:
  label: Entreprises de travaux publics en règle, ayant fait la demande.
  description: >-
    Toute entreprise de travaux publics peut demander une carte professionnelle
    à la FNTP. Celle-ci lui est délivrée lorsque l'entreprise est en règle de
    ses obligations sociales, administratives et juridiques.


    À ce jour, la FNTP a délivré des cartes professionnelles à plus de **9000 entreprises**.


    ℹ️ Plus d'informations sur le site de la FNTP : <https://www.fntp.fr/outils/carte-professionnelle/tout-savoir-sur-la-carte-pro>
services:
  service1:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de l'entreprise.
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
        code: >-
          {
              "url":
              "https://storage.entreprise.api.gouv.fr/siade/1569138488-b51d0133415cab724687e9d45f6480d-carte_professionnelle_fntp.pdf"
          }
      format: Document PDF
      timeout: 12 secondes
      description: La réponse se compose de l'URL d'accès à la carte professionnelle
        de l'entreprise au format PDF.
availability:
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
  volumetry: 2000 requêtes/10 minutes par IP
---
