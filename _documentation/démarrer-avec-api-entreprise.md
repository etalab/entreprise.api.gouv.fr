---
title: Démarrer avec API Entreprise
id: demarrer
panels:
  panel1:
    title: Effectuer sa demande d’habilitation 📝
    content: >
      
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
    id: demande-habilitation
  panel2:
    title: Habilitation validée ✅, récupérer son token 🔐
    id: habilitation-validee
    content: >
      
      Pour récupérer vos tokens ou jetons d'accès, il faut vous rendre dans [votre espace client](https://dashboard.entreprise.api.gouv.fr/login) à l'onglet "Jetons" :


      ![](../assets/images/documentation/tableaudebord-recuperer-son-token.png)


      Tous vos jetons sont valables pour une durée de 18 mois.
  panel3:
    title: Faire ma première requête ☎️
    id: premiere-requete
    content: >
      
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
  panel4:
    title: Configurer le logiciel métier ⚙️
    id: configuration
    content: >
      
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
  panel5:
    title: Faire mon premier test de bout en bout 🛫
    id: premier-test
---
