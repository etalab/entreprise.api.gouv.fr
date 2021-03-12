---
weight: 22
type: Informations générales
title: Immatriculation EORI
label: eori_douanes
scope:
  - entreprises
description: Savoir si une entreprise est **immatriculée auprès des douanes**
  dans le cadre de l'**import/export en Union Européenne**, en vérifiant si elle
  possède un **numéro actif EORI** (Economic Operator Registration and
  Identification).
usecases:
  - Aides publiques
  - Marchés publics
opening: Données protégées.
providers:
  - douanes
perimeter:
  label: Entreprises important/exportant en Union Européenne.
  description: >-
    L'endpoint `/eori_douanes` couvre ✅ **toutes les entreprises faisant des
    échanges commerciaux** entrant et sortant au sein de l'Union européenne.


    **Appel avec un numéro EORI :**


    À condition de connaître le numéro EORI de l'entreprise recherchée, vous pouvez accéder au statut de l'immatriculation de ✅ toutes les entreprises de la base des douanes.


    **Appel avec un numéro de SIRET :**


    * Pour les ✅ entreprises ayant réalisé leur immatriculation EORI en France, vous pouvez utiliser le numéro de SIRET comme paramètre d'appel.

    * Pour les ❌ entreprises françaises ayant été fait leur immatriculation EORI dans un autre pays européen ; l'appel par SIRET ne fonctionne pas, et vous renverra toujours un négatif, même si l'entreprise possède un numéro EORI actif.


    ℹ️ Plus d'informations sur le site des [douanes](https://www.douane.gouv.fr/fiche/numero-eori-economic-operator-registration-and-identification) ou sur le site de l'[Union Européenne](https://ec.europa.eu/taxation_customs/business/customs-procedures/general-overview/economic-operators-registration-identification-number-eori_fr).
services:
  service1:
    request:
      id:
        label: NuméroEORIouSiret
        description: Numéro EORI de l'entreprise ou son SIRET si elle a été immatriculée
          en France.
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
        **eori_douanes/**NuméroEORIouSiret
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
      questions:
        qr1:
          question: À quoi ressemble un numéro EORI ?
          answer: >-
            Pour les entreprises françaises ayant fait leur demande de numéro
            EORI auprès des douanes française celui-ci est FR+SIRET (par exemple
            : *FR16002307300010*).


            Sinon le numéro est composé de deux lettres du pays émetteur suivi d'un code ou d’un numéro unique dans cet État membre (par exemple : *ES12345678*).
        qr2:
          question: Je ne connais pas le numéro EORI de l'entreprise
          answer: >-
            Vous pouvez appeler cette API avec le SIRET de l'entreprise, si
            celle-ci a effectuée sa demande d'attribution de numéro EORI en
            France nous la trouverons.


            Cependant si cette entreprise a fait sa demande d’attribution de numéro EORI dans un autre pays membre de l'Union Européenne, il vous faudra demander ce numéro directement à l'entreprise. Il n'existe aucun moyen de trouver ce numéro.


            ⚠️ Si vous ne savez pas si l'entreprise française a effectué son immatriculation en France, une réponse négative de l'endpoint peut être un faux négatif.
        qr3:
          answer: ""
          question: ""
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse se compose principalement  :


        * du status **actif** ou non du numéro EORI, s'il est à `false` cette entreprise n'est plus autorisée à importer ou exporter en Union Européenne ;

        * la **raison sociale** de l'entreprise telle qu'enregistrée auprès des douanes ;

        * l'**adresse** de l'entreprise telle qu'enregistrée auprès des douanes, c'est une information importante quand l'entreprise est étrangère.
      sample:
        code: >-
          {
            "actif": true,
            // indique si ce numéro est encore actif (true) ou non (false)
            "code_pays": "FR",
            "code_postal": "95520",
            "numero_eori": "FR16002307300010",
            "raison_sociale": "CENTRE INFORMATIQUE DOUANIER",
            // Il s'agit de la raison sociale telle que connue par les douanes.
            "pays": "FRANCE",
            "rue": "27 R DES BEAUX SOLEILS",
            "ville": "OSNY"
            // Il s'agit de l'adresse de l'entreprise telle que connue par les douanes.
          }
history: "##### 11/02/2021 Création de l'endpoint `eori_douanes`"
availability:
  volumetry: 2000 requêtes/10 minutes par IP
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
---
