---
type: Informations générales
title: "Actes "
label: actes_inpi
scope:
  - entreprises
description: Obtenir les actes d’une entreprise tels que connus par les greffes
  et archivés à l’Institut National de Propriété Industrielle (INPI). Ces actes
  comportent des informations générales,  des informations sur le capital social
  et sa répartition, ou encore des informations sur les associés et tout ce qui
  est relatif à l'administration de la société.
usecases:
  - Marchés publics
  - Aides publiques
access: Restreint
opening: Données confidentielles
providers:
  - inpi
perimeter:
  description: Ces actes comportent des informations  générales telles que la
    forme juridique de la société, son siège ; des informations sur le capital
    social et sa répartition comme le nombre et la valeur de chaque part, les
    modalités de cessions ; ou encore des informations sur les associés ou ce
    qui est relatif à l'administration de la société.
request:
  id:
    label: SirenDeL’Entreprise
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
      description: BénéficiaireDel’Appel
    param4:
      label: object
      description: RaisonDeL’AppelOuIdentifiant
response:
  timeout: 12 secondes
  format: Archive ZIP contenant PDF et XML
---
