---
weight: 8
type: Informations financières
title: Bilans annuels
label: bilans_inpi
scope:
  - entreprises
description: Obtenir les comptes annuels d’une entreprise tels que transmis par
  les greffes à l’Institut National de Propriété Industrielle (INPI).
usecases:
  - Aides publiques
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - inpi
perimeter:
  label: Tous les bilans non-confidentiels des entreprises depuis 2017
  description: >-
    Cette API permet d'accéder **à tous les bilans annuels depuis 2017 des
    entreprises ayant décider de le déposer au greffe**, **y compris les bilans
    confidentiels**.


    Toutes les entreprises sont concernées sauf : 


    * les sociétés en micro-BNC ou micro-BIC ;

    * les entrepreneurs individuels (commerçants, artisans, profession libérale, micro-entrepreneurs notamment) ;
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
  format: Archive ZIP contenant PDF et XML
  timeout: 12 secondes
  description: >-
    ###### Contenu de la réponse JSON


    * **Une URL** permettant de télécharger une archive ZIP contenant l'ensemble des bilans au format PDF de l'entité appelée ;

    * **La liste des bilans, accompagnés de leurs informations génériques** (identifiant du fichier dans l'archive téléchargée, le code greffe, les dates de dépôt et clôture, la nature de l'archive, son degré de confidentialité, et le numéro de gestion.)


    ###### Contenu de l'archive ZIP 🗂 :


    * Tous les comptes annuels au format PDF ;

    * Toutes les métadonnées de chaque bilan, au format XML, portant le même nom que le PDF associé ;

    * Un fichier `Response.json` permettant de retrouver le PDF dans l'archive à partir de l' `id_fichier` du bilan indiqué dans la liste JSON des bilans.
  sample:
    code: >-
      {
        "url_documents": "https://storage.entreprise.api.gouv.fr/siade_dev/1565607027-91ac7ac7e80b866055d23b9203e41fa0de487bc0-all_documents.zip",
        "bilans": [
          {
            "id_fichier": 11439992, 
            // cet identifiant permet de retrouver le document dans l'archive ZIP, à l'aide du fichier "Response.json" permettant de faire lien entre cet ID et le nom du PDF.
            "siren": "788242667",
            "denomination_sociale": null,
            "code_greffe": 7402,
            "date_depot": "20180116",
            "nature_archive": "B-S", 
            // indique la nature du bilan, "B_C" pour bilan consolidé, "B-S" pour bilan simplifié, "B-CO" pour bilan complet et "B-BA" pour les bilans de banques et assurances.
            "confidentiel": 0, 
            // Ce champ peut contenir plusieurs valeurs, "0" signifie que le bilan est public, "1" indique que le bilan est confidentiel, "2", que le bilan est partiellement confidentiel.
            "date_cloture": "2016-12-31T00:00:00.000Z",
            "numero_gestion": "1973B00101"
          },
          {
            "id_fichier": 12553924,
            "siren": "788242667",
            "denomination_sociale": null,
            "code_greffe": 7402,
            "date_depot": "20180921",
            "nature_archive": "B-S",
            "confidentiel": 0,
            "date_cloture": "2017-12-31T00:00:00.000Z",
            "numero_gestion": "1973B00101"
          }
        ]
      }
  questions:
    qr3:
      question: Comment utiliser le fichier resonses.json ?
    qr2:
      question: Comment utiliser les données d'un bilan annuel partiellement ou
        entièrement confidentiel ?
      answer: ""
    qr1:
      question: Quel est le délai de mise à disposition des bilans dans l'API INPI ?
      answer: >-
        ###### Les bilans au format PDF 


        Les bilans PDF disponibles dans l'archive ZIP sont transmis théoriquement à l'INPI par le greffe 24h après leur dépôt.


        ###### Les bilans XML


        Les données du bilans mises à disposition sous forme de XML nécessitent un délai plus long de deux semaines.
---
