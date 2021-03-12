---
layout: usecases
title: Pré-remplir et personnaliser des formulaires en accès libre
---

## Le rôle d'API Entreprise

API Entreprise permet d'améliorer le service rendu aux entreprises et associations en :
- **[préremplissant directement un formulaire]({{ site.baseurl }}/doc/#cas-usage)** avec les données publiques connues les concernant, grâce à leur numéro de SIRET/RNA ;
- personnalisant ces mêmes formulaires grâces aux informations connues.


Ce cas d'usage concerne uniquement les formulaires en accès libre, c'est à dire qui ne nécessitent pas une authentification préalable de l'utilisateur. **De fait, seuls les endpoints proposant des données publiques vous sont autorisés.**
Votre formulaire est accessible uniquement par l'utilisateur ? Nous vous invitons à consulter le cas d'usage ["Pré-remplir et personnaliser des formulaires en accès sécurisé"]({{ site.baseurl }}use_cases/preremplissage_securise/). Vous aurez alors accès à plus de données.


{:.example}
**Ils utilisent déjà l'API Entreprise** : L'ANCT (Agence nationale de la cohésion des territoires), le département du Vaucluse et la commune de Marseille utilisent API Entreprise pour pré-remplir leurs formulaires à destination des entreprises et associations.

## Les données utiles au pré-remplissage

API Entreprise est un service réservé aux acteurs publics investis d'une mission de service public dont l'accès se fait [sous habilitation et sous certaines conditions]({{ site.baseurl }}/doc/#cas-usage/#acces).

Pour chaque endpoint présent dans le [catalogue API Entreprise]({{ site.baseurl }}/catalogue), retrouvez ci-dessous l'utilité de la donnée dans le cadre du pré-remplissage de formulaires.<br>
<br>
Le symbole ✅ indique que l'endpoint a déjà été **utile à nos utilisateurs pour ce cas d'usage**.<br>
Chaque service pouvant avoir ses propres spécificités, ce symbole ⏺ vous indique que l'endpoint n'est **pas encore utilisé à ce jour** pour ce cas d'usage, il vous est néanmoins possible de les demander si votre service le justifie.<br>
Par ailleurs, le pré-remplissage nécessitant l'accès à une donnée structurée (format JSON), certains endpoints n'ont pas d'utilité pour ce cas d'usage spécifique. Ils sont alors accompagnés de la mention *format inadapté*.
<br>
Enfin, ce symbole ❌ mentionne que l'endpoint n'est a priori **pas accessible** dans le cadre spécifique. Si vous estimez ces dernières données nécessaires, votre cadre juridique devra être explicite. <br>
<br>
Dans ce tableau de synthèse nous vous précisons également la nature du cadre juridique nécessaire pour bénéficier des données.
L'accès à l'API Entreprise se fait sous réserve que le service le justifie. Les endpoints ne nécessitant qu'une explication précise par le demandeur sont indiqués par le symbole 💬.<br>
Dans certains cas, l'accès à la donnée requiert *en sus* la fourniture d'un cadre juridique précis accompagné de justificatifs tels qu'un décrêt ou un arrêté, ou une délibération dans le cas des collectivités. Les endpoints concernés sont alors signalés par le symbole 📜.

Selon votre cas d'usage spécifique, **veillez à demander uniquement les accès aux données qui vous seront nécessaires dans le cadre du préremplissage.** Votre raccordement en sera alors grandement accéléré.


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

<br>

#### Informations générales <a id="infos_generales"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité<br>préremplissage accès libre 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	| Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Données de référence<br>d'une entreprise** 	<br>`entreprises` | INSEE & Infogreffe 	| ✅ <br>sauf les non-diffusibles 	| 💬 	| JSON 	| publiques et protégées	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}  	|
| **Données de référence<br>d'un établissement** <br>	`etablissements` | INSEE 	| ✅ <br>sauf les non-diffusibles	| 💬	| JSON 	| publiques et protégées	| 	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}|
| **Extrait  RCS** <br> `extraits_rcs_infogreffe` 	| Infogreffe 	| ❌	| 💬| JSON 	| protégées 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}	|
| **Données déclaratives<br>d'une association** <br> `associations`	| Ministère de l'Intérieur 	| ✅ 	| 💬 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"} 	|
| **Divers documents<br>d'une association** <br> `documents_associations`  	| Ministère de l'Intérieur 	| *format inadapté* 	| 💬| PDF 	| publiques 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}	|
| **Actes**<br> `actes_inpi` 	| INPI 	| *format inadapté* 	| 📜 | ZIP (PDF et XML) 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"} |
| **Conventions collectives** <br> `conventions_collectives` 	| Fabrique numérique des Ministères Sociaux 	| ⏺ 	| 📜 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"} 	|

<br>

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données et endpoints	| Producteur 	| Utilité<br>préremplissage accès libre 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Chiffre d'affaires**<br>`exercices` 	| DGFIP 	| ❌ 	| 📜 	| JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"} 	|
| **Bilans annuels**<br>`bilans_inpi` 	| INPI 	| *format inadapté* 	| 📜 	| ZIP (PDF et XML) 	| publiques et protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"} 	|
| **3 derniers bilans annuels**<br>`bilans_entreprises_bdf` 	| Banque de France 	| ❌ 	| 📜 	| JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"} 	|
| **Déclarations de résultat**<br>`liasses_fiscales_dgfip` 	| DGFIP 	| ❌ 	| 📜 	| JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"} 	|

<br>


#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité<br>préremplissage accès libre 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	| Documentation 	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Attestation fiscale**<br>`attestations_fiscales_dgfip` 	| DGFIP 	| ❌ 	| 📜 	| PDF 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"} 	|
| **Attestation de vigilance**<br>`attestations_sociales_acoss` 	| ACOSS 	| ❌ 	| 📜 	| PDF 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"} 	|
| **Conformité emploi des travailleurs handicapés**<br>`attestations_agefiph` 	| AGEFIPH 	| ❌ 	| 📜 	| JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"} 	|
| **Cotisations de sécurité sociale agricole**<br>`cotisations_msa` 	| MSA 	| ❌ 	| 📜 	| JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"} 	|
| **Cotisations retraite bâtiment**<br>`cotisation_retraite_probtp` 	| PROBTP 	| ❌ 	| 📜 	| JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"} 	|
| **Carte professionnelle travaux publics**<br>`cartes_professionnelles_fntp` 	| FNTP 	| *format inadapté* 	| 📜 	| PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"} 	|
| **Cotisations congés payés & chômage intempéries**<br>`certificats_cnetp` 	| CNETP 	| ❌ 	| 📜 	| PDF 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"} 	|

<br>

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité<br>préremplissage accès libre 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Certification RGE**<br>`certificats_rge_ademe` 	| ADEME 	| ⏺ 	| 💬 	| JSON et PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"} 	|
| **Certification de qualification bâtiment**<br>`certificats_qualibat` 	| Qualibat 	| *format inadapté* 	| 💬 	| PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"} 	|
| **Certification de qualification d'ingénierie**<br>`certificats_opqibi` 	| OPQIBI 	| ⏺ 	| 💬 	| JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"} 	|

<br>

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité<br>préremplissage accès libre 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Brevets, modèles et marques déposées**<br>`extraits_courts_inpi` 	| INPI  	| ⏺ 	| 💬 	| JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"} 	|

  <a class="tpl-button tpl-button--alternate" href="{{ site.baseurl }}/catalogue/">Parcourir le catalogue des données</a>


## Formulaire d'accès spécifique au cas d'usage

Vous avez identifié les données nécessaires pour faciliter le remplissage de formulaires à destination des entreprises et/ou associations, en accès libre? Le lien ci-dessous vous permet d'accéder à un formulaire de demande d'accès spécifique "pré-remplissage - accès libre" :

  <a class="tpl-button tpl-button--primary" href="">🔑 Formulaire d'accès "pré-remplissage - accès libre"</a>

Pour bien comprendre les étapes d'une demande d'accès à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale.
