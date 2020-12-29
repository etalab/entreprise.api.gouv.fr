---
weight: 3
title: "Étape 3 : Démarrer avec API Entreprise"
identifier: demarrer
id: demarrer
panels:
  panel1:
    title: Effectuer sa demande d’habilitation 📝
    content: >-2
       La demande d'habilitation pour API Entreprise est relativement simple, et se compose de 3 étapes expliquées en détail ci-dessous :

      <details class="fold">

      <summary>

      ###### Étape 0 : Anticiper sa demande 🔎

      </summary>


      Après avoir lu les étapes 1 et 2, [ L'API Entreprise correspond-elle à mon besoin ?](#besoins) et [Les prérequis techniques avant d'aller plus loin](#prerequis), vous êtes désormais prêt à faire une demande d'accès.

      Pour vous permettre d'anticiper, ci-dessous la liste des informations nécessaires :


      * **le numéro siret de votre administration**. Vous pouvez vous aider du site [entreprise.data.gouv.fr](https://entreprise.data.gouv.fr){:target="_blank"} pour le retrouver.

      * **les données que vous souhaitez obtenir**. Une sélection vous sera proposée parmi une liste de données décrites dans la section "données délivrées".

        Aidez-vous des [cas d'usage](../cas_usage/) décrits pour vous assurer de votre légitimité.
        L’ensemble des données disponibles sur API Entreprise est détaillé dans le [catalogue des données](../catalogue/). Vous pouvez filtrer les données par cas d’usage.

        Une demande d’accès ne peut pas couvrir plusieurs contextes métiers différents et doit être adaptée au public utilisateur final. Si vous avez plusieurs contextes métiers pour lesquels vous souhaitez demander un accès, il vous faudra formuler une demande par contexte.

        {:.example}

        **Exemple de la Région Occitanie :**<br><br>Dans le cadre de son hub entreprises, **trois demandes différentes ont été faites** : une demande pour faciliter le renseignement des données par l’usager en pré-remplissant des formulaires à partir d’un numéro de SIRET ; une demande pour la pré-qualification des dossiers d’aides publiques avec l’accès à quelques données sensibles ; une demande pour l’instruction de dossiers avec l’accès à un nombre important de données sensibles pour aider les agents instructeurs.<br>**La région s’est vue remettre un espace client avec 3 tokens d’accès aux permissions différentes.**
        {:.example}


      * **le cadre juridique vous autorisant à traiter les données**.  L'accès à un endpoint de l'API Entreprise se fait sous réserve que son utilisation soit justifiée. C'est pourquoi, il vous sera systématiquement demandé une description précise de votre service et de l'utilité des données demandées dans ce contexte. Dans une majorité des cas, l'accès à la donnée requiert la fourniture d'un cadre juridique précis accompagné de justificatifs :   

        * Si vous êtes une administration centrale, une agence d'État, un opérateur, ou un service déconcentré, il vous faudra transmettre le **décrêt** ou l'**arrêté** justifiant votre demande.
        * Si vous êtes une collectivité, une **délibération** faisant acte du besoin est nécessaire. Lors de l'instruction de votre dossier, API Entreprise consultera ce document et s'appuiera sur les informations qui y sont inscrites, c'est à dire notamment la description de votre service, pour évaluer la pertinence des données demandées. 
        <br>Par exemple, si la délibération indique que votre service concerne uniquement les entreprises de moins de 300 000 euros de chiffres d'affaires, l'endpoint `/exercices`, permettant d'avoir les déclarations de l'entreprise, vous sera accordé. 
        <br>Enfin, pour être légale, une délibération doit comporter certains éléments administratifs. Ce [document de la Préfecture de l'AISNE](https://www.aisne.gouv.fr/content/download/20874/140668/file/Article_R%C3%A9dactionD%C3%A9lib%C3%A9rations) les présente en détail. 

        {:.tpl-notification.tpl--danger}

        Attention, quel que soit votre statut, le [**CRPA** (Code des relations entre le public et l'administration)](https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000031366350/2020-12-14/){:target="_blank"}, la [**loi ESSOC** (pour un État au service d'une société de confiance)](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000037307624/){:target="_blank"} ou la **loi Lemaire** (pour une République numérique) **ne sont pas suffisants** car ils indiquent un principe d'échange qui doit être complété par un cadre juridique précis pour l'utilisation envisagée.


      * **les coordonnées du responsable du traitement**.
        Le responsable du traitement des données est la personne physique ou morale qui, seul ou conjointement avec d’autres, détermine les finalités et les moyens du traitement des données à caractère personnel. Seule une personne appartenant à l'organisme demandeur peut être renseignée.
      * **les coordonnées de votre délégué·e à la protection des données (DPD)**.
        Le DPD est la personne qui s'assure que l'organisation protège convenablement les données à caractère personnel, conformément à la législation en vigueur. C'est généralement une personne appartenant à l'organisme demandeur.

       <details class="fold">
       <summary>
        Je n’ai pas de DPD, que faire ?
       </summary>

       Si vous n’avez pas de DPD, c’est que vous n’êtes probablement pas habilité à pouvoir utiliser API Entreprise. En effet, la nomination d’un DPD est obligatoire pour toute autorité publique ou tout organisme public, ainsi que pour toute entreprise effectuant un suivi régulier et systématique de données personnelles à grande échelle ou de données personnelles sensibles. Ce qui est au coeur de l’usage d’API Entreprise.

       </details>

      * **les coordonnées du contact métier**.

      * **les coordonnées du contact technique**. La personne ou l’équipe en charge du développement de l’interface logicielle qui va permettre l’interconnection effective avec API Entreprise.


      L'ensemble des coordonnées renseignées seront strictement utilisées pour communiquer avec vous.


      Vous devrez également **[accepter nos conditions générales d’utilisation](../cgu/){:target="_blank"}**.


      </details>


      <details class="fold">

      <summary>

      ###### Étape 1 : Faire sa demande d'habilitation sur api.gouv.fr 📝

      </summary>


      **Création du compte api.gouv.fr**


      |-------------------|-----------------|

      | Toute demande d’accès à l’API Entreprise nécessite la création d’un compte sur la plateforme [api.gouv.fr](https://datapass.api.gouv.fr/api-entreprise){:target="_blank"}.<br> **Avec un même compte vous pouvez réaliser plusieurs demandes**, et également accéder à API Particulier.<br>Une fois que vous avez inscrit votre adresse mail et un mot de passe, la plateforme vous demande un code à 10 chiffres. Ce code vous est envoyé, sous quelques minutes, par l'équipe api.gouv.fr, sur l'adresse que vous avez indiqué.           |        ![](../assets/images/documentation/data-pass-creation-compte.png){:width="1000"}       |


      | Ensuite, il vous est demandé **le numéro de SIRET de votre organisation**, celui-ci est indispensable pour toute création de compte.             |        ![](../assets/images/documentation/data-pass-creation-compte-siret.png){:width="1000"}        |


      **Remplir le formulaire d’accès**


      |-------------------|-----------------|

      |Remplissez [le formulaire de demande d’accès api.gouv.fr](https://datapass.api.gouv.fr/api-entreprise){:target="_blank"} puis validez-le.  |        ![](../assets/images/documentation/data-pass-remplir-formulaire.png){:width="1000"}        |

      |Au cas où il vous manquerait une information, vous pourrez reprendre ultérieurement le formulaire. Pour cela, n'oubliez pas de cliquer sur le bouton "Sauvegarder le brouillon" se trouvant en bas du formulaire.        |        ![](../assets/images/documentation/data-pass-enregistrer-brouillon.png){:width="1000"}        |


      <a class="tpl-button tpl-button--alternate" href="https://datapass.api.gouv.fr/api-entreprise" target="_blank">Se rendre sur api.gouv.fr</a>


      </details>


      <details class="fold">

      <summary>

      ###### Étape 2 : Suivre l'instruction du dossier par la DINUM ⚙️

      </summary>


      Une fois votre demande validée, nous instruisons alors votre dossier puis prenons une décision d’acceptation ou de refus de la demande d’accès. Cette instruction prend **en moyenne 11 jours** selon l’affluence des demandes. La durée de traitement est aussi **dépendante de la précision et de l'exhaustivité des informations que vous nous transmettez**, qui influeront sur le nombre d'aller-retour que nous aurons à faire pour le finaliser.


      * ❌ Si votre dossier est refusé, des précisions supplémentaires vous seront demandée avant tout refus définitif ;

      * ✅ Si votre dossier est validé, un mail de confirmation vous est envoyé. [Connectez-vous à votre tableau de bord](https://dashboard.entreprise.api.gouv.fr/login){:target="_blank"} avec vos identifiants api.gouv.fr.


      </details>


      ![](../assets/images/documentation/schema-procede-habilitation-api-entreprise.png)
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

      |**Domaine** <br>(ou préfixe) <br>qui conduit à l'API de façon sécurisée| prédéfini par endpoint|`http://entreprise.api.fouv.fr`|

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

      |`&recipient=BénéficaireDeL'Appel`|**Bénéficiaire de l'appel** <br>(siret de l'administration destinatrice des données)

      |`&object= RaisonDeL'AppelOuIdentifiant`|**La raison de l'appel** <br> ou l'identifiant de la procédure <br>(numéro de marché publique, nom de la procédure, description courte (< 50 caractères))

      |`?user_id= IdentifiantDeL'UtilisateurPhysique`|*\[obligatoire pour les endpoints DGFIP]*<br> **L'identifiant de l'utilisateur physique qui fait l'appel** <br>Par exemple dans le cas d'une place de marché, il s'agit de l'identifiant de l’acheteur public qui consulte la pièce. Il servira, en cas d’utilisation anormale de l’API, pour remonter à la source et vérifier que l’utilisateur avait bien le droit d’accéder à cette donnée.



  panel5:
    title: Configurer le logiciel métier ⚙️
    id: configuration
    content: >-
      #### Respecter la volumétrie


      Sur API Entreprise, vous avez le droit à **2000 requêtes par tranche de 10 minutes par IP** interrogeant nos services.


      **Au delà de ce taux, votre IP sera bannie** temporairement de nos serveurs. Les appels depuis une IP bannie ne renvoient pas de codes http, le serveur ne répond tout simplement pas. Par contre, dans votre tableau de bord, vous pouvez vérifier si vous avez dépassé ce seuil. Si par mégarde vous vous retrouviez dans cette situation, adressez-nous un email à [support@entreprise.api.gouv.fr](mailto:support@entreprise.api.gouv.fr)


      Si vous avez besoin de plus de volumétrie, veuillez également nous contacter, nous étudierons votre demande et si la situation s'y prête, nous whitelisterons votre / vos IPs pour éviter qu'elles ne se fassent bannir.


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
