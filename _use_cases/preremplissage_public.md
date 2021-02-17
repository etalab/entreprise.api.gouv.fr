---
layout: usecases
title: Pré-remplir et personnaliser des formulaires en accès libre
---

## Le rôle d'API Entreprise

{% asset 'cas-usage/fonctionnement-api-entreprise-cas-usage-preremplissage-public' %}

API Entreprise permet d'améliorer le service rendu aux entreprises et associations, en mettant à disposition plusieurs APIs afin de : 
- **[préremplir directement un formulaire]({{ site.baseurl }}/doc/#le-pr-remplissage-dun-formulaire--destination-du-public)** avec les données publiques connues les concernant, grâce à leur numéro de SIRET ou RNA ; 
- **personnaliser** ces mêmes formulaires grâce aux informations connues.

{:.tpl-notification.tpl--danger}
Ce cas d'usage concerne uniquement les formulaires en accès libre, c'est à dire qui ne nécessitent pas une authentification préalable de l'utilisateur. **De fait, seuls les endpoints proposant des données publiques sont autorisés.**

{:.tpl-notification}
**Votre formulaire est accessible uniquement par l'utilisateur ?** Nous vous invitons à consulter le cas d'usage ["Pré-remplir et personnaliser des formulaires en accès sécurisé"]({{ site.baseurl }}use_cases/preremplissage_securise/). Vous aurez alors accès à plus de données.


## Les données utiles au pré-remplissage

API Entreprise est un service réservé aux acteurs publics investis d'une mission de service public dont l'accès se fait [sous habilitation et sous certaines conditions]({{ site.baseurl }}/doc/#acces).
<br>

Selon votre cas d'usage spécifique, veillez à **demander uniquement les données nécessaires** dans le cadre du pré-remplissage d'un formulaire en accès libre et à fournir les documents nécessaires pour justifier votre [cadre juridique]({{ site.baseurl }}/doc/#le-cadre-juridique). Votre raccordement en sera alors grandement accéléré.

  {:.example}

  Par exemple, votre service s'adresse uniquement à des entreprises ? Inutile donc de demander les données des associations délivrées par les endpoints `associations` et `documents_associations`.

Pour chaque endpoint présent dans le [catalogue API Entreprise]({{ site.baseurl }}/catalogue), retrouvez ci-dessous une première évaluation de l'utilité estimée de la donnée pour ce cas d'usage :
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
| **Données de référence<br>d'une entreprise** 	<br>`entreprises` | INSEE & Infogreffe 	| ✅<br>sauf non-diffusibles	|  JSON 	| publiques et confidentielles	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}  	|
| **Données de référence<br>d'un établissement** <br>	`etablissements` | INSEE 	| ✅<br>sauf non-diffusibles	|  JSON 	| publiques et confidentielles	| 	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}|
| **Extrait  RCS** <br> `extraits_rcs_infogreffe` 	| Infogreffe 	|  ❌ 	|  JSON 	| confidentielles 🔐 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}	|
| **Données déclaratives<br>d'une association** <br> `associations`	| Ministère de l'Intérieur 	| ✅ 	 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"} 	|
| **Divers documents<br>d'une association** <br> `documents_associations`  	| Ministère de l'Intérieur 	|  ❌<br> *format inadapté*	| PDF 	| publiques 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}	|
| **Données de référence d'une entreprise artisanale**<br> `entreprises_artisanales_cma` 	| CMA France 	|  ✅ 	|  JSON 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-entreprises_artisanales_cma){:target="_blank"} |
| **Actes**<br> `actes_inpi` 	| INPI 	|   ❌<br> *format inadapté* 	|  ZIP (PDF et XML) 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"} |
| **Conventions collectives** <br> `conventions_collectives` 	| Fabrique numérique des Ministères Sociaux 	|  ⏺ 	|  JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"} 	|
| **Effectif d'une entreprise** <br> `effectifs_..._acoss_covid` 	| ACOSS 	|  ❌ 	|  JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-effectifs_..._acoss_covid){:target="_blank"} 	|

<br>

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données et endpoints	| Producteur 	| Utilité 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Chiffre d'affaires**<br>`exercices` 	| DGFIP 	| ❌ 	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"} 	|
| **Bilans annuels**<br>`bilans_inpi` 	| INPI 	|  ❌<br> *format inadapté* 	| ZIP (PDF et XML) 	| publiques et confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"} 	|
| **3 derniers bilans annuels**<br>`bilans_entreprises_bdf` 	| Banque de France 	| ❌ 	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"} 	|
| **Déclarations de résultat**<br>`liasses_fiscales_dgfip` 	| DGFIP 	| ❌ 	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"} 	|

<br>


#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité	| Format 	| Ouverture 	| Documentation 	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Attestation fiscale**<br>`attestations_fiscales_dgfip` 	| DGFIP 	|  ❌	| PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"} 	|
| **Attestation de vigilance**<br>`attestations_sociales_acoss` 	| ACOSS 	| ❌ 	|  PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"} 	|
| **Conformité emploi des travailleurs handicapés**<br>`attestations_agefiph` 	| AGEFIPH 	|  ❌	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"} 	|
| **Cotisations de sécurité sociale agricole**<br>`cotisations_msa` 	| MSA 	|  ❌	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"} 	|
| **Cotisations retraite bâtiment**<br>`cotisation_retraite_probtp` 	| PROBTP 	|  ❌	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"} 	|
| **Carte professionnelle travaux publics**<br>`cartes_professionnelles_fntp` 	| FNTP 	|  ❌<br> *format inadapté*	|PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"} 	|
| **Cotisations congés payés & chômage intempéries**<br>`certificats_cnetp` 	| CNETP 	|  ❌	|  PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"} 	|

<br>

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Certification RGE**<br>`certificats_rge_ademe` 	| ADEME 	|  ⏺	| JSON et PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"} 	|
| **Certification de qualification bâtiment**<br>`certificats_qualibat` 	| Qualibat 	|  ❌<br> *format inadapté*	| PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"} 	|
| **Certification de qualification d'ingénierie**<br>`certificats_opqibi` 	| OPQIBI 	|  ⏺	|JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"} 	|

<br>

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Brevets, modèles et marques déposées**<br>`extraits_courts_inpi` 	| INPI  	|  ⏺ | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"} 	|


  <a class="tpl-button tpl-button--primary" href="{{ site.baseurl }}/catalogue/">Parcourir le catalogue des données</a>  


## Formulaire d'accès spécifique au cas d'usage

Vous avez identifié les données nécessaires pour faciliter le remplissage de formulaires à destination des entreprises et/ou associations, en accès libre ? Le lien ci-dessous vous permet de faire plus facilement votre demande d'accès spécifique à ce cas d'usage : 

  <a class="tpl-button tpl-button--primary" href="https://datapass.api.gouv.fr/api-entreprise?demarche=preremplissage_public">🔑 Formulaire d'accès "pré-remplissage - accès libre"</a>

{:.tpl-notification}

Pour bien comprendre les **étapes d'une demande d'accès** à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale. <br><br>
Une partie de cette documentation vous permet notamment de mieux comprendre [**les attendus de l'encadré "Cadre juridique"**]({{ site.baseurl }}/doc/#le-cadre-juridique) du formulaire.
<br>


## Ils utilisent l'API Entreprise


Ils utilisent déjà l'API Entreprise pour pré-remplir des formulaires en accès libre :

- **Des communes et intercommunalités** : 
- **Des métropoles** : Marseille
- **Des départements** : Vaucluse
- **Des régions** : 
- **Des administrations centrales** : ANCT (Agence nationale de la cohésion des territoires)
- **Des groupements d'intérêt publics** : 
- **Des opérateurs** : 
