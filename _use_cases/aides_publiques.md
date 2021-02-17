---
layout: usecases
title: Faciliter le dépôt et l'instruction des aides et subventions publiques
---

## Le rôle d'API Entreprise

{% asset 'cas-usage/fonctionnement-api-entreprise-cas-usage-aides-publiques.png' %}

API Entreprise permet d'améliorer le service rendu aux entreprises et associations dans le cadre des demandes d'aides et subventions, en mettant à disposition plusieurs APIs afin : 

- de faciliter le dépôt de la demande, **en [pré-remplissant le formulaire du demandeur]({{ site.baseurl }}/doc/#le-pr-remplissage-dun-formulaire--destination-du-public)** grâce à son numéro de SIRET/RNA ; 
- de faciliter la construction du dossier **en récupérant les justificatifs nécessaires à l'instruction**, sans les réclamer aux entreprises et associations demandeuses.


## Les données utiles aux aides et subventions publiques

API Entreprise est un service réservé aux acteurs publics investis d'une mission de service public dont l'accès se fait [sous habilitation et sous certaines conditions]({{ site.baseurl }}/doc/#acces).
<br>
Selon votre cas d'usage spécifique, veillez à demander uniquement les accès aux **données nécessaires** dans le cadre de la facilitation des démarches aux aides et subventions publiques et à fournir les documents nécessaires pour justifier votre [cadre juridique]({{ site.baseurl }}/doc/#le-cadre-juridique). Votre raccordement en sera alors grandement accéléré.

  {:.example}

  Par exemple, votre service s'adresse uniquement à des entreprises ? Inutile donc de demander les données des associations délivrées par les endpoints `associations` et `documents_associations`.

Pour chaque endpoint présent dans le [catalogue API Entreprise]({{ site.baseurl }}/catalogue), retrouvez ci-dessous une première évaluation de l'**utilité estimée de la donnée** pour ce cas d'usage :
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
| **Données de référence<br>d'une entreprise** 	<br>`entreprises` | INSEE & Infogreffe 	| ✅ 	|  JSON 	| publiques et confidentielles	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}  	|
| **Données de référence<br>d'un établissement** <br>	`etablissements` | INSEE 	| ✅ 	|  JSON 	| publiques et confidentielles	| 	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}|
| **Extrait  RCS** <br> `extraits_rcs_infogreffe` 	| Infogreffe 	|  ✅ 	|  JSON 	| confidentielles 🔐 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}	|
| **Données déclaratives<br>d'une association** <br> `associations`	| Ministère de l'Intérieur 	| ✅ 	 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"} 	|
| **Divers documents<br>d'une association** <br> `documents_associations`  	| Ministère de l'Intérieur 	| ✅ 	| PDF 	| publiques 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}	|
| **Données de référence d'une entreprise artisanale**<br> `entreprises_artisanales_cma` 	| CMA France 	|  ✅ 	|  JSON 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-entreprises_artisanales_cma){:target="_blank"} |
| **Actes**<br> `actes_inpi` 	| INPI 	|  ⏺ 	|  ZIP (PDF et XML) 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"} |
| **Conventions collectives** <br> `conventions_collectives` 	| Fabrique numérique des Ministères Sociaux 	|  ⏺ 	|  JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"} 	|
| **Effectif d'une entreprise** <br> `effectifs_..._acoss_covid` 	| ACOSS 	|  ⏺ 	|  JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-effectifs_..._acoss_covid){:target="_blank"} 	|

<br>

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données et endpoints	| Producteur 	| Utilité 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Chiffre d'affaires**<br>`exercices` 	| DGFIP 	| ✅ 	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"} 	|
| **Bilans annuels**<br>`bilans_inpi` 	| INPI 	|  ⏺ 	| ZIP (PDF et XML) 	| publiques et confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"} 	|
| **3 derniers bilans annuels**<br>`bilans_entreprises_bdf` 	| Banque de France 	| ❌ 	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"} 	|
| **Déclarations de résultat**<br>`liasses_fiscales_dgfip` 	| DGFIP 	| ❌ 	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"} 	|

<br>


#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité	| Format 	| Ouverture 	| Documentation 	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Attestation fiscale**<br>`attestations_fiscales_dgfip` 	| DGFIP 	| ✅ 	| PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"} 	|
| **Attestation de vigilance**<br>`attestations_sociales_acoss` 	| ACOSS 	| ✅ 	|  PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"} 	|
| **Conformité emploi des travailleurs handicapés**<br>`attestations_agefiph` 	| AGEFIPH 	|  ⏺	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"} 	|
| **Cotisations de sécurité sociale agricole**<br>`cotisations_msa` 	| MSA 	|  ⏺	| JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"} 	|
| **Cotisations retraite bâtiment**<br>`cotisation_retraite_probtp` 	| PROBTP 	|  ⏺	|  JSON 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"} 	|
| **Carte professionnelle travaux publics**<br>`cartes_professionnelles_fntp` 	| FNTP 	|  ⏺	|PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"} 	|
| **Cotisations congés payés & chômage intempéries**<br>`certificats_cnetp` 	| CNETP 	|  ⏺	|  PDF 	| confidentielles 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"} 	|

<br>

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
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


## Liste d'éditeurs

Vous souhaitez vous connecter à l'API Entreprise mais **vous n'avez pas de direction des systèmes d'information ou bien une équipe technique interne qualifiée** pour intégrer des APIs ? 
<br> **Vous pouvez passer par un éditeur.** 
<br><br> Nous dressons ici la liste de ceux étant déjà connectés à l'API Entreprise dans ce cas d'usage spécifique :


{:.tpl-table}
| Éditeurs connectés à l'API Entreprise        |     type d'entité  |    Service ou solution     |
|------------------------|:-------------------------------------------:|:-------------------------------------------:|
|    Entr'ouvert  |  Coopérative | [Publik](https://publik.entrouvert.com/){:target="_blank"}<br> logiciel libre|
|    MGDIS   | Entreprise privée |[Portail des aides](https://www.mgdis.fr/nos-solutions/pilotage-des-aides-versees/){:target="_blank"}  |

Vous êtes un éditeur proposant une solution pour les aides publiques et ne figurez pas sur cette liste ? Veuillez nous contacter à cette adresse mail : [support@entreprise.api.gouv.fr](mailto:support@entreprise.api.gouv.fr).

## Formulaire d'accès spécifique au cas d'usage

Vous avez identifié les données nécessaires pour votre service dans le cadre de la facilitation des démarches de demande d'aides publiques ? Le lien ci-dessous vous permet d'accéder à un formulaire spécifique "aides publiques" : 

  <a class="tpl-button tpl-button--primary" href="https://datapass.api.gouv.fr/api-entreprise?demarche=aides_publiques">🔑 Formulaire d'accès "aides publiques"</a>


{:.tpl-notification}

Pour bien comprendre les **étapes d'une demande d'accès** à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale. <br><br>
Une partie de cette documentation vous permet notamment de mieux comprendre [**les attendus de l'encadré "Cadre juridique"**]({{ site.baseurl }}/doc/#le-cadre-juridique) du formualire.
<br>

## Ils utilisent l'API Entreprise

Ils utilisent déjà l'API Entreprise pour faciliter le dépôt des dossiers d'aides publiques/subventions et leur instruction :

- **Des communes et intercommunalités** : Alsace collectivité européene, Corbas, Les Sables-D'olonne, Saint Chamond, Venissieux, communauté d'agglomération Chauny-Tergnier-La Fère, communaute urbaine d'Arras, Grand Poitiers communaute urbaine, .
- **Des métropoles** : Grenoble-Alpes-Métropole, Grand Lyon.
- **Des départements** : Drôme, Finistère, Isère, Vaucluse.
- **Des régions** : Bourgogne-Franche-Comte, Bretagne, Centre-Val de Loire, Île-de-France, Normandie, Nouvelle-Aquitaine, Réunion.
<br>
<br>

{% asset 'cas-usage/cas-usage-aides-publiques-exemples.png' %}