---
layout: usecases
title : Application de l’article 64
---
## Introduction

Dans le cadre de [la loi du 8 novembre 2019 relative à l'énergie et au climat](https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=A814DF82C4C2339D1BA972DAF0487BD9.tplgfr44s_2?idArticle=JORFARTI000039356027&cidTexte=JORFTEXT000039355955&dateTexte=29990101&categorieLien=id), certains fournisseurs d’énergie ont le droit d’accéder à une partie des données de l’API Entreprise concernant certains de leurs clients, pour vérifier leur éligibilité aux tarifs réglementés.

Les données concernées sont les effectifs (endpoint Entreprises et Etablissements de l’INSEE), les chiffres d’affaires (endpoint Exercices de l’Infogreffe) , les recettes et les totaux des bilans annuels (endpoint liasses fiscales de la DGFIP).

Cette autorisation d’accès est valide pour une période de huit mois suivant la promulgation de la loi, soit **jusqu’au 8 juillet 2020**.

Les fournisseurs mettent en œuvre un traitement automatisé des données issues de cette interface afin de n’avoir accès qu’aux données nécessaires pour déterminer l’éligibilité aux tarifs réglementés et conservent les données nécessaires pour déterminer l’éligibilité pendant une durée maximale de trois mois.

## Données utiles

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| **Informations sur les effectifs**                            |                          |                                           |                     |                 |
| [Données de référence d'une entreprise](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}                  |    INSEE & Infogreffe    |            `entreprises`            |    données JSON     |    publiques et confidentielles pour les non-diffusibles    |
| [Données de référence d'un établissement](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}                |          INSEE           |          `etablissements`           |    données JSON     |    publiques et confidentielles pour les non-diffusibles    |
| **Informations financières**                          |                          |                                           |                     |                 |
| [Chiffre d'affaires](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"}                                     |          DGFIP           |                `exercices`                |    données JSON     | confidentielles |
| [Déclarations et dictionnaire de liasses fiscales](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip)      |          DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |


#### Les données d'effectifs

Les données d'effectif sont disponibles en utilisant les endpoints `entreprises` et `etablissements` qui s'appuient sur l'API SIREN de l'INSEE.

Deux point d'attention sont à prendre en compte :
- il s'agit de tranches d'effectif "code_effectif_entreprise"  de la nomenclature  l'INSEE.
- Les données des entreprises qui lors de leur enregistrement ont déclaré ne pas souhaiter faire l'objet d'un démarchage commercial ne sont exposées que si l'on précise un paramètre dans la requête.

[documentation technique entreprise](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}

#### Les chiffres d’affaires

Les données de chiffres d'affaires (chiffre d'affaire comptable) sont accessibles en utilisant le endpoint `Exercices`
Ces données sont issues de la liasse fiscale pour les entreprises soumises à l'impôt sur les sociétés qui ont déposés leurs comptes annuels aux greffes.
L'API fourni les 3 derniers exercices.

[documentation technique exercices](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"}

#### Les données relatives aux recettes et au total de bilan annuels
Ces données sont accessibles en utilisant le endpoint `liasses_fiscales_dgfip`

Pour les recettes, il s’agit dans le numéro d’imprimé 2033B (millésime 2018) de la valeur contenue pour le code_NREF 304456
Pour le chiffre d’affaire, il s’agit dans le numéro d’imprimé 2033B (millésime 2018) de la valeur contenue pour le code_NREF 304451

Pour cette donnée, il est demandé de limiter les appels à une requête par seconde.

[documentation technique liasse fiscale](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"}

## Demander un accès aux données

{:.tpl-notification}
Dans le contexte actuel de la crise sanitaire et de la montée en charge des requêtes adressées à API Entreprise, la bonne délivrance de nos endpoints pourrait être affectée. N'hésitez pas à faire vos demandes d'accès en précisant si possible la volumétrie d'appel envisagée. L'état de disponibilité de vos endpoints sera consultable en temps réel dans votre futur tableau de bord.

Pour demander un accès, veuillez consulter [la partie effectuer sa demande d'habilitation présente dans la documentation générale ]({{ site.baseurl }}/doc/#demande-habilitation), un déroulé des étapes à suivre vous sera décrit.

Comme expliqué dans l'introduction, les droits d'accès seront accordés jusqu'au 8 juillet 2020.
