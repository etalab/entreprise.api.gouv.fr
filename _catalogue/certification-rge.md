---
providers:
  - ademe
access: Restreint, [disponible en recherche manuelle sur le site
  faire.gouv.fr](https://www.faire.gouv.fr/trouvez-un-professionnel)
weight: 21
type: Certifications professionnelles
title: Certification RGE
label: /certificats_rge_ademe
scope:
  - entreprises
description: Obtenir le certificat “Reconnu Garant de l’Environnement” d’une
  entreprise, attestant de **compétences spécifiques en travaux de rénovation
  énergétique**. Si vous avez besoin uniquement du certificat Qualibat, un
  [endpoint dédié](#certificats_qualibat) existe.
usecases:
  - Marchés publics
  - Répertoire de tiers
opening: Données publiques.
perimeter:
  label: Entreprises de rénovation énergétique.
  description: >-
    Les données concernent les entreprises de rénovation énergétique, ayant fait
    la demande d'une qualification RGE et remplissant les critères défini par le
    label.


    L'endpoint renvoit les fichiers de **95% des entreprises en base chez l’ADEME**.
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
          question: Qu'est ce que le label RGE ? Quand est-il délivré à une entreprise ?
          answer: Le label RGE (« Reconnu Garant de l'Environnement ») est délivré à une
            entreprise qui remplit certains critères lors de la réalisation de
            travaux d'économie d'énergie dans les logements (isolation des murs
            ou de la toiture, installation d'un équipement utilisant une énergie
            renouvelable, etc.). **Il s'agit d'un dispositif reconnu par
            l'État.**
        qr2:
          question: Quels sont les différents types de certifications ?
          answer: >-
            * *Qualit'EnR* pour les installations d’équipements valorisant les
            énergies renouvelables.

            * *Qualifelec* pour les travaux électriques en matière d’efficacité énergétique et/ou d’installation des énergies renouvelables.

            * *RGE Eco-artisan* pour des prestations de conseil dans le domaine de la performance énergétique, par le biais d’une évaluation thermique ou des travaux d’efficacité énergétique.

            * *Qualibat* pour des travaux liés à la performance énergétique (construction ou rénovation).

            * *Céquami* délivre des certifications à des professionnels à même de proposer des travaux de rénovation lourde dans le cadre d’une rénovation énergétique globale du logement.

            * *Certibat* délivre des certifications aux professionnels du bâtiment en mesure de réaliser des offres globales de rénovation énergétique.
    response:
      sample:
        code: >
          {
            "qualifications": [
              {
                "nom": "Installation de chauffe-eau solaire dans tout type de bâtiment supérieur à 1000 m²",
                "url_certificat": "https://storage.entreprise.api.gouv.fr/siade/attestation%2D3a858b299ce9f370e6bdc666d0616617-certificat_rge_ademe.pdf",
                "nom_certificat": "QUALIBAT-RGE"
              }
            ],
            "domaines": ["Chauffage et\/ou eau chaude solaire"]
          }
      format: Document PDF
      timeout: 12 secondes
      description: La réponse se compose du nom de la qualification de l'entreprise,
        de l'URL de téléchargement de l'attestation au format PDF quand celle-ci
        est disponible, du nom du certificat et du domaine.
      questions:
        qr1:
          question: Pourquoi certains certificats ne sont pas disponibles ?
          answer: "L'ADEME demande aux organismes de certifications (*Qualit'EnR*,
            *Qualifelec*, ...) de mettre à disposition les adresses URL vers les
            certificats mais tous les développements n'ont pas encore été
            réalisés. De fait certains documents ne sont pas accessibles.
            Cependant, les fichiers sont disponibles pour 95% des entreprises en
            base chez l'ADEME. L'endpoint API Entreprise vous renvoie alors le
            message suivant : le champ `url_certificat` indique : `Une erreur
            est survenue lors de la récupération du fichier PDF`."
        qr2:
          question: ""
---
