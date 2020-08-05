---
layout: documentation
title: Documentation générale
permalink: /documentation/
---
## Étape 1 : L'API Entreprise correspond-elle à mon besoin ?

###### **Pour synthétiser, cette API vous concerne si :**

✅ vous êtes une administration ;

✅ vous êtes un agent habilité à traiter des marchés publics ou des aides publiques ;

✅ vous êtes un prestataire d’un des deux cas précédents ;

En revanche, elle ne s'adresse pas ❌ aux particuliers, ❌ aux entreprises et ❌ aux associations.\
*N'hésitez pas à utiliser [entreprise.data.gouv.fr](https://entreprise.data.gouv.fr) : toutes les données publiques issues de la base SIRENE de l'INSEE y sont notamment disponibles.*

###### **Vous êtes en mesure d'utiliser cette API si :**

✅ vous faîtes de la simplification de démarches administratives dans l'objectif du "Dîtes-le-nous une fois",
✅ dans le cadre d’un système d’information (SI)).

❌ En revanche si vous n'avez pas de système d’information, il ne vous est pas possible d'utiliser les services d'API Entreprise.

### Les cas d’usage d’API Entreprise

API Entreprise répond à deux grands types d’usages :

* Le pré-remplissage d'un formulaire à destination du public ;
* l’obtention d’une donnée en back office par un agent habilité.

#### Pré-remplir un fomulaire

Avec les endpoints `entreprises`, `etablissements_insee` et `associations` , vous pouvez mettre en place une aide à la saisie pour vos usagers.

L’usager renseigne son numéro de SIRET, ou tout autre valeur discriminante. Le formulaire est alors pré-rempli des champs disponibles par votre API.

<details>
<summary markdown="span">Voir un exemple de pré-remplissage</summary>
L'AIFE a mis en place une démarche dématérialisée pour permettre aux entreprises d’obtenir leur \\\[Document Unique de Marché Européen](https://www2.economie.gouv.fr/daj/dume-espd). Elle utilise l'API Entreprise pour pré-remplir les formulaires de ses utilisateurs.

![](https://lh6.googleusercontent.com/UtQj08BUdtbKNTTwqEt6KBs28DMLJLjKP-kT9XruYA5gwZBTgwBQ08FCEyGvyGUKHCUSokQnshLpYMI5Gbo6Prj5wzG0Csh1zJYkwf-Ib-9Q68tNWRJVlyj7UTbJ16OaYw)

</details>

⚠️Le pré-remplissage est possible uniquement pour des API distribuant des informations publiques.Par exemple, l’endpoint `entreprise_insee`, dont les données sont fournies par l’INSEE et Infogreffe, ne peut être utilisé pour le pré-remplissage **si et seulement si** les entreprises non-diffusibles ne sont pas appelées.

{:.tpl-notification}
**Quel avantage à passer par API Entreprise si les données sont libres ?** API Entreprise vous simplifie l'implémentation de cette aide à la saisie, en vous donnant accès à une information structurée, facilement intégrable dans votre produit.

#### Quatre usages majeurs et d'autres à développer

Cette API vous sera utile pour :

✅ [Faciliter les dossiers de candidatures aux marchés publics](https://entreprise.api.gouv.fr/use_cases/marches_publics/) ;<br>
✅ [Faciliter le dépôt et l'instruction des demandes d'aides publiques](https://entreprise.api.gouv.fr/use_cases/aides_publiques/) ;<br>
✅ [Mettre en application l’Article 64 de la loi énergie climat](https://entreprise.api.gouv.fr/use_cases/loi_energie/) ;<br>
✅ Maintenir à jour un répertoire de tiers ;<br>
✅ [D'autres usages](https://entreprise.api.gouv.fr/use_cases/autres/).

✅ Durant la crise du Covid-19, API Entreprise est venu en soutien des parties prenantes à l'[instruction régionale de l'aide d'urgence aux TPE](https://entreprise.api.gouv.fr/use_cases/covid-19/) pour faciliter la phase de vérification.

### Quelles données pour mon service ?

L’ensemble de ces données d’API Entreprise est disponible dans le catalogue des données.

Tutoriel type slideshare/carrousel/Powerpoint

Une barre de recherche est à votre disposition pour filtrer les données :

![](https://lh5.googleusercontent.com/OL-Bq_DEb23qneHcVucFw8OnGZpfxKZFHhsyPl8y6clyb9_eadSQxqMzDqvDSxkB1_6roXZtXiCA9U4gr1v-TdYa4_hGhwZ8fiBtqfMyKT0M01SprpCKYgmute4KMQw1KA)

Chaqueendpointest présenté de façon synthétique :![](https://lh3.googleusercontent.com/bfBgamQ5LRXIpOxjqcns4xc6hxa4n4gILLE9uG_3rOg724tPSQj1_Vu2LPlf75Srs5nkW-9iZtjz3dtXPYSZeI915u1lJKDPfgwjzD1dWEehe2HT2rlqNYOy34NwrgI1FQ)

Des informations complémentaires, dont le détail précis des champs délivrés par l’API sont disponibles en cliquant sur le bouton “documentation” :

![](https://lh6.googleusercontent.com/7gVM7tMqQrVZIIE8bVncdOxmWkbJo-cHChnRNiQxl_-hQQ8nGqmWW_0m1rab_h3LO2Sa09r4YL3U1CGxoOTMAux3P2aqnD4qLpm6xezakprHdEcg6JVX90Rwq-XRG5jpAA)

#### Informations générales <a id="infos_generales"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Données de référence d'une entreprise](https://doc.entreprise.api.gouv.fr/?json#entreprises){:target="_blank"}                  |    INSEE & Infogreffe    |            `entreprises`            |    données JSON     |    publiques    |
| [Données de référence d'un établissement](https://doc.entreprise.api.gouv.fr/?json#etablissements){:target="_blank"}                |          INSEE           |          `etablissements_insee`           |    données JSON     |    publiques    |
| [Extrait  RCS](https://doc.entreprise.api.gouv.fr/?json#infogreffe-extrait-rcs){:target="_blank"}                                           |        Infogreffe        |         `extraits_rcs_infogreffe`         |    données JSON     |    publiques    |
| [Informations déclaratives d'une association](https://doc.entreprise.api.gouv.fr/?json#associations-rna){:target="_blank"}                 | Ministère de l'Intérieur |              `associations`               |    données JSON     |    publiques    |
| [Divers documents d'une association](https://doc.entreprise.api.gouv.fr/?json#documents-association){:target="_blank"}                     | Ministère de l'Intérieur |         `documents_associations`          |     PDF (image)     |    publiques    |
| [Actes](https://doc.entreprise.api.gouv.fr/?json#documents-association){:target="_blank"}                     | INPI |         `actes_inpi`          |       Archive ZIP (PDF et XML)   |    publiques    |

#### Informations financières <a id="infos_financieres"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Chiffre d'affaires](https://doc.entreprise.api.gouv.fr/?json#exercices){:target="_blank"}                                     |          DGFIP           |                `exercices`                |    données JSON     | confidentielles |
| [Bilans annuels](https://doc.entreprise.api.gouv.fr/?json#bilans-entreprises-bdf-banque-de-france){:target="_blank"}                                      |     INPI     |         `bilans_inpi`          |    données JSON     | publiques et confidentielles |
| [3 derniers bilans annuels](https://doc.entreprise.api.gouv.fr/?json#bilans-entreprises-bdf-banque-de-france){:target="_blank"}                                      |     Banque de France     |         `bilans_entreprises_bdf`          |    données JSON     | confidentielles |
| [Déclarations de résultats](https://doc.entreprise.api.gouv.fr/?json#les-d-clarations-des-liasses-fiscales){:target="_blank"}       |          DGFIP           |         `liasses_fiscales_dgfip`          |    données JSON     | confidentielles |

#### Attestations sociales et fiscales <a id="attestations_sociales_fiscales"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Attestation fiscale](https://doc.entreprise.api.gouv.fr/?json#attestation-fiscale-dgfip){:target="_blank"}                                    |          DGFIP           |       `attestations_fiscales_dgfip`       |     PDF (texte)     | confidentielles |
| [Attestation de vigilance](https://doc.entreprise.api.gouv.fr/?json#attestation-sociale-acoss){:target="_blank"}                               |          ACOSS           |       `attestations_sociales_acoss`       |     PDF (texte)     | confidentielles |
| [Conformité emploi des travailleurs handicapés](https://doc.entreprise.api.gouv.fr/?json#attestation-agefiph){:target="_blank"}  |         AGEFIPH          |          `attestations_agefiph`           |    données JSON     | confidentielles |
| [Cotisation de sécurité sociale agricole](https://doc.entreprise.api.gouv.fr/?json#cotisations-msa){:target="_blank"}                |           MSA            |             `cotisations_msa`             |    données JSON     | confidentielles |
| [Cotisations retraite bâtiment](https://doc.entreprise.api.gouv.fr/?json#cotisations-retraite-probtp){:target="_blank"}                       |          PROBTP          | `attestations_cotisation_retraite_probtp` |    données JSON     |    publiques    |
| [Carte professionnelle travaux publics](https://doc.entreprise.api.gouv.fr/?json#cartes-professionnelles-fntp){:target="_blank"}         |          CNETP           |            `cartes_professionnelles_fntp`            |         PDF         |    publiques    |
| [Carte professionnelle travaux publics](https://doc.entreprise.api.gouv.fr/?json#certificats-cnetp){:target="_blank"}         |          FNTP           |            `certificats_cnetp`            |         PDF         |    publiques    |
| [Cotisations congés payés & chômage intempéries](https://doc.entreprise.api.gouv.fr/?json#certificats-cnetp){:target="_blank"}         |          CNETP           |            `certificats_cnetp`            |         PDF         |    publiques    |

#### Certifications professionnelles <a id="certificats_pro"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Certification RGE](https://doc.entreprise.api.gouv.fr/?json#certificats-rge-ademe){:target="_blank"}                                      |          ADEME           |          `certificats_rge_ademe`          | données JSON et PDF |    publiques    |
| [Certification de qualification bâtiment](https://doc.entreprise.api.gouv.fr/?json#certificats-qualibat){:target="_blank"}                  |          OPQIBI          |           `certificats_qualibat`            |    données JSON     |    publiques    |
| [Certification de qualification d'ingénierie](https://doc.entreprise.api.gouv.fr/?json#certificats-opqibi){:target="_blank"}                  |          OPQIBI          |           `certificats_opqibi`            |    données JSON     |    publiques    |

#### Propriété intellectuelle <a id="propriete_intellectuelle"></a>

{:.tpl-table}
| Données                                              |        Producteur        |                 Endpoint                  |        Type         |    Ouverture    |
| ----------------------------------------------------- |:------------------------:|:-----------------------------------------:|:-------------------:|:---------------:|
| [Brevets, modèles et marques déposés](https://doc.entreprise.api.gouv.fr/?json#extraits-courts-inpi){:target="_blank"}                   |           INPI           |          `extraits_courts_inpi`           |    données JSON     |    publiques    |



Toutes ces données sont détaillées dans le catalogue de données.

<details>
  <summary markdown="span">Comment utiliser le catalogue de données ?</summary>
Une barre de recherche est à votre disposition pour filtrer les données :

![]()

Chaque endpoint est présenté de façon synthétique :

![]()

Des informations complémentaires, dont le détail précis des champs délivrés par l’API sont disponibles en cliquant sur le bouton “documentation” :

![](<>)

</details>

### Ai-je le droit d’accéder à ces données ?

L'accès à l'API entreprise est réservé aux acteurs publics investis d’une mission de service public (les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.).

Leurs prestataires privés peuvent être destinataires des informations techniques permettant l'usage de l'API mais en aucun cas des données elles-même.

### Conditions générales d'utilisation

Ce document, ci-après les « CGU », présente les modalités d’utilisation de l’API Entreprise par les personnes y ayant accès, ci-après les « Partenaires ».

L’adhésion du Partenaire au Service emporte l’acceptation des présentes CGU.

Les CGU sont disponibles ICI et en PDF [ICI](https://entreprise.api.gouv.fr/assets/cgu.pdf)

### Conditions de (non)diffusion des données

Premièrement, avant toute transmission de données, l’usager doit être informé, et en cas d’exposition des données, son consentement doit être explicite.

##### Dans le cas d’une utilisation par un agent habilité en back office

Les données disponibles sur API Entreprise ne sont pas publiques, sauf cas particulier ci-dessous.Vous assurez la protection des données et le respect des règles de confidentialité.

Le service ne doit pas permettre à quiconque n’ayant pas un niveau d’authentification suffisant, d’accéder à des données. Cet accès est restreint aux seuls les agents dûment habilités, dont les requêtes sont tracées pour une durée de 36 mois.

##### Dans le cas d’un pré-remplissage à destination du public

Une partie des données des endpoints `entreprise_insee`, `etablissement_insee` et `associations_rna`, peuvent servir au pré-remplissage de formulaires publics.

⚠️ La création d’un formulaire pré-rempli est faite pour assister l’usager, celui-ci doit toujours pouvoir amender, rectifier ces mêmes informations sans difficultés

Les fournisseurs de services s’engagent à ne pas commercialiser les données reçues et à ne pas les communiquer à des tiers en dehors des cas prévus par la loi.

### Quels sont les engagements d’API Entreprise ?

* L’engagement de disponibilité est de 99,5 %

  Néanmoins, API Entreprise agrège de nombreux fournisseurs de données et est dépendante de leurs disponibilités.

  La disponibilité des données est consultable en temps réel pour chaque endpoint dans le catalogue des donnée. Une historisation est aussi publiée, ainsi que les rapports d’incidents et les perspectives de résolution. Par ailleurs, les informations sur votre consommation sont disponibles dans votre tableau de bord.

⚠️ API Entreprise ne porte aucune responsabilité s’agissant de la qualité ou du contenu intrinsèque des données.Nous ne modifions pas les données à l’exception d’une standardisation contextuelle limitée (minuscule vers majuscule, format de date, nombre d’espaces).

* API Entreprise s’engage à proposer une assistance technique et fonctionnelle permettant aux utilisateurs de définir et de mettre en œuvre au mieux l’usage qu’ils réalisent du Service.
* L’utilisation d’API Entreprise est gratuite.
  Les coûts d’investissements et de fonctionnement sont pris en charge par la DINUM. Les coûts de raccordement à API Entreprise vous incombent.
* API Entreprise s’engage à respecter le cadre légal,
  notamment ce qui concerne la protection des données et le respect des règles de confidentialité.

### Suis-je correctement équipé pour démarrer ?

Vous êtes techniquement en mesure de pouvoir démarrer avec API Entreprise si :

* vous travaillez ou vous vous apprêtez à travailler avec un éditeur de logiciel.
  Celui-ci doit être en mesure d’intégrer API Entreprise.
* ou bien vous avez une direction des systèmes d’information (DSI) qui peut intégrer des APIs.

Pour comprendre en détail les éléments techniques nécessaires consulter la rubrique“Les questions à poser à mon équipe technique”.

## 2 - Les prérequis techniques avant d’aller plus loin

### 🖌Qu’est-ce qu’une API ?

Une API permet d’agir sur des ressources contenues dans un autre système d’informations, sans soi-même avoir la main sur ce système d’information.

Dans le cas qui nous occupe, les ressources sont des informations sur les entreprises, et l’action est une consultation.

![](https://lh4.googleusercontent.com/MHpjOyS3h4dpsdFGtSn5WZpdRrthANJAq5n_aSYLPvWLDFvUnidsIZxzLAA2-5C1NNf2jahJvEBu1rwoWL66bVLKxpBReR-RPWEWzs9G6ZDUWBgx9SskXiZXKb1QlFaNMQ)

### Comment se déroule un appel à l’API ?

Voici, décrit en quelques étapes, la façon dont vous ou votre équipe technique allez faire votre demande à l’API pour accéder aux données :

0- Je suis préalablement habilité, et j’ai donc accès à différentes données, regroupées par endpoint.

1- Je choisis l’endpoint qui m’intéresse ;

2- Je construis mon URL d’appel avec cet endpoint :

Voici les éléments qui constituent l’URL d’appel :![](https://lh6.googleusercontent.com/Lc25w5Vh8xoeRg416S7-taTuCapREhhAaZPD64dP-bKs8p_xmDeXlazdGI-PRQuXgcrtfY-cWZ35gJO-EGWdG0mKAaRqDpClO0DVafLjEyRyFK_Qg6UWZ74FrJYCq2EEQw)

Mis bout à bout :

![](https://lh5.googleusercontent.com/LaztyTWYIGUVPQuDWPzYpryu17zkFVqqeFdfYjTMeXj1m6uzHcdL2as9FScV2Kr1k6qgEI7RrjMI-fkhrwmteQVx8e19YCKQDzWaJC5Re_DMVBFMWxXxAOMrmbCWJ8Souw)

En blanc, les éléments que je complète. Pour une explication détaillée par endpoints, je me reporte aucatalogue des données.

3- Je passe mon appel

* À des fins de tests, au travers de mon navigateur

Pour passer votre appel, vous pourriez écrire l’URL dans votre navigateur. La page chargée vous renverrait les données demandées.

C’est ce que nous vous proposons de faire ici par le biais d’un test uniquement.

⚠️ En effet, il y a des précautions à prendre : Par défaut l’historique de votre navigateur enregistre des informations confidentielles dont votre jeton d’accès. Or comme vous avez pu le lire dans la rubrique“conditions de (non)diffusion des données”, la grande majorité des données accessibles par API Entreprise sont protégées par des secrets, vous êtes tenus de vous assurer qu’elles ne soient pas diffusées.

* En production, par le biais d’un logiciel métier

Pour veiller à la protection des données, l’ensemble des appels que vous allez réaliser en production seront passés par l’intermédiaire d’un logiciel métier.

4- Je reçois une réponse comportant les données. La réponse est au format JSON, nous détaillonssa structure dans la prochaine partie.

### Bien interpréter une réponse de l’API

#### Structure d’une réponse JSON

Pour chaque appel effectué vous allez recevoir une réponse au format JSON.

Ce langage informatique présente l’avantage d’être lisible par un non expert ; tout en étant compréhensible par une machine.

Une réponse JSON est composée de paires “champ” / “valeur” :\
Le “champ”, ou “nom”, ou “clé”, décrit le type d’information, c’est un invariable.

La “valeur” est une variable, c’est justement la donnée que vous recherchez.

API Entreprise retourne trois grands types de réponses :

▾ Le JSON vous renvoie un lien URL, permettant d’accéder à un document PDF :

champ : “url”

valeur : “http://la-fameuse-url-permettant-d-acceder-au-document.pdf

▾ Le JSON vous renvoie un lien URL, permettant d’accéder à une archive de plusieurs documents, au format ZIP:

champ : “url”

valeur : “http://la-fameuse-url-permettant-d-acceder-a-l-archive-de-documents.zip

▾ Le JSON vous renvoie les données, structurées :

Dans ce cas précis, les données étant toutes renvoyées au format JSON, les couples “champ” / “valeur” peuvent être regroupé dans différentes catégories.

API Éligibilité Cotisation ProBTP:

{

"eligible": true,

"message": "00 Compte éligible pour attestation de cotisation"

}

Mettre un exemple

Pour une information détaillée par endpoint, reportez-vous aucatalogue de données.

#### Le temps maximal d’attente de la réponse ou timeout

Letimeoutest le temps d'attente maximal de réponse à une requête. Pour chaque endpoint, nous vous indiquons letimeoutidéal dans lecatalogue de donnée.

Letimoutest un outil important qui permet de ne pas immobiliser votre logiciel en le laissant bloqué sur une appel sans réponse.

De façon générale, nous vous recommandons untimeout:

* de 5 secondes pour les appels de données structurées JSON
* de 12 secondes pour les appels retournant un PDF ou un ZIP.

De même, pour ne pas immobiliser nos serveurs, nous attendons les réponses de nos fournisseurs un maximum de 10 secondes avant de vous les retransmettre. Si ce délai d’attente est dépassé un code erreur HTTP 504 vous sera renvoyé.

#### ⚠️ Les codes HTTP

Toute réponse de l’API comprend la réponse JSON (expliquée ci-dessus) ainsi qu’un code HTTP. Celui-ci n’est pas immédiatement lisible par un humain, il est destiné aux traitements automatiques. (source :<https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP>)

Ces codes permettent de se renseigner sur le statut de l’appel, toutes les explications complémentaires sont indiquées dans le JSON.

API Entreprise a harmonisé les codes erreur de l’ensemble des fournisseurs de données afin de vous en simplifier la compréhension. Pour cela, nous nous sommes appuyés sur le protocole HTTP.

▾ En cas de succès, le code HTTP commencera par 2 :

|     |     |
| --- | --- |
|     |     |
|     |     |

▾ En cas d’échec, le code HTTP commence par 4 si l’erreur vient de votre côté :

|     |     |
| --- | --- |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |
|     |     |

▾ En cas d’échec, le code HTTP commence par 5 si l’erreur provient d’API Entreprise ou bien des fournisseurs de données :

|     |     |
| --- | --- |
|     |     |
|     |     |
|     |     |

En cas d’erreur, le JSON vous détaille la raison de l’erreur, le champ concerné se nomme “errors”. Lorsqu’un endpoint retourne des données agrégées de plusieurs fournisseurs, le JSON renvoyé contient un champ “gateway error”. Sa valeur vaut “true” lorsqu'une erreur survient auprès d'au moins un fournisseur.

#### ❗️Une absence de “oui” ne veut pas dire “non”

#### ❗️Les cas particuliers non représentés sur API Entreprise

### Qu'est qu'un token ?

#### Le token, une clé unique et privée

Le token c’est votre code secret vous permettant d’accéder à API Entreprise.

Si votre demande d’habilitation est validée, elle vous est délivrée dans votre espace personnel.

Cette clé est unique et privée ; nous nous appuyons sur un standard ouvert et normalisé de l’industrie : le Json Web Token (aka JWT) ([RFC 7519](https://tools.ietf.org/html/rfc7519)). Ce jeton est autonome et permet de transmettre de façon sécurisée les informations d'authentifications nécessaires pour utiliser l'API. Ces jetons sont vérifiés et fiables car signés numériquement avec une date d'expiration.

#### Ne jamais divulguer mon token

⚠️Votre token vous est propre, il ne faut pas le diffuser: c’est comme votre clé d’appartement, vous ne l’envoyez pas par la poste car il y a un risque que celle-ci soit interceptée par une personne mal intentionnée.

C’est pourquoi, vous ne devez jamais copier-coller un token dans un moteur de recherche ou dans un e-mail.L’usage de votre token se fait uniquement dans votre logiciel métier sécurisé utilisé pour réaliser vos appels.

#### Un token a une fin de vie

La durée de vie d’un token est limitée, sa date d’expiration est indiqué dans votre espace personnel.

Le token peut également être supprimé s’il a été diffusé par mégarde.

Le renouvellement d’un token est très facile et rapide. C’est pourquoi, si vous avez divulguer votre token par erreur, n’hésitez pas à écrire rapidement au support.

Pour en savoir plus le renouvellement d’un token, consultez la rubrique“renouveler un token en fin de vie”.

### Prévoir les incidents et la résilience de mon service

Il se peut qu’un incident survienne chez un fournisseur de données. Votre logiciel doit vous permettre de fonctionner de manière dégradée :

* si vous effectuez une fonction de préremplissage et que le service est à l’arrêt, prévoyez un fonctionnement sans préremplissage.
* en cas d’utilisation de justificatifs, prévoyez de permettre à vos usagers de pouvoir transmettre un document par eux-même.

Le dîtes le nous une fois ne doit pas bloquer les usagers en cas d’incident techniques : vos usagers préfèreront toujours vous redonner leurs informations plutôt que de ne pas pouvoir utiliser votre service.

### ❗Une architecture technique flexible adaptée aux évolutions (compatibilité ascendante)

### ❗Quelques clés pour une transformation culturelle en douceur

### ⚠️ Les fondamentaux à mettre en place avec mon prestataire\

ou mon équipe interne.

Les appels à l’API se font via internet

L’API s’appelle depuis ses endpoints. Un endpoint consiste en un verbe HTTP et une URL (adresse). Le verbe indique l’intention de l’appel, dans notre cas, le verbe GET, qui permet laconsultationd’uneressource.Il existe d’autres verbes pour d’autres types d’actions (création, suppression, modification …) mais nous ne les utilisons pas dans API Entreprise.

Nous utilisons la version sécurisée de HTTP, qui s’appelle HTTPS, comme sur les adresses de votre navigateur. Attention, ces protocoles sont mis à jour régulièrement pour des raisons de sécurité, nousen parlons par là suite.

Il faut avoir des logiciels suffisamment à jour, pour que

Afin d'empêcher que des données sensibles soient

Tous les échanges doivent valider un processus de sécurité

Pour sécuriser l’appel, un échange supplémentaire a lieu. Cet échange s’appelle lahandshake SSL,vous aurez besoin de vérifier que cet handshake se déroule bien pour que vos appels aboutissent.

Handshake

☑️ Vérifier qu’ils peuvent prendre en charge la mise à jour des protocoles de sécurité HTTPS

☑️ Anticiper la mise à jour du logiciel métier

☑️ Vérifier la version des langages. API Entreprise ne fonctionne qu’avec Java 1.7 minimum (pour la gestion des certificats de +1024 bit)

☑️ Quels sont les dispositifs d’alerte ? certificat SSL

☑️ Firewall / White list IP

☑️ Anticiper les coûts de maintenance

## 3- Mes débuts avec API Entreprise

### Effectuer ma demande d’habilitation

▾ Anticiper votre demande : les informations qui vous seront demandées

* lenuméro siret de votre administration.Vous pouvez vous aider de (<https://entreprise.data.gouv.fr>) pour le retrouver.
* les données que vous souhaitez obtenir.Une sélection vous sera proposée parmi une liste de données décrites dans la section "données délivrées". Aidez-vous des cas d'usage décrits pour vous assurer de votre légitimité ;

L’ensemble des données disponibles sur API Entreprise est détaillé dans lecatalogue des données.Vous pouvez filtrer les données par cas d’usage.

Une demande d’accès ne peut pas couvrir plusieurs contextes métiers différents et doit être adaptée au public utilisateur final. Si vous avez plusieurs contextes métiers pour lesquels vous souhaitez demander un accès, il vous faudra formuler une demande par contexte.

##### Exemple de la Région Occitanie :

Dans le cadre de son hub entreprises, 3 demandes différentes ont été faites :

* Une demande pour faciliter le renseignement des données par l’usager en pré-remplissant des formulaires à partir d’un numéro de SIRET ;
* Une demande pour la pré-qualification des dossiers d’aides publiques avec l’accès à quelques données sensibles ;
* Une demande pour l’instruction de dossiers avec l’accès à un nombre important de données sensibles pour aider les agents instructeurs.

La région s’est vue remettre un espace client avec 3 tokens d’accès aux permissions différentes.

* le cadre administratif et légal(texte ou délibération/décision)qui vous légitime à recevoir ces données. Il est possible de mettre un lien vers le texte de loi, ajouter des pièces jointes ou décrire votre contexte ;
* lescoordonnéesdu responsable du traitement ;\
  Le responsable du traitement des données est la personne physique ou morale qui, seul ou conjointement avec d’autres, détermine les finalités et les moyens du traitement des données à caractère personnel. Seule une personne appartenant à l'organisme demandeur peut être renseignée.
* lescoordonnées de votre délégué·e à la protection des données (DPD) ;\
  Le DPD est la personne qui s'assure que l'organisation protège convenablement les données à caractère personnel, conformément à la législation en vigueur. C'est généralement une personne appartenant à l'organisme demandeur.\
  \
  ▾Je n’ai pas de DPD, que faire ?\
  Si vous n’avez pas de DPD, c’est que vous n’êtes probablement pas habilité à pouvoir utiliser API Entreprise. En effet, la nomination d’un DPD est obligatoire pour toute autorité publique ou tout organisme public, ainsi que pour toute entreprise effectuantun suivi régulier et systématique de données personnelles à grande échelle ou de données personnelles « sensibles ». Ce qui est au coeur de l’usage d’API Entreprise.
* lescoordonnées de l’interlocut·eur·rice métier ;
* lescoordonnées de l'interlocut·eur·rice technique.​\
  La personne ou l’équipe en charge du développement de l’interface logicielle qui va permettre l’inter-connection effective avec API Entreprise

L'ensemble des coordonnées renseignées seront strictement utilisées pour communiquer avec vous.

Vous devrez également accepter nos conditions générales d’utilisation,consultablesici.

▾ Faire ma demande d’habilitation

Les demandes d’accès à API Entreprise sont instruites sur la plateforme [api.gouv.fr](https://datapass.api.gouv.fr/api-entreprise). Si vous n’en disposez pas déjà, il vous sera demandé de vous créer un compte. Des demandes multiples ne nécessitent pas de création de compte supplémentaire.

1- Créer un compte

Toute demande d'accès à l'API Entreprise nécessite la création d’un compte à l’adresse suivante :<https://auth.api.gouv.fr/users/sign-up>Avec un même compte vous pouvez réaliser plusieurs demandes, et également accéder à API Particulier.

![](https://lh4.googleusercontent.com/zwRySXH-XJp1M6Tr0YWeN1RYfu-BLWgPyia6EV8S8VjLyueHfcMNZyyW7IbF1C0r-ffQM8aOAHtQM_ynyYK2dGmbAk91XKjjONVl62kxIuvInhQ_jty0TGC4bkTZteDb9g)

2- Remplir le formulaire d’accès

![](https://lh6.googleusercontent.com/I-rQQBGLDFlsu28sQWDrQ14j1mHwk5UdogA2heVJKjYpttEo3ZtI02ixG76zXag29hHDdI5Lyuro9YFdVnvq-6tvh9x_NVCrczC7-_EOZZjWpY6-F9yC0YFFkio_w2Ju8Q)

Remplissez[le formulaire de demande d’accès Data Pass](https://datapass.api.gouv.fr/api-entreprise)puis validez le. Au cas où il vous manquerait une information, vous pourrez reprendre ultérieurement le formulaire qui reste à l’état de brouillon dans votre interface

En cas de besoin, vous pouvez inviter un personne à intervenir sur ce formulaire.

3- Attendre la réponse d’API Entreprise

Une fois votre demande validée, nous instruisons alors votre dossier puis prenons une décision d’acceptation ou de refus de la demande d’accès. Le cas échéant nous vous demanderons des précisions supplémentaires.

Cette instruction peut prendre entre entre X à X jours selon l’affluence des demandes.

4- Votre demande est acceptée, votre compte est créé.

Une fois votre dossier validé, nous créons votre compte d’accès à un espace client, votre tableau de bord et vous envoyons un email de confirmation. Cet email vous indiquenos conditions générales d’utilisation, et vous fournit un lien pour le choix de votre mot de passe.

5- Se connecter et commencer à utiliser API Entreprise

Une fois votre mot de passe choisi,[connectez vous](https://dashboard.entreprise.api.gouv.fr/login)à votre espace client. Votre ou vos tokens vous y attendent. Vous pouvez commencer à les utiliser pour appeler l’API Entreprise. Le tableau de bord vous permet aussi d’avoir accès à des statistiques d’utilisation des données.

### Faire ma première requête (⚠️ dans le navigateur en session privée)

#### ❗️Récupérer mon token dans l’espace client

#### ⚠️ Instruire les paramètres de traçabilité

API Entreprise vous permet de faire circuler, et d’accéder à des données protégées. C’est pourquoi nous vous demandons de renseigner dans chacune de vos requêtes, non seulement un jeton d’accès, mais aussi certaines informations qualifiant votre requête ; dans un objectif de traçabilité.

Ces paramètres sont obligatoires. Les appels ne comportant pas ces paramètres sont rejetés, et un code erreur vous est renvoyé. Aucun contrôle qualitatif de la donnée n'est effectué sur ces paramètres.

Pour chaque endpoint, nous précisons dans le catalogue des données les paramètres obligatoires.

![](https://lh5.googleusercontent.com/4e-QQ8Bj3iUAk3Y8EWi4R14csuSbysrM8zrtJOfxF0UKE4EAUh-yhzb4tIb2DaHERGQ0Rag7V3QO_PqqU-LXpmAAzUsapE6237cp0E2ik_UODiBKfYBG3vUnpD1G7_2OvQ)

### ❗️Voir ma première trace d’appel dans le tableau de bord

### ❗️Intégrer dans les logiciels métiers

#### ❗️Comment faire mes appels de traitement de masse ?

Sur API Entreprise, vous avez le droit à 2000 requêtes par tranche de 10 minutes par IP interrogeant nos services.

Si vous souhaitez effectuer des batchs il faudra temporiser vos appels pour rester sous cette limite.

Cette restriction est nécessaire pour garantir l’accès aux données à l’intégralité des usagers d’API Entreprise à des services web non dimensionnés pour faire face de à de fortes charges.

Il est de plus souhaitable que vous fassiez vos batch automatique la nuit ou durant les heures creuses afin de ne pas affecter la qualité du service pour le reste des usagers.

#### Respecter la volumétrie (quotas, nombre d’appels autorisés)

Sur API Entreprise, vous avez le droit à 2000 requêtes par tranche de 10 minutes par IP interrogeant nos services.

Au delà de ce taux votre IP sera bannie temporairement de nos serveurs. Les appels depuis une IP bannie ne renvoient pas de codes http, le serveur ne répond tout simplement pas. Par contre, dans votre tableau de bord, vous pouvez vérifier si vous avez dépassé ce seuil . Si par mégarde vous vous retrouviez dans cette situation, adressez-nous un email[support@entreprise.api.gouv.fr](mailto:support@entreprise.api.gouv.fr)

Si vous avez besoin de plus de volumétrie, veuillez également nous contacter, nous étudierons votre demande et si la situation s'y prête, nous whitelisterons votre / vos IPs pour éviter qu'elles ne se fassent bannir.

#### Compatibilité ascendante

### Faire mon premier test de bout en bout

## 4 - API Entreprise au quotidien

### Être tenu au courant des évolutions

### Renouveler un token en fin de vie

### Élargir le périmètre des données demandées

### S'adapter aux évolutions et montées de versions

#### Endpoints en particulier

#### Paramètres d’appel

#### Nouvelles API

#### Changement de la source de données

#### Sécurité et volumétrie

### Réagir en cas d’incidents fournisseurs de données

### Réagir en cas d’indisponibilité globale

- - -

## Demander de l'aide

### 🖌Contacter le support

API Entreprise est une petite équipe, nous nous efforçons de répondre le plus rapidement possible à vos demandes mais notre effectif s’élève à 4 ETP.\
C’est pourquoi, nous avons mis en place depuis avril 2020 une documentation plus précise et conçue pour vous accompagner dans chaque étape de votre utilisation d’API Entreprise.

Vous ne trouvez pas l’information adéquate ?

Votre demande concerne :

Ici, intégrer une suite de question qui peut les renvoyer vers la documentation, avant, en dernier recours de leurs donner le mail de support.

![](https://lh3.googleusercontent.com/_wFj2xIplL00WhZwHtSYhT_wkxHanagw7kUuie-LToNZXgTZjHJrpm4CFSrhWMBe4_Wi5yNcBahXKG5-wiHZ1CRWCQdCVFrk0vTzqCk12Q-7Q4aA23gXZhfgPFwOlV8JqA)

- - -

Vous n’avez pas trouvé la réponse à votre question dans notredocumentationet dans lecatalogue des données?\
Vous pouvez nous contacter sur[support@entreprise.api.gouv.fr.](mailto:support@entreprise.api.gouv.fr)

Pour améliorer le temps de traitement de votre demande, il est important de nous fournir, au minimum, les informations suivantes :

* le ou les endpoints sur lesquels le problème est rencontré ;
* le siret, siren ou tout autre paramètre passé à la requête ;
* l'adresse email sous laquelle est enregistré votre jeton d'authentification ;
* Toute autre information, screenshot, etc détaillant l'erreur rencontrée est évidemment bienvenue.

⚠️Attention de ne pas partager votre jeton d'authentification dans votre demande de support !L'échange d'emails n'est pas un support de communication sécurisé et certaines APIs donnent accès à des données sensibles. Le cas échéant, nous serons obligé de supprimer votre jeton, et vous devrez faire une nouvelle demande.

## Co-construire API-Entreprise

### Signaler un bug

### Participer à un atelier utilisateur

### Devenir fournisseur de données

### Les prochains évènements

### Nous rejoindre
