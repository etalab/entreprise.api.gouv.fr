---
weight: 5
type: Informations générales
title: Divers documents d'une association
label: documents_associations
scope:
  - associations
description: Obtenir divers documents, différents selon l’association ; tels que
  les statuts, la liste des personnes habilitées à représenter l’association ou
  encore les délibérations pour modification ou dissolution de l’association.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
access: Restreint
opening: Données confidentielles
providers:
  - mi
perimeter:
  label: Toutes les associations ayant des documents.
request:
  id:
    label: SiretDel'Association ou NumeroRNA
    description: Le numéro de Siret de l'association ou son numéro RNA
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
  timeout: 12 secondes
  format: Document PDF
  sample:
    code: >-
      {
        "nombre_documents": 3,
        "documents": [
          {
            "type": "Statuts",
            "url": "https://storage.entreprise.api.gouv.fr/siade/40ab0b07d434d0417e8997ce7c5afbef/attestation_document_association.pdf",
            "timestamp": "1500660325"
          }, ...
        ]
      }
  description: La réponse JSON indique le nombre de documents à télécharger, l'URL
    d'accès, le type et la date du/des documents.
---
