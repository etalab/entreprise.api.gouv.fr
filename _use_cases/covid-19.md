---
layout: usecases
title: Instruction régionale de l'aide d’urgence aux TPE 
---

## Introduction

Cette fiche pratique propose les éléments de mise en œuvre techniques et fonctionnels du fonds de solidarité à destination des entreprises particulièrement touchées par les conséquences économiques, financières et sociales de la propagation de l’épidémie de covid-19. 

Pour que les entrperises pyuissent .... ellles doivent remplir un formualaires proposées par les régions 
Pour que ces régions. 
A CHANGER Les entreprises et associations éligibles devront remplir un formulaire proposé par les régions. 

Elle s'adresse aux parties prenantes (régions et éditeurs prestataires) de l'instruction des dossiers et délivrance de l'aide.

## Le rôle d'API Entreprise 

API Entreprise vous permet de : 
- faciliter le traitement de la demande de subvention, en vous donnant accès à des données déterminantes de l'éligibilité de l'entreprise ou association demandeuse ;
- mettre en oeuvre le "dîtes le nous une fois".
 
Si vous souhaitez mettre en œuvre des aides ou subventions relatives ou non au covid-19, indépendantes de cette aide de l’État, merci de consulter la page dédiée ["aides et subventions"](https://entreprise.api.gouv.fr/use_cases/aides_publiques/).

## Le cadre réglementaire

#### Aide d'urgence
Cette aide d'urgence aux TPE/PME est encadrée par le [décret relatif au fonds de solidarité à destination des entreprises particulièrement touchées par les conséquences économiques, financières et sociales de la propagation de l’épidémie de covid-19 et des mesures prises pour limiter cette propagation](ee). Ce décret spécifie les conditions d'éligibilité des entreprises et associations, les justificatifs demandés, ainsi que les éléments de mise en oeuvre et d'instruction de la demande de subvention.

#### Application du "dîtes le nous une fois"
Le code des relations entre le public et l’administration permet et contraint les administrations à ne plus demander certaines pièces justificatives aux personnes morales.
Voici les deux décrets qui organisent les échanges :
- [Décret n° 2019-31 du 18 janvier 2019 relatif aux échanges d’informations et de données entre administrations dans le cadre des démarches administratives et à l’expérimentation prévue par l’article 40 de la loi n° 2018-727 du 10 août 2018 pour un Etat au service d’une société de confiance](https://https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029589&dateTexte=20190201)
- [Décret n° 2019-33 du 18 janvier 2019 fixant la liste des pièces justificatives que le public n’est plus tenu de produire à l’appui des procédures administratives en application de l’article L. 113-13 du code des relations entre le public et l’administration](https://https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029642&categorieLien=id)

### Les données disponibles sur API Entreprise


API Entreprise regroupe les données de plusieurs administrations, et les mets à disposition au travers d'une API unique. 

Dans le cadre de cette demande d'aide d'urgence la majeures parties des justficatifs sont des déclarations sur l'honneur de l'entreprise ou de l'association. Les données d'API Entreprise peuvent vous permettre de vérifier ces informations.
 

> Par exemple : 
> - L'effectif indiqué peut être recoupé avec les données de l'ACOSS ;
> - Les observations des greffes peuvent aider à mieux connaître la situation de l'entreprise ;
> - Les chiffres d'affaires connus de la DGFIP peuvent faciliter l'examen du caractère raisonnable de la demande prêt.


Voici la liste des endpoints adpatés à ce cas d'utilisation : 

{:.tpl-table}
| Point d'accès | fournisseur        | commentaire                                                                                  | Documentation |
| ------------- | ------------------ | -------------------------------------------------------------------------------------------- | ----------- |
| Entreprise    | INSEE & INFOGREFFE | Données d'indentité du répertoire sirene et mendataires issus d'infogreffe  | [Endpoint entreprise_insee](https://doc.entreprise.api.gouv.fr/?json#entreprises)      |                              |
| Association   | Min Intérieur      | Données d'indentité des associations (RNA) | [Endpoint associations_rna](https://doc.entreprise.api.gouv.fr/?json#associations-rna)      |                                                               |
| Extrait RCS   | INFOGREFFE         | Observations présentes dans le Kbis                                                                 | [Endpoint extraits_rcs_infogreffe](https://doc.entreprise.api.gouv.fr/?json#infogreffe-extrait-rcs)      |         |
| Effectifs     | ACOSS              | Données collectés par l'ACOSS aupres de la DSN.      | Ce point d'accès est en cours de réalisation        |          |

Pour toute question, envoyez un mail à [support@entreprise.api.gouv.fr](support@entreprise.api.gouv.fr).

## Liste des éditeurs et intégrateurs

| Editeurs   | Nom de la solution | Date de mise en oeuvre |
| ---------- | ------------------ | ---------------------- |
| MGDIS      | Portail des Aides  | Mi-avril 2020          |
| Entrouvert | Publik             | À préciser             |

Vous souhaitez apparaître dans cette liste ? Demandez-nous en écrivant à [support@entreprise.gouv.fr](support@entreprise.gouv.fr).

## Demander un accès

L'accès à l'API Entreprise dans le cadre de ce cas d'usage sera strictement réservé aux administrations concernées par l'instruction des dossiers de cette aide d'urgence :
- aux régions,
- à la collectivité de Corse,
- aux collectivités territoriales de Guyane et de Martinique
- au conseil départemental de Mayotte,
- aux assemblées de Saint-Barthélemy, de Saint-Martin, de Saint-Pierre-et-Miquelon ou de Wallis-et-Futuna, 
- ainsi qu'à leurs éditeurs prestataires.

Pour votre demande d'accès, [veuillez consulter la page "Demander un accès](https://etalab.github.io/entreprise.api.gouv.fr/demander_un_acces/), un déroulé des étapes vous sera décrit.

## La gestion de vos clés d'accès

Une demande de token par région. 


