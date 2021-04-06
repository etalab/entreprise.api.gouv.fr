---
layout: usecases
title: Simplifier la détection de la fraude des entreprises
---

## Le rôle d'API Entreprise

{% asset 'cas-usage/fonctionnement-api-entreprise-cas-usage-fraude.png' %}

API Entreprise simplifie les procédures de détection de la fraude des entreprises, qu'elle soit financière ou sociale, en mettant à disposition plusieurs API ce qui permet :

- la constitution du dossier d'enquête, **en récupérant les justificatifs nécessaires à l'instruction**, sans solliciter les entreprises ;

- le **ciblage** des entreprises à contrôler de manière plus approfondie et dans le respect des procédures contradictoires ;

- l'optimisation du travail des enquêteurs en leur offrant un **accès et une exploitation rapide** aux informations sociales, économiques et financières des entités surveillées.

## Les données utiles à la détection de la fraude

API Entreprise est un service réservé aux acteurs publics investis d'une mission de service public dont l'accès se fait [sous habilitation et sous certaines conditions]({{ site.baseurl }}/doc/#acces).
<br>
Selon la détection de fraude à laquelle votre service est habilité, veillez à **demander uniquement les données strictement nécessaires** et à fournir les documents nécessaires pour justifier votre [cadre juridique]({{ site.baseurl }}/doc/#le-cadre-juridique). Votre raccordement en sera alors grandement accéléré.

  {:.example}

  Par exemple, votre service effectue des contrôles concernant uniquement la fraude sociale ? Inutile alors de demander les attestations fiscales `attestations_fiscales_dgfip`.

Pour chaque endpoint présent dans le [catalogue API Entreprise]({{ site.baseurl }}/catalogue), retrouvez ci-dessous une première évaluation de l'utilité estimée de la donnée pour la détection de la fraude :
<br>


##### Légende du tableau

{:.tpl-table}

| Utilité : Dans ce cas d'usage, la donnée est-elle utile ? |
| ---------|
| ✅&nbsp; &nbsp; Oui |
| ⏺&nbsp; &nbsp; À étudier |
| ❌&nbsp; &nbsp; Non |


#### Informations générales <a id="infos_generales"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité| Format 	| Ouverture 	| Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Données de référence<br>d'une entreprise** 	<br>`entreprises` | INSEE & Infogreffe 	| ✅ 	|  JSON 	| publiques et protégées	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}  	|
| **Données de référence<br>d'un établissement** <br>	`etablissements` | INSEE 	| ✅ 	|  JSON 	| publiques et protégées	| 	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}|
| **Extrait  RCS** <br> `extraits_rcs_infogreffe` 	| Infogreffe 	|  ✅ 	|  JSON 	| protégées 🔐 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}	|
| **Données déclaratives<br>d'une association** <br> `associations`	| Ministère de l'Intérieur 	| ⏺ 	 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"} 	|
| **Divers documents<br>d'une association** <br> `documents_associations`  	| Ministère de l'Intérieur 	| ⏺ 	| PDF 	| publiques 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}	|
| **Données de référence d'une entreprise artisanale**<br> `entreprises_artisanales_cma` 	| CMA France 	|  ⏺ 	|  JSON 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-entreprises_artisanales_cma){:target="_blank"} |
| **Actes**<br> `actes_inpi` 	| INPI 	|  ✅ 	|  ZIP (PDF et XML) 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"} |
| **Conventions collectives** <br> `conventions_collectives` 	| Fabrique numérique des Ministères Sociaux 	|  ⏺ 	|  JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"} 	|
| **Effectif d'une entreprise** <br> `effectifs_..._acoss_covid` 	| ACOSS 	|  ✅ 	|  JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-effectifs_..._acoss_covid){:target="_blank"} 	|
| **Immatriculation EORI** <br> `eori_douanes` 	| Douanes 	|  ✅ 	|  JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-eori_douanes){:target="_blank"} 	|

<br>

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données et endpoints	| Producteur 	| Utilité 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Chiffre d'affaires**<br>`exercices` 	| DGFIP 	| ✅ 	|  JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"} 	|
| **Bilans annuels**<br>`bilans_inpi` 	| INPI 	|  ✅ 	| ZIP (PDF et XML) 	| publiques et protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"} 	|
| **3 derniers bilans annuels**<br>`bilans_entreprises_bdf` 	| Banque de France 	| ✅ 	|  JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"} 	|
| **Déclarations de résultat**<br>`liasses_fiscales_dgfip` 	| DGFIP 	| ✅ 	| JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"} 	|

<br>


#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité	| Format 	| Ouverture 	| Documentation 	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Attestation fiscale**<br>`attestations_fiscales_dgfip` 	| DGFIP 	| ✅ 	| PDF 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"} 	|
| **Attestation de vigilance**<br>`attestations_sociales_acoss` 	| ACOSS 	| ✅ 	|  PDF 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"} 	|
| **Conformité emploi des travailleurs handicapés**<br>`attestations_agefiph` 	| AGEFIPH 	|  ⏺	| JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"} 	|
| **Cotisations de sécurité sociale agricole**<br>`cotisations_msa` 	| MSA 	|  ⏺	| JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"} 	|
| **Cotisations retraite bâtiment**<br>`cotisation_retraite_probtp` 	| PROBTP 	|  ⏺	|  JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"} 	|
| **Carte professionnelle travaux publics**<br>`cartes_professionnelles_fntp` 	| FNTP 	|  ⏺	|PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"} 	|
| **Cotisations congés payés & chômage intempéries**<br>`certificats_cnetp` 	| CNETP 	|  ⏺	|  PDF 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"} 	|

<br>

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Certification en BIO**<br>`certificats_agence_bio` 	| Agence BIO 	|  ⏺	| JSON	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-certificats_agence_bio){:target="_blank"} 	|
| **Certification RGE**<br>`certificats_rge_ademe` 	| ADEME 	|  ⏺	| JSON et PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"} 	|
| **Certification de qualification bâtiment**<br>`certificats_qualibat` 	| Qualibat 	|  ⏺	| PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"} 	|
| **Certification de qualification d'ingénierie**<br>`certificats_opqibi` 	| OPQIBI 	|  ⏺	|JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"} 	|

<br>

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Brevets, modèles et marques déposées**<br>`extraits_courts_inpi` 	| INPI  	|  ⏺ | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"} 	|


  <a class="tpl-button tpl-button--primary" href="{{ site.baseurl }}/catalogue/">Parcourir le catalogue des données</a>

## Ils utilisent l'API Entreprise

La **Direction des Achats de l'État** (DAE), et la **Direction générale de la concurrence, de la consommation et de la répression des fraudes** (DGCCRF), utilisent déjà l'API Entreprise pour simplifier leurs procédures de détection de la fraude.

{% asset 'cas-usage/cas-usage-fraude-exemples.png' %}

## Faire sa demande d'accès

Vous avez identifié les données nécessaires pour votre service dans le cadre de la détection de fraude ? Le lien ci-dessous vous permet d'accéder à un formulaire spécifique "détection de la fraude" :

  <a class="tpl-button tpl-button--primary" href="https://datapass.api.gouv.fr/api-entreprise?demarche=detection_fraude">🔑 détection de la fraude"</a>


{:.tpl-notification}

Pour bien comprendre les **étapes d'une demande d'accès** à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale. <br><br>
Une partie de cette documentation vous permet notamment de mieux comprendre [**les attendus de l'encadré "Cadre juridique"**]({{ site.baseurl }}/doc/#le-cadre-juridique) du formulaire.
<br>
