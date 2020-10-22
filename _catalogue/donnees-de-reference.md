---
providers:
  - insee
  - infogreffe
new:
access: Sous habilitation&nbsp;;<br>ou disponible partiellement sur
  [api.insee](https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=Sirene&version=V3&provider=insee){:target="_blank"}
  et [entreprise.data.gouv](https://entreprise.data.gouv.fr/){:target="_blank"}.
weight: 1
type: Informations générales
title: Données de référence d'une entité
label: entreprises
scope:
  - entreprises
  - associations
description: Obtenir des **informations concernant une entité du répertoire
  Sirene** telles que les dates de création et de fin&nbsp;; le code effectif,
  le numéro de TVA intracommunautaire&nbsp;; la forme juridique... ou encore les
  mandataires sociaux et l’état administratif de l’entreprise.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
  - Application de la loi énergie - Art.64
opening: Données publiques et confidentielles pour les non-diffusibles.
perimeter:
  label: Entreprises, entrepreneurs individuels, institutions administratives et
    certaines associations.
  description: >-
    L'endpoint `entreprises` vous donne accès :


    * aux données tirées du *Répertoire National d'identification des entreprises et des établissements*, géré par l'INSEE au travers du système Sirene ;

    * ainsi qu'aux observations d'Infogreffe, quand elles sont disponibles pour le SIREN appelé.


    ⚠️ Cet endpoint ne concerne pas les établissements, ceux-ci sont appelables avec l'endpoint `etablissement_insee`.


    **Cet endpoint permet donc d'accéder aux informations de référence concernant&nbsp;:**


    * ✅ les personnes morales de droit privé : les entreprises. <br> ℹ️ *Toutes les entreprises immatriculées au Registre du Commerce et des Sociétés et au Répertoire des Métiers figurent dans la base Sirene* ;

    * ✅ les personnes morales de droit public : les institutions et services de l’État et les collectivités territoriales ;

    * ✅ les entrepreneurs individuels exerçant de manière indépendante une profession non salariée (exemple : un commerçant, un médecin), ayant fait une déclaration d'activité. <br> ❌ *Les particuliers employeurs ne font pas partie de la base Sirene* ;

    * ✅ les associations ayant, en plus de leur numéro RNA, un numéro de SIREN/SIRET délivré lorsqu'elles :

      * emploient du personnel salarié ;
      * sont soumises à la TVA ;
      * ont demandé ou bénéficient de transferts financiers publics.
    * ✅ Les organismes publics ou privés et les entreprises étrangères qui ont une représentation ou une activité en France.


    **Périmètre géographique :** <br>La base Sirene concerne les unités implantées en métropole, dans les DOM et dans les collectivités d'Outre-Mer de Saint Pierre et Miquelon, Saint Barthélémy et Saint Martin. <br>⚠️ *Pour la Nouvelle-Calédonie, la Polynésie française, et Wallis-et-Futuna, seul le secteur public administratif, de l'État ou des communes est répertorié ;* ❌ *les entreprises ne sont donc pas disponibles.*


    **Pour en savoir plus :** <br> [Contexte juridique du Répertoire National d’identification des entreprises et des établissements](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=134EFA0EE7BDCA89C2D6B31E02C48430.tplgfr30s_3?idSectionTA=LEGISCTA000006178890&cidTexte=LEGITEXT000005634379&dateTexte=20100904){:target="_blank"}
services:
  service1:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de la personne physique ou morale recherchée.
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
          description: Une option d'appel vous permet de connaître l'état administratif de
            l'entreprise, à savoir si l'entreprise est active ou cessée ;
          param: "&with_etat_administratif=true"
          comment: "Pour connaître l'état administratif de l’entreprise, <br>ajouter le
            paramètre facultatif suivant :"
        option2:
          description: Une autre vous donne accès aux données des entreprises dîtes
            non-diffusibles, cette option nécessite une autorisation spécifique,
            accordée ou non par API&nbsp;Entreprise selon votre cas d'usage.
          param: "&non_diffusable=true"
          comment: "Pour accéder aux entreprises nondiffusibles :"
      questions:
        qr1:
          question: Qu'est-ce que l'état administratif  d'une entreprise ? <br> Comment y
            accéder avec API Entreprise ?
          answer: >-
            ###### L'état administratif d'une entreprise


            L’état administratif indique si une entreprise est active (A) ou cessée (C). C'est son état juridique.


            L’entreprise est considérée comme juridiquement cessée pour les personnes morales si&nbsp;:


            * il y a eu dépôt de la déclaration de disparition de la personne morale&nbsp;;

            * elle a été inscrite sans activité à sa demande. Dans le cas d'une création au répertoire Sirene mais sans avoir encore démarré une activité (activité principale provisoire “0000Z”)&nbsp;;

            * elle n’a plus d’établissement en activité.


            L’entreprise est considérée comme juridiquement cessée pour les personnes physiques si&nbsp;:


            * l'exploitant de l'entreprise décède ;

            * l'exploitant dépose une cessation d'activité.


            En dehors de ces cas, l'état administratif de l'entreprise est toujours actif.


            ℹ️ *Pour les personnes physiques, dans le cas où l’exploitant déclare la cessation de son activité, puis la reprend quelque temps plus tard, cet état est réversible. Il est donc normal d'avoir des périodes successives d'état actif puis cessé pour les personnes physiques. Pour les personnes morales, l'état administratif est en théorie irréversible.*


            ###### Comment connaître l'état administratif de l'entité demandée ?


            Il vous faudra ajouter l'option d'appel `with_etat_administratif`, deux champs seront alors disponibles dans la réponse JSON, vous indiquant l'état de l'entité et la date de cessation si tel est le cas.
        qr2:
          answer: >-
            ###### Qu'est-ce qu'un non diffusible ?


            Parmi les entités présentes dans le répertoire Sirene, certaines, très majoritairement des personnes physiques, ont explicitement demandé de ne pas figurer en diffusion commerciale, en vertu de l'[article A123-96 du Code du Commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=05151825BF21FEAB1A0E985BB0B146B9.tplgfr27s_1?idArticle=LEGIARTI000031043097&cidTexte=LEGITEXT000005634379&categorieLien=id&dateTexte=){:target="_blank"}. Cela signifie qu'elles donnent accord de la diffusion de leur données uniquement à des organismes habilités et à des administrations. **De fait, leurs données ne sont pas publiques.**


            ℹ️ Les unités de la Défense Nationale font également partie des non-diffusibles mais ne sont accessibles que sur autorisation du Ministère de la Défense, conformément à l'[article A 123-95 du Code du commerce](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=A50D4E549BAC95B63FFE10B24F86D7A5.tplgfr21s_1?idArticle=LEGIARTI000020165032&cidTexte=LEGITEXT000005634379&dateTexte=20100702){:target="_blank"}.


            ###### Comment utiliser les données des non diffusibles ?


            En utilisant l'endpoint `entreprises`, vous vous engagez à tenir compte du statut de diffusion le plus récent de l'entité appelée. Dans le cas, où vous utilisez l'endpoint avec l'option d'appel `non_diffusable`, et que le champ `diffusable_commercialement`de la réponse JSON affiche `=false,` cela signifie que l'entreprise est non diffusible et que **vous vous engagez** à n’utiliser ces informations que dans le cadre strict de vos missions de service public, **à ne pas les rediffuser ni les divulguer auprès de tiers non autorisés**.


            ⚠️ **Vous ne pouvez pas en faire usage pour du pré-remplissage.** Il vous est par contre possible d’indiquer aux entreprises qu’elles peuvent modifier leur statut, même provisoirement, auprès de l’INSEE à l’adresse suivante : <https://statut-diffusion-sirene.insee.fr>{:target="_blank"}.


            ###### Comment accéder aux données des non-diffusibles avec l'API Entreprise ?


            Vous pouvez accéder aux entreprises non-diffusibles en ajoutant le paramètre `non_diffusables=true`. Un champ supplémentaire apparaît alors `diffusable_commercialement` indiquant si l'entreprise est diffusée ou non.


            ⚠️ Sans l'utilisation de cette option d'appel, si l'entreprise fait partie des non-diffusibles, l'API vous renverra un code `HTTP 451`, même si votre token comporte les droits d'accès.


            ###### Cas particulier d'unités présentes dans la base Sirene mais non disponibles


            Certaines unités ont été immatriculées pour les seuls besoins d'administrations (les impôts, les URSSAF, la DGCP ...). Leur diffusion à d'autres administrations n'est pas prévue. Il s'agit :


            * des unités de gestion de paye de la fonction publique ;

            * des unités provisoires (c'est à dire des entreprises ayant obtenu un numéro SIREN provisoire au gichet du Centre de Formalités des Entreprises (CFE) au moment de leur déclaration ; numéro qui sera par la suite confirmé, à la réception de la déclaration de création, et fera entrer ces entreprises dans le Répertoire.
          question: ⚠️ Comment utiliser les données confidentielles <br>des entreprises
            non diffusibles ?
    response:
      format: Donnée structurée JSON
      timeout: 5 secondes
      description: >-
        La réponse JSON est composée de trois ensembles distincts :


        * la partie **entreprise**, qui contient les données génériques, les mandataires sociaux et l’état administratif de la personne physique ou morale ;

        * la partie **établissement siège**, qui contient les données du siège social, celles-ci étant disponibles également par l'endpoint `etablissements` ;

        * la clé **gateway error**, indiquant si un fournisseur de données n’a pas fonctionné.
      La réponse est composée de trois ensembles: null
      sample:
        code: >-
          {

          // I- ENTREPRISE

          // 1-Données générales

          "entreprise": {
            "siren": "418166096",
            "capital_social": 509525,
            "numero_tva_intracommunautaire": "FR16418166096",
            // Également appelé numéro d’identification fiscale NIF. Ce numéro est calculé par API Entreprise selon la règle officielle, cette donnée est donc théorique. Dans le cas où l’établissement siège est à l’étranger, la valeur renvoit "null". En effet, dans ce cas le numéro de TVA est problablement calculé par le pays où se situe l'établissement siège et non par la France. La seule source fiable est alors l'entreprise elle-même.
            "forme_juridique": "SA à directoire (s.a.i.)",
            "forme_juridique_code": "5699",
            // Ces deux champs précédents sont issus de la nomenclature des catégories juridiques de l’INSEE. Pour les personnes physique, cette variable est à 1000.
            "nom_commercial": "OCTO-TECHNOLOGY",
            // Cette variable est "null" pour les personnes physiques.
            "procedure_collective": false,
            // Toujours indiqué comme "false", et à ignorer. Ce champ sera bientôt supprimé.
            "enseigne": null,
            "naf_entreprise": "6202A",
            "libelle_naf_entreprise": "Conseil en systèmes et logiciels informatiques",
            // Issu de la nomenclature d’activités française de l’INSEE.
            "raison_sociale": "OCTO-TECHNOLOGY",
            "siret_siege_social": "41816609600051",
            "code_effectif_entreprise": "31",
            // Le code effectif correspond à une fourchette de nombre de salariés, celle-ci est indiquée un peu plus loin au champ "tranche_effectif_salarie_entreprise". Ce code respecte la nomenclature de l'INSEE disponible à cette adresse : http://www.sirene.fr/sirene/public/variable/tefen
            "date_creation": 891381600,
            // Date au format timestamp UNIX.
            "nom": null,
            "prenom": null,
            "date_radiation": null,
            // Indique null si l’entreprise n’est pas radiée du registre. Dans le cas contraire, la date est fournie au format timestamp UNIX 000000000.
            "categorie_entreprise": "PME",
            // Trois modalités possibles : "PME", petite ou moyenne entreprise, dont les micros entreprises ; "ETI" entreprise de taille intermédiaire ; ou "GE", grande entreprise. Cette variable est calculée par l'INSEE, selon la méthode explicitée à l'adresse https://www.insee.fr/fr/information/1730869
            "tranche_effectif_salarie_entreprise": {
            // Les champs suivants indiquent en détail l'effectif de salariés de l'entreprise.
              "de": 200,
              "a": 249,
              "code": "31",
              "date_reference": "2014",
              "intitule": "200 à 249 salariés"
            },
            "mandataires_sociaux": [
            // Il y a deux types de mandataires sociaux, les personnes physiques et les personnes morales.
            {
            // Dans le cas d'une personne physique, voici les données fournies :
              "nom": "Henri",
              "prenom": "Martin",
              "fonction": "Président du Directoire",
              "dirigeant": true,
              // Toujours "true"
              "date_naissance": "1965-01-27",
              "date_naissance_timestamp": -155523600,
              "raison_sociale": "",
              // Ce champ est toujours vide car il concerne les personnes morales.
              "identifiant": "",
              // Ce champ est toujours vide car il concerne les personnes morales.
              "type": "PP"
              // Signifie qu'il s'agit d'une personne physique.
            },
            {
            // Dans le cas d'une personne morale, voici les données fournies :
              "nom": "",
              // Ce champ est vide car il concerne les personnes physiques.
              "prenom": "",
              // Ce champ est vide car il concerne les personnes physiques.
              "fonction": "COMMISSAIRE AUX COMPTES SUPPLEANT",
              "dirigeant": true,
              // Toujours "true".
              "date_naissance": "",
              // Ce champ est vide car il concerne les personnes physiques.
              "date_naissance_timestamp": 0,
              // Ce champ est vide car il concerne les personnes physiques.
              "raison_sociale": "BCRH & ASSOCIES - SOCIETE A RESPONSABILITE LIMITEE A ASSOCIE UNIQUE",
              "identifiant": "490092574",
              // Cet élément de 7 à 9 chiffres est facultatif et peut être vide.
              "type": "PM"
              // Signifie qu'il s'agit d'une personne morale.
            }],
            "etat_administratif": {
              // L’état administratif est l’état juridique de l’entreprise (source INSEE).
              "value": "C",
              // Indique si l'entreprise est juridiquement active, par "A". Ou si elle est jurdiquement cessée, par "C". Dans certains cas exceptionnels, l'état peut être "null". Par exemple, lorsqu'une entité vient de créer son SIREN, mais qu'elle n'a pas encore débuté son activité.
              "date_cessation": 1315173600
              // Indique "null" quand l'entreprise est jurdiquement active. Quand "value = C", un timestamp (un entier) est renvoyé.
            },
            "diffusable_commercialement": true
            // Indique si l'entreprise fait partie des non-diffusibles. Il est uniquement présent avec l'option d'appel "non_diffusables=true". La valeur indiquée est "false" dans le cas où l'entreprise est non-diffusible, cela signifie que ces données ne doivent en aucun cas être accessibles au grand public.
          },

          "etablissement_siege": {
            "siege_social": true,
            "siret": "41816609600051",
            "naf": "6202A",
            "libelle_naf": "Conseil en systèmes et logiciels informatiques",
            "date_mise_a_jour": 1449183600,
            "tranche_effectif_salarie_etablissement": {
              "de": 200,
              "a": 249,
              "code": "31",
              "date_reference": "2014",
              "intitule": "200 à 249 salariés"
            },
            "date_creation_etablissement": 1108594800,
            "enseigne": null,
            "region_implantation": {
              "code": "11",
              "value": "Île-de-France"
            },
            "commune_implantation": {
              "code": "75108",
              "value": "PARIS 8"
            },
            "pays_implantation": {
              "code": null,
              "value": null
            },
            "diffusable_commercialement": true,
            "adresse": {
              // Depuis 2018, l'INSEE ne fournit plus d'adresse au format RNVP, nous opérons donc une reconstruction de l'adresse à partir des champs disponibles dans leur nouvelle API ; cette reconstruction n'est en aucun cas un traitement RNVP : Des différences minimes résultant de l'arrêt du RNVP peuvent être constatées.
              "l1": "OCTO TECHNOLOGY",
              // Raison sociale, ou civilité + prénom + nom.
              "l2": null,
              // Raisons sociales usuelles
              "l3": null,
              // Complément d'adresse
              "l4": "50 AVENUE DES CHAMPS ELYSEES",
              // Numéro de voie +  indice de répétition + type de voie + libellé voie.
              "l5": null,
              // Distribution spéciale
              "l6": "75008 PARIS",
              // Code cedex + code cedex ou code postal + libellé commune ou libellé commune à l'étranger.
              "l7": "FRANCE",
              // Pays
              "numero_voie": "50",
              "type_voie": "AV",
              "nom_voie": "DES CHAMPS ELYSEES",
              "complement_adresse": null,
              "code_postal": "75008",
              "localite": "PARIS 8",
              "code_insee_localite": "75108",
              "cedex": null
            },
            "etat_administratif": {
            // Lors de son inscription au répertoire, un établissement est, sauf exception, à l’état ouvert. Le passage à l’état fermé découle de la prise en compte d’une déclaration de fermeture.
              "value": "F",
              // Lorsqu'un établissement est ouvert, la valeur indiquée est "A" (actif). S'il est fermé, l'endpoint renverra "F"(fermé).
              "date_fermeture": 1315173600
              // Indique "null" quand le champ précédent est "A" (actif), et renvoit un entier au format timestamp si le champ précédent est "F".
              }
            },
            "gateway_error": false
            // Indique si un des deux fournisseurs de données n'a pas fonctionné : INSEE ou Infogreffe.
          }
        lang: jsonc
      questions:
        qr1:
          question: Qu'est qu'un numéro de TVA intracommunautaire ? <br> Comment est-il
            calculé ?
          answer: >-
            ###### Qu'est-ce que c'est ?


            Le numéro de TVA intracommunautaire est un numéro d’identification individuel attribué aux entreprises assujetties à la TVA et domiciliées au sein de l’Union européenne. En France, il est constitué du code FR et de 11 chiffres (une clé informatique de 2 chiffres, et le numéro de SIREN à 9 chiffres de l'entreprise.)


            ###### Comment est-il calculé par API Entreprise ?


            Le numéro de TVA intracommunautaire est calculé par API Entreprise selon la [règle officielle](https://fr.wikipedia.org/wiki/Code_Insee#Num%C3%A9ro_de_TVA_intracommunautaire){:target="_blank"}. **Cette donnée est théorique.**


            Dans le cas où l'établissement siège est à l'étranger la valeur est systématiquement mise à nul. En effet, dans ce cas le numéro de TVA est probablement calculé par le pays où se situe l'établissement siège et *non par la France*. **La seule source fiable dans ce cas est l'entreprise elle-même**.
        qr2:
          question: Quelle type d'adresse est fournie par API Entreprise ?
          answer: >-
            Depuis 2018, l'INSEE ne fournit plus d'adresse au format RNVP, API
            Entreprise opère donc une reconstruction de l'adresse à partir des
            champs disponibles dans leur nouvelle API. **Cette reconstruction
            n'est en aucun cas un traitement RNVP**. Des différences minimes
            résultant de l'arrêt du RNVP peuvent être constatées.

            Le détail de chaque champ est indiqué en commentaire dans la réponse JSON ci-dessous ⬇️.
        qr3:
          question: Une entreprise est active mais tous ses établissements sont fermés, est-ce un bug ?
          answer: >-  
            Même si tous les établissements d'une entreprise sont fermés (y compris son établissement siège), une entreprise reste active tant que la cessation juridique n'a pas été prononcée. Une réactivation est même encore possible. Le SIREN continue donc d'avoir un statut actif au répertoire.
            

            Par conséquent, dans la réponse JSON, **le cas de figure suivant n'est pas un bug** : 

            * Tous les établissements (ainsi que le siège) ont leur `etat_administratif` = `F` ;

            * et l'entreprise a son `etat_administratif` = `A` (et non `C` si elle était réellement fermée).

history: >-
  ##### 01/12/2019 Ajout de l'option d'appel `non_diffusable.`


  ##### 01/06/2019 Version 1 `Entreprises_Legacy` coupée définitivement.


  ##### 01/05/2019 Évolution de la source de données INSEE et impact sur les versions.


  Les APIs INSEE (appelées sirene_v2 par l'INSEE) qui alimentent notre API ont été fermées en juin 2019. L'INSEE nous a d'ores et déjà mis à disposition la nouvelle version (appelée sirene_v3). Les versions n'étant pas strictement identiques, il y a des impacts à anticiper. Vous pouvez :


  * utiliser les nouvelles APIs de l'INSEE directement

  * continuer à utiliser API Entreprise (voir détail ci dessous)


  ###### Utiliser les nouvelles API de l'INSEE


  Cette solution ajoute de la complexité et nécessitera des travaux de votre part pour intégrer ces nouvelles API. Les APIs INSEE ne comportent pas les informations de mandataires sociaux mais vous pourrez interroger des données d'historique. <https://api.insee.fr/catalogue/>{:target="_blank"}


  ###### Continuer chez API Entreprise


  Les endpoints `/v2/etablissements_legacy`, `/v2/entreprises_legacy` ne seront plus maintenus.


  Les endpoints `/v2/entreprises` et `/v2/etablissements` seront reconstruits à partir de sirene_v3 avec une période de transition.


  Les endpoints `/v2/etablissements/:siret/predecesseur` et `/v2/etablissements/:siret/successeur` seront coupés en attente de leur remise à disposition par l'INSEE normalement à la fin de l'année.


  En ce qui concerne `/v2/entreprises` et `/v2/etablissements` nous mettons à votre disposition en parallèle :


  * la version actuelle s'appuyant sur les API de l'INSEE sirene_v2 qui ferment en juin 2019

  * une version reconstruite à partir des API de l'INSEE nouvelle version sirene_v3 qui prennent le relai


  Jusqu'au 12 mai 2019, les deux version cohabitent. Par défaut nous servons les données comme d'habitude en nous appuyant sur sirene_v2. Vous pouvez dès à présent utiliser nos API basées les API sirene_v3 de l'INSEE en ajoutant le paramètre de requête `with_insee_v3=true`.


  **À compter du 13 mai 2019 l'API renverra systématiquement les données issues l'API sirene_v3 de l'INSEE, indépendamment de la valeur ou la présence du champ `with_insee_v3`, vous avez jusqu'à cette date pour impacter vos services**


  Dans la nouvelle mouture, un champ a été ajouté à l'API actuelle ; le champ `etat_administratif` (cf JSON renvoyé).
availability:
  normal_availability: 7jours/7 et 24h/24
  volumetry: 2000 requêtes/10 minutes par IP
  unavailability_types: /
category: Informations générales
---
