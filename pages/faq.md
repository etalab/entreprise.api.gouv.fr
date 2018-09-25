---
layout: faq
title: FOIRE AUX QUESTIONS
description: Réponses aux questions les plus fréquemment posées
permalink: /faq/
---

## Quels sont les conditions pour obtenir un accès à API Entreprise ?

Actuellement, seules les administrations et les sociétés chargées d'une mission
de Service Publique peuvent prétendre à l'obtention d'un accès.

## Les requêtes multi-origines (CORS - Cross-Origin Resource Sharing) sont-elles autorisées ?

Non, nous ne pouvons pas autoriser le CORS qui vous permettrait d'interroger
directement API Entreprise depuis un site ou une application web. En effet, cela
sous-entend que votre token d'accès serait présent dans le code source du site
web en question, et par ce biais disponible au public. Si vous souhaitez mettre
à disposition les données API Entreprise depuis un navigateur, il vous revient
de mettre en place un système de proxy pour ne pas appeler directement nos APIs.

## Le service API Entreprise semble soudainement rejeter vos requêtes.

Actuellement, le nombre d'appels aux API Entreprise est limité à 2000 requêtes
par tranches de 10 minutes par adresses IP. Au delà, l'adresse IP est bannie de
nos serveurs pour une durée de 24 heures, et ces derniers ne répondent alors
simplement pas. Si vous pensez être dans cette situation, vous pouvez nous
contacter à [{{ site.email }}][email-address].

## Qu'est-ce qu'un code retour HTTP 206 ?

Nos APIs peuvent renvoyer une réponse avec un code HTTP 206, pour "Réponse
incomplète". Une réponse est qualifiée d'incomplète quand :

* la réponse consiste en une aggrégation de données issus de plusieurs
  fournisseurs, et au moins l'un de ces fournisseurs ne répond pas au moment de
  votre requête. Les données en question ne sont alors pas présentes dans la
  réponse.

* a lieu une modification dans le format de réponse d'un fournisseur, les
  données concernées ne sont alors pas présentes dans la réponse fournie par API
  Entreprise.

Quand une donnée est normalement présente dans la réponse à une requête mais
que, suite à l'une des situations décrites plus haut elle n'est pas présente
dans le JSON de réponse, le champs correspondant contient le label "Donnée
indisponible" et le code retour HTTP vaut 206.

## Je suis protégé par un filtre anti-spam

Un certain de nombre de messages sont envoyés à notre équipe support depuis des
adresses e-mails protégées par des filtres anti-spam comme MailInBlack. Or il est
nécessaires que nos usagers reçoivent certains emails envoyés automatiquement
ne serait-ce que pour activer leur compte.

Merci de vérifier que votre adresse email n'est pas protégée par un service
anti-spams dans le cas où vous ne recevriez pas de réponse.

[email-address]: mailto:{{ site.email }}
