---
weight: 10
type: Informations financières
title: Déclarations de résultat
label: liasses_fiscales_dgfip
scope:
  - entreprises
description: Obtenir les données contenues dans les liasses fiscales, issues des
  déclarations de résultat d’une entreprise auprès de la direction des finances
  publiques (DGFIP). Cet endpoints renvoyant beaucoup de données, plusieurs
  services sont disponibles, les déclarations seules, le dictionnaire seul, ou
  les deux réunis pour une entreprise donnée.
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
    La liasse fiscale est limitée aux entreprises  : 


    * soumises à l'impôt sur les sociétés (IS)* ;

    * soumises à l'impôt sur les sociétés dû par le groupe (IS GROUPE)*;

    * aux bénéfices industriels et commerciaux (BIC)* ;

    * aux bénéfices non commerciaux (BNC)* ;

    * aux bénéfices agricoles (BA)*.


    *\*selon les règles des régimes réels normal ou simplifié.*


    ℹ️ Les entreprises anciennement aux forfaits BIC/BNC/BA , désormais régimes micro-BIC, micro-BNC et micro-BA ne déposent pas de déclaration de résultat mais des éléments spécifiques dans la déclaration 2042C qui relève de d'impôt sur le revenu et ne sont donc pas dans le périmètre de cet endpoint.
  label: Entreprises BIC, BA, BNC, ou soumises à l'IS, IS groupe.
services:
  service1:
    label: Déclaration d’une entreprise
    request:
      id:
        label: AnneeDeLaLiasseDemandée
        description: "L'année de la liasse fiscale demandée + le paramètre
          \"declarations\" + le numéro de SIREN de l'entreprise "
        extra1: declarations
        extra2: SirenDeL’entreprise
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
          answer: >-
            Les déclarations de résultat sont disponibles à compter du lendemain
            de la date de dépôt (et trois jours plus tard (J+3) si le dépôt
            intervient une veille de week-end). \

            \

            La date limite de dépôt (DLD) des déclarations de résultat est fixée au 2ème jour ouvré qui suit le 1er mai pour les entreprises qui clôturent à la fin de l'année civile. En cas d'exercice à cheval, la DLD est positionnée à + 3 mois après la date de clôture de l'exercice déclaré.
          question: Quel est le délai de mise à disposition des données d'une déclaration
            déposée par une entreprise ?
        qr3:
          question: ""
          answer: ""
        qr2:
          question: La DGFIP applique-t-elle un filtre pour ne pas renvoyer certaines
            déclarations de résultats (entreprises s’étant opposées à la
            rediffusion de leur données ou soumises au secret défense ?)
          answer: Les données de la liasse fiscale sont des données publiables et ne sont
            pas soumises au secret défense. Seul le secret professionnel
            s'applique, cf. notamment contrat de service fonctionnel DGFiP/SGMAP
            du14/12/2016 V2.4. Dans ce cadre, Il existe un filtre pour limiter
            la transmission des liasses à certains tableaux (confidentialité des
            données comptables et/ou fiscales comme les frais généraux de
            l'entreprise).
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      questions:
        qr2:
          question: Comment faire le lien avec le dictionnaire ?
          answer: Chaque liasse fiscale renvoyée est accompagnée d'un millésime, et chaque
            valeur est indiquée par un `code_nref`. Ce dernier est une suite de
            6 chiffres, le dictionnaire de liasses fiscales disponible avec
            l'option d'appel `Annee/dictionnaire` vous permet de retrouver la
            signification du code, et donc de la valeur, appelé "intitulé de la
            donnée". Il vous faudra à chaque fois préciser le millésime, car les
            nomenclatures évoluent chaque année.
      sample:
        code: >-
          {
            "entreprise": {
              "denomination" : "Ma Societe",
              "itip": "100000105873",
              "setOcfis": {
                "codeNace": "4669B",
                "codeObf": "IS",
                "dateDebut": "1991-04-15T00:00:00+02:00",
                "dateDebutPourAttestationRegularite": "1991-04-15T00:00:00+02:00",
                "nbRof": "0",
                "numOcfi": "100210572749",
                "ROF": "IS1",
                "regime": "RSI",
                "texteExploitation": "ACHAT VTE MACHINES OUTILS"
                },
              "siren": "XXXXXXXXX"
            },
            "declarations": [
              {
                "code_regime": "NE",
                "date_declaration": "2014-04-25",
                "fin_exercice": "2013-12-31",
                "duree_exercice": "365 jours",
                "millesime": "201401",
                "numero_imprime": "2050",
                "imprime": {
                  "donnees": {
                    "code_nref": "300282",
                    "valeur": "157955912"
                  }
                }
              },
              {
                "code_regime": "RS",
                "date_declaration": "2014-04-25",
                "fin_exercice": "2013-12-31",
                "duree_exercice": "365 jours",
                "millesime": "201401",
                "numero_imprime": "2050",
                "imprime": {
                  "donnees": [
                    {
                      "code_nref": "300282",
                      "valeur": "157955912"
                    },
                    {
                      "code_nref": "306469",
                      "valeurs": {
                        "indiceRepetition": "1",
                        "valeur": "AMENDES"
                      }
                    }
                  ]
                }
              }
            ]
          }
  service2:
    request:
      id:
        label: AnneeDeLaLiasseDemandée
        description: "L'année de la liasse fiscale demandée + le paramètre
          \"declarations\" + le numéro de SIREN de l'entreprise "
        extra1: declarations
        extra2: SirenDeL’entreprise
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
          answer: Chaque liasse fiscale renvoyée est accompagnée d'un millésime, et chaque
            valeur est indiquée par un `code_nref`. Ce dernier est une suite de
            6 chiffres, le dictionnaire de liasses fiscales disponible avec
            l'option d'appel `Annee/dictionnaire` vous permet de retrouver la
            signification du code, et donc de la valeur, appelé "intitulé de la
            donnée". Il vous faudra à chaque fois préciser le millésime, car les
            nomenclatures évoluent chaque année.
          question: Comment faire le lien avec le dictionnaire ?
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
---
