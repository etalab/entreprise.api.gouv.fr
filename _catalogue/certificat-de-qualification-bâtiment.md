---
providers:
  - qualibat
access: Restreint, [disponible en recherche manuelle sur
  qualibat.com](https://www.qualibat.com/entreprise-correspondant-au-sirenraison-sociale/?siren_or_r_soc=){:target="_blank"}
weight: 22
type: Certifications professionnelles
title: Certificat de qualification bâtiment
label: certificats_qualibat
scope:
  - entreprises
description: Obtenir le certificat Qualibat, apportant l’avis de l’association
  sur la **qualification d’une entreprise dans le bâtiment**. Si vous cherchez
  d'autres certificats de qualification, l'[endpoint certification
  RGE](#certificats_rge_ademe) regroupe tous les certificats, dont les
  Qualibats.
usecases:
  - Marchés publics
opening: Données publiques.
availability:
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
  volumetry: 50 requêtes/min. par jeton
service2:
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
perimeter:
  label: Entreprises de travaux publics et bâtiment.
service3:
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
services:
  service1:
    request:
      id:
        label: SiretDeL’Entreprise
        description: Le numéro de SIRET de l'entreprise.
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
      questions:
        qr1:
          answer: >-
            * Qualification « Mesurage dans le bâtiment » ;

            * Qualification « Audits énergétiques » - Certifications « Traitement des bois » ;

            * Certification « Métallerie feu » ;

            * Certification « Travaux d’accès difficile à la corde » ;

            * Certification « Traitement de l’amiante » ;

            * Certifications de systèmes qualité ;

            * Certifications environnementales.


            ℹ️ Toutes les informations concernant ces différentes certifications et qualifications sont disponibles sur le [site Qualibat]( https://www.qualibat.com/documentation/documentation-technique){:target="_blank"}
          question: Quelles sont les différentes certifications/qualifications ?
        qr2:
          answer: >-
            ###### Les qualifications professionnelles Qualibat


            Elles constituent la reconnaissance des compétences de l’entreprise, de sa capacité à réaliser des travaux dans une activité donnée, à un niveau de technicité défini. Elles donnent à l’entreprise les moyens de faire-valoir son expertise technique et permettent au maître d’ouvrage d’identifier précisément les professionnels capables de répondre à sa demande. 


            ###### Les certifications métiers Qualibat 


            Elles caractérisent les entreprises aptes à répondre à certaines activités nécessitant le respect de réglementations particulières en matière d’environnement, de sécurité ou de protection de la santé. Elles sont attribuées à partir de référentiels techniques spécifiques. En plus de la reconnaissance du savoir-faire, elles supposent la mise en place d’un système d’organisation et de procédures au sein de l’entreprise. 


            ℹ️ Source : [Qualibat](https://www.qualibat.com/maitre-douvrage/nomenclature/consulter-la-nomenclature){:target="_blank"}
          question: Quelle est la différence entre une certification et une qualification
            ?
      url: |-
        **certificats_qualibat/**SiretDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      sample:
        code: >-
          {
            "url":"https://storage.entreprise.api.gouv.fr/siade/attestation%2D3a858b299ce9f370e6bdc666d0616617_qualibat.pdf"
          }
      format: Document PDF
      timeout: 12 secondes
      questions:
        qr1:
          question: Quelles informations figurent sur le certificat ou la qualification ?
          answer: >-
            ###### Les informations génériques :


            * Le millésime ;

            * La durée de validité, de date à date ;

            * Un numéro d'identification. 


            ###### Les informations recueillies et contrôlées sur l'entreprise :


            1. La situation administrative et juridique : 

               * la raison sociale de l'entreprise ;
               * ses coordonnées complètes ;
               * le nom et la fonction de ses dirigeants responsables ;
               * sa date de création ;
               * sa forme juridique ;
               * le montant de son capital social ;
               * son numéro de registre de commerce ou de répertoire des métiers
               * son code NACE ;
               * son numéro d'affiliation à la caisse de congés payés ;
               * ses compagnies d'assurances ;
               * la régularité de sa situation fiscale et sociale.

            2. La classification : 

               * son effectif ;
               * son classement dans une catégorie d'entreprise ;
               * son chiffre d'affaires hors taxes / son classement dans une catégorie d'entreprise

            3. La qualification : 

               * Le code à quatre chiffre de la capacité technique reconnue à l'entreprise dans une activité donnée ;
               * Le titre de cette capacité ;
               * Le niveau de technicité.

            4. La classification partielle : les moyens humains dont dispose l'entreprise dans l'activité pour laquelle elle est qualifiée sont précisés.


            5. Les dates de validité : 

               * La date d'attribution : la date à laquelle la qualification a été attribuée ou du plus récent renouvellement. 
               * La date d'échéance : est portée la date d'expiration de validité de la qualification.

            6. Le système qualité : dans la mesure où l'entreprise a mis en place une démarche qualité certifiée par QUALIBAT, la certification de son système qualité est mentionnée en annexe. 


            ℹ️ Source : [Qualibat ](https://www.qualibat.com/)
      description: La réponse se compose de l'URL de téléchargement de l'attestation
        au format PDF quand celle-ci est disponible.
---
