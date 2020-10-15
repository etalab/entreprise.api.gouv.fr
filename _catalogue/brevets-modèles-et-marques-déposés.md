---
providers:
  - inpi
access: Restreint, [disponible en recherche manuelle sur le site de
  l'INPI](https://bases-marques.inpi.fr/)
weight: 24
type: Propriété intellectuelle
title: Brevets, modèles et marques déposés
label: extraits_courts_inpi
scope:
  - entreprises
  - associations
description: >-
  Récupérer certaines **informations sur les derniers brevets, modèles et
  marques** d’une entreprise enregistrés à l’INPI ; ainsi que le nombre de
  dépôts pour chacune de ces catégories.


  ⚠️ Le périmètre de cet endpoint n'est pas exhaustif, les données doivent donc être utilisées de manière qualitative et indicative.
usecases:
  - Marchés publics
  - Répertoire de tiers
opening: Données publiques.
history: "###### 2017-06-01 : Ouverture de l'endpoint"
availability:
  volumetry: 2000 requêtes/10 minutes par IP
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
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
  description: >-
    Cet endpoint appelle les informations à partir d'un SIREN. Le SIREN étant
    une information facultative lors du dépôt de dossier à l'INPI, le taux de
    sirénage est donc incomplet.


    Taux de sirénage des déposants (sur personnes morales FR) : 


    * Brevets France et brevets Europe délivrés : environ 80% sur les demandes de brevets publiées ces 20 dernières années ; 

    * Marques France : 60% ; 

    * Marques européennes : 0 % (marques déposées à l’EUIPO) ; 

    * Marques internationales : 0% (marques déposées à l’OMPI) ; 

    * Dessins & Modèles France : 50% ; 

    * Dessins & Modèles internationaux : 0% (dessins & modèles déposés à l’OMPI).


    ℹ️ Pour information, seule la raison sociale compte lors du dépôt pour une personne morale.
  label: Les brevets, marques et modèles enregistrés avec SIREN.
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
        description: Le numéro de SIREN de la personne physique ou morale.
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
      sample:
        code: >
          {

          // PARTIE BREVETS

            "brevets": {
              "count": 13161,
              // Nombre total des dépots de brevets effectués par l'entreprise.
              "latests_brevets": [
              // Liste des derniers brevets déposés par l'entreprise :
                {
                  "titre": "DETERMINATION DE PARAMETRES D&apos;UN MODELE DYNAMIQUE POUR UNE CELLULE ELECTROCHIMIQUE DE BATTERIE",
                  "date_publication": "20170616",
                  "date_depot": "20151214",
                  "numero_publication": "<country>FR</country><doc-number>3045218</doc-number><kind>A1</kind>"
                },
                {
                  "titre": "CARACTERISATION D&apos;UNE CELLULE ELECTROCHIMIQUE DE BATTERIE EN VIEILLISSEMENT",
                  "date_publication": "20170616",
                  "date_depot": "20151214",
                  "numero_publication": "<country>FR</country><doc-number>3045217</doc-number><kind>A1</kind>"
                },
                {
                  "titre": "BATTERIE COMPRENANT UNE PLURALITE DE CELLULES EN SERIE",
                  "date_publication": "20170616",
                  "date_depot": "20151214",
                  "numero_publication": "<country>FR</country><doc-number>3045216</doc-number><kind>A1</kind>"
                },
                {
                  "titre": "DISPOSITIF DE SIGNALISATION LUMINEUSE POUR VEHICULE AUTOMOBILE",
                  "date_publication": "20170616",
                  "date_depot": "20151209",
                  "numero_publication": "<country>FR</country><doc-number>3045132</doc-number><kind>A1</kind>"
                },
                {
                  "titre": "DIFFERENTIEL AUTOBLOQUANT POUR UN TRAIN DE ROUES D’UN VEHICULE",
                  "date_publication": "20170616",
                  "date_depot": "20151215",
                  "numero_publication": "<country>FR</country><doc-number>3045123</doc-number><kind>A1</kind>"
                }
              ]
            },



            
          // PARTIE MODELES

            "modeles": {
              "count": 361,
              // Nombre total des dépots de modèles effectués par l'entreprise.
              "latests_modeles": [
              // Liste des derniers modèles déposés par l'entreprise :
               {
                  "titre": "Véhicule automobile, vues de détails",
                  "date_publication": "20170602",
                  "date_depot": "20140527",
                  "numero_identification": "20142275"
                },
                 {
                  "titre": "Véhicule automobile - Vues de détails",
                  "date_publication": "20170210",
                  "date_depot": "20140128",
                  "numero_identification": "20140383"
                },
                {
                  "titre": "Véhicule automobile - vues de détails",
                  "date_publication": "20161104",
                  "date_depot": "20131025",
                  "numero_identification": "20134604"
                },
                {
                  "titre": "Véhicule automobile - vues de détails",
                  "date_publication": "20161104",
                  "date_depot": "20131025",
                  "numero_identification": "20134605"
                },
                {
                  "titre": "Véhicule automobile, vues de détails",
                  "date_publication": "20161104",
                  "date_depot": "20131011",
                  "numero_identification": "20134392"
                }
              ]
            },



            
          // PARTIE MARQUES

            "marques": {
              "count": 16,
              // Nombre total des dépots de marques effectués par l'entreprise.
              "latests_marques": [
              // Liste des dernières marques déposées par l'entreprise :
                {
                  "numero_identification": "4313413",
                  "marque": null,
                  "marque_status": "Marque enregistrée",
                  "depositaire": "PEUGEOT CITROËN AUTOMOBILES SA, Société anonyme",
                  "cle": "FMARK|4313413"
                },
                {
                  "numero_identification": "4313464",
                  "marque": "DISTRIGO PARTS DISTRIBUTION",
                  "marque_status": "Marque enregistrée",
                  "depositaire": "PEUGEOT CITROËN AUTOMOBILES SA, Société anonyme",
                  "cle": "FMARK|4313464"
                },
                {
                  "numero_identification": "4304459",
                  "marque": "DISTRIGO",
                  "marque_status": "Marque enregistrée",
                  "depositaire": "PEUGEOT CITROËN AUTOMOBILES SA, Société anonyme",
                  "cle": "FMARK|4304459"
                },
                {
                    "numero_identification": "4301612",
                  "marque": "FREE2 MOVE",
                  "marque_status": "Demande publiée",
                  "depositaire": "PEUGEOT CITROËN AUTOMOBILES SA, Société anonyme",
                  "cle": "FMARK|4301612"
                },
                {
                  "numero_identification": "4301617",
                  "marque": "FREE 2 MOVE LEASE",
                  "marque_status": "Demande publiée",
                  "depositaire": "PEUGEOT CITROËN AUTOMOBILES SA, Société anonyme",
                  "cle": "FMARK|4301617"
                }
              ]
            }
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse se compose de trois parties : 


        * les **derniers brevets déposés** (titre, date de publication, date de dépôt, numéro de publication) ; 

        * des **derniers modèles déposés** (titre, date de publication, date de dépôt, numéro d'identification) 

        * des **dernières marques déposée**s (numéro d'identification, nom de la marque, statut de la marque, dépositaire, clé).


        Chaque partie est introduite par le nombre total de dépôts effectués par l'entreprise.


        ⚠️ Les données présentes ne peuvent être considérées comme exhaustives.
      questions:
        qr1:
          question: Que conclure d'une absence de données ?
          answer: >-
            Actuellement, un retour vide peut avoir deux significations :  


            * soit le SIREN n'existe pas et est inconnu des services de l'INPI ; 

            * soit aucune donnée n'est enregistrée auprès du fournisseur pour cette société. 


            Vous pouvez si vous le souhaiter coupler vos appels avec une vérification de l'existence dans la base Sirene d'un SIREN en particulier qui permettra de trancher entre les deux options. À noter que certaines personnes peuvent demander à être retirées de la diffusion Sirene dans de très rares cas.
        qr2:
          question: ""
---
