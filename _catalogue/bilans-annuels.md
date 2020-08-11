---
providers:
  - inpi
access: Sous habilitation, <br>disponible partiellement (uniquement les bilans
  publics) sur le [site de l'INPI](https://data.inpi.fr/swagger).
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
opening: Données publiques et confidentielles.
perimeter:
  label: Certaines entreprises. <br>Tous les bilans depuis 2017.
  description: >-
    Cette API permet d'accéder **à tous les bilans annuels depuis 2017 des
    entreprises ayant décider de le déposer au greffe**, **y compris les bilans
    confidentiels**.


    ✅ **Toutes les entreprises** sont concernées sauf : 


    * ❌ les sociétés en micro-BNC ou micro-BIC ;

    * ❌ les entrepreneurs individuels (commerçants, artisans, profession libérale, micro-entrepreneurs notamment) ;


    ℹ️ Chaque année, il y a environ 1,2 million d'inscriptions par an, dont 45% avec déclaration de confidentialité.
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
      questions:
        qr1:
          question: ""
    response:
      format: Archive ZIP contenant PDF et XML
      timeout: 12 secondes
      description: >-
        La réponse se compose :


        * d'une **URL** permettant de télécharger une archive ZIP contenant l'ensemble des bilans au format PDF de l'entité appelée ;

        * de la **liste des bilans, accompagnés de leurs informations génériques** (identifiant du fichier dans l'archive téléchargée, le code greffe, les dates de dépôt et clôture, la nature de l'archive, son degré de confidentialité, et le numéro de gestion.)


        L'archive ZIP fournie par l'URL se compose de :


        * de tous les comptes annuels au format PDF ;

        * de toutes les métadonnées de chaque bilan, au format XML, portant le même nom que le PDF associé ;

        * d'un fichier `Response.json` permettant de retrouver le PDF dans l'archive à partir de l' `id_fichier` du bilan indiqué dans la liste JSON des bilans.
      sample:
        code: >-
          {
            "url_documents": "https://storage.entreprise.api.gouv.fr/siade_dev/1565607027-91ac7ac7e80b866055d23b9203e41fa0de487bc0-all_documents.zip",
            "bilans": [
              {
                "id_fichier": 11439992, 
                // Cet identifiant permet de retrouver le document dans l'archive ZIP, à l'aide du fichier "Response.json" permettant de faire lien entre cet ID et le nom du PDF.
                "siren": "788242667",
                "denomination_sociale": null,
                "code_greffe": 7402,
                // Ce code indique le greffe auquel est rattaché l'entreprise. 7402 correspond par exemple au greffe de Thonon-les-Bains.
                "date_depot": "20180116",
                "nature_archive": "B-S", 
                // indique la nature du bilan, "B_C" pour bilan consolidé, "B-S" pour bilan simplifié, "B-CO" pour bilan complet et "B-BA" pour les bilans de banques et assurances.
                "confidentiel": 0, 
                // Ce champ peut contenir plusieurs valeurs, "0" signifie que le bilan est public, "1" indique que le bilan est confidentiel, "2", que le bilan est partiellement confidentiel.
                "date_cloture": "2016-12-31T00:00:00.000Z",
                "numero_gestion": "1973B00101"
                // C'est le numéro de dossier attribué par le greffe, il permet d'identifier de manière unique les dossiers. Cette unicité est valable pour un seul greffe. L'unicité totale s'obtient donc en associant le code greffe au numéro de gestion.
              },
              {
                "url_documents": "https://storage.entreprise.api.gouv.fr/siade_dev/1565607027-91ac7ac7e80b866055d23b9203e41fa0de487bc0-all_documents.zip",
                "bilans": [
                  {
                    "id_fichier": 11439992,
                    "denomination_sociale": null,
                    "code_greffe": 7402,
                    "date_depot": "20180116",
                    "nature_archive": "B-S",
                    "confidentiel": 0, 
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
        qr1:
          answer: >-
            Certaines entreprises (PME) peuvent décider de ne pas publier leurs
            comptes annuels. Elles ont toutefois l’obligation de les déposer.
            Leurs bilans sont donc présents à l'INPI et cet endpoint permet d'y
            accéder. 


            ###### Bilans confidentiels


            Lorsque le champ `confidentiel` est égal à `1`, cela signifie que le bilan est totalement confidentiel et implique que vous vous engagez à n'**utiliser ces informations que dans le cadre strict de vos missions de service public**, à **ne pas les rediffuser** ni les divulguer auprès de tiers non autorisés.


            ###### Bilan partiellement confidentiels


            Lorsque le champ `confidentiel` est égal à `2`, cela signifie qu'une partie du document est confidentielle et que l'autre est publique. Depuis 2019, l'INPI a rendu les PDF séparables, ce qui permet aux personnes n'ayant pas d'habilitation spécifique de télécharger les informations publiques disponibles.


            Dans le cadre de l'utilisation de l'API Entreprise, **les bilans partiellement confidentiels de l'INPI sont à traiter comme les bilans confidentiels** puisque la distinction n'est pas faite entre données publiques et secrètes. Vous vous engagez  à n'utiliser ces informations que dans le strict cadre de vos missions de service publics, à ne pas les rediffuser ni les divulguer à des tiers non autorisés.
          question: Comment utiliser les bilans confidentiels <br>et les bilans
            partiellement confidentiels ?
        qr2:
          question: Quel est le délai de mise à disposition des bilans dans l'API INPI ?
          answer: >-
            Les **bilans PDF** disponibles dans l'archive ZIP sont transmis
            théoriquement par le greffe **24h après leur dépôt**.


            Les **données** du bilan mises à disposition sous forme XML nécessitent un délai plus long de **deux semaines**.
---
