---
layout: faq
title: FOIRE AUX QUESTIONS
description: Réponses aux questions les plus fréquemment posées
permalink: /faq/
---

## Les requêtes multi-origines (CORS - Cross-Origin Resource Sharing) sont-elles autorisées ?

Non, nous ne pouvons pas autoriser le CORS qui vous permettrait d'interroger
directement API Entreprise depuis un site ou une application web. En effet, cela
sous-entend que votre token d'accès serait présent dans le code source du site
web en question, et par ce biais disponible au public. Si vous souhaitez mettre
à disposition les données API Entreprise depuis un navigateur, il vous revient
de mettre en place un système de proxy pour ne pas appeler directement nos APIs.

## Le service API Entreprise semble soudainement rejeter vos requêtes.

Actuellement, le nombre d'appels aux API Entreprise est limité à 1000 requêtes
par heures par adresses IP. Au delà, l'adresse IP est bannie de nos serveurs, et
ces derniers ne répondent alors simplement pas. Si vous pensez être dans cette
situation, vous pouvez nous contacter à [{{ site.email }}][email-address].

[email-address]: mailto:{{ site.email }}
