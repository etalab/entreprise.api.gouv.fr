---
providers:
  - insee
access: Sous habilitation&nbsp;;<br>ou disponible partiellement sur
  [api.insee](https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=Sirene&version=V3&provider=insee)
  et [entreprise.data.gouv](https://entreprise.data.gouv.fr/)
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
weight: 2
type: Informations générales
title: Données de référence d'un établissement
label: /etablissements
scope:
  - entreprises
  - associations
description: Obtenir des **informations générales, géographiques et juridiques
  concernant un établissement** du répertoire Sirene telles que les dates de
  création et de fin, l’adresse ou l’état administratif.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
  - Application de la loi énergie
opening: Données publiques et confidentielles pour les non-diffusibles.
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
    L'endpoint `etablissements` vous donne accès aux données des établissements
    tirées du *Répertoire National d'identification des entreprises et des
    établissements (SIRENE)*, géré par l'INSEE au travers du système Sirene.


    ⚠️ Cet endpoint concerne uniquement les établissements, voir l'endpoint `entreprises` pour les données relatives aux sociétés.


    **Cet endpoint permet donc d'accéder aux informations de référence concernant les établissements:**


    * ✅ des personnes morales de droit privé. <br> ℹ️ *Toutes les entreprises immatriculées au Registre du Commerce et des Sociétés et au Répertoire des Métiers figurent dans la base Sirene* ;

    * ✅ des personnes morales de droit public : les institutions et services de l’État et les collectivités territoriales ;

    * ✅ des associations ayant, en plus de leur numéro RNA, un numéro de SIREN/SIRET délivré lorsqu'elles :

      * emploient du personnel salarié ;
      * sont soumises à la TVA ;
      * ont demandé ou bénéficient de transferts financiers publics.
    * ✅ des organismes publics ou privés et les entreprises étrangères qui ont une représentation ou une activité en France.


    **Périmètre géographique :** La base Sirene concerne les unités implantées en métropole, dans les DOM et dans les collectivités d'Outre-Mer de Saint Pierre et Miquelon, Saint Barthélémy et Saint Martin. <br>⚠️ *Pour la Nouvelle-Calédonie, la Polynésie française, et Wallis-et-Futuna, seul le secteur public administratif, de l'État ou des communes est répertorié ;* ❌ *les entreprises ne sont donc pas répertoriées*


    **Pour en savoir plus :** <br> [Contexte juridique du Répertoire National d’identification des entreprises et des établissements](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=134EFA0EE7BDCA89C2D6B31E02C48430.tplgfr30s_3?idSectionTA=LEGISCTA000006178890&cidTexte=LEGITEXT000005634379&dateTexte=20100904)
  label: Établissements d’entreprises, d'entrepreneurs individuels, d'institutions
    administratives et de certaines associations.
services:
  service1:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le numéro de SIRET de l’établissement.
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
          param: "&non_diffusable=true"
          description: Une option d'appel vous permet d'accéder aux données des
            établissements dîts non-diffusibles, cette option nécessite une
            autorisation spécifique, accordée ou non par API Entreprise selon
            votre cas d'usage.
          comment: "Pour accéder aux entreprises non-diffusibles :"
      questions:
        qr1:
          answer: >-
            ###### Qu'est-ce qu'un établissement non diffusible ?


            Parmi les entités présentes dans le Répertoires Sirene, certaines, très majoritairement des personnes physiques, ont explicitement demandé de ne pas figurer en diffusion commerciale, en vertu de l'[article A123-96 du Code du Commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=4B51AADBE47739C2522B00F646433905.tplgfr34s_3?idArticle=LEGIARTI000031043097&cidTexte=LEGITEXT000005634379&categorieLien=id&dateTexte=). Cela signifie qu'elles donnent accord de la diffusion de leur données et des données de leurs établissements uniquement à des organismes habilités et à des administrations. **De fait, ces données ne sont pas publiques.**


            ℹ️ Les établissements de la Défense Nationale font également partie des non-diffusibles mais ne sont accessibles que sur autorisation du Ministère de la Défense, conformément à l'[article A 123-95 du Code du commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=A50D4E549BAC95B63FFE10B24F86D7A5.tplgfr21s_1?idArticle=LEGIARTI000020165032&cidTexte=LEGITEXT000005634379&dateTexte=20100702).


            ###### Comment utiliser les données des non diffusibles ?


            En utilisant l'endpoint `etablissements`, vous vous engagez à tenir compte du statut de diffusion le plus récent de l'entité appelée. Dans le cas où vous utilisez l'endpoint avec l'option d'appel `non_diffusable`, et que le champ `diffusable_commercialement`de la réponse JSON affiche `=false,` cela signifie que l'entreprise est non diffusible et que **vous vous engagez** à n’utiliser les informations de leur établissement que dans le cadre strict de vos missions de service public, **à ne pas les rediffuser ni les divulguer auprès de tiers non autorisés**.


            ⚠️ **Vous ne pouvez pas donc pas faire usage de ces données pour du pré-remplissage.** Il vous est par contre possible d’indiquer aux entreprises qu’elles peuvent modifier leur statut, même provisoirement, auprès de l’INSEE à l’adresse suivante : <https://statut-diffusion-sirene.insee.fr>.


            ###### Comment accéder aux données des non-diffusibles avec l'API Entreprise ?


            Vous pouvez accéder aux entreprises non diffusées en ajoutant le paramètre `non_diffusables=true`. Un champ supplémentaire apparaît alors `diffusable_commercialement` indiquant si l'entreprise est diffusée ou non.


            ⚠️ Sans l'utilisation de cette option d'appel, si l'entreprise fait partie des non-diffusibles, l'API vous renverra un code HTTP 403, même si votre token comporte les droits d'accès.


            ###### Cas particulier d'unités présentes dans la base Sirene mais non disponibles


            Les établissements de gestion de paye de la fonction publique ont été immatriculés pour les seuls besoins de certaines administrations (les impôts, les URSSAF, la DGCP ...). Leur diffusion à d'autres administrations n'est donc pas prévue.
          question: ⚠️ Comment utiliser les données confidentielles des établissements non
            diffusibles ?
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse JSON se décompose en trois catégories d'informations :


        * les **données générales** sur l’établissement, telles que la date de création, le nombre de salariés et la tranche effectif, l'activité principale ou encore le statut siège social si l'établissement est concerné.

        * les **données géographiques :** la commune, la région et le pays d’implantation ; ainsi que l'adresse précise reconstruite par API Entreprise.

        * une **donnée juridique** : l'état administratif de l'établissement et la date de fermeture le cas échéant.
      questions:
        qr1:
          question: Qu'est-ce que l'état administratif d'un établissement ?
          answer: >-
            L'état administratif d'un établissement a deux modalités : actif (A)
            ou fermé (F). Lors de son inscription au répertoire, un
            établissement est, sauf exception, à l’état "ouvert" (A). Le
            passage à l’état "fermé" découle de la prise en compte d’une
            déclaration de fermeture.


            ℹ️ Un établissement fermé peut être rouvert.
      sample:
        code: >
          {
            "etablissement": {
              "siren": "418166096",
              "nic": "00051",
              // Numéro interne de classement, l'identifiant à 5 chiffres de l'établissement, qui se trouve à la fin du numéro de SIRET.
              "siret": "41816609600051",
              "statut_diffusion": true,
              // Indique si les données de l'établissement sont diffusables ("true") ou non ("false").
              "date_creation": 1108594800,
              // Format timestamp UNIX.
              "tranche_effectif_code": "11",
              // Le code effectif correspond à une fourchette de nombre de salariés, et correspond à la nomenclature de l'INSEE (http://www.sirene.fr/sirene/public/variable/tefen)
              "activite_principale_rnm_code": "123456",
              // Cette série de 6 chiffres désigne le code de l'activité exercée par l'artisan inscrit au registe des métiers, et renvoie à la Nomenclature d'Activités Françaises de l'Artisanat (NAFA), disponible à cette adresse : https://www.entreprises.gouv.fr/secteurs-professionnels/artisanat/la-nafa).
              "date_dernier_traitement": 1538217704,
              // Informe du dernier traitement de l'unité légale dans le répertoire Sirene. Cette date peut concerner des mises à jour de données du répertoire Sirene, qui ne sont pas diffusées par l'API. Cette date est délivrée au format timestamp UNIX. Cette variable peut-être à "null", notamment pour les unités cessées qui ont été purgées.
              "siege_social": true,
              // Ce champ vous permet de savoir si l'établissement appelé est le siège social d'une entreprise ("true") ou non ("false").
              "enseigne_1": null,
              "enseigne_2": null,
              "enseigne_3": null,
              // Ces trois derniers champs indique le nom de l'enseigne, c'est à dire l'appelation qui permet de facilement identifier l'établissement. Un établissement peut avoir plusieurs enseignes. Le nom de l'enseigne est parfois découpé sur les trois champs.
              "denomination_usuelle": null,
              // C'est le nom sous lequel l'établissement est connu du grand public. Cet élément d'identification de l'établissement a été enregistré au niveau établissement depuis l'application de la norme d'échanges CFE de 2008.
              "activite_principale_code": "62.02A",
              // Il s'agit du code APE de l'établissement (code APET), toujours composé de 4 chiffres et une lettre et codifié selon la Nomenclature d'Activité Française (https://www.insee.fr/fr/information/2120875). Les établissements d'une même entreprise peuvent avoir des activités différentes et de fait des APET différents. Le code APET peut également être identique à l'APE de l'entreprise (APEN) lorsque celle-ci n'a qu'un établissement.
              "activite_principale_nomenclature": "NAFRev2",
              // Ce champ indique la nomenclature en vigueur pour l'etablissement appelé. Depuis 2015, la version est la "NAF rév.2."
              "activite_principale_libelle": "Conseil en systèmes et logiciels informatiques", // indique le libellé du code APET de l'établissement selon la nomenclature concernée.
              "caractere_employeur": "O",
              // Indique si l'établissement a ou non des employés. La variable est "O" si l'établissement est employeur ; la variable est "N" si l'établissement ne l'est pas. La variable est historisée pour les établissements ouverts depuis 2005.
              "etat_administratif": {
                "value": "A",
                // Indique si l'établissement est actif, par "A". Ou s'il est jurdiquement fermé, par "F".
                "date_fermeture": null
                // Indique "null" quand le champ précédent est "A" (actif), et renvoit un entier au format timestamp si le champ précédent est "F" (fermé).
              },
              "adresse_1": {
              // Une entité peut dans certains cas avoir plusieurs adresses, par exemple quand le bâtiment a deux entrées.
                "complement": "LA PIOLINE",
                "numero_voie": "10",
                "indice_repetition": null,
                "type_voie": "ALL",
                "libelle_voie": "DES PLATANES LES MILLES",
                "code_postal": "13290",
                "commune_code": "13001",
                // Cette suite de 5 chiffres correspond au code des communes tel que défini dans le code officiel géographique (COG) géré par l'INSEE et disponible à cette adresse : https://www.insee.fr/fr/information/2028028
                "commune_libelle": "AIX-EN-PROVENCE",
                "commune_etranger_libelle": null,
                "distribution_speciale": null,
                "cedex_code": "13546",
                "cedex_libelle": "AIX EN PROVENCE CEDEX 4",
                "pays_etranger_code": "",
                // Cette suite de chiffres correspond au code des pays étrangers, tels que définis dans la Codification des pays et territoires étrangers, disponible à cette adresse : https://www.insee.fr/fr/information/2028273
                "pays_etranger_libelle": ""
              },
            }
          }
history: >-
  ##### 01/06/2019 La version 1 `etabilissement_legacy` est coupée
  définitivement.


  ###### 01/05/2019 Évolution de la source de données INSEE et impact sur les versions.


  Les APIs INSEE (appelées sirene_v2 par l'INSEE) qui alimentent notre API seront fermées en juin 2019. L'INSEE nous à d'ores et déjà mis à disposition la nouvelle version (appelée sirene_v3). Les versions n'étant pas strictement identiques, il y a des impacts à anticiper. Vous pouvez :


  * utiliser les nouvelles APIs de l'INSEE directement

  * continuer à utiliser API Entreprise (voir détail ci dessous)


  ###### Utiliser les nouvelles API de l’INSEE


  Cette solution ajoute de la complexité et nécessitera des travaux de votre part pour intégrer ces nouvelles API. Les APIs INSEE ne comportent pas les informations de mandataires sociaux mais vous pourrez interroger des données d'historique. <https://api.insee.fr/catalogue/>


  ###### Continuer chez API Entreprise


  Les endpoints `/v2/etablissements_legacy`, `/v2/entreprises_legacy` ne seront plus maintenus.


  Les endpoints `/v2/entreprises` et `/v2/etablissements` seront reconstruits à partir de sirene_v3 avec une période de transition.


  Les endpoints `/v2/etablissements/:siret/predecesseur` et `/v2/etablissements/:siret/successeur` seront coupés en attente de leur remise à disposition par l'INSEE normalement à la fin de l'année.


  En ce qui concerne `/v2/entreprises` et `/v2/etablissements` nous mettons à votre disposition en parallèle :


  * la version actuelle s'appuyant sur les API de l'INSEE sirene_v2 qui ferment en juin 2019

  * une version reconstruite à partir des API de l'INSEE nouvelle version sirene_v3 qui prennent le relai


  Jusqu'au 12 mai 2019, les deux version cohabitent. Par défaut nous servons les données comme d'habitude en nous appuyant sur sirene_v2. Vous pouvez dès à présent utiliser nos API basées les API sirene_v3 de l'INSEE en ajoutant le paramètre de requête `with_insee_v3=true`.


  **À compter du 13 mai 2019 l'API renverra systématiquement les données issues l'API sirene_v3 de l'INSEE, indépendament de la valeur ou la présence du champ `with_insee_v3`, vous avez jusqu'à cette date pour impacter vos services**


  Dans la nouvelle mouture, un champ a été ajouté à l'API actuelle ; le champ `etat_administratif` (cf JSON renvoyé).
category: Informations générales
---
