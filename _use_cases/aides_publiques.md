---
layout: usecases
title: Dépôt et instruction des aides publiques
---

## À quoi sert API Entreprise ?

L'API Entreprise **facilite le dépôt et l'instruction des demandes d'aides publiques** en permettant aux instructeurs d'obtenir les données et documents justificatifs sans les demander aux entreprises et associations. 

Il est même possible de **préremplir certaines données dans les formulaires de candidature**. Pour en savoir plus sur le préremplissage, vous pouvez consulter la rubrique [Les cas d'usage d'API Entreprise, partie pré-remplissage](https://entreprise.api.gouv.fr/doc/#cas-usage){:target="_blank"}.

## Qui peut utiliser l'API Entreprise ?

L'API Entreprise est un service dont l'accès se fait [sous habilitation et sous certaines conditions](https://entreprise.api.gouv.fr/doc/#acces){:target="_blank"}.
Dans le cadre des demandes d'aide publiques, l’API Entreprise est notamment destinée aux agents habilités à récupérer automatiquement des informations.

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
| Données   | Autorisation marchés publics   |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:----:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Données de référence d'une entreprise](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}                  | ✅ |  INSEE & Infogreffe    |            `entreprises`            |    données JSON     |    publiques et confidentielles pour les non-diffusibles    |
| [Données de référence d'un établissement](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}                | ✅ |         INSEE           |          `etablissements`           |    données JSON     |    publiques et confidentielles pour les non-diffusibles    |
| [Extrait  RCS](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}                                           |     ✅ |   Infogreffe        |         `extraits_rcs_infogreffe`         |    données JSON     |    confidentielles    |
| [Données déclaratives d'une association](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"}                 | ✅ |Ministère de l'Intérieur |              `associations`               |    données JSON     |    publiques    |
| [Divers documents d'une association](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}                     | ✅ |Ministère de l'Intérieur |         `documents_associations`          |     PDF (image)     |    publiques    |
| [Actes](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"}                     |✅ | INPI |         `actes_inpi`          |     Archive ZIP (PDF et XML)     |    publiques    |
| [Conventions collectives](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"}                     |✅ | Fabrique numérique des Ministères Sociaux |         `conventions_collectives`          |     données JSON     |    publiques    |

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données                                              | Autorisation marchés publics   |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Chiffre d'affaires](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"}                                     |     ✅ |     DGFIP           |                `exercices`                |    données JSON     | confidentielles |
| [Bilans annuels](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"}                                     |     ✅ |  INPI     |         `bilans_inpi`          |    Archive ZIP (PDF et XML)     | publiques et confidentielles |
| [3 derniers bilans entreprise](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"}                                     |     ❌ |  Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |
| [Déclarations et dictionnaire de liasses fiscales](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip)      |        ❌ |    DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |

#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>

{:.tpl-table}
| Données              |  Autorisation marchés publics   |       Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Attestation fiscale](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"}                                    |      ✅ |    DGFIP           |       `attestations_fiscales_dgfip`       |     PDF     | confidentielles |
| [Attestation de vigilance](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"}                               |  ✅ |        ACOSS           |       `attestations_sociales_acoss`       |     PDF    | confidentielles |
| [Conformité emploi des travailleurs handicapés AGEFIPH](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"}  |   ✅ |      AGEFIPH          |          `attestations_agefiph`           |    données JSON     | confidentielles |
| [Cotisations de sécurité sociale agricole](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"}                | ✅ |          MSA            |             `cotisations_msa`             |    données JSON     | confidentielles |
| [Cotisations retraite bâtiment](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"}                       |  ✅ |        PROBTP          | `cotisation_retraite_probtp` |    données JSON     |   confidentielles    |
| [Carte professionnelle travaux publics](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"}         |       ✅ |   FNTP           |            `cartes_professionnelles_fntp`            |         PDF         |    publiques    |
| [Cotisations congés payés & chômage intempéries](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"}         |   ✅ |       CNETP           |            `certificats_cnetp`            |         PDF         |    confidentielles    |

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données      |  Autorisation marchés publics   |       Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Certification RGE](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"}                                      |    ✅ |      ADEME           |          `certificats_rge_ademe`          | données JSON et PDF |    publiques    |
| [Certification de qualification bâtiment](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"}                  |    ✅ |      Qualibat          |           `certificats_qualibat`            |    PDF     |    publiques    |
| [Certification de qualification d'ingénierie](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"}                  |   ✅ |       OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |


#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>

{:.tpl-table}
| Données          |    Autorisation marchés publics   |     Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Brevets, modèles et marques déposées](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"}                   | ✅ |          INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |




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


