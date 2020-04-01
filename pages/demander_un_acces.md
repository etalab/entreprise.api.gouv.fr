---
layout: acces
title: Comment demander un accès à l’API Entreprise ?
permalink: /demander_un_acces/
---

## Conditions d'accès

Seules les administrations et les sociétés chargées d’une mission de service public sont éligibles.

## Anticiper la demande d’accès

__Voici les informations qui vous seront demandées :__

* **Le numéro siret de votre administration**
  <br />
  Vous pouvez vous aider de
  [entreprise.data.gouv.fr](https://entreprise.data.gouv.fr) pour le retrouver.

* **Les données que vous souhaitez demander**
  <br />
  Consultez la rubrique [cas d’usage]({{ site.baseurl }}/cas_usage/) qui vous aidera à connaitre les données délivrées en fonction des utilisations les plus fréquentes et consultez la documentation pour connaitre l’exhaustivité de l’offre.
  <br />
  Il vous faut effectuer une demande d'accès par démarche sauf si plusieurs démarches relevent du même contexte et utilisent le même périmettre de données. 

* **Le cadre administratif et légal** 
Texte ou délibération/décision qui vous légitime à recevoir ces données. Il est possible de mettre un lien vers le texte de loi, ajouter des pièces jointes ou décrire votre contexte.

* **Les coordonnées de votre délégué·e à la protection des données (DPD)**
Votre DPD s’assure que votre organisation protège convenablement les données à caractère personnel, conformément à la législation en vigueur. C’est généralement une personne qui appartient à l’organisme demandeur.

* **Les coordonnées du ou de la responsable du traitement**
Le/la responsable du traitement des données détermine les finalités et les moyens du traitement des données à caractère personnel. Seule une personne appartenant à l’organisme demandeur peut être renseignée.

* **Les coordonnées de l’interlocut·eur·rice métier**

* **Les coordonnées de l’interlocut·eur·rice technique**
La personne ou l’équipe en charge du développement de l’interface logicielle qui va permettre l’inter-connection effective avec API Entreprise.

* Vous devrez aussi accepter [**nos conditions générales d’utilisation**]({{ site.baseurl }}/cgu/) que nous vous recommandons de consulter en amont ;

*Les coordonnées renseignées seront utilisées pour communiquer avec vous.*


## Les étapes de la demande

#### Les demandes se font par le formulaire d'habilitation dénommé SignUp

Les étapes d’obtention d’un accès aux données sont les suivantes :

**1. Créer un compte**
  <br />
  Si vous n’en disposez pas déjà, vous devez vous créer un compte sur l’interface SignUp prévue à cet effet.
  Un seul compte par organisation suffit pour une demande, comme pour plusieurs demandes (exemple de la région Occitanie).
  Votre nom, prénom et adresse mail vous seront demandés… Ainsi que le numéro de SIRET de votre organisation :arrow_down:

**2. Rejoindre une organisation avec son numéro de SIRET**
  <br />
  À ce stade trois possibilités existent :
  * Aucun mail n’est rattaché au SIRET transmis, ce qui signifie qu’aucun compte n’existe.
  * Un ou plusieurs mails avec le même nom de domaine sont déjà rattachés au SIRET transmis : un compte existe déjà. Dans ce cas, les membres déjà créés dans votre organisation sont notifiés de votre inscription.
  * Un ou plusieurs mails sont déjà rattachés au SIRET transmis mais les noms de domaines sont différents, un compte existe mais la création du compte est suspendue, un message vous indique de contacter le support.

**3. Activer le compte grâce au mail d’activation**
  <br />
  Vous le recevez à l’adresse mail indiquée lors de la création du compte.

**4. Remplir le formulaire de demande d’accès**
  <br />
  L’ensemble des informations nécessaires sont détaillées plus haut, remplissez votre formulaire en n’oubliant pas de sauvegarder votre brouillon régulièrement.
  Validez-le.

**5. Nous instruisons votre dossier et prenons une décision d’acceptation ou de refus de la demande d’accès.**
* Votre demande est refusée : Vous recevrez un mail vous indiquant pourquoi, s’il nous manque des informations, nous vous demanderons des précisions supplémentaires.
* Votre demande est validée : nous vous en informons et créons votre compte d’accès au tableau de bord.

#### Le jetons d’accès est disponible dans le tableau de bord

Votre jeton d'accès est stocké dans le tableau de bord à l'adresse suivante : 
[http://dashboard.entreprise.api.gouv.fr](http://dashboard.entreprise.api.gouv.fr) 

**1. Initialisation de votre compte d'accès au tableau de bord**
  <br />
Le compte d'accès au tableau de bord est différent de celui utilisé pour le formulaire d'habilitation "Signup".

Dès la validation de votre demande vous recevrez un mail vous permettant d'activer votre compte dans le tableau de bord grâce à un lien d'accès à ce site.

Vous pouvez aussi activer votre compte directement à l'adresse suivante [https://dashboard.entreprise.api.gouv.fr/login](http://dashboard.entreprise.api.gouv.fr)

**2. Utiliser votre jetons d’accès pour appeler l’API Entreprise.**
  <br />
  
Vous pourrez récupérer votre jetons d’accès (token) dans l’onglet “jetons”.

Vous pourrez aussi consulter les statistiques d'usage des données, contrôler le volume de votre consommation et prendre connaissance des erreurs d'appel. 

Les techniciens pourront lire le détail des dernières requêtes effectuées par leur application. 


