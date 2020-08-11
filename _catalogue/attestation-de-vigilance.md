---
providers:
  - acoss
new: >-
  À compter du 25 septembre 2019 :

  Pour un SIREN donné, il ne sera possible d'accéder à l'attestation que 10 fois par jour ; là où avant il n'y avait pas limite. Une fois cette limite atteinte il faudra attendre le lendemain (à partir de 00h00) pour obtenir de nouveau cette attestation. Cette limitation est mise en place directement par le fournisseur de données (ACOSS). **Il est donc recommandé de ré-utiliser la pièce fournie et hosté par API Entreprise plutôt que de renouveler vos appels pour une même attestation à quelques jours voire semaines d'interval**
access: Restreint
weight: 14
type: Attestations sociales et fiscales
title: Attestation de vigilance
label: attestations_sociales_acoss
scope:
  - entreprises
description: Obtenir l’attestation validant que l’entreprise s’acquitte de ses
  obligations déclaratives et du paiement des cotisations et contributions
  sociales auprès de l'ACOSS. L’attestation de vigilance permet également de
  prouver que l’entreprise respecte les règles applicables en matière de lutte
  contre le travail dissimulé.
usecases:
  - Aides publiques
  - Marchés publics
opening: Données confidentielles.
perimeter:
  description: >-
    Toutes les entreprises sont concernées.


    ⚠️ **L’attestation est délivrée si l'entreprise s'est acquitée de ses contributions et cotisations.**
  label: Toutes les entreprises.
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
          question: À quelles conditions l'attestation de vigilance est délivrée à une
            entreprise par l'ACOSS ?
          answer: >-
            L'entreprise ou micro entreprise reçoit l'attestation quand :


            * elle s'acquitte des cotisations et contributions dues à leur date normale d’exigibilité ;

            * elle a souscrit un plan d’apurement des cotisations et contributions restant dues, qu’elle respecte ;

            * elle s'acquitte des cotisations et contributions dues, mais elle n’est pas à jour par ailleurs dans le paiement des majorations et pénalités ;

            * ou elle ne s'est pas acquittée des cotisations et contributions dues mais en conteste le montant par recours contentieux.


            ℹ️ Le cadre précis de la demande par le donneur d'ordre et de la délivrance de l'attestation à l'entreprise est expliqué sur le site de l'ACOSS :[ https://www.urssaf.fr/portail/home/employeur/declarer-et-payer/obtenir-une-attestation/attestation-de-vigilance.html](<Quand est-ce que l'attestation de vigilance est délivrée par l'ACOSS ?>)
        qr2:
          question: Pourquoi ne puis-je plus avoir l'Attestation de Marché Publique (AMP)
            ?
          answer: L'AMP a été supprimée. Les informations sont maintenant contenues dans
            l'attestation de vigilance.
    response:
      format: Document PDF
      timeout: 12 secondes
      questions:
        qr1:
          answer: L’attestation de vigilance est valide 6 mois à compter de la dernière
            date de période analysée. Celle-ci dépend de la situation de chaque
            entreprise et de la dernière déclaration enregistrée dans le
            système.
          question: Combien de temps est valide l’attestation de vigilance ?
        qr2:
          question: L’api ne renvoie pas de pièce, peut-on considérer que l'entreprise
            n'est pas à jour ?
          answer: Non, dans certain cas, nous ne pouvons pas récupérer l’attestation. Ça
            ne signifie pas que l’entreprise n’est pas à jour.
        qr3:
          question: L’api ne renvoie pas la pièce, est ce que ça veut dire qu’elle ne sera
            jamais disponible ?
          answer: Non, dans certain cas, la requête lance une demande dans le système de
            l’ACOSS qui necessite un traitement par un gestionnaire avant que
            l’attestation soit disponible.
      sample:
        code: >
          {
              "url":
              "https://storage.entreprise.api.gouv.fr/siade/1569156881-f749d75e2bfd443316e2e02d59015f-attestation_vigilance_acoss.pdf"
          }
      description: La réponse se compose de l'URL permettant d'accéder à l’attestation
        de vigilance de l'entreprise demandée en PDF. [Voici un
        exemple](https://doc.entreprise.api.gouv.fr/files/attestation_sociale.pdf).
---
