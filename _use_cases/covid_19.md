---
layout: usecases
enable: true
title: Instruction régionale de l'aide d’urgence aux TPE
---

Dans le cadre inédit de la propagation de l'épidémie du Covid-19, un fonds de solidarité à destination des entreprises et associations, de taille petite à moyenne, particulièrement touchées par les conséquences économiques, financières et sociales liées à cette épidémie a été mis en place.
Ce fonds propose sous certaines conditions deux aides :
- un première aide forfaitaire de 1500 euros,
- une aide complémentaire forfaitaire de 2000 euros.

**C'est dans le cadre de l'instruction des demandes de cette seconde aide complémentaire qu'API Entreprise intervient.**
Cette fiche pratique s'adresse aux parties prenantes de cette phase de vérification, à savoir les régions et leurs éditeurs prestataires.

## Rôle d'API Entreprise

{% asset 'cas-usage/fonctionnement-api-entreprise-cas-usage-covid-19.png' %}

Dans le cadre de cette demande d'aide d'urgence, l'entreprise ou l'association déclare sur l'honneur qu'elle remplit les conditions demandées.<br>
L'API Entreprise regroupe des **données administratives utiles à l'instruction de cette déclaration sur l'honneur**, et les met à disposition via un système unifié au standard API (REST).

API Entreprise vous permet :
- d'**améliorer le traitement de la demande de subvention** par les régions, en accédant aux documents certifiés par d'autres administrations, ce qui **accélère et sécurise la vérification de l’éligibilité** au dispositif ;
- de **faciliter les démarches administratives des entreprises et associations** puisqu'elles n'ont plus besoin de transmettre les documents administratifs requis. (Mise en oeuvre du "Dites le nous une fois" (DLNUF))


{:.tpl-notification}
Si vous souhaitez mettre en œuvre des aides ou subventions relatives ou non au covid-19, indépendantes de cette aide, merci de consulter la page dédiée ["aides et subventions"]({{ site.baseurl }}{% link _use_cases/aides_publiques.md %}).

## Cadre réglementaire

#### Aide d'urgence
Cette aide d'urgence aux TPE/PME est encadrée par le [décret relatif au fonds de solidarité à destination des entreprises particulièrement touchées par les conséquences économiques, financières et sociales de la propagation de l’épidémie de covid-19 et des mesures prises pour limiter cette propagation](https://www.legifrance.gouv.fr/eli/decret/2020/3/30/2020-371/jo/texte){:target="_blank"}. Ce décret spécifie les conditions d'éligibilité des entreprises et associations, les justificatifs demandés, ainsi que les éléments de mise en oeuvre et d'instruction de la demande de subvention.

{:.tpl-notification.tpl--danger}
L'accès à l'API Entreprise dans ce cadre est réservé aux **régions** et à leurs **éditeurs prestataires** le cas échéant.


<br>

#### Application du "dîtes le nous une fois"
Le code des relations entre le public et l’administration permet et contraint les administrations à ne plus demander certaines pièces justificatives aux personnes morales.
Voici les deux décrets qui organisent les échanges :
- [Décret n° 2019-31 du 18 janvier 2019 relatif aux échanges d’informations et de données entre administrations dans le cadre des démarches administratives et à l’expérimentation prévue par l’article 40 de la loi n° 2018-727 du 10 août 2018 pour un Etat au service d’une société de confiance](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029589&categorieLien=id){:target="_blank"}
- [Décret n° 2019-33 du 18 janvier 2019 fixant la liste des pièces justificatives que le public n’est plus tenu de produire à l’appui des procédures administratives en application de l’article L. 113-13 du code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029642&categorieLien=id){:target="_blank"}

## Données utiles à l'aide d'urgence


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
| **Données de référence<br>d'une entreprise** 	<br>`entreprises` | INSEE & Infogreffe 	| ✅ 	|  JSON 	| publiques et protégées	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#entreprises){:target="_blank"}  	|
| **Données de référence<br>d'un établissement** <br>	`etablissements` | INSEE 	|  ❌|  JSON 	| publiques et protégées	| 	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#etablissements){:target="_blank"}|
| **Extrait  RCS** <br> `extraits_rcs_infogreffe` 	| Infogreffe 	|  ❌ 	|  JSON 	| protégées 🔐 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_rcs_infogreffe){:target="_blank"}	|
| **Données déclaratives<br>d'une association** <br> `associations`	| Ministère de l'Intérieur 	|  ⏺	 | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#associations){:target="_blank"} 	|
| **Divers documents<br>d'une association** <br> `documents_associations`  	| Ministère de l'Intérieur 	| ❌ 	| PDF 	| publiques 	|  [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#documents_associations){:target="_blank"}	|
| **Données de référence d'une entreprise artisanale**<br> `entreprises_artisanales_cma` 	| CMA France 	|  ⏺ 	|  JSON 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-entreprises_artisanales_cma){:target="_blank"} |
| **Actes**<br> `actes_inpi` 	| INPI 	|  ❌ 	|  ZIP (PDF et XML) 	| publiques 	|  	[Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#actes_inpi){:target="_blank"} |
| **Conventions collectives** <br> `conventions_collectives` 	| Fabrique numérique des Ministères Sociaux 	|  ❌ 	|  JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#conventions_collectives){:target="_blank"} 	|
| **Effectif d'une entreprise** <br> `effectifs_..._acoss_covid` 	| ACOSS 	|  ✅ 	|  JSON 	| protégées 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-effectifs_..._acoss_covid){:target="_blank"} 	|

<br>

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données et endpoints	| Producteur 	| Utilité 	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Chiffre d'affaires**<br>`exercices` 	| DGFIP 	| ❌ 	|  JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#exercices){:target="_blank"} 	|
| **Bilans annuels**<br>`bilans_inpi` 	| INPI 	|  ❌ 	| ZIP (PDF et XML) 	| publiques et protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_inpi){:target="_blank"} 	|
| **3 derniers bilans annuels**<br>`bilans_entreprises_bdf` 	| Banque de France 	| ❌ 	|  JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#bilans_entreprises_bdf){:target="_blank"} 	|
| **Déclarations de résultat**<br>`liasses_fiscales_dgfip` 	| DGFIP 	| ❌ 	| JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#liasses_fiscales_dgfip){:target="_blank"} 	|

<br>


#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité	| Format 	| Ouverture 	| Documentation 	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Attestation fiscale**<br>`attestations_fiscales_dgfip` 	| DGFIP 	| ❌ 	| PDF 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_fiscales_dgfip){:target="_blank"} 	|
| **Attestation de vigilance**<br>`attestations_sociales_acoss` 	| ACOSS 	| ❌ 	|  PDF 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_sociales_acoss){:target="_blank"} 	|
| **Conformité emploi des travailleurs handicapés**<br>`attestations_agefiph` 	| AGEFIPH 	|  ❌	| JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#attestations_agefiph){:target="_blank"} 	|
| **Cotisations de sécurité sociale agricole**<br>`cotisations_msa` 	| MSA 	|  ❌	| JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisations_msa){:target="_blank"} 	|
| **Cotisations retraite bâtiment**<br>`cotisation_retraite_probtp` 	| PROBTP 	|  ❌	|  JSON 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cotisation_retraite_probtp){:target="_blank"} 	|
| **Carte professionnelle travaux publics**<br>`cartes_professionnelles_fntp` 	| FNTP 	|  ❌	|PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#cartes_professionnelles_fntp){:target="_blank"} 	|
| **Cotisations congés payés & chômage intempéries**<br>`certificats_cnetp` 	| CNETP 	|  ❌	|  PDF 	| protégées 🔐 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_cnetp){:target="_blank"} 	|

<br>

#### Certificats professionnels <a id="certificats_pro"></a>

{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Certification en BIO**<br>`certificats_agence_bio` 	| Agence BIO 	|  ❌	| JSON	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#a-certificats_agence_bio){:target="_blank"} 	|
| **Certification RGE**<br>`certificats_rge_ademe` 	| ADEME 	|  ❌  	| JSON et PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_rge_ademe){:target="_blank"} 	|
| **Certification de qualification bâtiment**<br>`certificats_qualibat` 	| Qualibat 	|  ❌	| PDF 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_qualibat){:target="_blank"} 	|
| **Certification de qualification d'ingénierie**<br>`certificats_opqibi` 	| OPQIBI 	|  ❌	|JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#certificats_opqibi){:target="_blank"} 	|

<br>

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>


{:.tpl-table}
| Données et endpoints 	| Producteur 	| Utilité	| Format 	| Ouverture 	|  Documentation	|
|-	|:-:	|:-:	|:-:	|:-:	|:-:	|-	|
| **Brevets, modèles et marques déposées**<br>`extraits_courts_inpi` 	| INPI  	|  ❌ | JSON 	| publiques 	| [Lien vers la documentation](https://entreprise.api.gouv.fr/catalogue/#extraits_courts_inpi){:target="_blank"} 	|


  <a class="tpl-button tpl-button--alternate" href="{{ site.baseurl }}/catalogue/">Parcourir le catalogue des données</a>


Les données sur les associations sont disponibles en open data (sans demande d'accès préalable):

{:.tpl-table}
| API en open data | Fournisseur        | Commentaire                                          | Documentation |
| -------------    | ------------------ |------------------------------------------------------|--------------- |
| API du Répertoire National des Associations (RNA)      | Direction Interministérielle du Numérique (DINUM) | Données d'identité des associations (RNA)            | [`API RNA` disponible sur api.gouv.fr](https://api.gouv.fr/les-api/api_rna){:target="_blank"}                                                                                |


## Formulaire d'accès spécifique au cas d'usage

**Chaque région doit effectuer une demande d'accès** avec les données indiquées plus haut. Chaque région aura la charge de **transmettre la clé d'accès obtenue** à son prestataire éditeur.

Le lien ci-dessous vous permet d'accéder à un formulaire spécifique pour ce cas d'usage :

  <a class="tpl-button tpl-button--primary" href="https://datapass.api.gouv.fr/api-entreprise?demarche=covid_19">🔑 Formulaire d'accès "aide d'urgence aux TPE"</a>


{:.tpl-notification}

Pour bien comprendre les **étapes d'une demande d'accès** à l'API Entreprise et les éléments qui vous seront nécessaires, veuillez consulter la partie [Effectuer sa demande d'habilitation]({{ site.baseurl }}/doc/#demande-habilitation) présente dans la documentation générale. <br><br>
Une partie de cette documentation vous permet notamment de mieux comprendre [**les attendus de l'encadré "Cadre juridique"**]({{ site.baseurl }}/doc/#le-cadre-juridique) du formulaire.
<br>

## Mise en production et paramètres obligatoires

Vous réalisez les développements ?
<br>
Nous avons besoin que vous remplissiez [les paramètres obligatoires]({{ site.baseurl }}/doc/#parametres-tracabilite) de la façon suivante :

{:.tpl-table}
| Paramètre   | Présence      | Description                                           |
| ----------  | ------------- | ----------------------------------------------------- |
| context     | Obligatoire   | Nom de la région, ex : `bourgogne_franche_comte`      |
| recipient   | Obligatoire   | SIRET de l'Administration destinatrice des données    |
| object      | Obligatoire   | `aide_volet_2_03` ***attention 03 correspond au mois***|



