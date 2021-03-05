---
type: Certifications professionnelles
title: Certifications en BIO
label: certificats_agence_bio
scope:
  - entreprises
  - associations
description: Obtenir les **certifications biologiques** d'une entreprise ou
  d'une association, ainsi que leur **organisme de certification** et la **liste
  des catégories de produits certifiés** si elles ont une activité de
  production. Ces données sont fournies par l'Agence Française pour le
  Développement et la Promotion de l'Agriculture Biologique (Agence BIO) qui
  agrège les données de l'ensemble des organismes certificateurs. Ces
  informations sont aussi consultables sur leur [annuaire
  officiel](https://annuaire.agencebio.org/).
usecases:
  - Aides publiques
opening: Données publiques.
providers:
  - agencebio
perimeter:
  label: Les entités ayant une certification BIO
  description: >-
    **Cette API renvoie l'état des certifications de :**

    * ✅ toutes les entreprises certifiées BIO ; 

    * ✅ des associations certifiées BIO ayant un numéro de SIRET.


    Les données disponibles sont issues de l'annuaire officiel de l'Agence BIO, lui même alimenté par les différents organismes certificateurs : la donnée JSON renvoyée est elle-même certifiée.


    **Seulement 60% (bientôt 90%) des certificats PDF sont accessibles :** 

    <details class="fold-underline">

    <summary>

    Lire la suite

    </summary>

    * Aujourd'hui, seuls ✅ **deux organismes certificateurs** (XXX et XXX) ont mis en ligne les certificats, d'où le pourcentage de PDF accessibles depuis le lien. 

    * Pour les cas restants, correspondant à de ❌ **plus petits organismes de certification**, il peut être nécessaire de les contacter pour obtenir la pièce justificative.

    ℹ️ Les certificats sont accessibles en suivant le lien transmis, permettant de se rendre sur la page HTML de l'annuaire en ligne sur lequel il est possible de télécharger les certificats.

    </details>
services:
  service1:
    request:
      id:
        label: SiretDeL’entité
        description: Le numéro de SIRET de l'entreprise ou de l'association
      url: |-
        **certificats_agence_bio/**SiretDeL'entité
        **?token=**JetonD'Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDeL'appel
        **&object=**RaisonDeL'AppelOuIdentifiant
    response:
      timeout: 5 secondes
      format: Donnée structurée JSON
      sample:
        code: >-
          [
             {
                "raison_sociale":"La bio pep's",
                "denomination_courante":"Donnée indisponible",
                "siret":"48311105000025",
                "numero_bio":18344,
                "date_derniere_mise_a_jour":"2020-10-27",
                "reseau":"",
                "categories":[
                   "Vente aux consommateurs",
                   "Artisans/commerçants"
                ],
                "activites":[
                   {
                      "id":1,
                      "nom":"Production"
                   },
                   {
                      "id":3,
                      "nom":"Distribution"
                   },
                   {
                      "id":6,
                      "nom":"Stockage"
                   }
                ],
                "adresses_operateurs":[
                   {
                      "lieu":"26 RUE ELISEE RECLUS",
                      "code_postal":"49800",
                      "ville":"TRELAZE",
                      "lat":47.450877,
                      "long":-0.4932483,
                      "type":[
                         "Lieux de vente"
                      ]
                   },
                   {
                      "lieu":"Les Brossayes",
                      "code_postal":"49140",
                      "ville":"Rives-du-Loir-en-Anjou",
                      "lat":47.5346086,
                      "long":-0.4776778,
                      "type":[
                         "Lieux d'activité"
                      ]
                   },
                   {
                      "lieu":"les brossayes",
                      "code_postal":"49140",
                      "ville":"les rives sur loire en anjou",
                      "lat":48.846982,
                      "long":2.373565,
                      "type":[
                         "Siège social"
                      ]
                   }
                ],
                "productions":[
                   {
                      "nom":"Framboises",
                      "code":"01.25.12",
                      "id":222
                   },
                   {
                      "nom":"Maïs doux",
                      "code":"01.11.20.1",
                      "id":75
                   },
                   {
                      "nom":"Choux-fleurs et brocolis",
                      "code":"01.13.13",
                      "id":67
                   },
                   {
                      "nom":"Poires",
                      "code":"01.24.21",
                      "id":207
                   },
                   {
                      "nom":"Pommes de table",
                      "code":"01.24.10.2",
                      "id":205
                   },
                   {
                      "nom":"Autres fruits à noyau",
                      "code":"01.24.29.2",
                      "id":217
                   },
                   {
                      "nom":"Autres fruits à pépins",
                      "code":"01.24.29.1",
                      "id":216
                   },
                   {
                      "nom":"Prunes",
                      "code":"01.24.27",
                      "id":213
                   },
                   {
                      "nom":"Pêches",
                      "code":"01.24.25",
                      "id":211
                   },
                   {
                      "nom":"Cerises",
                      "code":"01.24.24",
                      "id":210
                   },
                   {
                      "nom":"Abricots",
                      "code":"01.24.23",
                      "id":209
                   },
                   {
                      "nom":"Autres fruits d'arbres ou d'arbustes n.c.a.",
                      "code":"01.25.9",
                      "id":239
                   },
                   {
                      "nom":"Noisettes",
                      "code":"01.25.33",
                      "id":235
                   },
                   {
                      "nom":"Amandes",
                      "code":"01.25.31",
                      "id":233
                   },
                   {
                      "nom":"Autres baies (hors cassis et myrtilles)",
                      "code":"01.25.19.3",
                      "id":227
                   },
                   {
                      "nom":"Myrtilles",
                      "code":"01.25.19.2",
                      "id":226
                   },
                   {
                      "nom":"Cassis",
                      "code":"01.25.19.1",
                      "id":225
                   },
                   {
                      "nom":"Fraises",
                      "code":"01.25.13",
                      "id":223
                   },
                   {
                      "nom":"Kiwis",
                      "code":"01.25.11",
                      "id":221
                   },
                   {
                      "nom":"Figues",
                      "code":"01.22.14",
                      "id":189
                   },
                   {
                      "nom":"Légumes frais plein champ",
                      "code":"01.13.90.2",
                      "id":130
                   },
                   {
                      "nom":"Légumes frais sous abris",
                      "code":"01.13.90.1",
                      "id":129
                   },
                   {
                      "nom":"Patates douces",
                      "code":"01.13.52",
                      "id":110
                   },
                   {
                      "nom":"Betteraves rouges et à salade",
                      "code":"01.13.49.2",
                      "id":104
                   },
                   {
                      "nom":"Radis",
                      "code":"01.13.49.1",
                      "id":103
                   },
                   {
                      "nom":"Oignons",
                      "code":"01.13.43.1",
                      "id":99
                   },
                   {
                      "nom":"Ail",
                      "code":"01.13.42",
                      "id":97
                   },
                   {
                      "nom":"Carottes",
                      "code":"01.13.41.1",
                      "id":95
                   },
                   {
                      "nom":"Potiron / Potimarron",
                      "code":"01.13.39.32",
                      "id":90
                   },
                   {
                      "nom":"Courge musquée / Butternut",
                      "code":"01.13.39.31",
                      "id":89
                   },
                   {
                      "nom":"Courgettes",
                      "code":"01.13.39.2",
                      "id":87
                   },
                   {
                      "nom":"Tomates",
                      "code":"01.13.34",
                      "id":85
                   },
                   {
                      "nom":"Aubergines",
                      "code":"01.13.33",
                      "id":84
                   },
                   {
                      "nom":"Concombres et cornichons",
                      "code":"01.13.32",
                      "id":83
                   },
                   {
                      "nom":"Piments et poivrons, verts (uniquement capsicum)",
                      "code":"01.13.31",
                      "id":82
                   },
                   {
                      "nom":"Pastèques",
                      "code":"01.13.21",
                      "id":79
                   },
                   {
                      "nom":"Melons",
                      "code":"01.13.29.1",
                      "id":1430
                   }
                ],
                "certificats":[
                   {
                      "organisme":"Certipaq",
                      "date_engagement":"2020-09-29",
                      "date_arret":null,
                      "date_suspension":null,
                      "url":"https://www.certipaq.solutions/bio/certificats/fiche/56530/barbot-fabrice/",
                      "etat_certification":"ENGAGEE"
                   }
                ]
             }
          ]
      questions:
        qr1:
          question: Il n'y a aucun lien pour télécharger le certificat, est-ce normal ?
        qr2:
          question: L'appel de certains SIRET renvoie plusieurs réponses, laquelle choisir ?
          answer: >-
            Dans certains cas très minoritaires (environ 700 cas sur 90 000
            opérateurs), l'endpoint `/certificats_agence_bio` est susceptible de
            renvoyer plusieurs items au lieu d'un.\

            Ce doublon est un résidu de migration que l'Agence BIO est en train de progressivement résorber.


            *  Dans le cas où sur les deux items, l'un présente un `"etat_certification" = "ARRETEE"`. Vous pouvez tenir compte uniquement de l'item présentant un `"etat_certification" = "ENGAGEE"`.

            * Dans le cas où les deux items présentent un `'etat_certification'` engagé. Il n'y aucun moyen de savoir lequel est à jour. L'Agence BIO elle-même résorbe progressivement ces doublons en collaboration avec les organismes certificateurs.
      description: >-
        La réponse se compose : 


        * d'**informations générale sur l'opérateur** (l'entreprise ou l'association certifiée), telles que sa raison sociale, son numéro BIO, ses activités et ses adresses postales ;

        * de la **liste des produits certifiés** ;

        * et enfin des **informations sur les différents certificats** (état de la certification, nom de l'organisme, dates clés) accompagnées d'une **URL pour télécharger le certificat** depuis l'annuaire de l'Agence BIO .
---
