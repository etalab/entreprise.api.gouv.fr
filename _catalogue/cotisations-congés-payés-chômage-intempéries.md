---
weight: 20
type: Attestations sociales et fiscales
title: Cotisations congés payés & chômage intempéries
label: certificats_cnetp
scope:
  - entreprises
description: Obtenir l’attestation de cotisation des congés payés et chomage
  intempéries d'une entreprise, délivrée par la Caisse Nationale des
  Entrepreneurs de Travaux Publics (CNETP).
usecases:
  - Aides publiques
  - Répertoire de tiers
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - cnetp
perimeter:
  description: >-
    L'ensemble des entreprises exerçant une ou plusieurs activités entrant dans
    le champ d'application des conventions collectives nationales étendues des
    Travaux Publics et du Bâtiment : 


    * Convention Collective Nationale des Ouvriers des Travaux Publics du 15 décembre 1992 (étendue par arrêté du 27 mai 1993) ; 

    * Convention Collective Nationale des Ouvriers employés par les entreprises de Bâtiment non visés par le décret du 1er mars 1962 (c'est-à-dire occupant plus de 10 salariés), du 8 octobre 1990 (étendue par arrêté du 8 février 1991). 


    ℹ️ Plus d'informations sur <https://www.cnetp.org/category/affiliation/>
  label: Entreprises de travaux publics et bâtiment
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
  questions:
    qr1:
      question: Quelles sont les conditions de délivrance de l'attestation ?
      answer: >-
        L'attestation est dilivrée à l'entreprise sous réserve que celle-ci :


        * soit à jour de ses déclarations exigibles servant à l'assiette des cotisations de congés payés et des cotisations de chômage-intempéries ;

        * soit à jour du paiement des cotisations citées.
  format: Document PDF
  timeout: 12 secondes
  description: La réponse délivre une URL de téléchargement de l'attestation au
    format PDF quand celle-ci est disponible.
  sample:
    code: >-
      {
        "url": "https://storage.entreprise.api.gouv.fr/siade/1569156960-dbd0926a14706614c69798309bd687-certificat_cnetp.pdf"
      }
---
