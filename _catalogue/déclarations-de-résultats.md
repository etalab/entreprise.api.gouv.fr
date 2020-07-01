---
weight: 10
type: Informations financières
title: Déclarations de résultat
label: liasses_fiscales_dgfip
scope:
  - entreprises
description: Obtenir les données contenues dans les liasses fiscales, issues des
  déclarations de résultat d’une entreprise pour une année donnée auprès de la
  direction des finances publiques (DGFIP).
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
request:
  id:
    label: AnneeDeLaLiasseDemandée/declarations/SirenDeL'Entreprise
    description: "L'année de la liasse fiscale demandée + le paramètre
      \"declarations\" + le numéro de SIREN de l'entreprise "
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
        valeur est indiquée par un `code_nref`. Ce dernier est une suite de 6
        chiffres, le dictionnaire de liasses fiscales disponible avec l'option
        d'appel `Annee/dictionnaire` vous permet de retrouver la signification
        du code, et donc de la valeur, appelé "intitulé de la donnée". Il vous
        faudra à chaque fois préciser le millésime, car les nomenclatures
        évoluent chaque année.
      question: Comment faire le lien avec le dictionnaire ?
response:
  format: Donnée structurée JSON
  timeout: 5 secondes
---
