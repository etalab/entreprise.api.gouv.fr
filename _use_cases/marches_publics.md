---
layout: usecases
title: Marchés Publics
---

## À quoi sert API Entreprise ?

L'API Entreprise vous permet de **faciliter la candidature des associations et entreprises a un marché public**, en obtenant pour elles des informations administratives.
Pour certains données, il est même possible de les préremplir dans les formulaires de candidature.

Elle **simplifie également le travail de l'instructeur** qui peut rapidement trouver les informations dont il a besoin (justificats, certificats, ...)

En savoir plus sur [le préremplissage d'un formulaire et l'obtention d'une donnée en back office par un agent habilité](https://entreprise.api.gouv.fr/doc/#cas-usage){:target="_blank"}

## Qui peut utiliser l'API Entreprise ?

L'API Entreprise est un service dont l'accès se fait [sous habilitation et sous certaines conditions](https://entreprise.api.gouv.fr/doc/#acces){:target="_blank"}.

Dans le cadre des marchés publics, voici les différentes catégories de nos utilisateurs : 
- Les acheteurs publics ; 
- Les éditeurs de place de marchés ; 
- Le service DUME (Document Unique du Marché Européen) rendu par l'AIFE (Agence pour l'Informatique Financière de l'État).

## Les services et éditeurs connectés à l'API Entreprise

Depuis le 12 décembre 2019, les acheteurs publics ont l'obligation légale de passer par une plateforme de dématérialisation des procédures de marchés publics (profil acheteur), pour tout marché dont le besoin estimé est supérieur à 40 000 € HT.

###### Voici la liste des services et éditeurs connectés à l'API Entreprise : 

{:.tpl-table}
| Éditeurs et services connecté à l'API Entreprise        |     type d'entité  |    Profil acheteur ou service        |
|------------------------|:-------------------------------------------:|:-------------------------------------------:|
|    AIFE <br>(Agence pour l'Informatique Financière de l'État)       |  agence publique | [Service DUME](https://dume.chorus-pro.gouv.fr/#/){:target="_blank"} |
|      Achatpublic.com     | entreprise privée |[achatpublic.com](https://www.achatpublic.com/){:target="_blank"}  |
|    Atexo                 | entreprise privée | [Place](https://www.marches-publics.gouv.fr/){:target="_blank"}     |
|    AWS                   |    entreprise privée |    [AWS-achat](https://www.marches-publics.info){:target="_blank"}                                      |
|    Dematis               |     entreprise privée |       [e-marchespublics.com](https://www.e-marchespublics.com/){:target="_blank"}                                |
|    Klekoon          | entreprise privée |     [klekoon.com](https://www.klekoon.com/){:target="_blank"}                                        |
|    Provigis              |    entreprise privée |     [Provigis plateforme](https://www.provigis.com/connexion-plateforme-donneur-dordres/){:target="_blank"}                                     |

## Données utiles et aurorisées dans le cadre des marchés publics

Vous trouverez ci-dessous les données autorisées et non autorisées dans le cadre des marchés publics et classées dans différentes catégories :
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
| [Bilans annuels](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"}                                     |     ❌ |  INPI     |         `bilans_inpi`          |    Archive ZIP (PDF et XML)     | publiques et confidentielles |
| [3 derniers bilans entreprise](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"}                                     |     ❌ |  Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |
| [Déclarations et dictionnaire de liasses fiscales](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip)      |        ❌ |    DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |

#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>

{:.tpl-table}
| Données              |  Autorisation marchés publics   |       Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Attestation fiscale](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"}                                    |      ✅ |    DGFIP           |       `attestations_fiscales_dgfip`       |     PDF (texte)     | confidentielles |
| [Attestation de vigilance](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"}                               |  ✅ |        ACOSS           |       `attestations_sociales_acoss`       |     PDF (texte)     | confidentielles |
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
| [Certification de qualification bâtiment](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"}                  |    ✅ |      Qualibat          |           `certificats_qualibat`            |    document PDF     |    publiques    |
| [Certification de qualification d'ingénierie](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"}                  |   ✅ |       OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |


#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>

{:.tpl-table}
| Données          |    Autorisation marchés publics   |     Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Brevets, modèles et marques déposées](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"}                   | ✅ |          INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |


## Demander un accès à l'API Entreprise

Si vous êtes un acheteur public, il est probable que vous ayez déjà accès aux données d'API Entreprise par l'intermédiaire de votre profil acheteur ou du DUME que peut remplir l'entreprise.

Dans les autres cas, nous vous invitons à faire une demande d'habilitation à l'API Entreprise :
