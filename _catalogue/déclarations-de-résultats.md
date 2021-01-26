---
providers:
  - dgfip
access: Restreint
weight: 10
type: Informations financières
title: Déclarations de résultat
label: liasses_fiscales_dgfip
scope:
  - entreprises
description: Obtenir les **données contenues dans les liasses fiscales,** issues
  des déclarations de résultat d’une entreprise auprès de la Direction génénrale
  des finances publiques (DGFIP). Cet endpoint renvoyant beaucoup de données,
  plusieurs services sont disponibles, les déclarations seules, le dictionnaire
  seul, ou les deux réunis pour une entreprise donnée.
usecases:
  - Aides publiques
opening: Données confidentielles.
perimeter:
  description: >-
    La liasse fiscale est limitée aux entreprises  :


    * ✅ soumises à l'impôt sur les sociétés (IS)* ;

    * ✅ soumises à l'impôt sur les sociétés dû par le groupe (IS GROUPE)*;

    * ✅ aux bénéfices industriels et commerciaux (BIC)* ;

    * ✅ aux bénéfices non commerciaux (BNC)* ;

    * ✅ aux bénéfices agricoles (BA)*.


    *\*selon les règles des régimes réels normal ou simplifié.*


    ℹ️ Les entreprises anciennement aux forfaits BIC/BNC/BA , désormais ❌ régimes micro-BIC, micro-BNC et micro-BA ne déposent pas de déclaration de résultat mais des éléments spécifiques dans la déclaration 2042C qui relève de d'impôt sur le revenu et ne sont donc pas dans le périmètre de cet endpoint.
  label: Entreprises BIC, BA, BNC, ou soumises à l'IS, IS groupe.
services:
  service1:
    label: Déclaration d’une entreprise
    request:
      id:
        label: AnneeDeLaLiasseDemandée
        description: "L'année de la liasse fiscale demandée + le paramètre
          \"declarations\" + le numéro de SIREN de l'entreprise. "
        extra1: declarations
        extra2: SirenDeL’entreprise
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: user_id
          description: IdentifiantUtilisateurPhysique
        param3:
          label: email
          description: (optionnel)EmailUtilisateurFaisantLaDemande
        param4:
          label: context
          description: CadreDeLaRequête
        param5:
          description: BénéficiaireDel’Appel
          label: recipient
        param6:
          description: RaisonDeL’AppelOuIdentifiant
          label: object
      questions:
        qr1:
          answer: >-
            La date limite de dépôt des déclarations de résultat est fixée au
            2ème jour ouvré qui suit le 1er mai pour les entreprises qui
            clôturent à la fin de l'année civile.


            En cas d'exercice à cheval, la date limite de dépôt est positionnée exactement 3 mois après la date de clôture de l'exercice déclaré.
          question: Quelles sont les dates de dépôt des liasses fiscales par les
            entreprises ?
        qr2:
          question: Quel est le délai de mise à disposition des données d'une déclaration
            déposée par une entreprise ?
          answer: >-
            Les déclarations de résultat sont disponibles :


            * à compter du lendemain de la date de dépôt (J+1) ;

            * trois jours plus tard (J+3) si le dépôt intervient une veille de week-end.
        qr3:
          question: Qu'est-ce que le paramètre obligatoire user_id ?
          answer: >-
            Le paramètre `user_id` demandé et spécifique aux endpoints de la
            Direction Générale des Finances Publiques, est l'identifiant de
            l'utilisateur physique qui réalise l'appel à l'API. Ce paramètre
            permet de tracer précisément la source de l'appel et de vérifier que
            l'utilisateur a bien les droits d'accès à la donnée.


            Par exemple, dans le cas d'une place de marché, il s'agit de l'identifiant de l'acheteur public qui consulte la pièce.


            ℹ️ Pour mieux comprendre les paramètre obligatoires d'un appel, consulter la rubrique ["Instruire les paramètres de traçabilité"](../doc/#premiere-requete){:target="_blank"}.
      options:
        option1:
          param: ""
          description: ""
          comment: ""
      url: |-
        **liasses_fiscales_dgfip/**AnneeDeLaLiasseDemandée
        **/declarations/**SirenDeL’entreprise
        **?token=**JetonD’Habilitation
        **&user_id=**IdentifiantUtilisateurPhysique
        **&email=**(optionnel)EmailUtilisateurFaisantLaDemande
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      questions:
        qr2:
          question: Comment faire le lien avec le dictionnaire ?
          answer: >-
            Chaque liasse fiscale renvoyée est accompagnée d'un millésime, et
            chaque valeur est indiquée par un `code_nref`. Ce dernier est une
            suite de 6 chiffres. Le dictionnaire de liasses fiscales, disponible
            avec l'option d'appel `Annee/dictionnaire`, vous permet de retrouver
            la signification du code : "l'intitulé de la donnée". \

            \

            ℹ️ Il vous faudra à chaque fois préciser le millésime, car les nomenclatures évoluent chaque année.
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
          // Ce code vous permet de chercher la signification de la valeur qui suit dans le dictionnaire.
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
      description: ""
  service2:
    request:
      id:
        label: AnneeDeLaLiasseDemandée
        description: L'année de la liasse fiscale demandée.
        extra1: dictionnaire
        extra2: ""
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: user_id
          description: IdentifiantUtilisateurPhysique
        param3:
          label: email
          description: (optionnel)EmailUtilisateurFaisantLaDemande
        param4:
          label: context
          description: CadreDeLaRequête
        param5:
          description: BénéficiaireDel’Appel
          label: recipient
        param6:
          description: RaisonDeL’AppelOuIdentifiant
          label: object
      questions:
        qr1:
          answer: >-
            Le paramètre `user_id` demandé et spécifique aux endpoints de la
            Direction Générale des Finances Publiques, est l'identifiant de
            l'utilisateur physique qui réalise l'appel à l'API. Ce paramètre
            permet de tracer précisément la source de l'appel et de vérifier que
            l'utilisateur a bien les droits d'accès à la donnée.


            Par exemple, dans le cas d'une place de marché, il s'agit de l'identifiant de l'acheteur public qui consulte la pièce.


            ℹ️ Pour mieux comprendre les paramètre obligatoires d'un appel, consulter la rubrique ["Instruire les paramètres de traçabilité"](../doc/#premiere-requete){:target="_blank"}.
          question: Qu'est-ce que le paramètre obligatoire user_id ?
      url: |-
        **liasses_fiscales_dgfip/**AnneeDeLaLiasseDemandée
        **/dictionnaire/**
        **?token=**JetonD’Habilitation
        **&user_id=**IdentifiantUtilisateurPhysique
        **&email=**(optionnel)EmailUtilisateurFaisantLaDemande
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      sample:
        code: |
          {
            "dictionnaire": [
              {
                "numero_imprime": "2053",
                "millesimes": {
                  "millesime": "201501",
                  "statut_version": "V",
                  "declaration": [
                    {
                      "code_absolu": "2006747",
                      "code_EDI": "PG:C889:7111:1:TBX",
                      "code": "PG",
                      "intitule": "Mention déclaration néante",
                      "code_nref": "3305687"
                    },
                    {
                      "code_absolu": "2006744",
                      "code_EDI": "AA:C516:5004:1",
                      "code": "AA",
                      "intitule": "Capital souscrit non appelé- total (i) brut",
                      "code_nref": "300263"
                    }
                  ]
                }
              }
            ]
          }
    label: Dictionnaire des liasses fiscales
  service3:
    label: Liasses fiscales d'une entreprise et dictionnaire pour une année donnée
    request:
      id:
        label: AnnéeDeLaLiasseDemandée
        extra1: complete
        extra2: SirenDeL'Entreprise
        description: L'année de la liasse fiscale demandée
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: user_id
          description: IdentifiantUtilisateurPhysique
        param3:
          label: email
          description: (optionnel)EmailUtilisateurFaisantLaDemande
        param4:
          label: context
          description: CadreDeLaRequête
        param5:
          label: recipient
          description: BénéficiaireDel’Appel
        param6:
          description: RaisonDeL’AppelOuIdentifiant
          label: object
      questions:
        qr1:
          question: ⚠️ "Complete" ne signifie pas que toutes les liasses fiscales sont
            retournées
          answer: Le paramètre d'appel `complete` de ce service permet de retourner les
            déclarations disponibles d'une entreprise avec le dictionnaire de
            l'année demandée. Ce paramètre ne veut pas dire que toutes les
            liasses fiscales seront renvoyées. En effet, les déclarations
            disponibles sont restreintes par décret.
        qr2:
          answer: >-
            Le paramètre `user_id` demandé et spécifique aux endpoints de la
            Direction Générale des Finances Publiques, est l'identifiant de
            l'utilisateur physique qui réalise l'appel à l'API. Ce paramètre
            permet de tracer précisément la source de l'appel et de vérifier que
            l'utilisateur a bien les droits d'accès à la donnée.


            Par exemple, dans le cas d'une place de marché, il s'agit de l'identifiant de l'acheteur public qui consulte la pièce.


            ℹ️ Pour mieux comprendre les paramètre obligatoires d'un appel, consulter la rubrique ["Instruire les paramètres de traçabilité"](../doc/#premiere-requete).
          question: Qu'est-ce que le paramètre obligatoire user_id ?
      options:
        option1:
          param: ""
          description: ""
          comment: ""
        option2:
          description: ""
          param: ""
          comment: ""
      url: |-
        **liasses_fiscales_dgfip/**AnnéeDeLaLiasseDemandée
        **/complete/**SirenDeL'Entreprise
        **?token=**JetonD’Habilitation
        **&user_id=**IdentifiantUtilisateurPhysique
        **&email=**(optionnel)EmailUtilisateurFaisantLaDemande
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      sample:
        code: |-
          {
          // Les liasses fiscales de l'entreprise appelée.

            "entreprise": {
              "denomination" : "Ma Societe",
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
                  "donnees": [
                    {
                      "code_nref": "300282",
                      "valeur": "157955912"
                    },
                    {
                      "code_nref": "300283",
                      "valeur": "352174931"
                    }
                  ]
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
                      "code_nref": "300283",
                      "valeur": "352174931"
                    }
                  ]
                }
              }
            ],

            "dictionnaire": [
            // Le dictionnaire pour l'année donnée.
              {
                "numero_imprime": "2053",
                "millesimes": {
                  "millesime": "201501",
                  "statut_version": "V",
                  "declaration": [
                    {
                      "code_absolu": "2006747",
                      "code_EDI": "PG:C889:7111:1:TBX",
                      "code": "PG",
                      "intitule": "Mention déclaration néante",
                      "code_nref": "3305687"
                    },
                    {
                      "code_absolu": "2006744",
                      "code_EDI": "AA:C516:5004:1",
                      "code": "AA",
                      "intitule": "Capital souscrit non appelé- total (i) brut",
                      "code_nref": "300263"
                    }
                  ]
                }
              }
            ]
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
history: "##### 15/04/2019 Création des endpoints liasses fiscales"
availability:
  unavailability_types: Opérations de maintenance toutes les nuits entre 1h et 2h.
  normal_availability: 7jours/7 et 23h/24
  volumetry: 2000 requêtes/10 minutes par IP
---
