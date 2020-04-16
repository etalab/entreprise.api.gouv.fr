---
layout: usecases
title: Marchés Publics
---

## Introduction
L’API entreprise est faite pour être utilisée dans le cadre de logiciels métiers.

Le profil acheteur devrait donc vous permettre d’accéder aux données délivrées par l’API entreprise grâce au DUME (ou DUME simplifié) ou directement dans l'interface de votre logiciel si l'entreprise n'a pas utilisé le DUME.

Les éditeurs de place de marché qui l'ont demandé (voir liste ci-dessous) disposent d'un accès à l'API entreprise afin de vous permettre le récupération des pièces justificatives. 

De ce fait, ***il n’est pas nécessaire de demander un accès*** sauf si votre collectivité héberge une place de marché.

Si vous souhaitez utiliser l’API dans le cadre d’une application spécifique, il convient de nous préciser le cas d’utilisation.

## Places de marchés dotées d'un droit d'accès 

- achatpublic.com
- Atexo 
- provigis
- klekoon.com

Par ailleurs, certains opérateurs publics opèrent des solutions du marché.

## Données utiles

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| **Informations générales**                            |                          |                                           |                     |                 |
| [Données de référence d'une entreprise](https://doc.entreprise.api.gouv.fr/?json#entreprises)                 |    INSEE & Infogreffe    |            `entreprises_insee`            |    données JSON     |    publiques    |
| [Données de référence d'un établissement](https://doc.entreprise.api.gouv.fr/?json#etablissements)               |          INSEE           |          `etablissements_insee`           |    données JSON     |    publiques    |
| [Extrait  RCS](https://doc.entreprise.api.gouv.fr/?json#infogreffe-extrait-rcs)                                          |        Infogreffe        |         `extraits_rcs_infogreffe`         |    données JSON     |    publiques    |
| [Données déclaratives d'une association](https://doc.entreprise.api.gouv.fr/?json#associations-rna)                | Ministère de l'Intérieur |              `associations`               |    données JSON     |    publiques    |
| [Divers documents d'une association](https://doc.entreprise.api.gouv.fr/?json#documents-association)                    | Ministère de l'Intérieur |         `documents_associations`          |     PDF (image)     |    publiques    |
| **Informations financières**                          |                          |                                           |                     |                 |
| [Chiffre d'affaires](https://doc.entreprise.api.gouv.fr/?json#exercices)                                    |          DGFIP           |                `exercices`                |    données JSON     | confidentielles |
| [Bilans entreprise](https://doc.entreprise.api.gouv.fr/?json#bilans-entreprises-bdf-banque-de-france)                                     |     Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |
| [Déclarations et dictionnaire de liasses fiscales](https://doc.entreprise.api.gouv.fr/?json#les-d-clarations-des-liasses-fiscales)      |          DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |
| **Attestations sociales et fiscales**                 |                          |                                           |                     |                 |
| [Attestation fiscale](https://doc.entreprise.api.gouv.fr/?json#attestation-fiscale-dgfip)                                   |          DGFIP           |       `attestations_fiscales_dgfip`       |     PDF (texte)     | confidentielles |
| [Attestation de vigilance](https://doc.entreprise.api.gouv.fr/?json#attestation-sociale-acoss)                              |          ACOSS           |       `attestations_sociales_acoss`       |     PDF (texte)     | confidentielles |
| [Conformité emploi des travailleurs handicapés AGEFIPH](https://doc.entreprise.api.gouv.fr/?json#attestation-agefiph) |         AGEFIPH          |          `attestations_agefiph`           |    données JSON     | confidentielles |
| [Cotisation de sécurité sociale agricole](https://doc.entreprise.api.gouv.fr/?json#cotisations-msa)               |           MSA            |             `cotisations_msa`             |    données JSON     | confidentielles |
| [Attestations cotisation retraite](https://doc.entreprise.api.gouv.fr/?json#cotisations-retraite-probtp)                      |          PROBTP          | `attestations_cotisation_retraite_probtp` |    données JSON     |    publiques    |
| [Carte professionnelle travaux publics](https://doc.entreprise.api.gouv.fr/?json#cartes-professionnelles-fntp)        |          CNETP           |            `cartes_professionnelles_fntp`            |         PDF         |    publiques    |
| [Cotisations congés payés & chômage intempéries](https://doc.entreprise.api.gouv.fr/?json#certificats-cnetp)        |          CNETP           |            `certificats_cnetp`            |         PDF         |    publiques    |
| **Certificats professionnels**                        |                          |                                           |                     |                 |
| [Certification RGE](https://doc.entreprise.api.gouv.fr/?json#certificats-rge-ademe)                                     |          ADEME           |          `certificats_rge_ademe`          | données JSON et PDF |    publiques    |
| [Certification de qualification OPQIBI](https://doc.entreprise.api.gouv.fr/?json#certificats-opqibi)                 |          OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |
| [Certification de qualification Qualibat](https://doc.entreprise.api.gouv.fr/?json#certificats-qualibat)                 |          OPQIBI          |           `certificats_qualibat`            |    données JSON     |    publiques    |
| **Propriété intellectuelle**                          |                          |                                           |                     |                 |
| [Brevets, modèles et marques déposées](https://doc.entreprise.api.gouv.fr/?json#extraits-courts-inpi)                  |           INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |
            


**Rappel** : Les places de marchés disposent d'un accès à l'API entreprise, ***il n'est donc pas nécessaire d'effectuer une demande d'accès à API Entreprise.***
