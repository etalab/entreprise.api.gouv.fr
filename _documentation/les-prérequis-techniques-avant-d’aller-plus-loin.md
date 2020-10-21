---
weight: 2
title: "Étape 2 : Les prérequis techniques avant d’aller plus loin"
identifier: prerequis
panels:
  panel1:
    title: Qu’est-ce qu’une API ? 🤖
    id: apis
    content: >-
      Une API permet d’**agir sur des ressources** contenues dans un autre
      système d’information, **sans soi-même avoir la main sur ce système
      d’information**.


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

      |------------------------------------------------------------|-------------------------------------------|

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
        ⚠️ En effet, il y a des précautions à prendre : Par défaut, l’historique de votre navigateur enregistre des informations confidentielles dont votre jeton d’accès. Or comme vous avez pu le lire dans la rubrique précédente [Un accès sous habilitation et sous conditions](#acces), la grande majorité des données accessibles par API Entreprise sont protégées par des secrets, vous êtes donc tenus de vous assurer qu’elles ne soient pas diffusées.
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


      **Cas n°1** : Le JSON vous renvoie un lien URL, permettant d’**accéder à un document PDF** :


      ```

      {
        "url":"http://la-fameuse-url-permettant-d-acceder-au-document.pdf"
      }

      ```


      **Cas n°2** : Le JSON vous renvoie un lien URL, permettant d’**accéder à une archive de plusieurs documents**, au format ZIP:


      ```

      {
         "http://la-fameuse-url-permettant-d-acceder-a-l-archive-de-documents.zip"
      }

      ```


      **Cas n°3** : Le JSON vous renvoie les **données structurées** :


      Dans ce cas précis, les données étant toutes renvoyées au format JSON, les couples “champ” / “valeur” peuvent être regroupé dans différentes catégories.


      ```

      {
        "eligible": true,
        "message": "00 Compte éligible pour attestation de cotisation"`
      }

      ```


      Pour une information détaillée par endpoint, reportez-vous au [catalogue de données](../catalogue/).
  panel2:
    title: Qu'est qu'un token ? 🔑
    id: tokens
    content: >-
      #### Le token, une clé unique et privée


      Le token est **votre code secret** vous permettant d’accéder à API Entreprise.


      Si votre demande d’habilitation est validée, il vous est délivré dans [votre espace personnel](https://dashboard.entreprise.api.gouv.fr/login){:target="_blank"}.


      **Cette clé est unique et privée** ; nous nous appuyons sur un standard ouvert et normalisé de l’industrie : le Json Web Token (aka JWT) ([RFC 7519](https://tools.ietf.org/html/rfc7519){:target="_blank"}). Ce jeton est autonome et permet de transmettre de façon sécurisée les informations d'authentifications nécessaires pour utiliser l'API. Ces jetons sont vérifiés et fiables car **signés numériquement avec une date d'expiration**.


      #### Ne jamais divulguer son token


      {:.tpl-notification.tpl--danger}

      Votre token vous est propre, **il ne faut pas le diffuser** : c’est comme votre clé d’appartement, vous ne l’envoyez pas par la poste car il y a un risque que celle-ci soit interceptée par une personne mal intentionnée.


      C’est pourquoi, vous ne devez **jamais copier-coller un token dans un moteur de recherche** ou dans un e-mail.L’usage de votre token se fait uniquement dans votre logiciel métier sécurisé utilisé pour réaliser vos appels.


      #### Un token a une fin de vie


      La durée de vie d’un token est limitée, sa date d’expiration est indiqué dans [votre espace personnel](https://dashboard.entreprise.api.gouv.fr/login){:target="_blank"}.


      Le token peut également être supprimé s’il a été diffusé par mégarde.

      Le **renouvellement d’un token est très facile et rapide**. C’est pourquoi, si vous avez divulgué votre token par erreur, n’hésitez pas à écrire rapidement à [support@entreprise.api.gouv.fr](https://dashboard.entreprise.api.gouv.fr/login){:target="_blank"}. Pour en savoir plus sur le renouvellement d’un token, consultez la rubrique [Renouveler un token en fin de vie](#tape-2--remplir-le-formulaire-de-renouvellement-).
  panel3:
    title: Les fondamentaux à mettre en place avec l'équipe technique 🧰
    id: fondamentaux
    content: >
      
      Vous travaillez avec la DSI de votre administration ou avec un éditeur de logiciel, voici la liste des fondamentaux que votre équipe technique doit être en mesure de mettre en place pour un bon fonctionnement de l'API Entreprise : 


      ✅ Pouvoir prendre en charge la mise à jour des protocoles de sécurité HTTPS ;


      ✅ Anticiper la mise à jour du logiciel métier ;


      ✅ Avoir une version de langage suffisamment récente. API Entreprise ne fonctionne qu’avec Java 1.7 minimum (pour la gestion des certificats de +1024 bit) ;


      ✅ Prévoir de whitelister l'adresse IP du service API Entreprise si votre réseau est derrière un pare-feu. En effet, l'API Entreprise est accessible depuis internet.


      ✅ Anticiper les coûts de maintenance qui s'ajouteront aux coûts de mise en place.
  panel4:
    title: Prévoir les incidents et la résilience de mon service 🧑‍🚒
    id: incidents
    content: >-
      Il se peut qu’un incident survienne chez un fournisseur de données. Votre
      logiciel doit vous permettre de fonctionner de manière dégradée :


      * si vous effectuez une fonction de pré-remplissage et que le service est à l’arrêt, **prévoyez un fonctionnement sans pré-remplissage**.

      * en cas d’utilisation de justificatifs, **prévoyez de permettre à vos usagers de pouvoir transmettre un document par eux-même**.


      {:.tpl-notification.tpl--success}

      Le Dîtes-le-nous-une-fois ne doit pas bloquer les usagers en cas d’incidents techniques : vos usagers préfèreront toujours vous redonner leurs informations plutôt que de ne pas pouvoir utiliser votre service.
---
