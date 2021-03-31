---
weight: 8
type: Informations générales
title: Effectifs d'une entreprise
label: effectifs_..._acoss_covid
scope:
  - entreprises
description: Dans le cadre du volet 2 des aides régionales aux TPE pour faire
  face au Covid-19, API Entreprise a mis temporairement à disposition trois
  endpoints permettant de **connaître les effectifs mensuels ou annuels d'une
  entreprise ou d'un établissement**. Ces informations sont délivrées par
  l'agence centrale des organismes de la sécurité sociale (ACOSS).
usecases:
  - Aide d'urgence Covid-19
  - Préremplissage d'un formulaire
  - Détection de la fraude
opening: Données protégées.
providers:
  - acoss
perimeter:
  label: Toutes les entreprises sauf exceptions.
  description: >-
    Cette API permet d'accéder à ✅ **tous les effectifs des entreprises**, à
    l'exception :


    * ❌ des administrations et collectivités territoriales ;

    * ❌ des entreprises de Mayotte (ce qui représente 3500 établissements) ;

    * ❌ des entreprises des marins ;

    * ❌ des entreprises des cultes ;

    * ❌ des [junior-entreprises](https://fr.wikipedia.org/wiki/Junior-Entreprise) (environ 200).


    Le **calcul des effectifs** se fait en prenant en compte ✅ l'**ensemble des contrats** établis dans l'entreprise, ❌ mis à part les : 

    <details class="fold-underline">

    <summary>

    Lire la suite

    </summary>

    * convention de stage ; 

    * contrat d'apprentissage ;

    * contrat de volontariat de service civique ; 

    * contrat d'initiative emploi ;

    * contrat d'accompagnement  ;

    * contrat de professionnalisation ;

    * contrat CDD en remplacement d'un salarié absent ; 

    * contrat CDD en remplacement d'un salarié en formation professionnelle ; 

    * contrat de soutien et d'aide par le travail ;  

    * ligne de service ;

    * mandat d'élu ;

    * fonctionnaire en détachement ;

    * vendeur à domicile indépendant ;

    * mandat social ;

    * contrat colporteurs de presse ;

    * voyageurs et représentants de commerce multi-carte ;

    * contrat collaborateur occasionnel du service public ;

    * militaires de réserve ;

    * parcours d'accès aux carrières (Pacte).
    </details>
services:
  service1:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de l'entreprise
        extra1: effectifs_annuels_acoss_covid
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: context
          description: CadreDeLaRequête
        param3:
          label: recipient
          description: BénéficiaireDel’Appel
        param4:
          label: object
          description: RaisonDeL’AppelOuIdentifiant
      url: |-
        **effectifs_annuels_acoss_covid/**SirenDeL'entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    label: Effectifs annuels d'une entreprise
    response:
      sample:
        code: |
          {
            "siren": "418166096",
            "annee": "2019",
            "effectifs_annuels": 100.5
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: La réponse JSON se compose de l'effectif de l'année précédente. La
        date ainsi que l'effectif de l'entreprise sont indiqués pour un SIREN
        donné. L'effectif peut être un décimal.
  service2:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le mois recherché (année et mois) + le numéro de SIREN de l'entreprise
        extra1: effectifs_mensuels_acoss_covid/.../entreprise
        extra2: ""
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: context
          description: CadreDeLaRequête
        param3:
          label: recipient
          description: BénéficiaireDel’Appel
        param4:
          label: object
          description: RaisonDeL’AppelOuIdentifiant
      url: |-
        **effectifs_mensuels_acoss_covid/**Année**/**Mois
        **/entreprise/**SirenDeL'entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    label: Effectifs mensuels d'une entreprise
    response:
      sample:
        code: |
          {
            "siren": "418166096",
            "annee": "2020",
            "mois": "02",
            "effectifs_mensuels": 100.5
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse JSON se compose de l'effectif du mois indiqué en paramètre
        d'appel. La date ainsi que l'effectif de l'entreprise sont indiqués pour
        un SIREN donné. L'effectif peut être un décimal.\

        \

        Les effectifs étant mis à jour le 15 de chaque mois, avant cette date, il n'est possible de demander les effectifs que du mois précédent. Si la donnée est indisponible pour le mois demandé, l'API renverra un 404 avec un message d'erreur explicite.
  service3:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le mois recherché (année et mois) + le numéro de SIRET de
          l'établissement
        extra1: effectifs_mensuels_acoss_covid/.../etablissement
      parameters:
        param1:
          label: token
          description: JetonD’Habilitation
        param2:
          label: context
          description: CadreDeLaRequête
        param3:
          label: recipient
          description: BénéficiaireDel’Appel
        param4:
          label: object
          description: RaisonDeL’AppelOuIdentifiant
      url: |-
        **effectifs_mensuels_acoss_covid/**Année**/**Mois
        **/etablissement/**SiretDeL'entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    label: Effectifs mensuels d'un établissement
    response:
      sample:
        code: |
          {
            "siret": "41816609600026",
            "annee": "2020",
            "mois": "02",
            "effectifs_mensuels": 100.5
          }
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse JSON se compose de l'effectif du mois indiqué en paramètre
        d'appel. La date ainsi que l'effectif de l'établissement sont indiqués
        pour un SIREN donné. L'effectif peut être un décimal.


        Les effectifs étant mis à jour le 15 de chaque mois, avant cette date, il n'est possible de demander les effectifs que du mois précédent. Si la donnée est indisponible pour le mois demandé, l'API renverra un 404 avec un message d'erreur explicite.
---
