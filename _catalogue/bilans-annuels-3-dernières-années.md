---
providers:
  - bdf
access: Restreint
weight: 9
type: Informations financières
title: 3 derniers bilans annuels
label: bilans_entreprises_bdf
scope:
  - entreprises
description: "Obtenir les trois derniers bilans d’une entreprise détenus par la
  Banque de France. Ces bilans permettent d'accéder à **certaines informations
  contenues dans la liasse fiscale** : bilans, compte de résultat et annexes
  confondus."
usecases:
  - Aides publiques
opening: Données confidentielles.
perimeter:
  label: Les entreprises ayant au moins 3 bilans et réalisant plus 750 000€ de CA.
  description: >-
    ###### Entreprises concernées


    Les données Banque de France ne couvrent pas de manière exhaustive tous les SIREN. Notamment, seules les entreprises réalisant un chiffre d'affaire supérieur à 750 000 euros et ayant *a minima* trois bilans sont disponibles. 


    ###### Bilans renvoyés


    Les bilans retenus sont ceux dont la date d’arrêté est comprise entre le mois en cours \[MM/AAAA], et 4 ans en arrière \[MM+1/AAAA-4]. <br> *Par exemple pour un appel le 17 janvier 2020, les bilans retenus ont une date d'arrêt comprise entre le 1er février 2016 et le 17 janvier 2020.*


    ⚠️ Même si la Banque de France connaît un à deux bilans de l'entité appelée mais pas les trois derniers, aucune données sera transmise et l'erreur 404 sera renvoyée.
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
        **bilans_entreprises_bdf/**SirenDeL’Entreprise
        **?token=**JetonD’Habilitation
        **&context=**CadreDeLaRequête
        **&recipient=**BénéficiaireDel’Appel
        **&object=**RaisonDeL’AppelOuIdentifiant
    response:
      timeout: 5 secondes
      format: Donnée structurée JSON
      description: >-
        Les trois bilans de la Banque de France sont listés les uns après les
        autres, le premier étant le plus récent. Chacun d'eux est accompagné
        d'informations en majeure partie tirées : 


        * des bilans (passif de l'entreprise - [liasse 2051](https://www.impots.gouv.fr/portail/files/formulaires/2051-sd/2018/2051-sd_2146.pdf)) ; 

        * des comptes de résultat ([liasse 2052](https://www.impots.gouv.fr/portail/files/formulaires/2052-sd/2018/2052-sd_2117.pdf) et [liasse 2053](https://www.impots.gouv.fr/portail/files/formulaires/2053-sd/2018/2053-sd_2116.pdf)) ;

        * et de l'[annexe 2057](https://www.impots.gouv.fr/portail/files/formulaires/2057-sd/2018/2057-sd_2121.pdf) concernant l'état des échéances des créances et des dettes à la clôture de l'exercice.


        La Banque de France délivre également une évolution des montants de l'exercice concerné avec l'année N-1, quand les durées d'exercices sont identiques.
      sample:
        code: >-
          {
            "monnaie": "kEuros",
            "bilans": [
              {

          // INFORMATION SUR L'EXERCICE :

                "duree_exercice": "12",
                "date_arret_exercice": "201512",


          // BILAN, PASSIF (Liasse 2051)

                "capitaux_propres_et_assimiles": "5928663",
                // Correspond à la case 'DL' de la liasse fiscale 2051, soit le total des capitaux propres inscrits dans le passif.
                "capital_social_inclus_dans_capitaux_propres_et_assimiles": "3800000", 
                // Correspond au capital social ou individuel de la case 'DA' de la liasse fiscale 2051, ce montant est inclu dans la somme précédente 'capitaux_propres_et_assimilés'.
                "autres_fonds_propres": "0",
                // Correspond à la case 'DO' de la liasse fiscale 2051.
                "total_provisions_pour_risques_et_charges": "1957919",
                // Correspond à la case 'DR' de la liasse fiscale 2051.
                "dettes1_emprunts_obligataires_et_convertibles": "0",
                // Correspond à la case 'DS' de la liasse fiscale 2051.
                "dettes2_autres_emprunts_obligataires": "6552306",
                // Correspond à la case 'DT' de la liasse fiscale 2051.
                "dettes3_emprunts_et_dettes_aupres_des_etablissements_de_credit": "0",
                // Correspond à la case 'DU' de la liasse fiscale 2051.
                "emprunts_et_dettes_financieres_divers": "430634",
                // Correspond à la case 'DV' de la liasse fiscale 2051.
                "total_dettes_stables": "6552306",
                // Cette valeur est calculée par la Banque de France comme suit : 'dettes1_emprunts_obligataires_et_convertibles' + 'dettes2_autres_emprunts_obligataires' + 'dettes3_emprunts_et_dettes_aupres_des_etablissements_de_credit' - 'dettes4_maturite_a_un_an_au_plus'. Dans le cas ou un des termes du calcul ne serait pas renseigné, il est considéré comme ayant une valeur nulle pour le calcul.
                "total_passif": "18478051",
                // Correspond à la somme totale du passif de l'entreprise, soit ses capitaux propres, ses fonds propres, ses provisions pour risques et ses charges, ainsi que ses dettes (case 'EE' de la liasse fiscale 2051).


          // COMPTE DE RESULTAT (liasse 2052 et 2053)

                "resultat_exercice": "347126",
                // Correspond au "bénéfice ou perte" de l'entreprise, total des produits - total des charges (case 'HN' de la liasse fiscale 2053).
                "chiffre_affaires_ht": "12030700",
                // Correspond au chiffre d'affaire net total, France et exportations & livraisons intercommunautaires (case 'FL' de la liasse fiscale 2052).


          // ANNEXE : ÉTAT DES ÉCHÉANCES DES CRÉANCES ET DES DETTES LA CLÔTURE DE L'EXERCICE (liasse fiscale 2057).

                "dettes4_maturite_a_un_an_au_plus": "0",
                // Correspond à la somme des cases 'VG2' et 'VH2', soit les emprunts et dettes auprès des établissements de crédit à un an au plus par rapport à l'exercice.
                "groupes_et_associes": "0",
                // Correspond à l'état des dettes du groupe et des associés, case 'VI' de la liasse fiscale 2057.


          // AUTRES CHAMPS

                "valeur_ajoutee_bdf": "7848792",
                "besoin_en_fonds_de_roulement": "-721507",
                "fonds_roulement_net_global": "2464585",
                "ratio_fonds_roulement_net_global_sur_besoin_en_fonds_de_roulement": "-",
                "disponibilites": "1983051",
                "capacite_autofinancement": "891914",
                "excedent_brut_exploitation": "-1876863",


          // ÉVOLUTION


          // En plus, des informations précédentes de l'exercice concerné, la Banque de France renvoit également des données d'évolution par rapport à l'année précédente. 

          // Les calculs d'évolution sont calculés en comparant l'année N par rapport à l'année N-1. Ces montants ne sont fournis que si les liasses fiscales N et N-1 ont la même durée d'exercice.

          // Les champs sont calculés par la Banque de France sur le mode suivant : (valeur à date N - valeur à date N-1) * 100 / valeur absolue (valeur à date N-1).    
                
                "evolution_valeur_ajoutee_bdf": "",
                "evolution_resultat_exercice": "",
                "evolution_capitaux_propres_et_assimiles": "",
                "evolution_total_provisions_pour_risques_et_charges": "",
                "evolution_dettes1_emprunts_obligataires_et_convertibles": "",
                "evolution_dettes2_autres_emprunts_obligataires": "",
                "evolution_emprunts_et_dettes_financieres_divers": "",
                "evolution_groupes_et_associes": "",
                "evolution_besoin_en_fonds_de_roulement": "",
                "evolution_disponibilites": "",
                "evolution_total_passif": "",
                "evolution_chiffre_affaires_ht": "",
                "evolution_capacite_autofinancement": "",
                "evolution_dettes3_emprunts_et_dettes_aupres_des_etablissements_de_credit": "",
                "evolution_dettes4_maturite_a_un_an_au_plus": "",
                "evolution_autres_fonds_propres": "",
                "evolution_capital_social_inclus_dans_capitaux_propres_et_assimiles": "",
                "evolution_excedent_brut_exploitation": "",
                "evolution_fonds_roulement_net_global": "",
                "evolution_ratio_fonds_roulement_net_global_sur_besoin_en_fonds_de_roulement": "",
                "evolution_total_dettes_stables": ""
                
                }, "bilan 2", "bilan 3"
            ]
          }
history: "##### 01/06/2018 Ouverture de l'endpoint `bilans_entreprises_bdf`"
availability:
  volumetry: 2000 requêtes/10 minutes par IP
  normal_availability: 7 jours/7, de 8h à 23h.
  unavailability_types: Opérations de maintenance toutes les nuits entre 23h et
    8h.  Durant ce laps de temps, la base de données ou une partie de
    l'applicatif peut être affecté. Il nous est dans ce cas renvoyé divers codes
    d'erreurs que nous regroupons sous le code HTTP 503 (Service Indisponible)
    auquel est adjoint un message spécifique expliquant le souci côté Banque De
    France quand celui ci est connu avec précision.  Vous pouvez toutefois faire
    des appels après 22h mais devrez prendre en compte ces opérations de
    maintenance.
---
