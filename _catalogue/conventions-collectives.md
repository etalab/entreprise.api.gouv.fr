---
weight: 7
type: Informations générales
title: Conventions collectives
label: conventions_collectives
scope:
  - entreprises
description: Connaître les **conventions collectives d'un établissement** et
  obtenir des informations telles que l'identifiant de la convention et le lien
  vers le texte en vigueur.
usecases:
  - Marchés publics
  - Aides publiques
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


            * les données d'affiliation des établissements d'entreprise aux conventions sont **issues de la [DARES](https://dares.travail-emploi.gouv.fr/dares-etudes-et-statistiques/){:target="_blank"}**, direction d'études et statistiques du Ministère du Travail, publiées sur sur [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/liste-des-conventions-collectives-par-entreprise-siret/){:target="_blank"} ;

            * Les informations relatives aux conventions collectives (numéro identifiant, titre, lien vers le texte légal, ...) sont issues de la base [KALI](https://www.data.gouv.fr/fr/datasets/kali-conventions-collectives-nationales/){:target="_blank"} **diffusée par la DILA**, Direction de l'information légale et administrative.


            ⚠️ La fréquence de mise à jour du fichier fournie par la DARES n'est pas précisée.
          question: Des données issues de plusieurs sources, une fréquence de mise à jour
            non précisée.
        qr2:
          question: ""
          answer: ""
      url: |-
        **conventions_collectives/**SiretDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse se compose des différentes conventions de l'établissement,
        listées les unes après les autres, dans le cas où l'établissement en a
        plusieurs. Les caractéristiques suivantes sont données : 


        * le **titre** et le **titre court** de la convention ;

        * l'état en **vigueur étendu ou non** de la convention ;

        * son **identifiant IDCC**, numéro à 4 chiffres ;

        * l'**URL Légifrance** du texte en vigueur.
      sample:
        code: >
          {
            "siret": "82161143100015",
            "conventions": [
              {
                "active": true,
                "date_publication": "1988-01-01T00:00:00.000Z",
                "etat": "VIGUEUR_ETEN",
                // Indique l'état de la convention, à savoir s'il est en vigueur étendu ("VIGUEUR_ETEN"), c'est à dire applicable obligatoirement par tous les employeurs de la branche ; ou bien en vigeur non étendu ("VIGUEUR"), obligatoire uniquement pour les employeurs signataires.
                "numero": 1486,
                // Ce numéro correspond à l'identifiant de la convention collective (IDCC).
                "titre_court": "Bureaux d'études techniques, cabinets d'ingénieurs-conseils et sociétés de conseils",
                "titre": "Convention collective nationale des bureaux d'études techniques, des cabinets d'ingénieurs-conseils et des sociétés de conseils du 15 décembre 1987. ",
                "url": "https://www.legifrance.gouv.fr/affichIDCC.do?idConvention=KALICONT000005635173"
                // Ce lien vous permet d'accéder au texte en vigueur de la convention collective sur Légifrance.
              }
            ]
          }
history: "##### 22/09/2020 Création de l'endpoint `conventions_collectives`"
availability:
  volumetry: max. 250 requêtes/min/jeton cumulées sur tous les endpoints renvoyant du JSON.
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
---
