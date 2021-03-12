---
providers:
  - msa
access: Restreint
weight: 16
type: Attestations sociales et fiscales
title: Cotisations de sécurité sociale agricole
label: cotisations_msa
scope:
  - entreprises
description: Savoir si une **entreprise est à jour de ses cotisations sociales**
  auprès de la sécurité sociale agricole (MSA).
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
opening: Données protégées.
perimeter:
  description: |-
    Sont éligibles à la MSA les entreprises de : 

    * l'agriculture
    * l'élevage
    * la pèche
    * le forestier.
  label: Entreprises d'agriculture, élevage, pèche et forestier.
services:
  service1:
    request:
      id:
        label: SiretDeL’Etablissement
        description: Le numéro de SIRET de l'etablissement recherché.
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
      url: |-
        **cotisations_msa/**SiretDeL’Etablissement
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      description: La réponse indique si l'entreprise est à jour de ses cotisations
        employeurs auprès de la MSA. Dans certains cas et sur un laps de temps
        limité, l'entreprise peut faire l'objet d'une analyse manuelle par un
        agent de la MSA, ce qui sera indiqué dans la réponse.
      timeout: 5 secondes
      format: Donnée structurée JSON
      sample:
        code: >
          {
            "a_jour": true,
          // Si l'entreprise est à jour de ses cotisations patronales à la MSA, la réponse seral "true", à l'inverse, si l'entreprise n'est pas à jour, la réponse sera "false". Dans certains cas, le statut de l'entreprise est inconnu, une analyse est à effectuer, alors ce champ indiquera "null".
            "analyse_en_cours": false
          // Indique "false" quand le statut de l'entreprise est connu, autrement, indique "true" si justement, une analyse manuelle par un agent est en cours.

          }
      questions:
        qr1:
          question: Quelles sont les trois situations possibles pour une entreprise ?
          answer: >-
            Il existe donc 3 situations possibles pour une entreprise :


            * L'entreprise est à jour de ses cotisations sociales auprès de la MSA.

            * L'entreprise n'est pas à jour de ses cotisations sociales.

            * La régularité de l'entreprise est inconnue. Une analyse est à effectuer par un agent caisse de la MSA pour savoir si le débiteur est à jour ou pas.


            ℹ️ Ces trois situations correspondent à un fonctionnement normal de l'endpoint, quand il n'y a pas d'erreur à signaler. S'il y a une erreur, les champs seront vides et un code erreur HTTP vous sera envoyé.
availability:
  volumetry: 2000 requêtes/10 minutes par IP
  unavailability_types: /
  normal_availability: 7jours/7 et 24h/24
---
