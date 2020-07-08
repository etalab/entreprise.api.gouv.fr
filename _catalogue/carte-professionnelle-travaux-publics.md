---
weight: 19
type: Attestations sociales et fiscales
title: Carte professionnelle travaux publics
label: cartes_professionnelles_fntp
scope:
  - entreprises
description: Récupérer la carte professionnelle d’entrepreneur de travaux
  publics, délivrée à une entreprise en règle de ses obligations sociales,
  administratives et juridiques.
usecases:
  - Marchés publics
access: restreint, disponible sans API [sur le site de la
  FNTP](https://www.fntp.fr/outils/annuaire-carte-professionnelle)
opening: Données publiques
providers:
  - fntp
perimeter:
  label: Entreprises de travaux publics, ayant fait la demande, et en règle
  description: >-
    Toute entreprise de travaux publics peut demander une carte professionnelle
    à la FNTP. Celle-ci lui est délivrée lorsqu'elles est en règle de ses
    obligations sociales, administratives et juridiques.


    La FNTP a à ce jour délivré des cartes professionnelles à plus de 9000 entreprises.


    ℹ️ Plus d'informations sur le site de la FNTP : <https://www.fntp.fr/outils/carte-professionnelle/tout-savoir-sur-la-carte-pro>
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
    code: >-
      {
          "url":
          "https://storage.entreprise.api.gouv.fr/siade/1569138488-b51d0133415cab724687e9d45f6480d-carte_professionnelle_fntp.pdf"
      }
  format: Document PDF
  timeout: 12 secondes
  description: La réponse se compose de l'URL d'accès à la carte professionnelle
    de l'entreprise au format PDF.
---
