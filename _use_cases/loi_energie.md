Titre : utilisation de l'API entreprise en application de l'article 64 Fiche cas d'usage

## Extrait de la loi article 64 de la loi relative à l’énergie et au climat.

>À cet effet, pendant une période de huit mois suivant la promulgation de la présente loi, les fournisseurs assurant les missions de service public mentionnées à l’article L. 121‑5 du code de l’énergie ont accès à l’interface de programmation d’application permettant les échanges de données entre administrations pour consulter ***les effectifs, chiffres d’affaires, recettes et total de bilan annuels*** de leurs clients qui n’ont pas répondu ou qui ne se sont pas opposés, selon les mêmes modalités que les administrations mentionnées à l’article L. 100‑3 du code des relations entre le public et l’administration. 

>Les fournisseurs mettent en œuvre un traitement automatisé des données issues de cette interface afin de n’avoir accès qu’aux données nécessaires pour déterminer l’éligibilité aux tarifs réglementés et conservent les données nécessaires pour déterminer l’éligibilité pendant une durée maximale de trois mois.

## introduction
L'article 64 de la loi relative à l’énergie et au climat autorise, pour une période de huit mois suivant la promulgation de la loi, un accès à certaines données de l'API entreprise pour les fournisseurs d'énergie assurant les missions de service public.  



## délivrance de données 

## Introduction 
L'utilisation de l'API entreprise est limitée en terme de volumétrie. Chaque client peut effectuer 2000 requêtes par tranche de 10 minutes et par IP.
Certain fournisseurs de données ne sont pas encore en mesure de tenir cette charge.

## Données d'effectifs
Les données d'effectif sont disponibles via l'insee.
Deux point d'attention sont à prendre en compte :
- il s'agit de tranches d'effectif "code_effectif_entreprise"  de la nomenclature  l'INSEE voir [documentation technique](https://doc.entreprise.api.gouv.fr/#entreprises)
- A ce stade, les données des entreprises qui ne souhaitent pas être démarchées ne sont pas délivrées. Cet obsacle sera levé d'ici le 1er janvier 2019 
A
## Données chiffres d’affaires
Les données de chiffres d'affaires sont issues de la liasse fiscale. 
La volumétrie d'appel conseillée est de 100 requetes seconde. 

## Bilan 
Deux possibilités pour les bilans
- Transmission des bilans déposés aux greffes

- Accès à la liasse fiscale (sous réserve d'acceptation par la DGFIP !)
 
Attention, les capacités techniques du fournisseur de données ne sont en deça des 2000 requêtes.
