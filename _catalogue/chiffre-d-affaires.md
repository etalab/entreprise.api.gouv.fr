---
providers:
  - dgfip
access: Sous habilitation.
weight: 7
type: Informations financières
title: Chiffre d'affaires
label: exercices
scope:
  - entreprises
description: Obtenir les **déclarations de chiffre d'affaire** faites auprès de
  la DGFIP, et portées sur la liasse fiscale.
usecases:
  - Aides publiques
  - Marchés publics
  - Détection de la fraude
opening: Données protégées.
perimeter:
  description: >-
    Sont disponibles uniquement les chiffres d'affaire des **entreprises qui
    vérifient les deux conditions** suivantes :


    * ✅ être **soumises à l'impôt sur les sociétés** selon les règles des régimes d'imposition réels, normal ou simplifié ;

    * ✅ avoir **transmis ses comptes annuels** aux greffes.


    Seuls les trois derniers exercices sont renvoyés. <br>ℹ️ Ceux-ci ne sont pas forcément les exercices des trois dernières années car il peut y avoir plusieurs exercices dans une même année.


    P-S : les micro-entrepreneurs ne sont pas soumis à l'IS mais à l'IR ; le chiffre d'affaire n'est donc pas disponible via API Entreprise.
  label: Entreprises soumises à l'IS, en régime normal ou simplifié.
services:
  service1:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le numéro de SIRET de l'entreprise.
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
        **exercices/**SiretDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      timeout: 5 secondes
      format: Donnée structurée JSON
      sample:
        code: |-
          {
            "exercices": [
              {
                "ca": "648374448",
                // Chiffre d'affaires en euros.
                "date_fin_exercice": "2016-12-31T00:00:00+01:00",
                "date_fin_exercice_timestamp": 1483138800
                // Exercice le plus récent.
              },
              {
                "ca": "491463386",
                "date_fin_exercice": "2015-12-31T00:00:00+01:00",
                "date_fin_exercice_timestamp": 1451516400
              },
              {
                "ca": "473899061",
                "date_fin_exercice": "2014-12-31T00:00:00+01:00",
                "date_fin_exercice_timestamp": 1419980400
                // Exercice le moins récent.
              }
            ]
          }
      questions:
        qr1:
          answer: >-
            ###### Le cas du régime réel normal


            Le chiffre d'affaire correspond au montant porté en case FL du [formulaire 2052 - compte de résultat de l'exercice](https://www.impots.gouv.fr/portail/files/formulaires/2052-sd/2018/2052-sd_2117.pdf), c'est-à-dire, le total des chiffres d'affaire nets de France et d'exportations et livraisons intracommunautaires.


            ###### Le cas du régime réel simplifié


            Le chiffre d'affaire correspond à la somme des montants indiqués dans les cases 210, 214 et 218 du [formulaire 2033B - compte de résultat simplifié de l'exercice](https://www.impots.gouv.fr/portail/files/formulaires/2033-sd/2018/2033-sd_2094.pdf) ; c'est à dire le total :


            * des ventes de marchandises (dont export et livraisons intracommunautaires) ;

            * de la production vendue des biens ;

            * de la production vendue des services, c'est à dire "*du montant des travaux, études et prestations de services exécutés, comprenant le cas échéant les produits des activités annexes (services exploités dans l'intérêt du personnel, commissions et courtages, locations diverses, mises à disposition de personnel facturées, ports et frais accessoires facturés, boni sur remises d'emballages consignés)."* <br>[Source : impôts.gouv](https://www.impots.gouv.fr/portail/files/formulaires/2033-sd/2019/2033-sd_2570.pdf)
          question: Quelle est la définition du chiffre d'affaire transmis ?
      description: >-
        Les exercices renvoyés par la DGFIP sont listés les uns après les
        autres, le premier étant le plus récent. Le nombre d'exercices renvoyés
        varie de 1 à 3. Pour chaque exercice, deux informations sont transmises
        :


        * le chiffre d'affaire en euros ;

        * la date de fin de l'exercice, communiquée au format textuel AAAA-MM-JJ et au format timestamp UNIX.
availability:
  unavailability_types: Opérations de maintenance toutes les nuits entre 1h et 2h.
  normal_availability: 7jours/7 et 23h/24
  volumetry: max. 250 requêtes/min/jeton cumulées sur tous les endpoints renvoyant du JSON.
---
