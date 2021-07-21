---
providers:
  - mi
access: Sous habilitation.
weight: 5
type: Informations générales
title: Divers documents d'une association
label: documents_associations
scope:
  - associations
description: Obtenir **divers documents**, différents selon l’association ; tels
  que les **statuts**, la liste des **personnes habilitées à représenter
  l’association** ou encore les **délibérations** pour modification ou
  dissolution de l’association.
usecases:
  - Aides publiques
  - Marchés publics
opening: Données publiques.
perimeter:
  label: Toutes les associations ayant des documents.
services:
  service1:
    request:
      id:
        label: SiretDel'Association ou NumeroRNA
        description: Le numéro de SIRET de l'association ou son numéro RNA.
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
        **documents_associations/**SiretDel'AssociationOuNuméroRNA
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      timeout: 12 secondes
      format: Documents PDF
      sample:
        code: >-
          {
            "nombre_documents": 3,
            "documents": [
              {
                "type": "Statuts",
                // Cet endpoint renvoit différents types de documents, et de fait, pour chaque URL, celui-ci est indiqué. Voici une liste non-exhaustive des options possibles : "Liste des dirigeants", "Statuts", "Procès verbal", "Récépissé de dissolution", ...
                "url": "https://storage.entreprise.api.gouv.fr/siade/40ab0b07d434d0417e8997ce7c5afbef/attestation_document_association.pdf",
                "timestamp": "1500660325"
              },
            ]
          }
      description: La réponse JSON indique le nombre de documents à télécharger, l'URL
        d'accès, le type et la date du/des documents. [Voici un
        exemple des fichiers disponibles dans cette payload](https://entreprise.api.gouv.fr/assets/pdf/documents-association.zip)
history: "##### 01/07/2020 Création de l'endpoint."
availability:
  volumetry: max. 50 requêtes/min/jeton cumulées sur tous les endpoints envoyant des documents.
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
---
