---
providers:
  - mi
access: Sous habilitation,<br>disponible sous d'autres conditions sur
  [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/){:target="_blank"}
weight: 4
type: Informations générales
title: Informations déclaratives d’une association
label: associations
scope:
  - associations
description: Obtenir les **informations déclarées par une association** à la
  préfecture et issues du Répertoire National des Associations (RNA), telles que
  la date de création, l’adresse du siège et les dirigeants.
usecases:
  - Aides publiques
  - Marchés publics
  - Préremplissage d'un formulaire
opening: Données publiques.
perimeter:
  label: Toutes les associations.
  description: Toutes les associations inscrites au Répertoire National des Associations.
services:
  service1:
    request:
      id:
        param: SiretDeL’Entreprise
        description: Le numéro de SIRET de l’association ou le numéro RNA.
        label: SIRETdeL'AssociationOuNumeroRNA
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: context
          description: CadreDeLaRequête
        param3:
          label: recipient
          description: BénéficiaireDeL'appel
        param4:
          label: object
          description: RaisonDeL'AppelOuIdentifiant
      options:
        option1:
          param: ""
          description: ""
          comment: ""
        option2:
          param: ""
          description: ""
          comment: ""
        option3:
          param: ""
          description: ""
          comment: ""
      url: |-
        **associations/**SIRETdeL'AssociationOuNuméroRNA
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDeL'appel
        **&object=**RaisonDeL'AppelOuIdentifiant
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse se compose :


        * d'un groupe d'informations générales sur l'association, dont notamment les dates de création/dissolution et l'adresse du siège ;

        * des informations sur les dirigeants.
      sample:
        code: >-
          {
            "association": {
              "id": "W751135389",
              // Débutant par W et composé de 9 chiffres, il s'agit du numéro RNA, identifiant national de l'association. Ce numéro est attribué automatiquement lors de la déclaration de création d’une association. Une association ne disposant pas d’un numéro RNA s’en voit attribuer un à chaque modification effectuée auprès des services de l’État (modification de statuts ou des dirigeants de l’associations). Le numéro figure alors sur le récépissé délivré par la préfecture.
              "titre": "ALLIANCE DU COEUR: UNION NATIONALE DES FEDERATIONS ET ASSOCIATIONS DE MALADES CARDIOVASCULAIRES",
              "objet": "information, soutien, solidarité et accompagnement psycho médico social des personnes malades cardiovasculaires et de leurs proches..."
              // Il s'agit d'une description courte mais exhaustive des activités de l'organisme.
              "siret": "42135938100025",
              "siret_siege_social": "42135938100033",
              "date_creation": "1993-02-11",
              // Il s'agit du jour de dépôt du dossier de création de l'association à la Préfecture.
              "date_declaration": "2013-06-28",
              // Jour de la dernière déclaration faîte par l'association.
              "date_publication": "1993-03-03",
              // Jour de la publication au journal officiel de l'avis de création de l'association. Toutes les assoiations ne sont pas forcément "déclarées". La publication au Journal Officiel permet à l'association de devenir une personne morale, a contrario des "associations de fait", non déclarées au JO.
              "date_dissolution": null,
              // Si l'association est dissolue, ce champ indique la date de dissolution, autrement, il est indiqué "null".
              "adresse_siege": {
                "complement": "  ",
                "numero_voie": "10",
                "type_voie": "RUE",
                "libelle_voie": "Lebouis",
                "distribution": "_",
                "code_insee": "75120",
                "code_postal": "75014",
                "commune": "Paris"
              },
              "code_civilite_dirigeant": null,
              "civilite_dirigeant": null,
              "code_etat": null,
              "etat": "true",
              "code_groupement": null,
              "groupement": "Simple",
              // Trois modalités possibles : si l'association n'est pas un groupement, il est indiqué "Simple" ; si l'association est un groupeement, la valeur est "Union" ou "Fédération".
              "mise_a_jour": "2013-06-28"
            }
          }
history: null
availability:
  normal_availability: 7jours/7 et 24h/24
  volumetry: 2000 requêtes/10 minutes par IP
  unavailability_types: /
category: Informations générales
---
