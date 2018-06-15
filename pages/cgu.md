---
layout: cgu
title: Conditions Générales d'Utilisation de l'API Entreprise
permalink: /cgu/
urlcolor: blue
geometry: margin=1in
mainfont: Liberation Sans
fontsize: 12pt
---

## 1. Présentation

L’API Entreprise, ci-après appelé le « Service », vise à :

- Simplifier les démarches administratives des entreprises et associations usagères du service public, ci-après l’« Usager », notamment en les soulageant de la production de certaines pièces justificatives,
- Faciliter l’instruction associée à ces démarches en permettant aux administrations qui en sont chargées de récupérer des documents ou données produits ou détenus par d’autres autorités administratives.

Pour ce faire, le Service consiste en un dispositif d’échange permettant :

- la mise disposition d’informations ou données détenues par les administrations,
- la récupération par elles d’informations ou données nécessaires à l’accomplissement de démarches administratives.

Le Service est ouvert aux administrations au sens de l’article L. 100-3 du code des relations du public et de l’administration, c’est-à-dire les administrations de l'Etat, les collectivités territoriales, leurs établissements publics administratifs respectifs et les organismes et personnes de droit public et de droit privé chargés d'une mission de service public administratif, y compris les organismes de sécurité sociale.

**Le Service donne accès à des données et pièces justificatives émanant d’administrations diverses, que le Service fédère, à partir d’interfaces de programmation (API) ou, exceptionnellement, de bases mises à sa disposition, dans des conditions assurant la protection des données et le respect des règles de confidentialité. Le périmètre précis est défini dans la [documentation technique](https://entreprise.api.gouv.fr/documentation){:target="_blank"}.**

## 2. Objet

Les CGU ont pour objet de définir les conditions d’utilisation du Service par tout Partenaire.

Elles s’inscrivent dans le cadre :

- Des articles [L. 114-8 et suivants du code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/affichCode.do%3Bjsessionid=AC5DECE620E35683EFD6CD54C0964732.tplgfr35s_3?idSectionTA=LEGISCTA000031367410&cidTexte=LEGITEXT000031366350&dateTexte=20170808){:target="_blank"} relatifs à l’échange de données entre administrations,
- De la loi n° 78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés,
- Du [décret n° 2010-112 du 2 février 2010](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000021779444&categorieLien=id){:target="_blank"} pris pour l'application des articles 9, 10 et 12 de l'ordonnance n° 2005-1516 du 8 décembre 2005 relative aux échanges électroniques entre les usagers et les autorités administratives et entre les autorités administratives,
- De [l’arrêté du 4 juillet 2013](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000027697207){:target="_blank"}, pour les collectivités et leurs établissements, autorisant la mise en œuvre par les collectivités territoriales, les établissements publics de coopération intercommunale, les syndicats mixtes, les établissements publics locaux qui leur sont rattachés ainsi que les groupements d'intérêt public et les sociétés publiques locales dont ils sont membres de traitements automatisés de données à caractère personnel ayant pour objet la mise à disposition des usagers d'un ou de plusieurs téléservices de l'administration électronique.

La demande de raccordement du Partenaire au Service emporte acceptation des présentes CGU.

## 3. Rôle et engagements du Partenaire

### Adhésion

- **Le Partenaire** vérifie qu’il remplit les conditions d’accès présentées dans les présentes CGU et effectue sa demande d’adhésion à partir du site internet : [{{ site.signup_url }}]({{ site.signup_url }}){:target="_blank"}

- **Le Partenaire demande l’accès aux seules données strictement nécessaires à la
réalisation d’une démarche administrative.**

- **La demande d’accès effectuée par le Partenaire visant à obtenir un « jeton » d’accès est spécifique à ce Partenaire et à un type de démarche administrative qu’il réalise. En conséquence, un Partenaire peut obtenir autant de jetons qu’il lui est nécessaire ; le fait pour un Partenaire d’utiliser un jeton unique pour plusieurs démarches différentes, y compris en internalisant la gestion des droits d’accès, entraîne la révocation immédiate du jeton.**

- **Le Partenaire peut transmettre le jeton à un sous-traitant qui met en œuvre la démarche administrative pour son compte. Tout Partenaire recourant ainsi à la sous- traitance est responsable des actions de son sous-traitant dans le cadre du Service. En conséquence, il le tient informé de toute évolution et accomplit toute diligence à son endroit pour assurer le respect des présentes CGU.**

- **Le jeton est émis pour une durée maximum de 2 ans, sauf révocation.**

### Engagements

- **Une fois son raccordement effectué, le Partenaire s’engage à mettre en œuvre le Service en l’intégrant au sein de ses services numériques.**

- Le Partenaire est responsable des traitements qu’il opère sur les données reçues au moyen du Service et, à ce titre, respecte les obligations inhérentes à ce traitement, notamment celles prévues par la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés.

- Préalablement à toute transmission de données, le Partenaire s’engage à informer correctement l’Usager et à recueillir le cas échéant son consentement explicite à l’exposition des données.

- Le Partenaire s’engage à ne pas donner accès aux données obtenues par l’intermédiaire du Service à l’Usager ne bénéficiant pas d’un niveau d’**authentification** suffisant.

- Le Partenaire s’engage à présenter les données obtenues par l’intermédiaire du Service aux seuls agents dûment habilités et à tracer l’accès de ces agents aux données. Ces traces sont conservées pour une durée minimum de 36 mois, la durée légalement applicable.

- Le Partenaire s’engage à ne pas commercialiser les données reçues et à ne pas les communiquer à des tiers en dehors des cas prévus par la loi.

- Le Partenaire s’engage à mettre en œuvre les mesures de sécurité techniques et organisationnelles nécessaires au bon fonctionnement du Service, notamment en matière de traçabilité interne, et à informer, le cas échéant, le DINSIC de toute difficulté de nature à compromettre le bon fonctionnement du Service. En particulier, il garantit la confidentialité du jeton. **Dès lors que la confidentialité du jeton a pu être compromise, y compris de manière accidentelle, le jeton est révoqué. A cette fin, l’organisme s’engage à alerter sans délai la DINSIC en envoyant un email à :** [{{ site.email }}](mailto:{{ site.email }}).

- En cas d’incident grave dans l’utilisation du Service, le Partenaire s’engage à coopérer avec la DINSIC dans la réalisation d’un audit, en fournissant toutes les informations nécessaires.

- Dans ses procédures internes, le Partenaire s’engage à ne pas considérer la non transmission d’une donnée par le biais du Service, comme impliquant une réponse non conforme entrainant directement le rejet de la démarche de l’Usager.

## 4. Rôle et engagement de la DINSIC

- La DINSIC met en œuvre et opère le Service conformément aux dispositions légales et règlementaires en vigueur. A ce titre, la DINSIC s’engage à respecter les obligations légales liées au traitement, notamment celles relevant de la loi n° 78-17 du 6 janvier 1978 relative à l’informatique aux fichiers et aux libertés.

- La DINSIC procède au raccordement du Partenaire qui en a préalablement fait la demande à partir du site internet : [{{ site.signup_url }}]({{ site.signup_url }}){:target="_blank"}
 et qui remplit les conditions présentées dans les présentes CGU.

- La DINSIC s’engage à proposer aux Partenaires une assistance technique et fonctionnelle leur permettant de définir et de mettre en œuvre au mieux l’usage qu’ils réalisent du Service.

- La DINSIC s’autorise à mettre fin à l’accès au Service par le Partenaire s’il estime que son usage du Service n’est pas conforme aux présentes CGU, ne respecte pas les dispositions légales en vigueur, ne correspond pas aux exigences de sécurité ou porte préjudice à son image.

- La DINSIC s’engage à transmettre les données demandées par le Partenaire via le Service.

- La DINSIC s’engage à ce que le Service soit accessible à 99,5 % et à informer les Partenaires de toute difficulté de nature à en compromettre le bon fonctionnement. A cette fin, elle fournit un tableau de bord de la disponibilité du Service. L’engagement de disponibilité porte sur le Service et non pas sur les dispositifs d’échange sous-jacents.

- La DINSIC s’engage à mettre en œuvre toutes mesures appropriées afin de protéger et de garantir l’intégrité des données traitées dans le cadre du Service. Elle ne porte aucune responsabilité s’agissant de **la qualité ou du contenu intrinsèque des données. Dans ce cadre, la DINSIC** ne modifie pas les données à l’exception d’une standardisation contextuelle limitée (minuscule vers majuscule, format de date, nombre d’espaces). S’agissant des données issues du SIRENE, en cas d’incident de transmission par le fournisseur de données, la DINSIC met à disposition les données issues de la base mise à disposition....

- La DINSIC s’engage à assurer la traçabilité de toutes les actions réalisées par les utilisateurs du Service et conserve ces informations pendant la durée fixée par le cadre légal applicable.

- La DINSIC s’engage à assurer le suivi et l’évaluation de l’utilisation du Service, et à communiquer les résultats obtenus aux Partenaires.

## 5. Coût du service

- Les coûts d’investissement et de fonctionnement du Service sont pris en charge par la DINSIC.

- La participation au Service ne donnera lieu à aucune compensation financière entre la DINSIC et le Partenaire.

## 6. Modification des présentes CGU et modalités de résiliation

- Toute modification des présentes CGU par la DINSIC fait l’objet d’une information aux Partenaires.

- Le Partenaire pourra librement se désengager du Service, en respectant un préavis de quinze jours, en adressant sa demande par lettre recommandée avec avis de réception à l’adresse suivante :

DINSIC

20 avenue de Ségur

75007 PARIS

---
Daté du 15 juin 2018
