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
| Données              | Type         | Ouverture       | Producteur               | Commentaires             |
| -------------------  | ------------ | --------------- | ------------------------ | ----------------------   |
| Entreprise           | données JSON | publiques       | INSEE & Infogreffe       | Les mandataires sont issus d'infogreffe      |                                       |
| Etablissement        | données JSON | publiques       | INSEE                    | /                                                      |
| Extrait  RCS         | données JSON | publiques       | Infogreffe.              | Observation existantes sur le kbis : changements de capital, les transferts de siège, les fusions, les redressements et liquidations judiciaires (si publiques).         |
| Association          | données JSON | publiques       | Ministère de l'Intérieur | /                                             |
| Document association | PDF (image)  | publiques       | Ministère de l'Intérieur | /                                               |
| Exercices            | données JSON | confidentielles | DGFIP                    | Données issues de la liasse fiscale            |
| Bilan entreprise    | données JSON | confidentielles | Banque de France         | Indisponibilités récurentes et prévisibles |
| Liasse fiscale       | données JSON | confidentielles | DGFIP                    | Données complexes dont la structure varie chaque année.                                                                                                                        |
| Attestation fiscale  | PDF (texte)  | confidentielles | DGFIP                    | Parfois instables. Pour une même entreprise l'API peut retourner une réponse ou non à quelques minutes de différence.                                                |
| Attestation sociale  | PDF (texte)  | confidentielles | ACOSS                    | Asynchrone pour certaines entreprises     |
| Attestation AGEFIPH  | données JSON | confidentielles | AGEFIPH                  | /                                            |
| Cotisation MSA       | données JSON | confidentielles | MSA                      | /                                            |
| Certificat PROBTP    | données JSON | publiques       | PROBTP                   | /                                               |
| Carte professionnelle FNTP| PDF     | publiques       | FNTP                     | /                                              |
| Certificat CNETP     | PDF          | publiques       | CNETP                    | /                                            |
| Certificat RGE       | données JSON et PDF | publiques| ADEME                    | /                                              |
| Certificat OPQIBI    | données JSON | publiques       | OPQIBI                   | /                                              |
| Certificat Qualibat  | PDF          |                 | Qualibat                 | /                                              |
| Extrait INPI         | données JSON | publiques       | INPI                     | marques et brevets déposés                     |


**Rappel** : Les places de marchés disposent d'un accès à l'API entreprise, ***il n'est donc pas nécessaire d'effectuer une demande d'accès à API Entreprise.***
