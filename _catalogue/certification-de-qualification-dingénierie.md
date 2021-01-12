---
providers:
  - opqibi
access: Restreint, [disponible en recherche manuelle sur le site
  opqibi.com](https://www.opqibi.com/recherche-plus.php){:target="_blank"}
weight: 23
type: Certifications professionnelles
title: Certification de qualification d'ingénierie
label: certificats_opqibi
scope:
  - entreprises
description: Obtenir le certificat délivré par l'OPQIBI attestant de la
  **capacité d’une entreprise à réaliser une prestation d'ingénierie**.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
opening: Données publiques.
availability:
  volumetry: 2000 requêtes/10 minutes par IP
  unavailability_types: /
  normal_availability: 7jours/7 et 24h/24
service2:
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
perimeter:
  label: Presque 2000 entreprises.
  description: Au 31 décembre 2019, l'OPQIBI compte 1962 entreprises qualifiées.
service3:
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
          question: Qu'est ce que certifie l'OPQBI ?
          answer: >-
            Ce certificat permet de connaitre les qualifications et les
            qualifications probatoires qu'une entreprise maitrise.



            Une qualification **atteste de la capacité d’une entreprise d’ingénierie à réaliser une prestation déterminée**. Elle est attribuée sur la base de critères légaux, administratifs, juridiques, financiers et techniques (moyens (humains, matériels, méthodologiques) et références).



            Une qualification probatoire est attribuée à une entreprise nouvellement créée ou en cours de diversification qui ne dispose pas encore de référence ou en nombre insuffisant mais satisfait aux critères légaux, administratifs, juridiques et moyens. 


            **Une entreprise possède au moins une qualification ou une qualification probatoire.**
      url: |-
        **certificats_opqibi/**SirenDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      questions:
        qr1:
          answer: >-
            * Un certificat est valable 1 an ; 

            * Une qualification est valable 4 ans sous réserve de 3 contrôles annuels ;  

            * Une qualification probatoire est valable 1 an.
          question: Quelles sont les durées de validité ?
      format: Donnée structurée JSON
      timeout: 5 secondes
      sample:
        code: >-
          {

          // INFORMATIONS GÉNÉRIQUES

            "siren": "435054481",
            "numero_certificat": "14 12 2819",
            "date_de_delivrance_du_certificat": "01/12/2016",
            "duree_de_validite_du_certificat": "valable un an",
            "assurance": "GROUPAMA",
            "url": "http://opqibi.com/fiche.php?id=2975",




            
          // LISTE DES QUALIFICATIONS 

            "qualifications": [
            // La liste suivante énumère les qualifications de l'entreprise.
            {
              "code_qualification": "0316",
              // Chaque qualification est identifiée par un code à 4 chiffres.
              "nom": "CSPS de niveau 2 en phases \"conception et réalisation\"",
              "definition": "Aptitude à assurer la mission de coordination sécurité et protection de la santé en phases de conception et réalisation des opérations de 2ème  catégorie.<br />La mission commence obligatoirement en début de la phase de conception et se termine avec la remise du DIUO en fin d'opération.",
              "rge": "0"
              // Ce champ indique si la qualification est RGE, c'est à dire “Reconnu Garant de l’Environnement”.
              
            },
            {
              "code_qualification": "0901",
              "nom": "Repérage et diagnostic amiante avant travaux",
              "definition": "Concerne tous types de bâtiments, d'ouvrages d'infrastructure, d'équipements et de matériels susceptibles de contenir de l'amiante et pour lesquels des travaux de modification ou de démolition sont envisagés.<br /><br />Porte sur la recherche, la localisation et l'identification des matériaux et produits contenant de l'amiante (MPCA) selon les normes et textes en vigueur, tâche qui doit être entreprise avant la réalisation desdits travaux.<br /><br />Comprend en particulier la rédaction du rapport de repérage et l'établissement d'une cartographie permettant de localiser précisément les MPCA.<br /><br />",
              "rge": "0"
            },
            {
              "code_qualification": "0902",
              "nom": "Maîtrise d'oeuvre en désamiantage",
              "definition": "Validation du \"diagnostic amiante\", analyse des risques, définition des travaux d'élimination ou de neutralisation de l'amiante présent dans les composants et équipements du BTP, consultation des entreprises, analyse du plan de retrait, suivi des travaux et des marchés jusqu'à la réception finale.",
              "rge": "0"
            }
            ],
            "date_de_validite_des_qualifications" : "01/12/2018",
            // La date de validité des qualifications est toujours précisée en fin de liste.
            
            "qualifications_probatoires": [
            // Cette liste se compose de la même façon mais énumère les qualifications probatoires de l'entreprise.
            {
              "code_qualification": "0316",
              "nom": "CSPS de niveau 2 en phases \"conception et réalisation\"",
              "definition": "Aptitude à assurer la mission de coordination sécurité et protection de la santé en phases de conception et réalisation des opérations de 2ème  catégorie.<br />La mission commence obligatoirement en début de la phase de conception et se termine avec la remise du DIUO en fin d'opération.",
              "rge": "0"
            },
            {
              "code_qualification": "0317",
              "nom": "CSPS de niveau 1 en phases \"conception et réalisation\"",
              "definition": "Aptitude à assurer la mission de coordination sécurité et protection de la santé en phases de conception et réalisation des opérations de 1ère  catégorie.<br />La mission commence obligatoirement en début de la phase de conception et se termine avec la remise du DIUO en fin d'opération.<br /><br />Nota :  L'attribution de la qualification 0317 entraîne automatiquement celle de la qualification 0316.",
              "rge": "0"
            }
            ],
            "date_de_validite_des_qualifications_probatoires": "01/12/2016"

          }
      description: >-
        La réponse se compose :


        * des **informations génériques du certifica**t ; <br>ℹ️ Précisant notamment la date de délivrance du certificat et sa durée de validité.

        * des **qualifications** et qualifications probatoires de l'entreprise.<br>ℹ️ Indiquant le code de la qualification, son nom et sa définition, le statut "RGE" s'il est reconnu, et les dates de validité.
---
