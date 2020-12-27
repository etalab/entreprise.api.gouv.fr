---
layout: usecases
title: Faciliter la candidature aux marchés publics et leur instruction
---

## Le rôle d'API Entreprise

API Entreprise permet d'améliorer le service rendu aux entreprises et associations dans le cadre des candidatures aux marchés publiques, en mettant à disposition plusieurs API afin de faciliter : 
- le dépôt de leur candidature, **en [pré-remplissant le formulaire du demandeur]({{ site.baseurl }}/doc/#cas-usage)** grâce à leur numéro de SIRET/RNA ; 
- la construction du dossier et le travail de l'instructeur **en récupérant les justificatifs nécessaires à l'instruction**, sans les réclamer aux entreprises et associations demandeuses.


Dans le cadre des marchés publics, nous avons trois types d'utilisateurs différents : les acheteurs publics, les éditeurs de place de marchés et le service DUME (Document Unique du Marché Européen) rendu par l'AIFE (Agence pour l'Informatique Financière de l'État).

{:.example}
**Ils utilisent déjà l'API Entreprise** : La métropôle de Bordeaux, la CINOR (communauté intercommunale Nord Réunion), ainsi que la région Nouvelle-Aquitaine utilisent les données d'API Entreprise pour faciliter les candidatures aux marchés publics, et leur traitement.



## Les données utiles "marchés publics"

API Entreprise est un service réservé aux acteurs publics investis d'une mission de service public dont l'accès se fait [sous habilitation et sous certaines conditions]({{ site.baseurl }}/doc/#cas-usage/#acces).

Pour chaque endpoint présent dans le [catalogue API Entreprise]({{ site.baseurl }}/catalogue), retrouvez ci-dessous l'utilité de la donnée dans le cadre de la facilitation des candidatures et de l'instruction aux marchés publics.<br>
<br>
Le symbole ✅ indique que l'endpoint a déjà été **utile à nos utilisateurs pour ce cas d'usage**.<br> 
Chaque service pouvant avoir ses propres spécificités, ce symbole ⏺ vous indique que l'endpoint n'est **pas encore utilisé à ce jour** pour ce cas d'usage, il vous est néanmoins possible de les demander si votre service le justifie.<br> 
Enfin, ce symbole ❌ mentionne que l'endpoint n'est a priori **pas accessible** dans le cadre spécifique. Si vous estimez ces dernières données nécessaires, votre cadre juridique devra être explicite. <br>
<br>
Dans ce tableau de synthèse nous vous précisons également la nature du cadre juridique nécessaire pour bénéficier des données.
L'accès à l'API Entreprise se fait sous réserve que le service le justifie. Les endpoints ne nécessitant qu'une explication précise par le demandeur sont indiqués par le symbole 💬.<br> 
Dans certains cas, l'accès à la donnée requiert *en sus* la fourniture d'un cadre juridique précis accompagné de justificatifs tels qu'un décrêt ou un arrêté, ou une délibération dans le cas des collectivités. Les endpoints concernés sont alors signalés par le symbole 📜.

Selon votre cas d'usage spécifique, **veillez à demander uniquement les accès aux données qui vous seront nécessaires dans le cadre des marchés publics.** Votre raccordement en sera alors grandement accéléré.

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
| Données et endpoints 	| Producteur 	| Utilité<br>marchés publics 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	| Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|:-	:|:-:	|
| **Données de référence<br>d'une entreprise** 	<br>`entreprises` | INSEE & Infogreffe 	| ✅ 	| 💬 	| JSON 	| publiques et confidentielles	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}  	|
| **Données de référence<br>d'un établissement** <br>	`etablissements` | INSEE 	| ✅ 	| 💬	| JSON 	| publiques et confidentielles	| 	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}|
| **Extrait  RCS** <br> `extraits_rcs_infogreffe` 	| Infogreffe 	| ✅ 	| 💬| JSON 	| confidentielles 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}	|
| **Données déclaratives<br>d'une association** <br> `associations`	| Ministère de l'Intérieur 	| ✅ 	| 💬 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"} 	|
| **Divers documents<br>d'une association** <br> `documents_associations`  	| Ministère de l'Intérieur 	| ✅ 	| 💬| PDF 	| publiques 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}	|
| **Actes**<br> `actes_inpi` 	| INPI 	| ✅ 	| 📜 | ZIP (PDF et XML) 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"} |
| **Conventions collectives** <br> `conventions_collectives` 	| Fabrique numérique des Ministères Sociaux 	| ✅ 	| 📜 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"} 	|

<br>

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données et endpoints	| Producteur 	| Utilité<br>marchés publics 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Chiffre d'affaires**<br>`exercices` 	| DGFIP 	| ✅ 	| 📜 	| JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"} 	|
| **Bilans annuels**<br>`bilans_inpi` 	| INPI 	| ✅ 	| 📜 	| ZIP (PDF et XML) 	| publiques et confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"} 	|
| **3 derniers bilans annuels**<br>`bilans_entreprises_bdf` 	| Banque de France 	| ❌ 	| 📜 	| JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"} 	|
| **Déclarations de résultat**<br>`liasses_fiscales_dgfip` 	| DGFIP 	| ❌ 	| 📜 	| JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"} 	|

<br>


#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité<br>marchés publics 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	| Documentation 	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Attestation fiscale**<br>`attestations_fiscales_dgfip` 	| DGFIP 	| ✅ 	| 📜 	| PDF 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"} 	|
| **Attestation de vigilance**<br>`attestations_sociales_acoss` 	| ACOSS 	| ✅ 	| 📜 	| PDF 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"} 	|
| **Conformité emploi des travailleurs handicapés**<br>`attestations_agefiph` 	| AGEFIPH 	| ✅ 	| 📜 	| JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"} 	|
| **Cotisations de sécurité sociale agricole**<br>`cotisations_msa` 	| MSA 	| ✅ 	| 📜 	| JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"} 	|
| **Cotisations retraite bâtiment**<br>`cotisation_retraite_probtp` 	| PROBTP 	| ✅ 	| 📜 	| JSON 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"} 	|
| **Carte professionnelle travaux publics**<br>`cartes_professionnelles_fntp` 	| FNTP 	| ✅ 	| 📜 	| PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"} 	|
| **Cotisations congés payés & chômage intempéries**<br>`certificats_cnetp` 	| CNETP 	| ✅ 	| 📜 	| PDF 	| confidentielles 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"} 	|

<br>

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité<br>marchés publics 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Certification RGE**<br>`certificats_rge_ademe` 	| ADEME 	| ✅ 	| 💬 	| JSON et PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"} 	|
| **Certification de qualification bâtiment**<br>`certificats_qualibat` 	| Qualibat 	| ✅ 	| 💬 	| PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"} 	|
| **Certification de qualification d'ingénierie**<br>`certificats_opqibi` 	| OPQIBI 	| ✅ 	| 💬 	| JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"} 	|

<br>

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité<br>marchés publics 	| Cadre juridique nécessaire 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Brevets, modèles et marques déposées**<br>`extraits_courts_inpi` 	| INPI  	| ✅ 	| 💬 	| JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"} 	|

  <a class="tpl-button tpl-button--primary" href="{{ site.baseurl }}/catalogue/">Parcourir le catalogue des données</a>


## Liste d'éditeurs et services

Vous souhaitez vous connecter à l'API Entreprise mais vous n'avez pas de Direction des Systèmes d'Information ou bien une équipe technique interne qualifiée pour intégrer des APIs ? <br>Vous pouvez passer par un éditeur ou un service.

{:.tpl-notification}
Depuis le 12 décembre 2019, les acheteurs publics ont l'obligation légale de passer par une plateforme de dématérialisation des procédures de marchés publics (profil acheteur), pour tout marché dont le besoin estimé est supérieur à 40 000 € HT.

Nous dressons ici la liste de ceux étant déjà connectés à l'API Entreprise dans le cadre des marchés publics :

{:.tpl-table}
| Éditeurs et services connectés à l'API Entreprise        |     type d'entité  |    Profil acheteur ou service        |
|------------------------|:-------------------------------------------:|:-------------------------------------------:|
|    AIFE <br>(Agence pour l'Informatique Financière de l'État)       |  agence publique | [Service DUME](https://dume.chorus-pro.gouv.fr/#/){:target="_blank"} |
|      Achatpublic    | entreprise privée |[achatpublic.com](https://www.achatpublic.com/){:target="_blank"}  |
|    Atexo                 | entreprise privée | [Place](https://www.marches-publics.gouv.fr/){:target="_blank"}     |
|    AWS                   |    entreprise privée |    [AWS-achat](https://www.marches-publics.info){:target="_blank"}  |                           
|    Atline Services                   |    entreprise privée |    [marchés-securises.fr](https://www.marches-securises.fr/entreprise/?){:target="_blank"}|        
|    Dematis               |     entreprise privée |       [e-marchespublics.com](https://www.e-marchespublics.com/){:target="_blank"}                                |
|    Entr'ouvert               |     coopérative |       [entrouvert.com](https://www.entrouvert.com){:target="_blank"}                                |
|    Klekoon          | entreprise privée |     [klekoon.com](https://www.klekoon.com/){:target="_blank"}                                        |
|    Provigis              |    entreprise privée |     [Provigis plateforme](https://www.provigis.com/connexion-plateforme-donneur-dordres/){:target="_blank"}                                     |
|    Territoires numériques               |    groupement d'intérêt public Bourgogne Franche-Comté |     [Pack commande publique](https://www.ternum-bfc.fr/services/pack-commande-publique){:target="_blank"}                                     |

Vous êtes un éditeur proposant une solution pour les marchés publics et ne figurez pas sur cette liste ? Veuillez nous contacter à cette adresse mail : support@entreprise.api.gouv.fr


## Formulaire d'accès spécifique au cas d'usage

Si vous êtes un acheteur public, il est probable que vous ayez déjà accès aux données d'API Entreprise par l'intermédiaire de votre profil acheteur ou du DUME que peut remplir l'entreprise.

Si vous n'êtes pas dans ce premier cas et que vous avez identifié les données nécessaires pour votre service dans le cadre des marchés publics ? Le lien ci-dessous vous permet d'accéder à un formulaire spécifique "marchés publics" :

  <a class="tpl-button tpl-button--primary" href="">🔑 Formulaire d'accès "marchés publics"</a>

Pour bien comprendre les étapes d'une demande d'accès à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale. 