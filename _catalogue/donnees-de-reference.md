---
type: Informations générales
title: Données de référence
label: entreprises_insee
scope:
  - entreprises
  - associations
description: Obtenir des informations concernant une personne physique ou morale
  du répertoire Sirene telles que les dates de création et de fin ; le code
  effectif, le numéro de TVA intracommunautaire ; la forme juridique... ou
  encore les mandataires sociaux et l’état administratif de l’entreprise.
usecases:
  - Aides publiques
  - Marchés publics
  - Répertoire de tiers
  - Application de la loi énergie - Art.64
access: Restreint, disponible sous d'autres conditions
opening: Données publiques
providers:
  - insee
  - infogreffe
new: 'Vous pouvez accéder aux entreprises non diffusées en ajoutant le paramètre
  <code class=\"tpl-code\">non_diffusables: true</code>. Un nouveau champ
  apparaît dans la réponse, sous la forme : <code
  class=\"tpl-code\">diffusable_commercialement</code>.'
perimeter:
  perimeter1:
    label: Entreprises, institutions administratives, certaines associations et
      entrepreneurs individuels
    description: >-
      L'endpoint `entreprises_insee` vous donne accès : 


      * aux données tirées du *Répertoire National d'identification des entreprises et des établissements*, géré par l'INSEE au travers du système Sirene

      * ainsi qu'aux observations d'Infogreffe, quand elles sont disponibles pour le SIREN appelé.


      ⚠️ Il ne concerne pas les établissements, ceux-ci sont appelables avec l'endpoint `etablissement_insee`


      **Cet endpoint permet donc d'accéder aux informations de référence concernant :**


      * les personnes morales de droit privé : les entreprises. \
        Pour information, toutes les entreprises immatriculées au Registre du Commerce et des Sociétés et au Répertoire des Métiers figurent dans la base Sirene ; 
      * les personnes morales de droit public : les institutions et services de l’État et les collectivités territoriales ; 

      * les entrepreneurs individuels exerçant de manière indépendante une profession non salariée(exemple : un commerçant, un médecin), ayant fait une déclaration d'activité. \
        ⚠️ Les particuliers employeurs ne font pas partie de la base Sirene ;
      * les associations ayant, en plus de leur numéro RNA, un numéro de SIREN/SIRET délivré lorsqu'elles :

        * emploient du personnel salarié ; 
        * sont soumises à la TVA ; 
        * ont demandé ou bénéficient de transferts financiers publics.
      * Les organismes publics ou privés et les entreprises étrangères qui ont une représentation ou une activité en France.


      **Périmètre géographique :** La base Sirene concerne les unités implantées en métropole, dans les DOM et dans les collectivités d'Outre-Mer de Saint Pierre et Miquelon, Saint Barthélémy et Saint Martin. ⚠️ Pour la Nouvelle-Calédonie, la Polynésie française, et Wallis-et-Futuna, seul le secteur public administratif, de l'État ou des communes est répertorié.


      **Pour en savoir plus :** [\

      Contexte juridique du Répertoire National d’identification des entreprises et des établissements](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=134EFA0EE7BDCA89C2D6B31E02C48430.tplgfr30s_3?idSectionTA=LEGISCTA000006178890&cidTexte=LEGITEXT000005634379&dateTexte=20100904)
  perimeter2:
    label: ""
    description: ""
  perimeter3:
    label: ""
    description: ""
request:
  id:
    param: SirenDeL’Entreprise
    description: Le numéro de siren de la personne physique ou morale recherchée
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
    id:
      parameter: Lorem ipsum 1
      description: Lorem ipsum 2
  options:
    option1:
      description: pour connaitre l’état administratif de l’entité demandée ;
      param: with_etat_administratif
      comment: "Si vous souhaitez également connaitre l'état administratif de
        l’entreprise, ajoutez le paramètre facultatif suivant :"
    option2:
      description: pour accéder aux entreprises non diffusibles.
      param: non_diffusable
      comment: "Si vous souhaitez accéder aux entreprises non diffusibles :"
response:
  format: Données structurées JSON
  timeout: 5 secondes
  description: >-
    La réponse est composée de trois ensembles :

    * **entreprise**, qui contient les données générales, les mandataires sociaux et l’état administratif de la personne physique ou morale ;

    * **établissement siège**, qui contient les données du siège, celles-ci étant disponibles également par l'endpoint `etablissements` ;

    * **gateway error**, indiquant si un fournisseur de données n’a pas fonctionné.
  La réponse est composée de trois ensembles: null
history: |-
  15/01/2020 Ajout d’un champ `non_diffusable`

  03/01/2020 Ajout d’un champ `with_etat_administratif`
category: Informations générales
---
