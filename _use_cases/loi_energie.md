---
layout: article
title : Utilisation de l'API entreprise en application de l'article 64
---
# Introduction
L'article 64 de la loi relative à l’énergie et au climat autorise, pour une période de huit mois suivant la promulgation de la loi, un accès à certaines données (***les effectifs, chiffres d’affaires, recettes et total de bilan annuels***) de l'API entreprise pour les fournisseurs d'énergie assurant les missions de service public.

Les fournisseurs mettent en œuvre un traitement automatisé des données issues de cette interface afin de n’avoir accès qu’aux données nécessaires pour déterminer l’éligibilité aux tarifs réglementés et conservent les données nécessaires pour déterminer l’éligibilité pendant une durée maximale de trois mois.

# délivrance de données

## Limites de volumétrie
L'utilisation de l'API entreprise est limitée en terme de volumétrie. Chaque client peut effectuer 2000 requêtes par tranche de 10 minutes et par IP.

## Données d'effectifs

Les données d'effectif sont disponibles en utilisant les "end points" ***entreprises et etablissements*** qui s'appuient sur l'API SIREN de l'INSEE.

Deux point d'attention sont à prendre en compte :
- il s'agit de tranches d'effectif "code_effectif_entreprise"  de la nomenclature  l'INSEE.
- Les données des entreprises qui lors de leur enregistrement ont déclaré ne pas souhaiter faire l'objet d'un démarchage commercial ne sont exposées que si l'on précise un paramettre dans la requete.

[documentation technique](https://doc.entreprise.api.gouv.fr/#entreprises)

## Données chiffres d’affaires

Les données de chiffres d'affaires (chiffre d'affaire comptable) sont accessibles en utilisant le "end point" ***Exercices issues*** 
Ces données sont issues de la liasse fiscale pour les entreprises soumises à l'impôt sur les sociétés qui ont déposés leurs comptes annuels aux greffes. 
L'API fourni les 3 derniers exercices.

[documentation technique](https://doc.entreprise.api.gouv.fr/#exercices)

## Données relatives aux recettes et au total de bilan annuels
Ces données sont accessibles en utilisant le "end point" ***liasses fiscales dgfip***

Attention, les capacités techniques du fournisseur de données ne sont en deça des 2000 requêtes.

[documentation technique](https://doc.entreprise.api.gouv.fr/#liasses-fiscales-dgfip)

# Methodologie d'usage 
Afin d'avoir accès à ces données, merci de consulter la page suivante :
https://entreprise.api.gouv.fr/demander_un_acces/

Les droits d'accès seront accordés jusqu'au 8 juillet 2020.  


