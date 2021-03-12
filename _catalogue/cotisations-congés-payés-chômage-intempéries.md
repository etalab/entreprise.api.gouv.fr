---
providers:
  - cnetp
access: Restreint
weight: 20
type: Attestations sociales et fiscales
title: Cotisations congés payés & chômage intempéries
label: certificats_cnetp
scope:
  - entreprises
description: Obtenir l’**attestation de cotisation des congés payés et chômage
  intempéries** d'une entreprise, délivrée par la Caisse Nationale des
  Entrepreneurs de Travaux Publics (CNETP).
usecases:
  - Aides publiques
  - Répertoire de tiers
  - Marchés publics
opening: Données protégées.
perimeter:
  description: >-
    L'endpoint de la CNETP couvre **l'ensemble des entreprises** exerçant une ou
    plusieurs activités entrant **dans le champ d'application des conventions
    collectives nationales** étendues des Travaux Publics et du Bâtiment : 


    * ✅ Convention Collective Nationale des **Ouvriers des Travaux Publics** du 15 décembre 1992 (étendue par arrêté du 27 mai 1993) ; 

    * ✅ Convention Collective Nationale des **ETAM des Travaux Publics** du 12 juillet 2006 (étendue par arrêté du 28 juin 2007)

    * ✅ Convention Collective Nationale des **Cadres des Travaux Publics** du 20 novembre 2015 (étendue par arrêté du 5 juin 2020).


    Toutes les attestations sont disponibles pour les entreprises en situation régulière ❌ sauf pour celles qui règlent les cotisations dues à la CNETP à l’URSSAF dans le cadre du Titre Emploi Service Entreprise (TESE).

    <details class="fold-underline">

    <summary>

    Lire la suite

    </summary>
  

    ℹ️ Plus d'informations sur <https://www.cnetp.org/category/affiliation/>{:target="_blank"}


    ###### La CNETP, une caisse à compétence nationale


    L'[article D.3141-12 du code du travail](https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=F736E4E9BEAEEE069FB2FB9EFA0B5D20.tplgfr42s_1?idArticle=LEGIARTI000020572124&cidTexte=LEGITEXT000006072050&categorieLien=id){:target="_blank"} définit les entreprises qui sont tenues d'adhérer auprès d'une Caisse de Congés Payés du BTP : *"Dans les entreprises exerçant une ou plusieurs activités entrant dans le champ d'application des conventions collectives nationales étendues du bâtiment et des travaux publics, le service des congés est assuré, sur la base de celles-ci, par des caisses constituées à cet effet."*


    L'[article D.3141-20 du code du travail](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000020572131&cidTexte=LEGITEXT000006072050){:target="_blank"} dispose quant à lui que *"dans les entreprises dont l'activité principale relève des travaux publics, ce service est assuré par une caisse à compétence nationale."*
    </details>
  label: Entreprises de travaux publics et bâtiment,<br>de certaines conventions
    collectives.
services:
  service1:
    request:
      id:
        label: SirenDeL’Entreprise
        description: Le numéro de SIREN de l'entreprise.
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
        **certificats_cnetp/**SirenDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      questions:
        qr1:
          question: Quelles sont les conditions de délivrance de l'attestation ?
          answer: >-
            L'attestation est délivrée à l'entreprise sous réserve que celle-ci
            :


            * soit à jour de ses déclarations exigibles servant à l'assiette des cotisations de congés payés et des cotisations de chômage-intempéries ;

            * soit à jour du paiement des cotisations citées.
        qr2:
          question: L'api ne renvoie pas de pièce, peut-on considérer que l'entreprise
            n'est pas à jour ?
          answer: >-
            Non, dans certains cas nous ne pouvons pas récupérer l'attestation.

            Notamment, certaines entreprises règlent leurs cotisations dues à la CNETP à l'URSAFF (dans le cadre du TESE) ; leurs attestations ne sont pas accessibles depuis cette API.
        qr3:
          question: Comment utiliser ces données protégées ?
          answer: >-
            ###### Les attestations de la CNETP, protégées au titre du
            secret des affaires


            Dans le cadre d'un Marché public, les attestations de Marché ont pour objet de prouver à l'acheteur public que le candidat a satisfait à ses obligations fiscales et sociales. Il en est ainsi des attestations de Marchés délivrées par la CNETP aux entreprises de Travaux Publics.


            Or, **conformément au code de la commande publique, l'acheteur public ne peut communiquer les informations protégées** dont il a eu connaissance lors de la procédure de passation et notamment celles dont la divulgation violerait le secret des affaires.



            C'est pourquoi, les attestations délivrées par la CNETP constituent des données protégées et non publiques. 


            ###### Des informations à ne pas divulguer


            En utilisant l’endpoint `certificats_cnetp`, **vous vous engagez** à n’utiliser ces informations que dans le cadre strict de vos missions de service public, **à ne pas les rediffuser ni les divulguer auprès de tiers non autorisés**.
      format: Document PDF
      timeout: 12 secondes
      description: La réponse délivre une URL de téléchargement de l’attestation au
        format PDF quand celle-ci est disponible, dont [voici un
        exemple](uploads/cnetp-attestation-marche.pdf).
      sample:
        code: >-
          {
            "url": "https://storage.entreprise.api.gouv.fr/siade/1569156960-dbd0926a14706614c69798309bd687-certificat_cnetp.pdf"
          }
availability:
  normal_availability: 7jours/7 et 24h/24
  unavailability_types: /
  volumetry: 2000 requêtes/10 minutes par IP
---
