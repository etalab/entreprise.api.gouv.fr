---
weight: 24
type: Propriété intellectuelle
title: Brevets, modèles  et marques déposés
label: extraits_courts_inpi
scope:
  - entreprises
  - associations
description: >-
  Récupérer certaines informations sur les derniers brevets, modèles et marques
  d’une entreprise enregistrés à l’INPI ; ainsi que le nombre de dépôts pour
  chacune de ces catégories.

   \
  ⚠️ Le périmètre de cet endpoint n'est pas exhaustif, les données doivent donc être utilisées de manière qualitative et indicative.
usecases:
  - Marchés publics
  - Répertoire de tiers
access: Restreint, [disponible en recherche manuelle sur le site de
  l'INPI](https://bases-marques.inpi.fr/)
opening: Données publiques
providers:
  - inpi
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
  label: Les brevets, marques et modèles enregistrés avec SIREN
services:
  service1:
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
      sample:
        code: >
          {
            "brevets": {
              "count": 13161,
              "latests_brevets": [{
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
            "modeles": {
              "count": 361,
              "latests_modeles": [{
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
            "marques": {
              "count": 16,
              "latests_marques": [{
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
        La réponse se compose du nombre total de dépôt de l'entreprise et de
        trois listes décrivant :


        * les derniers brevets déposés (titre, date de publication, date de dépôt, numéro de publication) ; 

        * les derniers modèles déposés (titre, date de publication, date de dépôt, numéro d'identification) 

        * et les dernières marques déposées (numéro d'identification, nom de la marque, statut de la marque, dépositaire, clé).


        ⚠️ Les données présentes ne peuvent être considérées comme exhaustives
      questions:
        qr1:
          question: Que conclure d'une absence de données ?
          answer: >-
            Actuellement, un retour vide peut avoir deux significations. 


            * soit le siren n'existe pas et est inconnu des services de l'INPI ; 

            * soit aucune donnée n'est enregistrée auprès du fournisseur pour cette société. 


            Vous pouvez si vous le souhaiter coupler vos appels avec une vérification de l'existence dans la base SIRENE d'un siren en particulier qui permettra de trancher entre les deux options. À noter que certaines personnes peuvent demander à être retirées de la diffusion SIRENE dans de très rares cas
        qr2:
          question: ""
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
---
