---
category: Informations générales
title: Données de référence
reference: entreprises
scope:
  - entreprises
  - associations
description: >-
  Obtenir des informations concernant une personne physique ou morale du  
  répertoire Sirene telles que les dates de création et de fin ; le code  
  effectif, le numéro de TVA intercommunautaire ; la forme juridique... ou  
  encore les mandataires sociaux et l’état administratif de l’entité concernée.
usecases:
  - Aides publiques
  - Marchés publics
  - Applications de la loi Énergie – Art.64
  - Répertoire de tiers
access: Restreint par Signup
providers:
  - insee
  - infogreffe
new: |-
  Vous pouvez accéder aux entreprises non diffusées en ajoutant le paramètre
    `non_diffusables: true`. Un nouveau champ apparaît dans la réponse, sous la
    forme : `diffusable_commercialement`.
perimeter:
  perimeter1:
    label: Entreprises
    description: |-
      Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus,
            cui nos obsecuturos iunxerat imperiale praeceptum, dispicere litis
            exitialis certamina cogebatur abnuens et reclamans, adulatorum
            oblatrantibus turmis, bellicosus san
  perimeter2:
    label: Certaines associations
    description: |-
      Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus,

      cui nos obsecuturos iunxerat imperiale praeceptum, dispicere litis

      exitialis certamina cogebatur abnuens et reclamans, adulatorum

      oblatrantibus turmis, bellicosus san
  perimeter3:
    description: |-
      Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus,
            cui nos obsecuturos iunxerat imperiale praeceptum, dispicere litis
            exitialis certamina cogebatur abnuens et reclamans, adulatorum
            oblatrantibus turmis, bellicosus san
    label: Certaines personnes physiques inscrites au répertoire Sirène
request:
  variable: Le siren de la personne physique ou morale recherchée
  endpoint: entreprises
  parameters:
    param1:
      label: token
      description: blabla
    param2:
      label: context
      description: blabla
    param3:
      label: recipient
      description: blabla
  options:
    option1: with_etat_administratif
    option2: non_diffusable
response:
  format: Données structurées JSON
  timeout: 5 secondes
---
