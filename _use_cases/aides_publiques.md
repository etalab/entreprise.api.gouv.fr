---
layout: usecases
title: Aides et subventions
---

## Introduction

L’API entreprise délivre des données et des documents (pdf) afin de simplifier la délivrance des aides et des subventions aux entreprises et aux associations.

Depuis le 18 janvier 2019, les administrations ne doivent plus demander de pièces justificatives aux personnes morales, pourvu qu’elles soient en mesure de se les procurer dans la sphère administrative. C’est le principe du “dites le nous une fois” du code des relations entre le public et l’administration.

> **Références des décrets :**
> [Décret n° 2019-31 du 18 janvier 2019 relatif aux échanges d’informations et de données entre administrations dans le cadre des démarches administratives et à l’expérimentation prévue par l’article 40 de la loi n° 2018-727 du 10 août 2018 pour un Etat au service d’une société de confiance](https://https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029589&dateTexte=20190201)
> [Décret n° 2019-33 du 18 janvier 2019 fixant la liste des pièces justificatives que le public n’est plus tenu de produire à l’appui des procédures administratives en application de l’article L. 113-13 du code des relations entre le public et l’administration](https://https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029642&categorieLien=id)

La mise en œuvre de ce principe juridique peut s’effectuer par tout moyen informatique. L’API entreprise a été conçue pour répondre à ce besoin en regroupant des fournisseurs de données relatifs aux personnes morales et éviter aux administrations d’avoir à conventionner avec “15 administrations différentes”.

L’utilisation de ces données répond à un certain nombre de principes :
* Les droits d’accès sont accordés par démarche.
* Si plusieurs aides délivrées requièrent les même données, une demande d’accès est suffisante.
* Chaque démarche permet d’accéder aux strictes données nécessaires. C’est le principe de proportionnalité.
* La personne morale concernée par les données (exemple : entreprise, associations) est informée de leur utilisation.
* Certaines données relatives aux personnes morales sont publiques et peuvent être exposées, d’autres sont confidentielles et ne doivent être disponibles que pour les agents habilités à les traiter.

## Deux utilisations différentes selon que la donnée soit publique ou privée

Certaines données sont publiques et d’autres réservées à l’administration. Dans la mesure où il n’existe pas encore de système d’identification pour les personnes morales, il convient de ne pas communiquer les informations confidentielles dans les services en ligne qui leur sont proposés ouverts au public, sans authentification à l'entrée.

### Le pré-remplissage avec des données publiques

Les données publiques sont peuvent être utilisées pour pré-remplir les formulaires d’inscription dans les dispositifs d’aide et de subvention. 

> Quel avantage à passer par API Entreprise si les données sont libres ? API Entreprise vous simplifie l'implémentation de cette aide à la saisie, en vous donnant accès à une information structurée, facilement intégrable dans votre produit.

Attention, certaines personnes morales n’ont pas souhaité apparaître dans les données diffusées publiquement (voir non diffusés de l’INSEE). De ce fait, vous ne pouvez pas utiliser ces données pour le pré-remplissage. 

Deux options se présentent dans ce cas :

1. Signifier à ces personnes morales qu’elles peuvent changer ce statut et bénéficier du pré-remplissage sinon il faut saisir les données.
2. Ne pas afficher les données en front, mais récupérer les données pour que vos agents en bénéficient.
Les données confidentielles sont donc visibles en back-office pour les agents sous forme de données structurées ou de pdf.

### L'obtention d'une donnée ou d'un document privés, en back office, par un agent habilité
    
En utilisant API Entreprise, les entreprises et associations en demande d’aide publiques n’ont plus besoin de vous fournir certains justificatifs. Les documents et données sont récupérés automatiquement, ce qui facilite grandement l’instruction de leurs dossiers.

40% des utilisateurs  d’API Entreprise (régionaux, départements, communes, Banque Publique d’Investissement  notamment) utilisent notre service dans ce cadre.

## Quelles sont les données autorisées pour le cas d'usage des aides et subventions ? 



| Données    | Type         | Ouvertes /confidentielles | Producteur         | Commentaires                            |
| ---------- | ------------ | ------------------------- | ------------------ | --------------------------------------- |
| Entreprise | données JSON | publiques                 | INSEE & Infogreffe | Les mandataires sont issus d'infogreffe |                                       |
| Etablissement | données JSON | publiques  | INSEE | / |
| Association | données JSON | publiques  | Ministère de l'Intérieur| / |
| Document association | PDF (image) | publiques  | Ministère de l'Intérieur | / |
| Attestation fiscale | PDF (texte) | confidentielles  | DGFIP | Parfois instables. Pour une même entreprise l'API peut retourner une réponse ou non à quelques minutes de différence. |
| Attestation sociale | PDF (texte) | confidentielles  | ACOSS| Asynchrone pour certaines entreprises |
| Cotisation MSA | données JSON | confidentielles  | MSA | / |
| Attestation AGEFIPH | données JSON | confidentielles  | AGEFIPH | / |
| Bilan entreprise | données JSON | confidentielles  | Banque de France | Indisponibilités récurentes et prévisibles |
| Exercices | données JSON | confidentielles  | DGFIP | Données issues de la liasse fiscale |
| Liasse fiscale | données JSON | confidentielles  | DGFIP | Données complexes dont la structure varie chaque année |
| Extrait  RCS | données JSON | publiques | Infogreffe| Observation existantes sur le kbis : changements de capital, les transferts de siège, les fusions, les redressements et liquidations judiciaires (si publiques) |
| Extrait INPI | données JSON | publiques  | INPI | marques et brevets déposés  |
| Certificat CNETP | PDF | publiques  | CNETP | / |
| Certificat OPQIBI | données JSON | publiques  | OPQIBI | / |
| Certificat PROBTP | données JSON | publiques  | PROBTP | / |
| Certificat RGE | données JSON et PDF | publiques  | ADEME | / |

Les informations précises sur les données de l’API Entreprise sont disponibles dans [notre documentation](https://doc.entreprise.api.gouv.fr/#introduction).
Pour toute question, envoyez un mail à [support@entreprise.api.gouv.fr](support@entreprise.api.gouv.fr)

## Liste des éditeurs et intégrateurs


| Editeurs   | Nom de la solution | Date de mise en oeuvre |
| ---------- | ------------------ | ---------------------- |
| MGDIS      | Portail des Aides  | Mi-avril 2020          |
| Entrouvert | Publik             | A préciser             |

Vous souhaitez apparaître dans cette liste ? Demandez-nous en écrivant à [support@entreprise.gouv.fr](support@entreprise.gouv.fr)

## Demander un accès aux données

Pour demander un accès, [veuillez consulter la page "Demander un accès](https://etalab.github.io/entreprise.api.gouv.fr/demander_un_acces/), un déroulé des étapes vous sera décrit.

       
