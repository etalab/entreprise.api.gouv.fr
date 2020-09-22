---
weight: 7
type: Informations générales
title: Conventions collectives
label: conventions_collectives
scope:
  - entreprises
description: Connaître toutes les informations des conventions collectives
  rattachées à un établissement comme le numéro identifiant et le lien vers le
  texte en vigueur.
usecases:
  - Marchés publics
  - Aides publiques
  - Répertoire de tiers
opening: Données publiques.
providers:
  - fabsocial
perimeter:
  label: Tous les établissements ayant au moins une convention et déclaré des
    salariés.
  description: >-
    Les liens entre les établissements et les conventions collectives sont
    issues de la DSN, Déclaration Sociale Nominative, et le périmètre est donc
    restreint aux ✅ **établissements ayant déclaré des salariés** et ayant une
    convention. \

    ❌ Les sociétés unipersonnelles dont le gérant est assimilé salarié ne ressortent au travers de l'API, même si la société en question est rattachée à une convention collective.
services:
  service1:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le numéro de SIRET de l'établissement
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
            Cette API est fournie par la **fabrique numérique des ministères
            sociaux** qui s'appuie sur plusieurs sources de données : 


            * les données d'affiliation des établissements d'entreprise aux conventions sont **issues de la [DARES](https://dares.travail-emploi.gouv.fr/dares-etudes-et-statistiques/)**, direction d'études et statistiques du Ministère du Travail, publiées sur sur [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/liste-des-conventions-collectives-par-entreprise-siret/) ;

            * Les informations relatives aux conventions collectives (numéro identifiant, titre, lien vers le texte légal, ...) sont issues de la base [KALI](https://www.data.gouv.fr/fr/datasets/kali-conventions-collectives-nationales/) **diffusée par la DILA**, Direction de l'information légale et administrative.


            ⚠️ La fréquence de mise à jour du fichier fournie par la DARES n'est pas précisée.
          question: Des données issues de plusieurs sources, une fréquence de mise à jour
            non précisée.
        qr2:
          question: ""
          answer: ""
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: Un établissement pouvant être rattaché à plusieurs conventions
        collectives, les données de conventions sont renvoyées sous forme de
        liste JSON.
      sample:
        code: >
          {
            "siret": "82161143100015",
            "conventions": [
              {
                "active": true,
                "date_publication": "1988-01-01T00:00:00.000Z",
                "etat": "VIGUEUR_ETEN",
                "numero": 1486,
                // Ce numéro correspond à l'indentifiant de la convention collective (IDCC).
                "titre_court": "Bureaux d'études techniques, cabinets d'ingénieurs-conseils et sociétés de conseils",
                "titre": "Convention collective nationale des bureaux d'études techniques, des cabinets d'ingénieurs-conseils et des sociétés de conseils du 15 décembre 1987. ",
                "url": "https://www.legifrance.gouv.fr/affichIDCC.do?idConvention=KALICONT000005635173"
                // Ce lien vous permet d'accéder au texte en vigueur de la convention collective sur Legifrance Beta.
              }
            ]
          }
---
