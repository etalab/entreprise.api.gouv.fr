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
    Les données disponibles sont issues de l'annuaire officiel de l'Agence BIO,
    lui même actuellement alimenté par les différents organismes certificateurs.


    ##### Périmètres des certificats PDF accessibles


    L'API Entreprise transmet un lien permettant de se rendre sur la page HTML de l'annuaire en ligne sur lequel il est possible de télécharger les certificats pour environ 60% (bientôt 90%) des entités certifiées. Aujourd'hui, seuls deux organismes certificateurs (XXX et XXX) ont mis en ligne les certificats, d'où le pourcentage de PDF accessibles depuis le lien. Pour les cas restants, correspondant à de plus petits organismes de certification, il peut être nécessaire de les contacter pour obtenir la pièce justificative. Il est à noter que la donnée JSON renvoyée est elle-même certifiée.
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
  service2:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de siren de la personne physique ou morale recherchée
  service3:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de siren de la personne physique ou morale recherchée
---
