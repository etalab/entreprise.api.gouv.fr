---
layout: usecases
title: Instruction régionale de l'aide d’urgence aux TPE 
---

## Introduction

Dans le cadre inédit de la propagation de l'épidémie du Covid-19, un fonds de solidarité à destination des entreprises et associations, de taille petite à moyenne, particulièrement touchées par les conséquences économiques, financières et sociales liées à cette épidémie a été mis en place.
Ce fonds propose sous certaines conditions deux aides : 
- un première aide forfaitaire de 1500 euros,  
- une aide complémentaire forfaitaire de 2000 euros.

**C'est dans le cadre de l'instruction des demandes de cette seconde aide complémentaire qu'API Entreprise intervient.**
Cette fiche pratique s'adresse aux parties prenantes de cette phase de vérification, à savoir les régions et leurs éditeurs prestataires.

## Rôle d'API Entreprise 

API Entreprise vous permet de : 
- faciliter le traitement de la demande de subvention, en vous donnant accès à des données déterminantes de l'éligibilité de l'entreprise ou association demandeuse ;
- mettre en oeuvre le "dîtes le nous une fois".

{:.tpl-notification}
Si vous souhaitez mettre en œuvre des aides ou subventions relatives ou non au covid-19, indépendantes de cette aide, merci de consulter la page dédiée ["aides et subventions"](../_use_cases/aides_publiques.md).

## Cadre réglementaire

#### Aide d'urgence
Cette aide d'urgence aux TPE/PME est encadrée par le [décret relatif au fonds de solidarité à destination des entreprises particulièrement touchées par les conséquences économiques, financières et sociales de la propagation de l’épidémie de covid-19 et des mesures prises pour limiter cette propagation](https://www.legifrance.gouv.fr/eli/decret/2020/3/30/2020-371/jo/texte). Ce décret spécifie les conditions d'éligibilité des entreprises et associations, les justificatifs demandés, ainsi que les éléments de mise en oeuvre et d'instruction de la demande de subvention.

#### Application du "dîtes le nous une fois"
Le code des relations entre le public et l’administration permet et contraint les administrations à ne plus demander certaines pièces justificatives aux personnes morales.
Voici les deux décrets qui organisent les échanges :
- [Décret n° 2019-31 du 18 janvier 2019 relatif aux échanges d’informations et de données entre administrations dans le cadre des démarches administratives et à l’expérimentation prévue par l’article 40 de la loi n° 2018-727 du 10 août 2018 pour un Etat au service d’une société de confiance](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029589&categorieLien=id)
- [Décret n° 2019-33 du 18 janvier 2019 fixant la liste des pièces justificatives que le public n’est plus tenu de produire à l’appui des procédures administratives en application de l’article L. 113-13 du code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029642&categorieLien=id)

### Les données disponibles sur API Entreprise

Dans le cadre de cette demande d'aide d'urgence, l'entreprise ou l'association déclare sur l'honneur qu'elle remplit les conditions demandées.
L'API Entreprise regroupe des données administratives utiles à l'instruction de cette déclaration sur l'honneur, et les mets à disposition au travers d'une API unique. 

Voici la liste des endpoints adaptés à ce cas d'usage : 

{:.tpl-table}
| Point d'accès | fournisseur        | commentaire                                                                                  | Documentation |
| ------------- | ------------------ | -------------------------------------------------------------------------------------------- | ----------- |
| Effectifs     | ACOSS              | Données collectés par l'ACOSS auprès de la DSN.      | Ce point d'accès est en cours de réalisation        |          |
| Entreprise    | INSEE & INFOGREFFE | Données d'indentité du répertoire sirene et mendataires issus d'infogreffe  | [Endpoint entreprise_insee](https://doc.entreprise.api.gouv.fr/?json#entreprises)      |                              |
| Association   | Min Intérieur      | Données d'indentité des associations (RNA) | [Endpoint associations_rna](https://doc.entreprise.api.gouv.fr/?json#associations-rna)      |                                                             |
| Extrait RCS   | INFOGREFFE         | Observations présentes dans le Kbis                                                                 | [Endpoint extraits_rcs_infogreffe](https://doc.entreprise.api.gouv.fr/?json#infogreffe-extrait-rcs)      |         |
| Exercices | DGFIP         | Chiffre d'affaire de l'entreprise &#42;                                                              | [Endpoint exercices](https://doc.entreprise.api.gouv.fr/?json#exercices)      |         |

&#42; En cours d'évaluation quant à la possibilité de l'utiliser dans ce cas d'usage.

## Conditions d'accès

L'accès à l'API Entreprise dans le cadre de ce cas d'usage sera strictement réservé aux administrations concernées par l'instruction des dossiers de cette aide d'urgence :
- aux régions, 
- ainsi qu'à leurs éditeurs prestataires.

Chaque région doit effectuer une demande d'accès avec les données indiquées plus haut. Chaque région aura la charge de transmettre à ces prestataires la clé d'accès obtenue. 

Pour votre demande d'accès, veuillez consulter la page ["Demander un accès"](../pages/demander_un_acces.md), un déroulé des étapes vous sera décrit.

## Gestion des clés d'accès

Vous réalisez les développements ?
Nous avons besoin que vous remplissiez [les paramètres obligatoires](https://doc.entreprise.api.gouv.fr/?json#param-tres-obligatoires) de la façon suivante : 

{:.tpl-table}
| Paramètre   | Présence      | Description                                           |
| ----------  | ------------- | ----------------------------------------------------- |
| context     | Obligatoire   | Nom de la région, ex : *bourgogne_franche_comte*         |
| recipient   | Obligatoire   | Siret de l'Administration destinatrice des données    |
| object      | Obligatoire   | *aide_volet_2*                                          |
