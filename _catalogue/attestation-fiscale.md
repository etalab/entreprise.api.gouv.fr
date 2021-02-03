---
providers:
  - dgfip
access: Restreint
type: Attestations sociales et fiscales
title: Attestation fiscale
label: attestations_fiscales_dgfip
scope:
  - entreprises
description: Obtenir l’**attestation fiscale**, délivrée par la Direction
  générale des finances publiques, indiquant que l'**entreprise est à jour de
  ses obligations fiscales.**
usecases:
  - Aides publiques
  - Marchés publics
opening: Données confidentielles.
perimeter:
  description: >-
    L'attestation de régularité fiscale est **limitée aux ✅ entreprises soumises
    à l'impôt sur les sociétés (IS)** à l'exclusion des :


    * ❌ bénéfices industriels et commerciaux (BIC) ;

    * ❌ bénéfices non commerciaux (BNC) ;

    * ❌ bénéfices agricoles (BA) ;


    Sont aussi exclues, même si les obligations fiscales sont respectées, les :


    * ❌ entreprises individuelles ;

    * ❌ sociétés de personnes ;

    * ❌ groupements passibles de l'impôt sur le revenu (entrepreneurs individuels).


    ⚠️ **L'attestation est délivrée si les obligations déclaratives et de paiement d'IS et de TVA de la société sont en règle.** Ainsi, les sociétés bénéficiant d’un plan de règlement, redressement, sauvegarde ou conciliation ainsi que les sociétés ayant formulé un recours contentieux assorti d’un sursis de paiement ne peuvent pas se voir délivrer une attestation fiscale.
  label: Entreprises soumises à l'IS.
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
          label: user_id
          description: IdentifiantUtilisateurPhysique
        param3:
          label: context
          description: CadreDeLaRequête
        param4:
          label: recipient
          description: BénéficiaireDel’Appel
        param5:
          description: RaisonDeL’AppelOuIdentifiant
          label: object
      options:
        option1:
          param: "**&siren_is=**SirenDuGroupeIS"
          description: Dans le cas où l'entreprise recherchée appartient à un groupe de
            sociétés imposé selon régime fiscal d’intégration visé à l’article
            223 A du CGI, dit groupe IS, c'est cette société mère qui est en
            charge des obligations fiscales. Il vous faudra donc indiquer
            également le SIREN du groupe IS.
          comment: "Si l'entreprise appartient à un groupe IS, ajoutez le SIREN référent
            du groupe avec le paramètre suivant :"
        option2:
          param: "&siren_tva"
          description: Dans le cas où l'entreprise recherchée appartient à un groupe de
            sociétés ayant opté pour la consolidation du paiement de la TVA
            définie à l’article 1693 ter du CGI, dit groupe TVA, c'est cette
            société mère qui est en charge des obligations fiscales. Il vous
            faudra donc indiquer également le SIREN du groupe TVA.
          comment: "Si l'entreprise appartient à un groupe TVA, ajoutez le SIREN référent
            du groupe avec le paramètre suivant :"
      questions:
        qr1:
          question: Qu'est-ce que le paramètre obligatoire user_id ?
          answer: >-
            Le paramètre `user_id` demandé et spécifique aux endpoints de la
            Direction Générale des Finances Publiques, est **l'identifiant de
            l'utilisateur physique qui réalise l'appel à l'API**. Ce paramètre
            permet de tracer précisément la source de l'appel et de vérifier que
            l'utilisateur a bien les droits d'accès à la donnée.


            Par exemple, dans le cas d'une place de marché, il s'agit de l'identifiant de l'acheteur public qui consulte la pièce.


            ℹ️ Pour mieux comprendre les paramètre obligatoires d'un appel, consulter la rubrique ["Instruire les paramètres de traçabilité"](../doc/#premiere-requete){:target="_blank"}.
      url: |-
        **attestations_fiscales_dgfip/**SirenDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&user_id=**IdentifiantUtilisateurPhysique
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      format: Document PDF
      timeout: 12 secondes
      description: La réponse est composée d'une URL permettant de télécharger
        l'attestation en PDF, dont [voici un
        exemple](https://entreprise.api.gouv.fr/assets/pdf/attestation_fiscale.pdf).
      questions:
        qr1:
          question: Qu'atteste ce document ? et quelle est sa durée de validité ?
          answer: >-
            L’attestation fiscale atteste que l’entreprise est **à jour des ses
            obligations fiscales** à la date du 31/12 de l’année précédente.
            <br> *Par exemple si vous demandez une attestation en mars 2015,
            l’attestation fiscale vous indiquera que l’entreprise est à jour de
            ses obligations fiscale lui incombant au 31/12/2014.*


            L’attestation fiscale est **valide un an** sur une année civile (jusqu’au 31/12/AAAA).
        qr2:
          question: L’api ne renvoie pas de pièce, est ce que ça veut dire que
            l’entreprise n’est pas à jour ?
          answer: Non, dans certains cas particuliers, nous ne pouvons pas renvoyer
            l’attestation. Ça ne veut pas dire que l’entreprise n’est pas à
            jour. Il faut se rapprocher de l’entreprise pour lui demander la
            pièce directement.
        qr3:
          answer: Non, si une entreprise se voit refuser la délivrance de l’attestation
            pour cause de carence de ses déclarations ou de ses paiements, cette
            non délivrance n’est pas définitive pour toute l’année N. Si ensuite
            elle régularise sa situation pour les années N-1 et antérieures,
            alors l’attestation de régularité lui sera délivrée.
          question: L’api ne renvoie pas la pièce, est ce que ça veut dire qu’elle ne sera
            jamais disponible ?
      sample:
        code: >
          {
            "url":
            "https://storage.entreprise.api.gouv.fr/siade/1569156756-f6b7779f99fa95cd60dc03c04fcb-attestation_fiscale_dgfip.pdf"
          }
availability:
  unavailability_types: Opérations de maintenance toutes les nuits entre 1h et 2h.
  normal_availability: 7jours/7 et 23h/24
  volumetry: 2000 requêtes/10 minutes par IP
---
