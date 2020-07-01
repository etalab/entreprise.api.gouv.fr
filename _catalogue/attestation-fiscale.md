---
type: Attestations sociales et fiscales
title: Attestation fiscale
label: attestations_fiscales_dgfip
scope:
  - entreprises
description: Obtenir, auprès de la direction des finances publiques,
  l’attestation fiscale d’une entreprise indiquant que celle-ci est à jour de
  ses obligations fiscales.
usecases:
  - Aides publiques
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - dgfip
perimeter:
  description: >-
    L'attestation de régularité fiscale est **limitée aux entreprises soumises à
    l'impôt sur les sociétés (IS)** à l'exclusion des :


    * bénéfices industriels et commerciaux (BIC)

    * bénéfices non commerciaux (BNC)

    * bénéfices agricoles (BA)


    Sont aussi exclues, même si les obligations fiscales sont respectées :


    * entreprises individuelles ;

    * sociétés de personnes ;

    * groupements passibles de l'impôt sur le revenu (entrepreneurs individuels).


    ⚠️ **L'attestation est délivrée si les obligations déclaratives et de paiement d'IS et de TVA de la société sont en règles.** Ainsi, les sociétés bénéficiant d’un plan de règlement, redressement, sauvegarde ou conciliation ainsi que les sociétés ayant formulé un recours contentieux assorti d’un sursis de paiement ne peuvent pas se voir délivrer une attestation fiscale.
  label: Entreprises soumises à l'IS
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
  format: Document PDF
  timeout: 12 secondes
  description: La réponse est composée d'une URL permettant de télécharger
    l'attestation en PDF, dont [voici un
    exemple](https://doc.entreprise.api.gouv.fr/files/attestation_fiscale.pdf).
  questions:
    qr1:
      question: Qu'atteste ce document ? et quelle est sa durée de validité ?
      answer: >-
        L’attestation fiscale atteste que l’entreprise est à jour des ses
        obligations fiscales à la date du 31/12 de l’année précédente.


        Par exemple si vous demandez une attestation en mars 2015, l’attestation fiscale vous indiquera que l’entreprise est à jour de ses obligations fiscale lui incombant au 31/12/2014.


        L’attestation fiscale est valide un an sur une année civile (jusqu’au 31/12/AAAA).
    qr2:
      question: L’api ne renvoie pas de pièce, est ce que ça veut dire que
        l’entreprise n’est pas à jour ?
      answer: Non, dans certain cas particulier, nous ne pouvons pas renvoyer
        l’attestation. Ça ne veut pas dire que l’entreprise n’est pas à jour. Il
        faut se rapprocher de l’entreprise pour lui demander la pièce
        directement.
    qr3:
      answer: Non, si une entreprise se voit refuser la délivrance de l’attestation
        pour cause de carence de ses déclarations ou de ses paiements, cette non
        délivrance n’est pas définitive pour toute l’année N. Si ensuite elle
        régularise sa situation pour les années N-1 et antérieures, alors
        l’attestation de régularité lui sera délivrée.
      question: L’api ne renvoie pas la pièce, est ce que ça veut dire qu’elle ne sera
        jamais disponible ?
  sample:
    code: >
      {
        "url":
        "https://storage.entreprise.api.gouv.fr/siade/1569156756-f6b7779f99fa95cd60dc03c04fcb-attestation_fiscale_dgfip.pdf"
      }
---
