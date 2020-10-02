---
layout: usecases
title: Aides et subventions
---

## Introduction

L’API entreprise délivre des données et des documents (pdf) afin de simplifier la délivrance des aides et des subventions aux entreprises et aux associations.

Depuis le 18 janvier 2019, les administrations ne doivent plus demander de pièces justificatives aux personnes morales, pourvu qu’elles soient en mesure de se les procurer dans la sphère administrative. C’est le principe du “dites le nous une fois” du code des relations entre le public et l’administration.

**Références des décrets :**
- [Décret n° 2019-31 du 18 janvier 2019 relatif aux échanges d’informations et de données entre administrations dans le cadre des démarches administratives et à l’expérimentation prévue par l’article 40 de la loi n° 2018-727 du 10 août 2018 pour un Etat au service d’une société de confiance](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029589&categorieLien=id)
- [Décret n° 2019-33 du 18 janvier 2019 fixant la liste des pièces justificatives que le public n’est plus tenu de produire à l’appui des procédures administratives en application de l’article L. 113-13 du code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029642&categorieLien=id)

La mise en œuvre de ce principe juridique peut s’effectuer par tout moyen informatique. L’API entreprise a été conçue pour répondre à ce besoin en regroupant des fournisseurs de données relatifs aux personnes morales et éviter aux administrations d’avoir à conventionner avec “15 administrations différentes”.

L’utilisation de ces données répond à un certain nombre de principes :
* Les droits d’accès sont accordés par démarche.
* Si plusieurs aides délivrées requièrent les même données, une demande d’accès est suffisante.
* Chaque démarche permet d’accéder aux strictes données nécessaires. C’est le principe de proportionnalité.
* La personne morale concernée par les données (exemple : entreprise, associations) est informée de leur utilisation.
* Certaines données relatives aux personnes morales sont publiques et peuvent être exposées, d’autres sont confidentielles et ne doivent être disponibles que pour les agents habilités à les traiter.

## Deux utilisations différentes selon que la donnée soit publique ou privée

Certaines données sont publiques et d’autres réservées à l’administration. Dans la mesure où il n’existe pas encore de système d’identification pour les personnes morales, il convient de ne pas communiquer les informations confidentielles dans les services en ligne qui leur sont proposés ouverts au public, sans authentification à l'entrée.

#### Le pré-remplissage avec des données publiques

Les données publiques peuvent être utilisées pour pré-remplir les formulaires d’inscription dans les dispositifs d’aide et de subvention.


***Quel avantage à passer par API Entreprise si les données sont libres ?***
*API Entreprise vous simplifie l'implémentation de cette aide à la saisie, en vous donnant accès à une information structurée, facilement intégrable dans votre produit.*

{:.tpl-notification}
Attention, **certaines personnes morales n’ont pas souhaité apparaître dans les données diffusées publiquement** (voir non diffusés de l’INSEE). De ce fait, **vous ne pouvez pas utiliser ces données pour le pré-remplissage**.
Deux options se présentent dans ce cas : <br> 1. Signifier à ces personnes morales qu’elles peuvent changer ce statut et bénéficier du pré-remplissage sinon il faut saisir les données. <br> 2. Ne pas afficher les données en front, mais récupérer les données pour que vos agents en bénéficient. <br> Les données confidentielles sont donc visibles en back-office pour les agents sous forme de données structurées ou de pdf.

#### L'obtention d'une donnée ou d'un document privés, en back office, par un agent habilité

En utilisant API Entreprise, les entreprises et associations en demande d’aide publiques n’ont plus besoin de vous fournir certains justificatifs. Les documents et données sont récupérés automatiquement, ce qui facilite grandement l’instruction de leurs dossiers.

40% des utilisateurs  d’API Entreprise (régionaux, départements, communes, Banque Publique d’Investissement  notamment) utilisent notre service dans ce cadre.

## Données utiles

Les données utiles à l'instruction des demandes d'aides publiques sont nombreuses chez API Entreprise. Selon votre cas d'usage spécifique, **veillez à demander uniquement les accès aux données qui vous seront nécessaires pour l'instruction de vos dossiers.**

Vous trouverez ci-dessous les données classées dans différentes catégories :
- [Informations générales](#infos_generales),
- [Informations financières](#infos_financieres),
- [Attestations sociales et fiscales](#attestations_sociales_fiscales),
- [Certificats professionnels](#certificats_pro),
- [Propriété intellectuelle](#propriete_intellectuelle).

#### Informations générales <a id="infos_generales"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Données de référence d'une entreprise](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}                  |    INSEE & Infogreffe    |            `entreprises`            |    données JSON     |    publiques et confidentielles pour les non-diffusibles    |
| [Données de référence d'un établissement](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}                |          INSEE           |          `etablissements`           |    données JSON     |    publiques et confidentielles pour les non-diffusibles    |
| [Extrait  RCS](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}                                           |        Infogreffe        |         `extraits_rcs_infogreffe`         |    données JSON     |    confidentielles    |
| [Données déclaratives d'une association](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"}                 | Ministère de l'Intérieur |              `associations`               |    données JSON     |    publiques    |
| [Divers documents d'une association](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}                     | Ministère de l'Intérieur |         `documents_associations`          |     PDF (image)     |    publiques    |
| [Conventions collectives](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"}                     | Fabrique numérique des Ministères Sociaux |         `conventions_collectives`          |     données JSON     |    publiques    |

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Chiffre d'affaires](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"}                                     |          DGFIP           |                `exercices`                |    données JSON     | confidentielles |
| [Bilans entreprise](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"}                                     |     Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |
| [Déclarations et dictionnaire de liasses fiscales](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip)      |          DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |

#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Attestation fiscale](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"}                                    |          DGFIP           |       `attestations_fiscales_dgfip`       |     PDF (texte)     | confidentielles |
| [Attestation de vigilance](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"}                               |          ACOSS           |       `attestations_sociales_acoss`       |     PDF (texte)     | confidentielles |
| [Conformité emploi des travailleurs handicapés AGEFIPH](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"}  |         AGEFIPH          |          `attestations_agefiph`           |    données JSON     | confidentielles |
| [Cotisation de sécurité sociale agricole](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"}                |           MSA            |             `cotisations_msa`             |    données JSON     | confidentielles |
| [Attestations cotisation retraite](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"}                       |          PROBTP          | `attestations_cotisation_retraite_probtp` |    données JSON     |    publiques    |
| [Cotisations congés payés & chômage intempéries](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"}         |          CNETP           |            `certificats_cnetp`            |         PDF         |    publiques    |

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Certification RGE](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"}                                      |          ADEME           |          `certificats_rge_ademe`          | données JSON et PDF |    publiques    |
| [Certification de qualification OPQIBI](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"}                  |          OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Brevets, modèles et marques déposées](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"}                   |           INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |



Les informations précises sur les données de l’API Entreprise sont disponibles dans [le catalogue de données](https://entreprise.api.gouv.fr/catalogue/){:target="_blank"}. Pour toute information transverse aux différents endpoints, vous pouvez consulter la [documentation générale](https://entreprise.api.gouv.fr/doc/){:target="_blank"}.
Pour toute question, envoyez un mail à [support@entreprise.api.gouv.fr](support@entreprise.api.gouv.fr).

## Liste des éditeurs et intégrateurs

{:.tpl-table}
| Editeurs   | Nom de la solution | Date de mise en oeuvre |
| ---------- | ------------------ | ---------------------- |
| MGDIS      | Portail des Aides  | Mi-avril 2020          |
| Entrouvert | Publik             | À préciser             |
| mon-territoire.fr | Atelier économique             | Juin 2020            |


Vous souhaitez apparaître dans cette liste ? Demandez-nous en écrivant à [support@entreprise.gouv.fr](support@entreprise.gouv.fr)

## Demander un accès aux données

Pour demander un accès, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale, un déroulé des étapes à suivre vous sera décrit.


