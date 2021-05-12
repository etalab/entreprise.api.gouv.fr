---
weight: 3
title: "Étape 3 : Démarrer avec API Entreprise"
identifier: demarrer
id: demarrer
panels:
  panel1:
    title: Effectuer sa demande d’habilitation 📝
    content: >-2
      Après avoir déterminé que [l'API Entreprise répond à votre besoin](#besoins) et [que vous disposez des prérequis techniques nécessaires](#prerequis), vous pouvez effectuer une demande d'habilitation :
      <br>

      <a class="tpl-button tpl-button--gradient" href="https://api.gouv.fr/les-api/api-entreprise/demande-acces">🔑 Demander un accès à l'API Entreprise</a>
      <br>
      <br>

      ⚠️ Une demande d’accès doit couvrir **un seul contexte métier**. Si vous avez plusieurs contextes métiers pour lesquels vous souhaitez demander un accès, il vous faudra formuler une demande par contexte :

       {:.example}
      **Exemple de la Région Occitanie :**<br>Dans le cadre de son hub entreprises, **trois demandes différentes ont été faites** : une demande pour faciliter le renseignement des données par l’usager en pré-remplissant des formulaires à partir d’un numéro de SIRET ; une demande pour la pré-qualification des dossiers d’aides publiques avec l’accès à quelques données sensibles ; une demande pour l’instruction de dossiers avec l’accès à un nombre important de données sensibles pour aider les agents instructeurs.<br>**La région s’est vue remettre un espace client avec 3 tokens d’accès aux permissions différentes.**
       {:.example}


      #### Le fonctionnement d'une demande

      La demande d'habilitation se déroule en deux étapes :

      <details class="fold">

      <summary>

      ###### Étape 1 : Le remplissage du formulaire sur api.gouv.fr

      </summary>

      Toute demande d’accès à l’API Entreprise nécessite la création d’un compte sur la plateforme [api.gouv.fr](https://api.gouv.fr/les-api/api-entreprise/demande-acces){:target="_blank"}.<br> **Avec un même compte vous pouvez réaliser plusieurs demandes**, et également accéder à d'autres APIs, dont l'[API Particulier](https://api.gouv.fr/les-api/api-particulier).
      <br><br>

      </details>


      <details class="fold">

      <summary>

      ###### Étape 2 : L'instruction de votre dossier par la DINUM

      </summary>


      Une fois le formulaire complêté et envoyé par vos soins, nous instruisons votre dossier puis prenons une décision d’acceptation ou de refus de la demande d’accès. Cette instruction prend **en moyenne 11 jours** selon l’affluence des demandes. La durée de traitement est aussi **dépendante de la précision et de l'exhaustivité des informations que vous nous transmettez**, qui influeront sur le nombre d'aller-retour que nous aurons à faire pour le finaliser.


      * ❌ Si votre dossier est refusé, des précisions supplémentaires vous seront demandée avant tout refus définitif ;

      * ✅ Si votre dossier est validé, un mail de confirmation vous est envoyé. [Connectez-vous à votre tableau de bord](https://dashboard.entreprise.api.gouv.fr/login){:target="_blank"} avec vos identifiants api.gouv.fr.


      </details>

      ![](../assets/images/documentation/schema-procede-habilitation-api-entreprise.png)


      #### Les informations demandées

      ##### La liste des données souhaitées

        Le formulaire vous permet de cocher les données que vous souhaitez demander.
        Pour cela vous pouvez vous aider :

        * du [catalogue de données](../catalogue/). Il présente l'ensemble des endpoints disponibles accompagnés d'une documentation fonctionnelle et technique.

        * des [cas d'usage](../cas_usage/) proposés par API Entreprise.
        Nous y décrivons les données utiles. Si votre besoin correspond à l'un de ses cas d'usage, vous pourrez vous appuyez sur le formulaire pré-rempli adéquat.


      ##### Le cadre juridique

      L'accès à un endpoint de l'API Entreprise se fait sous réserve que son utilisation soit justifiée. C'est pourquoi, il vous sera systématiquement demandé une **description précise de votre service et de l'utilité des données demandées dans ce contexte**. Plus particulièrement pour les endpoints délivrant des données protégées, l'accès à la donnée requiert la fourniture d'un cadre juridique précis accompagné de **justificatifs** :   

        * Si vous êtes une administration centrale, une agence d'État, un opérateur, ou un service déconcentré, il vous faudra transmettre le **décrêt** ou l'**arrêté** justifiant votre demande.
        * Si vous êtes une collectivité, une **délibération** faisant acte du besoin est nécessaire. Lors de l'instruction de votre dossier, API Entreprise consultera ce document et s'appuiera sur les informations qui y sont inscrites, c'est à dire notamment la description de votre service, pour évaluer la pertinence des données demandées.
        <br>Par exemple, si la délibération indique que votre service concerne uniquement les entreprises de moins de 300 000 euros de chiffres d'affaires, l'endpoint `/exercices`, permettant d'avoir les déclarations de l'entreprise, vous sera accordé.
        <br>Enfin, pour être légale, une délibération doit comporter certains éléments administratifs. Ce [document de la Préfecture de l'AISNE](https://www.aisne.gouv.fr/content/download/20874/140668/file/Article_R%C3%A9dactionD%C3%A9lib%C3%A9rations) les présente en détail.

        {:.tpl-notification.tpl--danger}

        Attention, quel que soit votre statut, le [**CRPA** (Code des relations entre le public et l'administration)](https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000031366350/2020-12-14/){:target="_blank"}, la [**loi ESSOC** (pour un État au service d'une société de confiance)](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000037307624/){:target="_blank"} ou la **loi Lemaire** (pour une République numérique) **ne sont pas suffisants** car ils indiquent un principe d'échange qui doit être complété par un cadre juridique précis pour l'utilisation envisagée.


      ##### Les coordonnées des différents contacts

        L'ensemble des coordonnées renseignées seront strictement utilisées pour communiquer avec vous.

      * **Le responsable du traitement des données**. C'est la personne physique ou morale qui, seule ou conjointement avec d’autres, détermine les finalités et les moyens du traitement des données à caractère personnel. Cette personne renseignée doit obligatoirement appartenir à l'organisation déclarée dans la demande.

      * **Le délégué·e à la protection des données**.
        Le DPD est la personne qui s'assure que l'organisation protège convenablement les données à caractère personnel, conformément à la législation en vigueur. C'est généralement une personne appartenant à l'organisation effectuant la demande.

        <details class="fold">

        <summary>

        Je n’ai pas de DPD, que faire ?

        </summary>

         Si vous n’avez pas de DPD, c’est que vous n’êtes probablement pas habilité à pouvoir utiliser API Entreprise. En effet, la nomination d’un DPD est obligatoire pour toute autorité publique ou tout organisme public, ainsi que pour toute entreprise effectuant un suivi régulier et systématique de données personnelles à grande échelle ou de données personnelles sensibles. Ce qui est au coeur de l’usage d’API Entreprise.

        </details>

      * **le contact métier**. C'est une personne en responsabilité du projet, il peut s'agir du demandeur. API Entreprise contactera cette personne pour avertir de nouvelles fonctionnalités ou d'incidents majeurs sur nos APIs.

      * **le contact technique** C'est une personne ou l’équipe en charge du développement de l’interface logicielle qui va permettre l’interconnection effective avec API Entreprise. API Entreprise contactera cette personne pour avertir d'évolutions techniques, d'incidents et de l'expiration des jetons.

      Le contact métier et le contact technique peuvent être confondus, notamment si vous passez par un éditeur.


      ##### L'acceptation des conditions d'utilisation API Entreprise

      Avant tout envoi de votre demande, vous devez **[accepter nos conditions générales d’utilisation](../cgu/){:target="_blank"}**.<br> Nous vous invitons à les lire attentivement car une grande partie des données circulant par le biais d'API Entreprise sont sensibles. **Votre futur accès à l'API s'accompagne d'engagements**, notamment, entre autres, ceux de présenter les données uniquement aux agents habilités et de tracer l'accès de ces données.


    id: demande-habilitation
  panel2:
    title: Habilitation validée ✅, récupérer son token 🔐
    id: habilitation-validee
    content: >

      Pour récupérer vos tokens ou jetons d'accès, il faut vous rendre dans [votre tableau de bord](https://dashboard.entreprise.api.gouv.fr/login){:target="_blank"} à l'onglet "Jetons" :


      ![](../assets/images/documentation/tableaudebord-recuperer-son-token.png)


      {:.tpl-notification.tpl--danger}

      Tous vos jetons sont valables pour une durée de 18 mois.
  panel3:
    title: Faire ma première requête ☎️
    id: premiere-requete
    content: >-
      #### Depuis son navigateur ou le *swagger* API Entreprise

      [Votre habilitation est validée, vous avez récupéré vos jetons](../doc/#habilitation-validee), vous pouvez donc désormais faire un premier appel de test.


      - Si vous êtes à l'aise avec les interfaces techniques, nous avons mis en place un [**environnement de production documenté (*Swagger*)**](https://api.gouv.fr/documentation/api-entreprise), disponible sur api.gouv.fr.
      Il permet, à l'aide d'un token d'authentification valide 🔑, d'effectuer directement depuis le navigateur des tests de l'API. Les données confidentielles restent bien protégées. Vous y trouverez aussi la spécification technique téléchargeable sous format YAML afin de pouvoir accélérer le développement de vos outils d'interfaçage avec API Entreprise.


      - Autrement, vous pouvez **effectuer votre appel de test directement dans la barre URL de votre navigateur**, en collant votre requête HTTP renseignée de [votre token](https://entreprise.api.gouv.fr/doc/#tokens){:target="_blank"} 🔑.



      {:.tpl-notification.tpl--danger}

      Attention, vous ne devez jamais copier-coller un token dans la barre de recherche classique d'un moteur de recherche ou dans un e-mail.


      #### Construire la requête HTTP

      Que ce soit en environnement de production ou dans la barre URL de votre navigateur, **vous avez besoin de construire une URL d'appel**. Cette requête de l'endpoint que vous souhaitez tester est explicitée dans le [catalogue des données](../doc/){:trarget="_blank"}, partie "Documentation" de l'endpoint. Nous vous y indiquons la structure de la requête et les paramètres à remplir.

      ###### Exemple de requête :

      ```

      https://entreprise.api.gouv.fr/v2/attestation_fiscales_dgfip/SirenDeL’Entreprise?token=📝&user_id=📝&context=📝&recipient=📝&object=📝

      ```


      <details class="fold">

      <summary> En savoir plus sur chaque élément composant la requête HTTP

      </summary>


      {:.tpl-table}

      | Éléments composant la requête                                            |   État    | Exemples                                             |

      |------------------------------------------------------------|-----------------------------------------|

      |**Domaine** <br>(ou préfixe) <br>qui conduit à l'API de façon sécurisée| prédéfini par endpoint|`https://entreprise.api.gouv.fr`|

      |**Numéro de la version** <br>(par défaut désormais en V2)| prédéfini par endpoint| `/v2`|

      |**Nom de la donnée recherchée** <br>(ou *endpoint*)| prédéfini par endpoint| `/attestation_fiscale_dgfip`|

      |**Identité de l'établissement concerné** <br>(souvent SIREN ou SIRET)| à choisir 📝|`/SIRENouSIRETdeL'Etablissement`|

      |**Votre jeton d'accès**| à renseigner 📝|`?token=JetonD'Habilitation`|

      |**Des paramètres de traçabilité**| à renseigner 📝| `&context=CadreDeLaRequête`<br> ℹ️ Plus d'informations disponibles dans la partie [Instruire les paramètres de traçabilité](../doc/#parametres-tracabilite){:target="_blank"}|


      </details>


      <center>
      <a class="tpl-button tpl-button--alternate" href="https://entreprise.api.gouv.fr/catalogue/">Retrouver la structure de l'URL de l'endpoint <br> dans le catalogue</a>
      </center>


      #### Voir ma première trace d’appel dans le tableau de bord


      Une fois que vous avez fait un premier appel, celui-ci est **répertorié** dans votre tableau de bord, en passant par [la liste de tous vos tokens](https://dashboard.entreprise.api.gouv.fr/me/tokens), et en cliquant sur "Voir les statistiques".


      ![](../assets/images/documentation/voir-son-premier-appel.png)

  panel4:
    title: Instruire les paramètres de traçabilité 🏷
    id: parametres-tracabilite
    content: >-
      API Entreprise vous permet d’accéder à des données protégées. C’est pourquoi, dans un **objectif de traçabilité**, nous vous demandons de renseigner dans chacune de vos requêtes, **non seulement un jeton d’accès**, mais aussi certaines informations qualifiant votre requête.


      {:.tpl-notification.tpl--danger}

      **Ces paramètres sont obligatoires**. Les appels ne comportant pas ces paramètres sont rejetés, et un code erreur vous est renvoyé.


      Pour chaque endpoint, nous précisons dans le [catalogue des données](../catalogue/) les paramètres obligatoires spécifiques, ci-dessous une explication détaillée des éléments à fournir pour chaque paramètre de traçabilité :


      {:.tpl-table}

      | Paramètre                                             |      Information à renseigner                                           |

      |:----------------------------------------------------------:|-----------------------------------------|

      |`&context=CadreDeLaRequête`|**Cadre de la requête** <br>Par exemple : aides publiques, marchés publics ou gestion d'un référentiel tiers utilisé pour tel type d'application*.*

      |`&recipient=BénéficaireDeL'Appel`|**Bénéficiaire de l'appel** <br>SIRET de l'administration destinatrice des données.

      |`&object= RaisonDeL'AppelOuIdentifiant`|**La raison de l'appel** <br> ou l'identifiant de la procédure. <br> L'identifiant peut être interne à votre organisation ou bien un numéro de marché publique, un nom de procédure ; l'essentiel est que celui-ci vous permette de tracer et de retrouver les informations relatives à l'appel. En effet, vous devez pouvoir justifier de la raison d'un appel auprès du fournisseur de données. Description courte (< 50 caractères).

  panel5:
    title: Configurer le logiciel métier ⚙️
    id: configuration
    content: >-
      #### Respecter la volumétrie

      ##### Limites

      ###### 📆 Jusqu'au mardi 1er juin 2021

      Sur API Entreprise, vous avez le droit à **2000 requêtes par tranche de 10 minutes par IP** interrogeant nos services.
      <br>
      <br>
      **Au delà de ce taux, votre IP sera bannie** temporairement de nos serveurs **pour une durée de 12h**. Les appels depuis une IP bannie ne renvoient pas de codes HTTP, le serveur ne répond tout simplement pas. Par contre, dans votre tableau de bord, vous pouvez vérifier si vous avez dépassé ce seuil.<br>
      Au bout de ces 12 heures, vos accès sont automatiquement rétablis ; **il est donc inutile d’écrire au support**.<br>
      Nous vous invitons à prendre les mesures nécessaires car le dépassement intervient généralement chez nos utilisateurs lorsque leur programme n’a pas été correctement configuré.
      <br>


      {:.tpl-notification.tpl--danger}

      Pour les appels de traitement de masse, il est souhaitable que vous fassiez vos batchs automatiques la nuit ou durant les heures creuses afin de ne pas affecter la qualité du service pour le reste des usagers.


      ###### 📆 À compter du mardi 1er juin 2021

      Les limites de volumétrie sur API Entreprise se décomposent en deux règles principales : 

      * **Un plafond général par IP de 1000 requêtes/minute**. 
      <br>

      * **Une volumétrie par jeton par groupe d'endpoints** :

          * *1er groupe* : Les endpoints renvoyant du **JSON** constituent un premier groupe. Vous pouvez effectuer jusqu'à **250 requêtes/min/jeton** sur ce groupe.

          * *2ème groupe* : Les endpoints transmettant des **documents** constituent un autre groupe. La volumétrie maximale d'appel concernant ce groupe est de **50 requêtes/min/jeton**.

          * *Exceptions* : Certains endpoints échappent à cette règle et présentent une volumétrie spécifique par endpoint : 

               * L'[attestation fiscale](../catalogue/#a-attestations_fiscales_dgfip) de la DGFIP : 5 requêtes/min/jeton ;

               * Les [actes](../catalogue/#a-actes_inpi) de l'INPI : 5 requêtes/min/jeton ;

               * Les [bilans](../catalogue/#a-bilans_inpi) de l'INPI : 5 requêtes/min/jeton ; 

               * Les [effectifs](../catalogue/#a-effectifs_..._acoss_covid) de l'URSSAF : 250 requêtes/min/jeton ;

               * La [conformité des travailleurs handicapés](../catalogue/#a-attestations_agefiph) de l'Agefiph : 250 requêtes/min/jeton. 
          
      {:.tpl-notification}

      Pour vous assurer de la volumétrie d'un endpoint en particulier, vous pouvez consulter la partie "disponibilité" de sa documentation dans le [catalogue de données](../catalogue/).

      

      
      ##### Informations actionnables et alertes 📆 À compter du mardi 1er juin 2021

      ###### Header associé à chaque réponse

      Le Header de chaque réponse de l'API Entreprise est complété de trois champs concernant les limites de volumétrie, respectant les spécifications des `RateLimit` définie dans la RFC suivante <https://tools.ietf.org/id/draft-polli-ratelimit-headers-00.html>{:target="_blank"}.
      <br>
      <br>
      Ce header vous permet donc d'avoir une **visibilité constante et en temps réel de la volumétrie**, et de **gérer un dépassement**.



      {:.tpl-table}

      | Champs du header    |   Signification    |     Format           |

      |:------------------------------|:------------------|:------------:|

      | `RateLimit-Limit` |La **limite** concernant l'endpoint appelé, soit le nombre de requête/minute. | Nombre|

      | `RateLimit-Remaining` |Le **nombre d'appels restants** durant la période courante d'une minute. | Nombre |

      | `RateLimit-Reset` |La **fin de la période** courante. | Timestamp |


      {:.example}

      **Exemple** : 
      <br> Considérons un endpoint ayant une limite de 50 appels /minute.
      Vous faîtes un premier appel à 10h00 pile, et effectuez un second appel 20 secondes plus tard, puis un troisième 10 secondes plus tard, vous aurez les valeurs suivantes :<br>
      - RateLimit-Limit : 50 ;<br>
      - RateLimit-Remaining : 47 (50 moins les 3 appels effectués) ;<br>
      - RateLimit-Reset : [*Timestamp correspondant au jour présent à 10h01*]. Le premier appel initialise le compteur (à 10h00 pile), la période se termine 1m plus tard.
      <br><br>Vous pouvez donc jusqu'à 10h01 pile effectuer 47 appels, le compteur sera réinitialisé à 50 à ce moment-là.

      
      ###### Header associé à un code erreur 429

      Si vous dépassez le nombre d'appels autorisés (`RateLimit-Remaining = 0`), le serveur répondra avec le **status 429** sur tous les appels suivants dans la même période. 
      <br>
      Le header associé à ce code erreur 429 sera accompagné : 
      
      *  des trois champs précédents ;

      *  d'un champ supplémentaire indiquant le temps à attendre avant de pouvoir effectuer des nouveaux appels.


      {:.tpl-table}

      | Champs du header    |   Signification    |     Format           |

      |:------------------------------|:------------------|:------------:|

      | `RateLimit-Limit` |La **limite** concernant l'endpoint appelé, soit le nombre de requête/minute. | Nombre|

      | `RateLimit-Remaining` |Le **nombre d'appels restants** durant la période courante d'une minute. | Nombre |

      | `RateLimit-Reset` |La **fin de la période** courante. | Timestamp |

      | *Uniquement pour le header associé au code erreur 429* <br> `Retry-after`| **Décompte du nombre de secondes restantes** avant la prochaine période | Secondes |


      {:.tpl-notification}

      Vous pouvez donc **utiliser les champs du header pour optimiser votre consommation de l'API Entreprise**.
      <br>

      ##### Bannissement

      **En cas de non prise en compte des codes erreurs 429**, et par conséquent de dépassement des limites de volumétrie se traduisant par un volume important de retours 429, votre IP sera temporairement bannie de nos serveurs **pour une durée fixe et non révocable de 12h**. Si vous avez plusieurs jetons, tous seront donc bloqués pendant ce laps de temps.
      <br>Les appels depuis une IP bannie ne renvoient pas de codes HTTP, le serveur ne répond tout simplement pas. 
      Vous pouvez en revanche vérifier si vous avez dépassé ce seuil depuis votre tableau de bord.
      <br><br>Au bout de ces 12 heures, vos accès sont automatiquement rétablis ; **il est donc inutile d'écrire au support**. <br>Nous vous invitons à prendre les mesures nécessaires car le dépassement intervient généralement chez nos utilisateurs lorsque leur programme n'a pas été correctement configuré.


      {:.tpl-notification.tpl--danger}

      Pour les appels de traitement de masse, il est souhaitable que vous fassiez vos **batchs automatiques la nuit ou durant les heures creuses** afin de ne pas affecter la qualité du service pour le reste des usagers.


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


      #### Certificats SSL et Autorités de certification


      API Entreprise utilise [DHIMYOTIS](https://www.dhimyotis.com/) comme organisme de délivrance de ses certificats SSL principaux ainsi que [Let's Encrypt](https://letsencrypt.org/) pour certains services secondaires.


      Il est conseillé d'ajouter ces Autorités de Certifications (AC) à votre base de confiance si vous en avez une. Une solution idéale est d'utiliser un paquet d'autorités mises à jour automatiquement ([Mozilla par exemple](https://wiki.mozilla.org/CA/Included_Certificates))


      API Entreprise utilise des certificats multi-domaines ; c'est à dire avec un "nom courant" (_common name - CN_) et plusieurs "noms alternatifs du sujet" (_subject alternatives names - SAN_), soyez certains que vos outils fonctionnent correctement avec.


      #### Construire en compatibilité ascendante


      🚧 Ce contenu est en cours de construction et sera bientôt disponible. 🚧

---
