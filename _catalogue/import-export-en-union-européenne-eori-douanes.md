---
weight: 5
type: Informations financières
title: Import/export en Union Européenne (EORI) - Douanes
label: eori_douanes
scope:
  - entreprises
description: "**Import/export en Union Européenne ;** savoir si une entreprise
  possède un numéro EORI actif."
usecases:
  - Aides publiques
  - Marchés publics
opening: Données confidentielles.
providers:
  - douanes
perimeter:
  label: Entreprise faisant de l'import/export en Union Européenne
  description: >-
    L'endpoint couvre toutes les entreprises faisant des échanges commerciaux
    entrant et sortant au sein de l'Union européenne.


    Plus d'information sur le site des [douanes](https://www.douane.gouv.fr/fiche/numero-eori-economic-operator-registration-and-identification) ou sur le site de l'[Union Européenne](https://ec.europa.eu/taxation_customs/business/customs-procedures/general-overview/economic-operators-registration-identification-number-eori_fr).
services:
  service1:
    request:
      id:
        label: SiretOuNuméroEORI
        description: SIRET ou numéro EORI de l'entreprise
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
        **eori_douanes/**SiretOuNuméroEORI
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
      questions:
        qr1:
          question: Je ne connais pas le numéro EORI de l'entreprise
          answer: >-
            Vous pouvez appeler cette API avec le SIRET de l'entreprise, si
            celle-ci a effectuée sa demande d'attribution de numéro EORI en
            France nous la trouverons. 




            Cependant si cette entreprise a fait sa demande d’attribution de numéro EORI dans un autre pays membre de l'Union Européenne il vous faudra demander ce numéro directement à l'entreprise. Il n'existe aucun moyen de trouver ce numéro.
        qr2:
          question: À quoi ressemble un numéro EORI ?
          answer: >-
            Pour les entreprises françaises ayant fait leur demande de numéro
            EORI auprès des douanes française celui-ci est FR+SIRET (ie:
            *FR16002307300010*).


            Sinon le numéro est composé de deux lettres du pays émetteur suivi d'un code ou d’un numéro unique dans cet État membre (ie: *ES12345678*).
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse se compose principalement de  :


        * le status **actif** ou non du numéro EORI, s'il est à false cette entreprise n'est plus autorisée à importer ou exporter en Union Européenne

        * la **raison sociale** de l'entreprise telle qu'enregistrée auprès des douanes

        * l'**adresse** de l'entreprise telle qu'enregistrée auprès des douanes, c'est une information importante quand l'entreprise est étrangère
      sample:
        code: |-
          {
            "actif": true,
            // indique si ce numéro est encore actif ou non
            "code_pays": "FR",
            "code_postal": "95520",
            "numero_eori": "FR16002307300010",
            "raison_sociale": "CENTRE INFORMATIQUE DOUANIER",
            "pays": "FRANCE",
            "rue": "27 R DES BEAUX SOLEILS",
            "ville": "OSNY"
          }
history: "##### 11/02/2021 Création de l'endpoint `eori_douanes`"
availability:
  volumetry: 2000 requêtes/10 minutes par IP
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
---
