---
providers:
  - inpi
access: Sous habilitation, disponible par *swagger* sur le [site de
  l'INPI](https://data.inpi.fr/swagger){:target="_blank"}.
weight: 6
type: Informations générales
title: "Actes "
label: actes_inpi
scope:
  - entreprises
description: Obtenir les **actes d’une entreprise** tels que connus par les
  greffes et archivés à l’Institut National de Propriété Industrielle (INPI).
  Ces actes comportent des informations générales, desinformations sur le
  **capital social et sa répartition,** ou encore des informations sur les
  **associés** et tout ce qui est relatif à l'**administration de la société**.
usecases:
  - Marchés publics
  - Aides publiques
  - Détection de la fraude
opening: Données publiques.
perimeter:
  description: >-
    Tous les actes établis par les greffes depuis 1993 sont transmis par cet
    endpoint. Ce qui représente environ 25 millions d'actes. Théoriquement, les
    actes sont transmis à l'INPI par le greffe dans un délai de 24h.


    ℹ️ Il se peut que certains actes soient manquants, dans ce cas, vous pouvez nous [envoyer un mail]([support@entreprise.api.gouv.fr](mailto:support@entreprise.api.gouv.fr)) avec le numéro de SIRET concerné. L'INPI peut essayer de numériser le document manquant.
  label: Actes et statuts des personnes morales et physiques depuis 1993.
services:
  service1:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de la personne physique ou morale recherchée.
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
        **actes_inpi/**SirenDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      timeout: 12 secondes
      format: Archive ZIP contenant PDF et XML
      sample:
        code: >
          {
            "url_documents": "https://storage.entreprise.api.gouv.fr/siade_dev/1565606929-1a01ac932854e5632c7534ff4c18e18ec2845ec0-all_documents.zip",
            "actes": [
              {
                "url_documents": "https://storage.entreprise.api.gouv.fr/siade_dev/1565606929-1a01ac932854e5632c7534ff4c18e18ec2845ec0-all_documents.zip",
                "actes": [
                  {
                    "id_fichier": 24924080, 
                    // cet identifiant permet de retrouver le document dans l'archive ZIP, à l'aide du fichier "Response.json" permettant de faire lien entre cet ID et le nom du PDF.
                    "siren": "788242667",
                    "denomination_sociale": null,
                    "code_greffe": 7402,
                    "date_depot": "20170925",
                    "nature_archive": "A" 
                    // indique la nature de l'archive, "A" pour un acte, "R" pour une ordonnance et "P" pour une personne physique.
                  },
                  {
                    "id_fichier": 213962416,
                    "siren": "788242667",
                    "denomination_sociale": null,
                    "code_greffe": 7454,
                    "date_depot": "19980414",
                    "nature_archive": "A"
                  }
                ]
              }
      description: >-
        La réponse se compose :


        * d'une **URL** permettant de télécharger une archive ZIP contenant l'ensemble des actes de l'entité appelée ;

        * de la **liste des actes, accompagnés de leurs informations génériques** (identifiant du fichier dans l'archive téléchargée, le code greffe, les dates de dépôt et la nature de l'archive.)


        L'archive ZIP fournie permet d'accéder à :


        * tous les actes au format PDF ;

        * toutes les métadonnées de chaque acte, au format XML, portant le même nom que le PDF associé ;

        * un fichier `Response.json` permettant de retrouver le PDF dans l'archive à partir de l' `id_fichier` de l'acte indiqué dans la liste JSON des bilans.
availability:
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
  volumetry: 5 requêtes/min. par jeton
---
