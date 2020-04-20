---
category: Informations générales
title: Données de référence
label: entreprises_insee
scope:
  - entreprises
  - associations
description: Obtenir des informations concernant une personne physique ou morale
  du répertoire Sirene telles que les dates de création et de fin ; le code
  effectif, le numéro de TVA intercommunautaire ; la forme juridique... ou
  encore les mandataires sociaux et l’état administratif de l’entité concernée.
usecases:
  - Aides publiques
  - Applications de la loi énergie – Art.64
  - Marchés publics
  - Répertoire de tiers
access: "Restreint "
providers:
  - insee
  - infogreffe
new: 'Vous pouvez accéder aux entreprises non diffusées en ajoutant le paramètre
  <code class=\"tpl-code\">non_diffusables: true</code>. Un nouveau champ
  apparaît dans la réponse, sous la forme : <code
  class=\"tpl-code\">diffusable_commercialement</code>.'
perimeter:
  perimeter1:
    label: Entreprises
    description: Inter has ruinarum varietates a Nisibi quam tuebatur accitus
      Vrsicinus, cui nos obsecuturos iunxerat imperiale praeceptum, dispicere
      litis exitialis certamina cogebatur abnuens et reclamans, adulatorum
      oblatrantibus turmis, bellicosus sane
  perimeter2:
    label: Certaines associations
    description: milesque semper et militum ductor sed forensibus iurgiis longe
      discretus, qui metu sui discriminis anxius cum accusatores quaesitoresque
      subditivos sibi consociatos ex isdem foveis cerneret emergentes
  perimeter3:
    label: Certaines personnes physiques inscrites au répertoire Sirène
    description: quae clam palamve agitabantur, occultis Constantium litteris
      edocebat inplorans subsidia, quorum metu tumor notissimus Caesaris
      exhalaret.
request:
  id:
    param: SirenDeL’Entreprise
    description: 'Le numéro de siren de la personne physique ou morale recherchée'
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
---
