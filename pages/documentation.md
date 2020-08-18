---
layout: documentation
title: Documentation générale
permalink: /documentation/
class: documentation
---
## Étape 1 : L'API Entreprise correspond-elle à mon besoin ?

{:.example}
Voici un exemple

### test

<details class="fold">
<summary>
### Les cas d’usage d’API Entreprise
</summary>

API Entreprise répond à deux grands types d’usages :

<details class="fold">
<summary>
###### Le pré-remplissage d'un formulaire à destination du public
</summary>

Vous pouvez mettre en place une aide à la saisie pour vos usagers, avec les endpoints `entreprises`, `etablissements` et `associations`. L’usager renseigne son numéro de SIRET, ou toute autre valeur discriminante ; le formulaire est alors pré-rempli des champs disponibles par votre API.

{:.tpl-notification}
La création d’un formulaire pré-rempli est faite pour assister l’usager, celui-ci doit toujours pouvoir amender, rectifier ces mêmes informations sans difficultés.

> L'AIFE a mis en place une démarche dématérialisée pour permettre aux entreprises d’obtenir leur [document Unique de Marché Européen](https://dume.chorus-pro.gouv.fr/). Elle utilise l'API Entreprise pour pré-remplir les formulaires de ses utilisateurs.
> <video controls width="400">

```
<source src="../assets/videos/video-cas-usage-preremplissage-dume.mp4"
        type="video/mp4">
Nous sommes désolés, votre navigateur ne supporte pas les vidéos.
```

</video>

⚠️ **Le pré-remplissage est possible uniquement pour des APIs distribuant des informations publiques.**
Par exemple, [l’endpoint `entreprise`](../catalogue/#entreprises){:target="_blank"} qui regroupe des données ouvertes et fermées, ne peut être utilisé pour le pré-remplissage, que **si et seulement si** les entreprises non-diffusibles (dont les données sont confidentielles) ne sont pas appelées.

ℹ️ **Quel avantage à passer par API Entreprise si les données sont libres ?** API Entreprise vous simplifie l'implémentation de cette aide à la saisie, en vous donnant accès à une information structurée, facilement intégrable dans votre produit.

</details>

<details class="fold">
<summary>
###### L’obtention d’une donnée en back office par un agent habilité
</summary>

L'API entreprise sert aux agents habilités à récupérer automatiquement des informations, elle donne accès : 

* soit à des justificatifs, certificats, bilans, ... papiers numérisés ou document PDF ;
* soit à la donnée brute, décrite par un champ JSON, qui permet une automatisation plus performante encore ;
* soit les deux.

</details>

<center>
<a class="tpl-button tpl-button--primary" href="../cas_usage/">Découvrir tous les cas d'usage</a>
</center>

</details>

<details class="fold">
<summary>
### Le service : une API, plusieurs données et plusieurs fournisseurs
</summary>
#### Les qualités du service

**API Entreprise démarche les administrations et fait les différentes demandes d’accès auprès des multiples fournisseurs.** Si votre demande d'habilitation est validée, vous avez une seule clé d’accès sécurisée. De plus, API Entreprise agrège et vous restitue les connaissances techniques et métiers de chaque API.

{:.tpl-notification}
Sans API Entreprise, vous êtes obligé de demander toutes les APIs nécessaires à votre service, auprès des différentes administrations. Cette recherche n'est pas toujours fructueuse car les organisations n'ont pas toutes un site ou un contact public pour leurs APIs. Par ailleurs, vous devez ensuite comprendre plusieurs systèmes techniques, générer plusieurs mots de passe, collaborer avec plusieurs contacts techniques et métiers.

#### La liste exhaustive des données

##### Informations générales <a id="infos_generales"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Données de référence d'une entreprise](../catalogue/#entreprises){:target="_blank"}                  |    INSEE & Infogreffe    |            `entreprises`            |    données JSON     |    publiques    |
| [Données de référence d'un établissement](../catalogue/#etablissements){:target="_blank"}                |          INSEE           |          `etablissements`           |    données JSON     |    publiques    |
| [Extrait  RCS](../catalogue/#extrait_rcs_infogreffe){:target="_blank"}                                           |        Infogreffe        |         `extraits_rcs_infogreffe`         |    données JSON     |    publiques    |
| [Informations déclaratives d'une association](../catalogue/#associations){:target="_blank"}                 | Ministère de l'Intérieur |              `associations`               |    données JSON     |    publiques    |
| [Divers documents d'une association](../catalogue/#documents_associations){:target="_blank"}                     | Ministère de l'Intérieur |         `documents_associations`          |     PDF (image)     |    publiques    |
| [Actes](../catalogue/#actes_inpi){:target="_blank"}                     | INPI |         `actes_inpi`          |       Archive ZIP (PDF et XML)   |    publiques    |

##### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Chiffre d'affaires](../catalogue/#exercices){:target="_blank"}                                     |          DGFIP           |                `exercices`                |    données JSON     | confidentielles |
| [Bilans annuels](../catalogue/#bilans_inpi){:target="_blank"}                                      |     INPI     |         `bilans_inpi`          |    données JSON     | publiques et confidentielles |
| [3 derniers bilans annuels](../catalogue/#bilans_entreprises_bdf){:target="_blank"}                                      |     Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |
| [Déclarations de résultats](../catalogue/#liasses_fiscales_dgfip){:target="_blank"}       |          DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |

##### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Attestation fiscale](../catalogue/#liasses_fiscales_dgfip){:target="_blank"}                                    |          DGFIP           |       `attestations_fiscales_dgfip`       |     PDF (texte)     | confidentielles |
| [Attestation de vigilance](../catalogue/#attestations_sociales_acoss){:target="_blank"}                               |          ACOSS           |       `attestations_sociales_acoss`       |     PDF (texte)     | confidentielles |
| [Conformité emploi des travailleurs handicapés](../catalogue/#attestations_agefiph){:target="_blank"}  |         AGEFIPH          |          `attestations_agefiph`           |    données JSON     | confidentielles |
| [Cotisation de sécurité sociale agricole](../catalogue/#cotisations_msa){:target="_blank"}                |           MSA            |             `cotisations_msa`             |    données JSON     | confidentielles |
| [Cotisations retraite bâtiment](../catalogue/#cotisation_retraite_probtp){:target="_blank"}                       |          PROBTP          | `attestations_cotisation_retraite_probtp` |    données JSON     |    publiques    |
| [Carte professionnelle travaux publics](../catalogue/#cartes_professionnelles_fntp){:target="_blank"}         |          FNTP           |            `cartes_professionnelles_ftp`            |         PDF         |    publiques    |
| [Cotisations congés payés & chômage intempéries](../catalogue/#certificats_cnetp){:target="_blank"}         |          CNETP           |            `certificats_cnetp`            |         PDF         |    publiques    |

##### Certifications professionnelles <a id="certificats_pro"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Certification RGE](../catalogue/#certificats_rge_ademe){:target="_blank"}                                      |          ADEME           |          `certificats_rge_ademe`          | données JSON et PDF |    publiques    |
| [Certification de qualification bâtiment](../catalogue/#certificats_qualibat){:target="_blank"}                  |          OPQIBI          |           `certificats_qualibat`            |    données JSON     |    publiques    |
| [Certification de qualification d'ingénierie](../catalogue/#certificats_opqibi){:target="_blank"}                  |          OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |

##### Propriété intellectuelle <a id="propriete_intellectuelle"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Brevets, modèles et marques déposés](../catalogue/#extraits_courts_inpi){:target="_blank"}                   |           INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |

<br>

#### Une documentation technique et métier par endpoint

Toutes les données de la liste précédente sont détaillées dans le [catalogue de données](../catalogue/).

\|-------------------|:---------------:|
| Dans ce catalogue, une barre de recherche est à votre disposition pour filtrer les données :              |        ![](../assets/images/documentation/catalogue-barre-de-recherche.png)       |
|    |        |
| Chaque endpoint est présenté de façon synthétique :         |       ![](../assets/images/documentation/catalogue-endpoint-presentation.png)      |
|    |        |
| Des informations complémentaires, dont le détail précis des champs délivrés par l’API sont disponibles en cliquant sur le bouton “documentation” :         |       ![](../assets/images/documentation/catalogue-documentation-presentation.png)     |

<center>
<a class="tpl-button tpl-button--primary" href="../catalogue/">Parcourir le catalogue des données</a>
</center>

#### Nos engagements

Utiliser le service API Entreprise, c'est aussi bénéficier des engagements de la Direction du Numérique : 

* **L’engagement de disponibilité est de 99,5 %.**
  La disponibilité des données est consultable en temps réel pour chaque endpoint dans le catalogue des donnée. Une historisation est aussi publiée, ainsi que les rapports d’incidents et les perspectives de résolution. Par ailleurs, les informations sur votre consommation sont disponibles dans votre tableau de bord.

  {:.tpl-notification}
  Toutefois, ce service agrégeant de nombreux fournisseurs de données et étant donc dépendant de leurs disponibilités, API Entreprise ne porte donc aucune responsabilité s’agissant de la qualité ou du contenu intrinsèque des données. Par ailleurs, le service ne modifie pas les données à l’exception d’une standardisation contextuelle limitée (minuscule vers majuscule, format de date, nombre d’espaces).
* **L’utilisation d’API Entreprise est gratuite.**
  Les coûts d’investissements et de fonctionnement sont pris en charge par la DINUM. En revanche, les coûts de raccordement à API Entreprise vous incombent.
* **API Entreprise propose une assistance technique et fonctionnelle** permettant aux utilisateurs de définir et de mettre en œuvre au mieux leur projet.
* **API Entreprise respecte le cadre légal.**
  Le service s'engage à respecter en totalité les conditions de protection des données et les règles de confidentialité.

</details>

<details class="fold">
<summary>
### Un accès sous habilitation et sous conditions 🔐 
</summary>

#### Une habilitation instruite par la DINUM

Tout accès à l'API Entreprise se fait sous réserve d'en [avoir obtenu l’habilitation](#effectuer-ma-demande-dhabilitation/anticiper-votre-demande).

L'API entreprise est **réservée aux acteurs publics investis d’une mission de service public** : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.
Leurs prestataires privés peuvent être destinataires des informations techniques permettant l'usage de l'API mais en aucun cas des données elles-même.

#### S'engager à ne pas diffuser les données reçues

Premièrement, avant toute transmission de données, l’usager doit être informé, et en cas d’exposition des données, son consentement doit être explicite.

###### Dans le cas d’un pré-remplissage à destination du public

Une partie des données des endpoints `entreprise`, `etablissement` et `associations`, les données publiques, peuvent servir au pré-remplissage de formulaires publics. Même si ces données ne sont pas confidentielles, le fournisseur de service s’engage à ne pas commercialiser les données reçues au travers d'API Entreprise et à ne pas les communiquer à des tiers en dehors des cas prévus par la loi.

###### Dans le cas d’une utilisation par un agent habilité en back office

La plupart des données disponibles sur API Entreprise sont protégées par des secrets. Vous assurez donc la protection de ces données et le respect des règles de confidentialité.

Entre autres, le service ne doit pas permettre à quiconque n’ayant pas un niveau d’authentification suffisant, d’accéder à des données. Leur accès est restreint aux seuls agents dûment habilités, dont les requêtes sont tracées pour une durée de 36 mois.

#### Avoir un équipement technique minimal

Vous êtes techniquement en mesure de pouvoir démarrer avec API Entreprise si :

* vous travaillez ou vous vous apprêtez à travailler avec un éditeur de logiciel.
  Celui-ci doit être en mesure d’intégrer API Entreprise.
* ou bien vous avez une direction des systèmes d’information (DSI) qui peut intégrer des APIs.

Pour comprendre en détail les éléments techniques nécessaires consulter la rubrique [Les fondamentaux à mettre en place avec l'équipe technique](../documentation/#les-fondamentaux--mettre-en-place-avec-lquipe-technique-){:target="_blank"}.

</details>
## Étape 2 : Les prérequis techniques avant d’aller plus loin

<details class="fold">
<summary>
### Qu’est-ce qu’une API ? 🤖
</summary>

Une API permet d’**agir sur des ressources** contenues dans un autre système d’information, **sans soi-même avoir la main sur ce système d’information**.

Dans le cas d'API Entreprise, les ressources sont des informations sur les entreprises et les associations, et l’action est une consultation.

![](../assets/images/documentation/schema-fonctionnement-api-entreprise.png)

#### Comment se déroule un appel à l’API ?

Voici, décrit en quelques étapes, la façon dont vous ou votre équipe technique, allez faire votre requête à l’API Entreprise pour accéder aux données :

**Étape 1** : Je suis préalablement habilité, et j’ai donc accès à différentes données, regroupées par endpoint.

**Étape 2** : Je construis mon URL d’appel avec l'endpoint qui m'intéresse.

<details class="fold">
<summary>###### Les différents éléments de l'URL d'appel.
</summary>

{:.tpl-table}
| Éléments composant la requête                                            |        Exemples                                             |
|:----------------------------------------------------------:|:-----------------------------------------:|
|**Domaine** <br>(ou préfixe) <br>qui conduit à l'API de façon sécurisée|`http://entreprise.api.fouv.fr`|
|**Numéro de la version** <br>(par défaut désormais en V2)|`/v2`|
|**Nom de la donnée recherchée** <br>(ou *endpoint*)|`/attestation_fiscale_dgfip`|
|**Identité de l'établissement concerné** <br>(souvent SIREN ou SIRET)|`/SIRENouSIRETdeL'Etablissement`|
|**Votre jeton d'accès**|`?token=JetonD'Habilitation`|
|**Des paramètres de traçabilité**|`&context=CadreDeLaRequête`<br> `&recipientBénéficiareDeL'Appel=`<br> `&object=RaisonDeL'AppelOuIdentifiant`<br> `?user_id=IdentifiantDeL'UtilisateurPhysique`<br> et autres selon les endpoints ...|

**Tous ces éléments mis bout à bout constituent une requête HTTP qui appelle l'API :** 

```
https://entreprise.api.gouv.fr/v2/attestation_fiscales_dgfip/SirenDeL’Entreprise?token=JetonD’Habilitation&user_id=IdentifiantDeL’UtilisateurPhysique&context=CadreDeLaRequête&recipient=BénéficaireDeL’Appel&object=RaisonDeL’AppelOuIdentifiant
```

</details>

**Étape 3** : Je passe mon appel :

* À des fins de tests, au travers de mon navigateur :

  Pour passer votre appel, vous pourriez écrire l’URL dans votre navigateur. La page chargée vous renverrait les données demandées.
  C’est ce que nous vous proposons de faire ici **par le biais d’un test uniquement**.
  ⚠️ En effet, il y a des précautions à prendre : Par défaut, l’historique de votre navigateur enregistre des informations confidentielles dont votre jeton d’accès. Or comme vous avez pu le lire dans la rubrique précédente [Un accès sous habilitation et sous conditions](../documentation/#un-accs-sous-habilitation-et-sous-conditions-), la grande majorité des données accessibles par API Entreprise sont protégées par des secrets, vous êtes donc tenus de vous assurer qu’elles ne soient pas diffusées.
* En production, par le biais d’un logiciel métier :

  Pour veiller à la protection des données, l’ensemble des appels que vous allez réaliser en production seront passés par l’intermédiaire d’un logiciel métier.

**Étape 4** : Je reçois une réponse comportant les données. La réponse est au format JSON, nous détaillons sa structure dans la prochaine partie.

#### Comment s'interprète la réponse de l’API ?

##### Structure d’une réponse JSON

Pour chaque appel effectué vous allez recevoir une réponse au format JSON. Ce langage informatique présente l’avantage d’être lisible par un non expert ; tout en étant compréhensible par une machine.

Une réponse JSON est composée de paires `“champ”` / `“valeur”` :

* Le `“champ”`, ou `“nom”,` ou `“clé”`, décrit le type d’information, c’est un invariable.
* La `“valeur”` est une variable, c’est justement la donnée que vous recherchez.

##### Trois types de réponses

Cas n°1 : Le JSON vous renvoie un lien URL, permettant d’**accéder à un document PDF** :

```
{
  "url":"http://la-fameuse-url-permettant-d-acceder-au-document.pdf"
}
```

Cas n°2 : Le JSON vous renvoie un lien URL, permettant d’**accéder à une archive de plusieurs documents**, au format ZIP:

```
{
   "http://la-fameuse-url-permettant-d-acceder-a-l-archive-de-documents.zip"
}
```

Cas n°3 : Le JSON vous renvoie les **données structurées** :

Dans ce cas précis, les données étant toutes renvoyées au format JSON, les couples “champ” / “valeur” peuvent être regroupé dans différentes catégories.

```
{
  "eligible": true,
  "message": "00 Compte éligible pour attestation de cotisation"`
}
```

Pour une information détaillée par endpoint, reportez-vous au [catalogue de données](../catalogue/).

</details>

<details class="fold">
<summary>
### Qu'est qu'un token ? 🔑
</summary>

#### Le token, une clé unique et privée

Le token est **votre code secret** vous permettant d’accéder à API Entreprise.

Si votre demande d’habilitation est validée, il vous est délivré dans [votre espace personnel](https://dashboard.entreprise.api.gouv.fr/login).

**Cette clé est unique et privée** ; nous nous appuyons sur un standard ouvert et normalisé de l’industrie : le Json Web Token (aka JWT) ([RFC 7519](https://tools.ietf.org/html/rfc7519)). Ce jeton est autonome et permet de transmettre de façon sécurisée les informations d'authentifications nécessaires pour utiliser l'API. Ces jetons sont vérifiés et fiables car **signés numériquement avec une date d'expiration**.

#### Ne jamais divulguer son token

⚠️ Votre token vous est propre, il ne faut pas le diffuser : c’est comme votre clé d’appartement, vous ne l’envoyez pas par la poste car il y a un risque que celle-ci soit interceptée par une personne mal intentionnée.

C’est pourquoi, vous ne devez **jamais copier-coller un token dans un moteur de recherche** ou dans un e-mail.L’usage de votre token se fait uniquement dans votre logiciel métier sécurisé utilisé pour réaliser vos appels.

#### Un token a une fin de vie

La durée de vie d’un token est limitée, sa date d’expiration est indiqué dans [votre espace personnel](https://dashboard.entreprise.api.gouv.fr/login).

Le token peut également être supprimé s’il a été diffusé par mégarde.
Le **renouvellement d’un token est très facile et rapide**. C’est pourquoi, si vous avez divulgué votre token par erreur, n’hésitez pas à écrire rapidement à [support@entreprise.api.gouv.fr](https://dashboard.entreprise.api.gouv.fr/login). Pour en savoir plus sur le renouvellement d’un token, consultez la rubrique [Renouveler un token en fin de vie](../documentation/#renouveler-un-token-en-fin-de-vie).

</details>

<details class="fold">
<summary>
### Les fondamentaux à mettre en place avec l'équipe technique 🧰
</summary>

Vous travaillez avec la DSI de votre administration ou avec un éditeur de logiciel, voici la liste des fondamentaux que votre équipe technique doit être en mesure de mettre en place pour un bon fonctionnement de l'API Entreprise : 

✅ Pouvoir prendre en charge la mise à jour des protocoles de sécurité HTTPS ;

✅ Anticiper la mise à jour du logiciel métier ;

✅ Avoir une version de langage suffisamment récente. API Entreprise ne fonctionne qu’avec Java 1.7 minimum (pour la gestion des certificats de +1024 bit) ;

✅ Avoir un dispositif d’alerte de type certificat SSL ;

✅ Avoir un firewall / White list IP ;

✅ Anticiper les coûts de maintenance qui s'ajouteront aux coûts de mise en place.

</details>

<details class="fold">
<summary>
### Prévoir les incidents et la résilience de mon service 🧑‍🚒
</summary>

Il se peut qu’un incident survienne chez un fournisseur de données. Votre logiciel doit vous permettre de fonctionner de manière dégradée :

* si vous effectuez une fonction de pré-remplissage et que le service est à l’arrêt, **prévoyez un fonctionnement sans pré-remplissage**.
* en cas d’utilisation de justificatifs, **prévoyez de permettre à vos usagers de pouvoir transmettre un document par eux-même**.

{: .tpl-notification}
Le Dîtes-le-nous-une-fois ne doit pas bloquer les usagers en cas d’incidents techniques : vos usagers préfèreront toujours vous redonner leurs informations plutôt que de ne pas pouvoir utiliser votre service.

</details>

## Étape 3 : Démarrer avec API Entreprise

<details class="fold">
<summary>
### Effectuer sa demande d’habilitation 📝
</summary>

La demande d'habilitation pour API Entreprise est relativement simple, et se compose de 3 étapes expliquées en détail ci-dessous : 

<details class="fold">
<summary>
###### Étape 0 : Anticiper sa demande 🔎
</summary>

Après avoir lu les étapes 1 et 2,[ L'API Entreprise correspond-elle à mon besoin ?](../documentation/#étape-1--lapi-entreprise-correspond-elle-à-mon-besoin-) et [Les prérequis techniques avant d'aller plus loin](../documentation/#étape-2--les-prérequis-techniques-avant-daller-plus-loin), vous êtes désormais prêts à faire une demande d'accès. 
Pour vous permettre d'anticiper, ci-dessous la liste des informations nécessaires : 

* **le numéro siret de votre administration**. Vous pouvez vous aider du site [entreprise.data.gouv.fr](https://entreprise.data.gouv.fr)  pour le retrouver.
* **les données que vous souhaitez obtenir**. Une sélection vous sera proposée parmi une liste de données décrites dans la section "données délivrées".

  Aidez-vous des [cas d'usage](../cas_usage/) décrits pour vous assurer de votre légitimité.
  L’ensemble des données disponibles sur API Entreprise est détaillé dans le [catalogue des données](../catalogue/). Vous pouvez filtrer les données par cas d’usage.

  Une demande d’accès ne peut pas couvrir plusieurs contextes métiers différents et doit être adaptée au public utilisateur final. Si vous avez plusieurs contextes métiers pour lesquels vous souhaitez demander un accès, il vous faudra formuler une demande par contexte.

  > Exemple de la Région Occitanie :
  >
  > Dans le cadre de son hub entreprises, 3 demandes différentes ont été faites :
  >
  > * Une demande pour faciliter le renseignement des données par l’usager en pré-remplissant des formulaires à partir d’un numéro de SIRET ;
  > * Une demande pour la pré-qualification des dossiers d’aides publiques avec l’accès à quelques données sensibles ;
  > * Une demande pour l’instruction de dossiers avec l’accès à un nombre important de données sensibles pour aider les agents instructeurs.
  >
  > La région s’est vue remettre un espace client avec 3 tokens d’accès aux permissions différentes.
* **le cadre administratif et légal** (texte ou délibération/décision) qui vous légitime à recevoir ces données. Il est possible de mettre un lien vers le texte de loi, ajouter des pièces jointes ou décrire votre contexte ;
* **les coordonnées du responsable du traitement** ;
  Le responsable du traitement des données est la personne physique ou morale qui, seul ou conjointement avec d’autres, détermine les finalités et les moyens du traitement des données à caractère personnel. Seule une personne appartenant à l'organisme demandeur peut être renseignée.
* l**es coordonnées de votre délégué·e à la protection des données** (DPD) ;
  Le DPD est la personne qui s'assure que l'organisation protège convenablement les données à caractère personnel, conformément à la législation en vigueur. C'est généralement une personne appartenant à l'organisme demandeur.

  Je n’ai pas de DPD, que faire ?

  Si vous n’avez pas de DPD, c’est que vous n’êtes probablement pas habilité à pouvoir utiliser API Entreprise. En effet, la nomination d’un DPD est obligatoire pour toute autorité publique ou tout organisme public, ainsi que pour toute entreprise effectuant un suivi régulier et systématique de données personnelles à grande échelle ou de données personnelles « sensibles ». Ce qui est au cour de l’usage d’API Entreprise.
* **les coordonnées du contact métier** ;
* l**es coordonnées du contact technique**. La personne ou l’équipe en charge du développement de l’interface logicielle qui va permettre l’interconnection effective avec API Entreprise.

L'ensemble des coordonnées renseignées seront strictement utilisées pour communiquer avec vous.

Vous devrez également **accepter nos conditions générales d’utilisation**, consultables ici.

</details>

<details class="fold">
<summary>
###### Étape 1 : Faire sa demande d'habilitation sur Data Pass 📝
</summary>

**Création du compte Data Pass**

\|-------------------|:---------------:|
| Toute demande d’accès à l’API Entreprise nécessite la création d’un compte sur la plateforme [datapass.api.gouv.fr](https://datapass.api.gouv.fr/api-entreprise).<br> **Avec un même compte vous pouvez réaliser plusieurs demandes**, et également accéder à API Particulier.<br>Une fois que vous avez inscrit votre adresse mail et un mot de passe, la plateforme Data Pass vous demande un code à 10 chiffres. Ce code vous est envoyé, sous quelques minutes, par l'équipe d'api.gouv.fr gérant la plateforme Data Pass, sur l'adresse que vous avez indiqué.           |        ![](../assets/images/documentation/data-pass-creation-compte.png){:width="1000"}       |

\| Ensuite, il vous est demandé **le numéro de SIRET de votre organisation**, celui-ci est indispensable pour toute création de compte.             |        ![](../assets/images/documentation/data-pass-creation-compte-siret.png){:width="1000"}        |

**Remplir le formulaire d’accès**

\|-------------------|:---------------:|
|Remplissez [le formulaire de demande d’accès Data Pass](https://datapass.api.gouv.fr/api-entreprise) puis validez-le.  |        ![](../assets/images/documentation/data-pass-remplir-formulaire.png){:width="1000"}        |
|Au cas où il vous manquerait une information, vous pourrez reprendre ultérieurement le formulaire qui reste à l’état de brouillon dans votre interface.            |        ![](../assets/images/documentation/data-pass-enregistrer-brouillon.png){:width="1000"}        |

<a class="tpl-button tpl-button--alternate" href="https://datapass.api.gouv.fr/api-entreprise">Se rendre sur Data Pass</a>

</details>

<details class="fold">
<summary>
###### Étape 2 : Suivre l'instruction du dossier par la DINUM ⚙️
</summary>

Une fois votre demande validée, nous instruisons alors votre dossier puis prenons une décision d’acceptation ou de refus de la demande d’accès. Cette instruction peut prendre entre entre X à X jours selon l’affluence des demandes.

* ❌ Si votre dossier est refusé, des précisions supplémentaires vous seront demandée avant tout refus définitif ;
* ✅ Si votre dossier est validé, un mail de confirmation vous est envoyé et vous fournit un lien pour le choisir le mot de passe de votre futur espace. Une fois votre mot de passe configuré, [connectez-vous](https://dashboard.entreprise.api.gouv.fr/login) à votre tableau de bord.

</details>

![](../assets/images/documentation/schema-habilitation-2.png)

</details>

<details class="fold">
<summary>
### Habilitation validée ✅, récupérer son token 🔐
</summary>

Pour récupérer vos tokens ou jetons d'accès, il faut vous rendre dans [votre espace client](https://dashboard.entreprise.api.gouv.fr/login) à l'onglet "Jetons" :

![](../assets/images/documentation/tableaudebord-recuperer-son-token.png)

Tous vos jetons sont valables pour une durée de 18 mois.

</details>

<details class="fold">
<summary>
### Faire ma première requête ☎️
</summary>

#### Instruire les paramètres de traçabilité

API Entreprise vous permet d’accéder à des données protégées. C’est pourquoi, dans un **objectif de traçabilité**, nous vous demandons de renseigner dans chacune de vos requêtes, non seulement un jeton d’accès, mais aussi certaines informations qualifiant votre requête.

**Ces paramètres sont obligatoires**. Les appels ne comportant pas ces paramètres sont rejetés, et un code erreur vous est renvoyé. Aucun contrôle qualitatif de la donnée n'est effectué sur ces paramètres.

Pour chaque endpoint, nous précisons dans le [catalogue des données](../catalogue/) les paramètres obligatoires.

{:.tpl-table}
| Paramètres obligatoires                                            |      Informations à renseigner                                           |
|:----------------------------------------------------------:|-----------------------------------------|
|`&context=CadreDeLaRequête`|**Cadre de la requête** <br>Par exemple : aides publiques, marchés publics ou gestion d'un référentiel tiers utilisé pour tel type d'application*.*
|`&recipient=BénéficaireDeL'Appel`|**Bénéficiaire de l'appel** <br>(siret de l'administration destinatrice des données)
|`&object= RaisonDeL'AppelOuIdentifiant`|**La raison de l'appel** <br> ou l'identifiant de la procédure <br>(numéro de marché publique, nom de la procédure, description courte (< 50 caractères))
|`?user_id= IdentifiantDeL'UtilisateurPhysique`|*\[obligatoire pour les endpoints DGFIP]*<br> **L'identifiant de l'utilisateur physique qui fait l'appel** <br>Par exemple dans le cas d'une place de marché, il s'agit de l'identifiant de l’acheteur public qui consulte la pièce. Il servira en cas d’utilisation anormal de l’API pour remonter à la source et vérifier que l’utilisateur avait bien le droit d’accéder à cette donnée. 

#### Voir ma première trace d’appel dans le tableau de bord

</details>

<details class="fold">
<summary>
### Configurer le logiciel métier ⚙️
</summary>

#### Respecter la volumétrie

Sur API Entreprise, vous avez le droit à **2000 requêtes par tranche de 10 minutes par IP** interrogeant nos services.

**Au delà de ce taux votre IP sera bannie** temporairement de nos serveurs. Les appels depuis une IP bannie ne renvoient pas de codes http, le serveur ne répond tout simplement pas. Par contre, dans votre tableau de bord, vous pouvez vérifier si vous avez dépassé ce seuil. Si par mégarde vous vous retrouviez dans cette situation, adressez-nous un email [support@entreprise.api.gouv.fr](mailto:support@entreprise.api.gouv.fr)

Si vous avez besoin de plus de volumétrie, veuillez également nous contacter, nous étudierons votre demande et si la situation s'y prête, nous whitelisterons votre / vos IPs pour éviter qu'elles ne se fassent bannir.

Pour les appels de traitement de masse, il est souhaitable que vous fassiez vos batchs automatiques la nuit ou durant les heures creuses afin de ne pas affecter la qualité du service pour le reste des usagers.

#### Installer un timeout

Le timeout est le temps d'attente maximal de réponse à une requête. Pour chaque endpoint, nous vous indiquons le timeout idéal dans le [catalogue de donnée](../catalogue/).

Le timout est un outil important qui permet de ne pas immobiliser votre logiciel en le laissant bloqué sur un appel sans réponse.

De façon générale, nous vous recommandons un timeout :

* de **5 secondes** pour les appels de données structurées JSON ;
* de **12 secondes** pour les appels retournant un PDF ou un ZIP.

De même, pour ne pas immobiliser nos serveurs, nous attendons les réponses de nos fournisseurs un maximum de 10 secondes avant de vous les retransmettre. Si ce délai d’attente est dépassé un code erreur HTTP 504 vous sera renvoyé.

#### Les requêtes multi-origines non-autorisées

API Entreprise étant un service mettant à disposition des données souvent protégées par des secrets, le CORS (CORS -Cross Origin Ressource Sharing) n'est pas autorisé car il permet d'interroger directement API Entreprise depuis un site ou une application web. Cela implique que le token d'accès soit présent dans le code source du site web en question, et donc soit disponible au public. 

Pour mettre à disposition les données API Entreprise depuis un navigateur, **il vous faut mettre en place un système de proxy** pour ne pas appeler directement nos APIs.

#### Construire en compatibilité ascendante

</details>

<details class="fold">
<summary>
### Faire mon premier test de bout en bout 🛫
</summary>

</details>

## Étape 4 : API Entreprise au quotidien

<details class="fold">
<summary>
### Interpréter les codes HTTP 🚦
</summary>

Toute réponse de l’API Entreprise comprend une réponse JSON ainsi qu’un code HTTP. Celui-ci n’est pas immédiatement lisible par un humain, il est destiné aux traitements automatiques. **Ces codes permettent de se renseigner sur le statut de l’appel**, toutes les explications complémentaires sont indiquées dans le JSON.

Pour en savoir plus sur les codes HTTP, l'article de Wikipedia constitue une bonne base explicative :  <https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP>.

API Entreprise a harmonisé les codes erreur de l’ensemble des fournisseurs de données, en s'appuyant sur le protocole HTTP, afin de vous en simplifier la compréhension :

###### En cas de succès, le code HTTP commence par 2 :

{:.tpl-table}
| Code HTTP                                       |      Signification                                           |
|:----------------------------------------------------------:|----------------------------------------|
|`200` | **Tout va bien.**
|`206` | **Réponse incomplète** - La requête a fonctionné mais un des fournisseurs de données a renvoyé une erreur ou une réponse incomplète. Les valeurs concernées dans le JSON contiennent le message : “Donnée indisponible”.|

###### En cas d’échec, si l’erreur vient de votre côté, le code HTTP commence par 4 :

{:.tpl-table}
| Code HTTP                                       |      Signification                                           |
|:----------------------------------------------------------:|----------------------------------------|
|`400` | **Mauvaise requête** – La syntaxe de votre requête est erronée.
|`401` | **Non autorisé** – Votre token est invalide ou manquant.
|`403` | **Interdit** – Le serveur a compris votre requête mais refuse de l’exécuter car votre jeton ne vous donne pas accès à cette ressource.
|`404` | **Non trouvé** – La ressource (l'entreprise, le certificat, …) demandée n'a pas été trouvée. Cette erreur intervient par exemple lors de l’entrée d’un numéro de SIREN qui n’existe pas, ou bien lorsque l’entreprise qu’il designe est en dehors du périmètre de l’endpoint.
|`422` | **Entité non traitable** – Le format de la donnée passée en paramètre n'est pas accepté. Par exemple, si vous entrez 20 chiffres dans le paramètre SIREN, votre requête est automatiquement rejetée, car un SIREN fait obligatoirement 9 chiffres.
|`451` | **Indisponible pour raisons légales** - ce code est spécifiquement renvoyé lorsque vous demandez les informations d’une entreprise ou d’un établissement non diffusible au travers des endpoints `entreprises` et `etablissements` de l’INSEE, sans avoir utilisé l’option d’appel spécifique. Pour en savoir plus, consultez la documentation de cet endpoint dans le catalogue de données.|

###### En cas d’échec, si l’erreur provient d’API Entreprise ou bien des fournisseurs de données, le code HTTP commence par 5 :

{:.tpl-table}
| Code HTTP                                       |      Signification                                           |
|:----------------------------------------------------------:|----------------------------------------|
|`500` | **Erreur interne à API Entreprise** – Une erreur interne du serveur d’API Entreprise est survenue. Consultez votre tableau de bord, l’historique de l’incident devrait y être affiché ; ainsi que les actions à venir.
|`502` | **Erreur interne fournisseur** – Une erreur interne du serveur du ou des fournisseurs est survenue. Consultez votre tableau de bord, l’historique de l’incident devrait y être affiché ; ainsi que les actions à venir.
|`503` | **Service non disponible** – Le service est temporairement indisponible ou en maintenance. Pour connaître l’historique de disponibilité et les incidents type de l’endpoint, vous pouvez consulter le catalogue de données.
|`504` | **Intermédiaire hors délai** – Le(s) producteur(s) de données ont mis trop de temps à répondre. Notre temps d’attente, nous permettant de ne pas immobiliser le serveur sur un appel sans réponse, est fixé à 10 secondes et a été dépassé.|

En cas d’erreur, le JSON vous détaille la raison de l’erreur, le champ concerné se nomme `“errors”`. Lorsqu’un endpoint retourne des données agrégées de plusieurs fournisseurs, le JSON renvoyé contient un champ `“gateway error”`. Sa valeur vaut `“true”` lorsqu'une erreur survient auprès d'au moins un fournisseur.

</details>

<details class="fold">
<summary>
### Renouveler un token en fin de vie 💫
</summary>

Pour des raisons de sécurité, tous les jetons émis sont valables pour **une durée de 18 mois**. Au delà de ce délai, ils ne fonctionnent plus, et votre accès à l'API Entreprise est donc totalement arrêté. 

En réalité, cette situation n'est pas censée arriver car API Entreprise a mis en place une procédure simple de renouvellement de token. En voici les étapes : 

<details class="fold">
<summary>
###### Étape 1 : Ouvrir les notifications de renouvellement 📬
</summary>

Trois mois avant l'arrivée à terme d'un jeton, vous reçevez **des notifications automatiques vous informant de l'expiration à venir de votre jeton ainsi qu'une invitation à le renouveler**. Les notifications sont envoyées régulièrement jusqu'au renouvellement (90 jours avant la date d'expiration, puis 60 jours avant, puis 30, 15, ...).

</details>

<details class="fold">
<summary>
###### Étape 2 : Remplir le formulaire de renouvellement 📝
</summary>

La notification de d'expiration contient directement **un lien vers le formulaire de renouvellement Data Pass**. Si le contexte de votre utilisation d'API Entreprise n'a pas changé, **inscrivez simplement les mêmes informations** que lors de votre demande initiale. Pensez à mettre à jour les informations de contacts.

{: .tpl-notification}
Pour les utilisateurs ayant fait leur demande d'habilitation via la plateforme Data Pass, le formulaire de renouvellement de token est directement **pré-rempli avec les informations renseignées** lors de la demande initiale. 

</details>

<details class="fold">
<summary>
###### Étape 3: Attendre la validation et récupérer son nouveau jeton 🔐
</summary>

Une fois la demande de renouvellement envoyé, un instructeur API Entreprise valide le renouvellement du jeton. L'utilisateur pourra alors le récupérer dans son espace client.

![](../assets/images/documentation/tableaudebord-recuperer-son-token.png)

</details>
</details>

<details class="fold">
<summary>
### Réagir en cas d’incidents fournisseurs de données 🚧
</summary>
</details>

<details class="fold">
<summary>
### Réagir en cas d’indisponibilité globale 🚧
</summary>

#### Vérifier ne pas avoir dépassé la volumétrie autorisée

Le service API Entreprise semble soudainement rejeter vos requêtes ? Vérifiez que vous avez bien [respecté les limites de volumétrie](../documentation/#configurer-le-logiciel-mtier/#respecter-la-volumtrie).

</details>

<details class="fold">
<summary>
### Élargir le périmètre des données demandées 🧩
</summary>
</details>

<details class="fold">
<summary>
### S'adapter aux évolutions et montées de versions 🏗
</summary>

#### Endpoints en particulier

#### Paramètres d’appel

#### Nouvelles API

#### Changement de la source de données

#### Sécurité et volumétrie

</details>

<br>

- - -

<br>

## Demander une information

<details class="fold">
<summary>
### Ouvrir un ticket 💬
</summary>

Vous n’avez pas trouvé la réponse à votre question dans notre documentation et dans le catalogue des données ?
Vous pouvez nous contacter sur[ support@entreprise.api.gouv.fr.](mailto:support@entreprise.api.gouv.fr)

Pour améliorer le temps de traitement de votre demande, il est important de nous fournir, au minimum, les informations suivantes :

* le ou les endpoints sur lesquels le problème est rencontré ;
* le siret, siren ou tout autre paramètre passé à la requête ;
* l'adresse email sous laquelle est enregistré votre jeton d'authentification ;
* Toute autre information, capture d'écran, etc détaillant l'erreur rencontrée est évidemment bienvenue.

⚠️ Attention de ne pas partager votre jeton d'authentification dans votre demande de support ! L'échange d'emails n'est pas un support de communication sécurisé et certaines APIs donnent accès à des données sensibles. Le cas échéant, nous serons obligé de supprimer votre jeton, et vous devrez faire une nouvelle demande.

</details>

<details class="fold">
<summary>
### Infolettre API Entreprise 📬
</summary>

API Entreprise rédige régulièrement une infolettre faisant état des dernières évolutions. Si vous souhaitez **être au courant** des **nouveaux endpoints** en place, des **changement techniques** ou des **ajouts de fonctionnalités**, n'hésitez pas à vous inscrire à l'infolettre : 

<center>
<a class="tpl-button tpl-button--primary" href="recevoir-infolettre">Recevoir l'infolettre API Entreprise</a>
</center>

</details>

## Co-construire le service

<details class="fold">
<summary>
### Signaler une anomalie
</summary>

Vous avez repéré un bug ? une erreur ?

N'hésitez pas à **nous transmettre cette information**, en précisant s'il s'agit d'une anomalie :

* spécifique à **un seul endpoint**, repéré suite à un appel,
  dans ce cas, indiquez-nous le paramètre utilisé (SIRET, SIREN ...) ;
* **générale** à API Entreprise ;
* concernant la **documentation,**
  nous agrégeons beaucoup de contenus métiers et techniques, il peut arriver qu'une erreur se soit glissée, ou bien que la documentation n'ait pas été mise à jour suffisamment rapidement. Précisez-nous autant que possible l'emplacement du bug avec une capture d'écran par exemple. Indiquez-nous si possible la version de votre navigateur ;
* concernant le **site internet**.

<center>
<a class="tpl-button tpl-button--primary" href="lien">Signaler un bug ou une erreur</a>

</center>

</details>

<details class="fold">
<summary>
### Devenir fournisseur de données 📂
</summary>
</details>

<details class="fold">
<summary>
### Les prochains évènements 📆
</summary>
</details>

<details class="fold">
<summary>
### Nous rejoindre 💼
</summary>
</details>

<a class="tpl-button tpl-button--alternate" href="lien">Lien</a>
<a class="tpl-button tpl-button--primary" href="lien">Lien</a>