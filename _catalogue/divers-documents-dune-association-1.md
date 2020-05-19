---
weight: 7
type: Informations financières
title: Chiffre d'affaires
label: exercices
scope:
  - entreprises
description: Obtenir les trois dernières déclarations de chiffre d'affaire
  faites auprès de la DGFIP, et porté sur la liasse fiscale.
usecases:
  - Aides publiques
  - Marchés publics
  - Application de la loi énergie - Art.64
access: Restreint
opening: Données confidentielles
providers:
  - dgfip
perimeter:
  description: >-
    Cet endpoint ne renvoie les chiffres d'affaire que pour les entreprises qui
    vérifient les conditions suivantes :


    * Il existe pour cette entreprise **au moins** 3 exercices ;

    * L'entreprise est soumise à l'impôt sur les sociétés selon les règles des régimes d'imposition réels normal ou simplifié ;

    * L'entreprise à transmis ses comptes annuels aux greffes.


    Cet endpoint vous permet d'accéder aux trois derniers exercices. ℹ️ Ceux-ci ne sont pas forcément les exercices des trois dernières années car il peut y avoir plusieurs exercices dans une même année.
  label: Entreprises soumises à l'IS, en régime normal ou simplifié.
request:
  id:
    label: SiretDeL’Entreprise
    description: Le numéro de Siret de l'entreprise
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
  timeout: 5 secondes
  format: Donnée structurée JSON
  sample:
    code: |-
      {
        "exercices": [
          {
            "ca": "648374448",
            "date_fin_exercice": "2016-12-31T00:00:00+01:00",
            "date_fin_exercice_timestamp": 1483138800
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
          }
        ]
      }
  questions:
    qr1:
      answer: >-
        Dans le cas du régime réel normal, le chiffre d'affaire correspond au
        montant porté en case FL de l’[imprimé
        2052](https://www.impots.gouv.fr/portail/formulaire/2052-sd/compte-de-resultat-de-lexercice-en-liste). 


        Dans le cas du régime réel simplifié, il correspond à la somme des montants indiqués dans les cases 210, 214 et 218 du formulaire 2033B.
      question: À quoi correspondent les chiffres d'affaires renvoyés ?
  description: Le json renvoit un tableau de 1 à 3 exercices, le premier étant le
    plus récent. Pour chaque exercice, le chiffre d'affaire et la date de fin de
    l'exercice sont
---
