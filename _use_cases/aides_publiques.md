---
layout: usecases
title: Faciliter le dépôt et l'instruction des aides publiques
---

## Le rôle d'API Entreprise

L'API Entreprise permet d'améliorer le service rendu aux entreprises et associations dans le cadre des demandes d'aides et subventions, en mettant à disposition plusieurs API afin : 

- de faciliter le dépôt de la demande, **en [pré-remplissant le formulaire du demandeur]({{ site.baseurl }}/doc/#cas-usage)** grâce à son numéro de SIRET/RNA ; 
- de faciliter la construction du dossier **en récupérant les justificatifs nécessaires à l'instruction**, sans les réclamer aux entreprises et associations demandeuses.

{:.example}

La Région Normandie, la Métropole de Lyon ainsi que la communauté d'agglomération Chauny-Tergnier-La Fère utilisent les données d'API Entreprise pour les demandes de subventions des entreprises et associations qui leurs sont relatives.

## Les données utiles "aides publiques"

L'API Entreprise est un service réservé aux acteurs publics investis d'une mission de service public dont l'accès se fait [sous habilitation et sous certaines conditions]({{ site.baseurl }}/doc/#cas-usage/#acces).

Pour chaque endpoint présent dans le [catalogue API Entreprise]({{ site.baseurl }}/catalogue), retrouvez ci-dessous l'utilité de la donnée dans le cadre de la facilitation des demandes d'aides publiques, ainsi que le cadre juridique nécessaire.<br>
<br>
Le symbole ✅ indique que l'endpoint a déjà été **utile à nos utilisateurs pour ce cas d'usage**. Chaque service pouvant avoir ses propres spécificités, ce symbole ⏺ vous indique que l'endpoint n'est **pas encore utilisé à ce jour** pour ce cas d'usage, il vous est néanmoins possible de les demander si votre service le justifie.
Enfin, ce symbole ❌mentionne que l'endpoint n'est a priori **pas accessible** dans le cadre spécifique. Si vous estimez ces dernières données nécessaires, votre cadre juridique devra être explicite. <br>
<br>
Dans ce tableau de synthèse nous vous précisons également la nature du cadre juridique nécessaire pour bénéficier des données.
L'accès à l'API Entreprise doit toujours être accompagné d'un cadre juridique précis, tous les endpoints ont donc au moins ce symbole : 💬. Dans certains cas, l'accès à la donnée requiert *en sus* la fourniture de justificatifs tels qu'un décrêt ou un arrêté, ou une délibération si vous êtes une collectivité. Les endpoints concernés sont alors signalés par le symbole 📜.

Selon votre cas d'usage spécifique, **veillez à demander uniquement les accès aux données qui vous seront nécessaires dans le cadre de la facilitation des démarches aux aides publiques.** Votre raccordement en sera alors grandement accéléré.

Pour naviguer dans le tableau, vous pouvez également vous aider des catégories suivantes : 
- [Informations générales](#infos_generales),
- [Informations financières](#infos_financieres),
- [Attestations sociales et fiscales](#attestations_sociales_fiscales),
- [Certificats professionnels](#certificats_pro),
- [Propriété intellectuelle](#propriete_intellectuelle).

##### Légende du tableau 

{:.tpl-table}
| Symbole et signification | 
| ---------|
| ✅  déjà utilisé dans ce cadre |
| ⏺  pas encore utilisé dans ce cadre |
| ❌  a priori non-autorisé pour ce cas d'usage|
| 💬  cadre juridique précis nécessaire |
| 📜  cadre juridique précis et fourniture de justificatifs nécessaires|

#### Informations générales <a id="infos_generales"></a>

{:.tpl-table}
| Données   | Utilisation |   Cadre juridique nécessaire   |  Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:----:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Données de référence d'une entreprise](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}                  | ✅ |  💬| INSEE & Infogreffe    |            `entreprises`            |    données JSON     |    publiques et confidentielles pour les non-diffusibles    |
| [Données de référence d'un établissement](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}                | ✅ | 💬 |         INSEE           |          `etablissements`           |    données JSON     |    publiques et confidentielles pour les non-diffusibles    | 
| [Extrait  RCS](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}                                           |   ⏺   | 💬 | Infogreffe        |         `extraits_rcs_infogreffe`         |    données JSON     |    confidentielles    |
| [Données déclaratives d'une association](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"}                 | ✅ | 💬 |Ministère de l'Intérieur |              `associations`               |    données JSON     |    publiques    |
| [Divers documents d'une association](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}                     | ✅ | 💬| Ministère de l'Intérieur |         `documents_associations`          |     PDF (image)     |    publiques    |
| [Actes](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"}                     | ⏺| 📜 | INPI |         `actes_inpi`          |     Archive ZIP (PDF et XML)     |    publiques    |
| [Conventions collectives](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"}                     |⏺ | 📜 | Fabrique numérique des Ministères Sociaux |         `conventions_collectives`          |     données JSON     |    publiques    |

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données                                              | Utilisation |   Cadre juridique nécessaire   |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Chiffre d'affaires](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"}                                     |     ✅ |📜 |     DGFIP           |                `exercices`                |    données JSON     | confidentielles |
| [Bilans annuels](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"}                                     |   ⏺   | 📜|  INPI     |         `bilans_inpi`          |    Archive ZIP (PDF et XML)     | publiques et confidentielles |
| [3 derniers bilans entreprise](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"}                                     |     ❌ | 📜|  Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |
| [Déclarations et dictionnaire de liasses fiscales](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip)      |        ❌ | 📜|    DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |

#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>

{:.tpl-table}
| Données              |  Utilisation |   Cadre juridique nécessaire   |       Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Attestation fiscale](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"}                                    |      ✅ | 📜|    DGFIP           |       `attestations_fiscales_dgfip`       |     PDF     | confidentielles |
| [Attestation de vigilance](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"}                               |  ✅ | 📜|       ACOSS           |       `attestations_sociales_acoss`       |     PDF    | confidentielles |
| [Conformité emploi des travailleurs handicapés AGEFIPH](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"}  | ⏺   | 📜|     AGEFIPH          |          `attestations_agefiph`           |    données JSON     | confidentielles |
| [Cotisations de sécurité sociale agricole](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"}                | ⏺ | 📜  |       MSA            |             `cotisations_msa`             |    données JSON     | confidentielles |
| [Cotisations retraite bâtiment](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"}                       | ⏺  | 📜|       PROBTP          | `cotisation_retraite_probtp` |    données JSON     |   confidentielles    |
| [Carte professionnelle travaux publics](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"}         |     ⏺   | 📜|  FNTP           |            `cartes_professionnelles_fntp`            |         PDF         |    publiques    |
| [Cotisations congés payés & chômage intempéries](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"}         |  ⏺  | 📜 |     CNETP           |            `certificats_cnetp`            |         PDF         |    confidentielles    |

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données      |  Utilisation |   Cadre juridique nécessaire   |       Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Certification RGE](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"}                                      |  ⏺   | 💬 |    ADEME           |          `certificats_rge_ademe`          | données JSON et PDF |    publiques    |
| [Certification de qualification bâtiment](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"}                  |  ⏺   | 💬 |    Qualibat          |           `certificats_qualibat`            |    PDF     |    publiques    |
| [Certification de qualification d'ingénierie](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"}                  |   ⏺ | 💬 |     OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |


#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>

{:.tpl-table}
| Données          |    Utilisation |   Cadre juridique nécessaire   |     Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Brevets, modèles et marques déposées](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"}                   | ⏺ | 💬 |        INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |


  <a class="tpl-button tpl-button--primary" href="{{ site.baseurl }}/catalogue/">Parcourir le catalogue des données</a>


## Liste d'éditeurs

Vous souhaitez vous connecter à l'API Entreprise mais vous n'avez pas de Direction des Systèmes d'Information ou bien une équipe technique interne qualifiée pour intégrer des APIs ? 
<br> Vous pouvez passer par un éditeur. 
<br><br> Nous dressons ici la liste de ceux étant déjà connectés à l'API Entreprise dans ce cas d'usage spécifique :


{:.tpl-table}
| Éditeurs connectés à l'API Entreprise        |     type d'entité  |    Service ou solution     |
|------------------------|:-------------------------------------------:|:-------------------------------------------:|
|    Entr'ouvert  |  Coopérative | [Publik](https://publik.entrouvert.com/){:target="_blank"}<br> logiciel libre|
|    MGDIS   | Entreprise privée |[Portail des aides](https://www.mgdis.fr/nos-solutions/pilotage-des-aides-versees/){:target="_blank"}  |

Vous êtes un éditeur proposant une solution pour les aides publiqes et ne figurez pas sur cette liste ? Veuillez nous contacter à cette adresse mail : support@entreprise.api.gouv.fr

## Formulaire d'accès spécifique au cas d'usage

Vous avez identifié les données nécessaires pour votre service dans le cadre de la facilitation des démarches de demande d'aides publiques ? Le lien ci-dessous vous permet d'accéder à un formulaire spécifique "aides publiques".

  <a class="tpl-button tpl-button--primary" href="">🔑 Formulaire d'accès "aides publiques"</a>

Pour bien comprendre les étapes d'une demande d'accès à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale. 