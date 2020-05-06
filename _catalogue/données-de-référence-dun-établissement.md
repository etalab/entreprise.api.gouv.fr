---
access: Restreint mais disponible sous d'autres conditions, chez
  [api.insee](https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=Sirene&version=V3&provider=insee)
  et [entreprise.data.gouv](https://entreprise.data.gouv.fr/)
providers:
  - insee
response:
  format: Donnée structurée JSON
  timeout: 5 secondes
  description: >-
    ###### La réponse JSON se décompose en trois catégories d'informations : 


    * **des données générales** sur l’établissement telles que la date de création, le nombre de salariés et la tranche effectif, l'activité principale et le statut de l'établissement par rapport à l'entreprise : s'agit-il du siège social ?

    * **des données géographiques**, la commune, la région et le pays d'implatation ; ainsi que l'adresse précise reconstruite par API Entreprise.  

    * **une donnée juridique** : l'état administratif de l'établissement et la date de fermeture le cas échéant.
  questions:
    qr1:
      question: Qu'est-ce que l'état administratif d'un établissement ?
      answer: >-
        L'état administratif d'un établissement a deux modalités : actif (A) ou
        fermé (F). Lors de son inscription au répertoire, un établissement
        est, sauf exception, à l’état "ouvert" (A). Le passage à l’état
        "fermé" découle de la prise en compte d’une déclaration de fermeture.


        ℹ️ Un établissement fermé peut être rouvert.
questions:
  qr1:
    answer: >-
      ###### Qu'est-ce qu'un établissement non diffusible ?


      Parmi les personnes physiques présentes dans le Répertoires Sirene, certaines, très majoritairement des entreprises individuelles, ont explicitement demandé de ne pas figurer en diffusion commerciale, en vertu de l'[article A123-96 du Code du Commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=C505A51DBC1A4EB1FFF3764C69ACDB1C.tpdjo11v_1?idArticle=LEGIARTI000020165030&cidTexte=LEGITEXT000005634379&dateTexte=20100702). Cela signifie qu'elles donnent accord de la diffusion de leur données uniquement à des organismes habilités et à des administrations. **De fait, leurs données ne sont pas publiques.**


      ⚠️ D'autres entités, y compris des personnes morales peuvent également être considérées comme non diffusibles, il s'agit notamment de la Défense Nationale, en vertu de l'[article A 123-95 du Code du commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=A50D4E549BAC95B63FFE10B24F86D7A5.tplgfr21s_1?idArticle=LEGIARTI000020165032&cidTexte=LEGITEXT000005634379&dateTexte=20100702), des SIRET immatriculés spécifiquement pour les impôts (Urssaf et comptabilités publiques).


      ###### Comment utiliser les données des non diffusibles?


      En utilisant l'endpoint `entreprise`, vous vous engagez à tenir compte du statut de diffusion le plus récent de chaque personne physique. 


      Dans le cas, où vous utilisez l'endpoint avec l'option d'appel `non_diffusable`, et que le champ `"diffusable_commercialement"` de la réponse JSON affiche `=false`, cela signifie que l'entreprise est non diffusible et que vous vous engagez à n’utiliser ces informations que dans le cadre strict de vos missions de service public, à ne pas les rediffuser ni les divulguer auprès de tiers non autorisés. 


      De fait, **les fonctionnalités de pré-remplissage de formulaires ne peuvent donc bénéficier de ces données au risque de les voir diffusées**. Il est par contre possible d’indiquer aux entreprises qu’elles peuvent modifier leur statut, même provisoirement, auprès de l’INSEE à l’adresse suivante : <https://statut-diffusion-sirene.insee.fr.>
    question: Comment utiliser les données privées des établissements non diffusibles ?
type: Informations générales
title: Données de référence d'un établissement
label: etablissements_insee
scope:
  - entreprises
  - associations
description: Obtenir des informations générales, géographiques et juridiques
  concernant un établissement du répertoire Sirene telles que les dates de
  création et de fin, l’adresse ou l’état administratif.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
  - Application de la loi énergie
opening: Données publiques sauf non diffusibles
perimeter:
  perimeter1:
    label: Lorem ipsum
    description: Lorem ipsum
  perimeter2:
    label: Lorem ipsum
    description: Lorem ipsum
  perimeter3:
    label: Lorem ipsum
    description: Lorem ipsum
  description: >-
    L'endpoint `etablissements_insee` vous donne accès : 


    * aux données "établissements" tirées du *Répertoire National d'identification des entreprises et des établissements*, géré par l'INSEE au travers du système Sirene


    ⚠️ *Cet endpoint* ne *concerne pas les entreprises, celles-ci sont appelables avec l'endpoint `entreprises_insee`*


    **Cet endpoint permet donc d'accéder aux informations de référence concernant les établissements:**


    * des personnes morales de droit privé. <br> ℹ️ *Toutes les entreprises immatriculées au Registre du Commerce et des Sociétés et au Répertoire des Métiers figurent dans la base Sirene* ; 

    * des personnes morales de droit public : les institutions et services de l’État et les collectivités territoriales ;

    * des associations ayant, en plus de leur numéro RNA, un numéro de SIREN/SIRET délivré lorsqu'elles :

      * emploient du personnel salarié ; 
      * sont soumises à la TVA ; 
      * ont demandé ou bénéficient de transferts financiers publics.
    * des organismes publics ou privés et les entreprises étrangères qui ont une représentation ou une activité en France.


    **Périmètre géographique :** La base Sirene concerne les unités implantées en métropole, dans les DOM et dans les collectivités d'Outre-Mer de Saint Pierre et Miquelon, Saint Barthélémy et Saint Martin. <br>⚠️ *Pour la Nouvelle-Calédonie, la Polynésie française, et Wallis-et-Futuna, seul le secteur public administratif, de l'État ou des communes est répertorié.*


    **Pour en savoir plus :** <br> [Contexte juridique du Répertoire National d’identification des entreprises et des établissements](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=134EFA0EE7BDCA89C2D6B31E02C48430.tplgfr30s_3?idSectionTA=LEGISCTA000006178890&cidTexte=LEGITEXT000005634379&dateTexte=20100904)
  label: Établissements d’entreprises, d'institutions administratives et de
    certaines associations
request:
  id:
    param: SiretDeL’Entreprise
    description: Le numéro de Siret de l’établissement
  parameters:
    param1:
      label: token
      description: JetonD’Habilitation
    param2:
      label: context
      description: CadreDeLaRequête
    param3:
      label: recipient
      description: BénéficiaireDeL'appel
    param4:
      label: object
      description: RaisonDeL'AppelOuIdentifiant
  options:
    option1:
      param: non_diffusable=true
      description: Une option d'appel vous permet d'accéder aux données des
        établissements dîts non-diffusibles, cette option nécessite une
        autorisation spécifique, accordée ou non par API Entreprise selon votre
        cas d'usage
      comment: "Si vous souhaitez accéder aux entreprises non diffusibles :"
  questions:
    qr1:
      answer: >-
        ###### Qu'est-ce qu'un établissement non diffusible ?


        Certaines personnes morales sont considérées par la loi comme non diffusibles, et à ce titre **leur données réportoriées dans le registre Sirene ne sont pas publiques**. Il s'agit notamment de la Défense Nationale, conformément à l'[article A 123-95 du Code du commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=A50D4E549BAC95B63FFE10B24F86D7A5.tplgfr21s_1?idArticle=LEGIARTI000020165032&cidTexte=LEGITEXT000005634379&dateTexte=20100702), ou des SIRET immatriculés spécifiquement pour les impôts (Urssaf et comptabilités publiques). 


        Par conséquent, l'ensemble de leurs établissements sont également considérés comme non-diffusibles.


        ###### Comment utiliser les données des non diffusibles ?


        En utilisant l'endpoint `etablissements_insee`,  **vous vous engagez** à n’utiliser ces informations que dans le cadre strict de vos missions de service public, **à ne pas les rediffuser ni les divulguer auprès de tiers non autorisés**. 


        ###### Comment accéder aux données des non-diffusibles avec l'API Entreprise ?


        Vous pouvez accéder aux entreprises non diffusées en ajoutant le paramètre `non_diffusables=true`. Un champ supplémentaire apparaît alors `diffusable_commercialement` indiquant si l'entreprise est diffusée ou non.


        ⚠️ Sans l'utilisation de cette option d'appel, si l'entreprise fait partie des non-diffusible, l'API vous renverra un code HTTP 403, même si votre token comporte les droits d'accès.
      question: ⚠️ Comment utiliser les données privées des établissements non
        diffusibles ?
history: Lorem ipsum
category: Informations générales
---
