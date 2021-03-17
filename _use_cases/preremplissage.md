---
layout: usecases
title: Pré-remplir et personnaliser des formulaires
---

## Le rôle d'API Entreprise

{% asset 'cas-usage/fonctionnement-api-entreprise-cas-usage-preremplissage.png' %}

API Entreprise permet d'améliorer le service rendu aux entreprises et associations, en mettant à disposition plusieurs APIs afin de : 
- **préremplir directement un formulaire** avec les données publiques connues les concernant, grâce à leur numéro de SIRET ou RNA ; 
- **personnaliser** ces mêmes formulaires grâce aux informations connues.


{:.tpl-notification.tpl--danger}
***Votre formulaire est accessible uniquement par l'utilisateur après une authentification sécurisée ?*** 
Mise à part certaines données jugées trop sensibles, votre service pourra accéder à l’ensemble des données disponibles de l’API Entreprise, au format adapté (le JSON).<br>
<br>
***Votre formulaire est en accès libre ?*** 
**Seuls les endpoints proposant des données publiques sont autorisés.**

 {:.example}
  **L'exemple du formulaire DUME**<br>
  L'AIFE a mis en place une démarche dématérialisée pour permettre aux entreprises d’obtenir leur [document Unique de Marché Européen](https://dume.chorus-pro.gouv.fr/){:target="_blank"}. Elle utilise l'API Entreprise pour pré-remplir les formulaires de ses utilisateurs. Le formulaire étant public, seuls les endpoints proposant des données publiques ont été utilisés par l'AIFE dans ce cadre.
  <video controls width="400"><source src="../assets/videos/video-cas-usage-preremplissage-dume.mp4" type="video/mp4">
  Nous sommes désolés, votre navigateur ne supporte pas les vidéos.
  </video>
  {:.example}


## Les données utiles au pré-remplissage 

API Entreprise est un service réservé aux acteurs publics investis d'une mission de service public dont l'accès se fait [sous habilitation et sous certaines conditions]({{ site.baseurl }}/doc/#acces).
<br>

Selon votre cas d'usage spécifique, veillez à **demander uniquement les données nécessaires** dans le cadre du pré-remplissage d'un formulaire et à fournir les documents nécessaires pour justifier votre [cadre juridique]({{ site.baseurl }}/doc/#le-cadre-juridique). Votre raccordement en sera alors grandement accéléré.

  {:.example}

  Par exemple, votre service s'adresse uniquement à des entreprises ? Inutile donc de demander les données des associations délivrées par les endpoints `associations` et `documents_associations`. Ou bien, votre service est public, sans authentification ? Inutile de demander les endpoints proposant des données protégées.
  {:.example}

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
| Données et endpoints 	| Producteur 	| Utilité formulaire avec authentification | Utilité formulaire public |Format 	| Ouverture 	| Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Données de référence<br>d'une entreprise** 	<br>`entreprises` | INSEE & Infogreffe 	| ✅ | ✅<br>❌ sans l'option  "non-diffusibles"	|  JSON 	| publiques et confidentielles	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}  	|
| **Données de référence<br>d'un établissement** <br>	`etablissements` | INSEE 	| ✅	| ✅<br>❌ sans l'option  "non-diffusibles"| JSON 	| publiques et confidentielles	| 	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}|
| **Extrait  RCS** <br> `extraits_rcs_infogreffe` 	| Infogreffe 	|  ✅  	|	❌ |  JSON 	| confidentielles 🔐 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}	|
| **Données déclaratives<br>d'une association** <br> `associations`	| Ministère de l'Intérieur 	| ✅ 	| ✅	 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"} 	|
| **Divers documents<br>d'une association** <br> `documents_associations`  	| Ministère de l'Intérieur 	|  ❌<br> *format inadapté*	| ❌<br> *format inadapté*	| PDF 	| publiques 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}	|
| **Données de référence d'une entreprise artisanale**<br> `entreprises_artisanales_cma` 	| CMA France 	|  ✅ 	|  ✅ 	|JSON 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-entreprises_artisanales_cma){:target="_blank"} |
| **Actes**<br> `actes_inpi` 	| INPI 	|   ❌<br> *format inadapté* 	| ❌<br> *format inadapté*	| ZIP (PDF et XML) 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"} |
| **Conventions collectives** <br> `conventions_collectives` 	| Fabrique numérique des Ministères Sociaux 	|  ⏺ 	| ⏺ 	| JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"} 	|
| **Effectif d'une entreprise** <br> `effectifs_..._acoss_covid` 	| ACOSS 	|  ✅ 	|❌ |  JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-effectifs_..._acoss_covid){:target="_blank"} 	|

<br>

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données et endpoints	| Producteur 	| Utilité formulaire avec authentification | Utilité formulaire public 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Chiffre d'affaires**<br>`exercices` 	| DGFIP 	| ⏺ | ❌	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"} 	|
| **Bilans annuels**<br>`bilans_inpi` 	| INPI 	|  ❌<br> *format inadapté* | ❌	| ZIP (PDF et XML) 	| publiques et confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"} 	|
| **3 derniers bilans annuels**<br>`bilans_entreprises_bdf` 	| Banque de France 	| ⏺ | ❌	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"} 	|
| **Déclarations de résultat**<br>`liasses_fiscales_dgfip` 	| DGFIP 	| ⏺ | ❌	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"} 	|

<br>


#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité formulaire avec authentification | Utilité formulaire public 	| Format 	| Ouverture 	| Documentation 	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Attestation fiscale**<br>`attestations_fiscales_dgfip` 	| DGFIP 	|  ❌<br> *format inadapté* | ❌	| PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"} 	|
| **Attestation de vigilance**<br>`attestations_sociales_acoss` 	| ACOSS 	| ❌ <br> *format inadapté* | ❌|  PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"} 	|
| **Conformité emploi des travailleurs handicapés**<br>`attestations_agefiph` 	| AGEFIPH 	| ⏺	| ❌| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"} 	|
| **Cotisations de sécurité sociale agricole**<br>`cotisations_msa` 	| MSA 	|  ⏺| ❌	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"} 	|
| **Cotisations retraite bâtiment**<br>`cotisation_retraite_probtp` 	| PROBTP 	|  ⏺ | ❌	|  JSON 	| confidentielles 🔐 | ❌	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"} 	|
| **Carte professionnelle travaux publics**<br>`cartes_professionnelles_fntp` 	| FNTP 	|  ❌<br> *format inadapté* 	|  ❌<br> *format inadapté* |PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"} 	|
| **Cotisations congés payés & chômage intempéries**<br>`certificats_cnetp` 	| CNETP 	|  ❌<br> *format inadapté* | ❌	|  PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"} 	|

<br>

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité formulaire avec authentification | Utilité formulaire public | Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Certification RGE**<br>`certificats_rge_ademe` 	| ADEME 	|  ⏺	| ⏺	| JSON et PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"} 	|
| **Certification de qualification bâtiment**<br>`certificats_qualibat` 	| Qualibat 	|  ❌<br> *format inadapté*	|  ❌<br> *format inadapté* | PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"} 	|
| **Certification de qualification d'ingénierie**<br>`certificats_opqibi` 	| OPQIBI 	|  ⏺	|⏺	| JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"} 	|

<br>

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité formulaire avec authentification | Utilité formulaire public | Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Brevets, modèles et marques déposées**<br>`extraits_courts_inpi` 	| INPI  	|  ⏺ | ⏺	| JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"} 	|


  <a class="tpl-button tpl-button--primary" href="{{ site.baseurl }}/catalogue/">Parcourir le catalogue des données</a>  


## Ils utilisent l'API Entreprise


Ils utilisent déjà l'API Entreprise pour pré-remplir leurs formulaires à destination des entreprises et des associations : 

- **Des communes et intercommunalités** : 
La communauté de communes de Vaison Ventoux propose une [carte aux professionnels permettant d'accéder aux déchetteries de son territoire](http://www.vaison-ventoux.fr/cadre-de-vie-solidarite/dechets/l-acces-a-la-carte-de-dechetterie-pour-les-professionnels.htm){:target="_blank"}. Le formulaire accessible sous connexion sécurisée FranceConnect, est directement pré-rempli des informations disponibles par API Entreprise.
- **Des administrations centrales** : ANCT (Agence nationale de la cohésion des territoires), DINUM (Direction interministérielle du numérique) ;
- **Des opérateurs** : BPI France financement, Agence nationale pour la gestion des déchets radioactifs, CNIL (Commission Nationale de l’Informatique et des Libertés), CCI France.


{% asset 'cas-usage/cas-usage-preremplissage-exemples.png' %}


## Faire sa demande d'accès

Vous avez identifié les données nécessaires pour faciliter le pré-remplissage de formulaires à destination des entreprises et/ou associations ? <br>Les liens ci-dessous vous permettent de faire plus facilement votre demande d'accès : 
<br><br>
Votre formulaire est **accessible uniquement par l'utilisateur authentifié** :

  <a class="tpl-button tpl-button--primary" href="https://datapass.api.gouv.fr/api-entreprise?demarche=preremplissage_securise">🔑 Demande d'accès "pré-remplissage - formulaire sous authentification"</a>
<br><br>
Votre formulaire est en accès **public** : 

  <a class="tpl-button tpl-button--primary" href="https://datapass.api.gouv.fr/api-entreprise?demarche=preremplissage_public">🔑 Demande d'accès "pré-remplissage - formulaire public"</a>

{:.tpl-notification}

Pour bien comprendre les **étapes d'une demande d'accès** à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale. <br><br>
Une partie de cette documentation vous permet notamment de mieux comprendre [**les attendus de l'encadré "Cadre juridique"**]({{ site.baseurl }}/doc/#le-cadre-juridique) du formulaire.
<br>
