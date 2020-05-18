---
type: Informations générales
title: "Actes "
label: actes_inpi
weight: 4
scope:
  - entreprises
description: Obtenir les actes d’une entreprise tels que connus par les greffes
  et archivés à l’Institut National de Propriété Industrielle (INPI). Ces actes
  comportent des informations générales,  des informations sur le capital social
  et sa répartition, ou encore des informations sur les associés et tout ce qui
  est relatif à l'administration de la société.
usecases:
  - Marchés publics
  - Aides publiques
access: Restreint
opening: Données confidentielles
providers:
  - inpi
perimeter:
  description: Ces actes comportent des informations  générales telles que la
    forme juridique de la société, son siège ; des informations sur le capital
    social et sa répartition comme le nombre et la valeur de chaque part, les
    modalités de cessions ; ou encore des informations sur les associés ou ce
    qui est relatif à l'administration de la société.
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
  timeout: 12 secondes
  format: Archive ZIP contenant PDF et XML
  sample:
    code: >
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
    ###### Contenu de la réponse JSON


    * **Une URL** permettant de télécharger une archive ZIP contenant l'ensemble des actes de l'entité appelée ;

    * **La liste des actes, accompagnés de leurs informations génériques** (identifiant du fichier dans l'archive téléchargée, le code greffe, les dates de dépôt et la nature de l'archive.)


    ###### Contenu de l'archive ZIP 🗂 :


    * Tous les actes au format PDF ;

    * Toutes les métadonnées de chaque acte, au format XML, portant le même nom que le PDF associé ;

    * Un fichier `Response.json` permettant de retrouver le PDF dans l'archive à partir de l' `id_fichier` de l'acte indiqué dans la liste JSON des bilans.
  questions:
    qr1:
      question: "Nature de l'archive : quelle différence entre un acte, une ordonnance
        ou une personne physique ?"
---
