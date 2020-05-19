---
weight: 8
type: Informations financières
title: 3 derniers bilans annuels
label: bilans_entreprises_bdf
scope:
  - entreprises
description: Obtenir les trois derniers bilans d’une entreprise détenus par la
  Banque de France.
usecases:
  - Aides publiques
  - Marchés publics
access: Restreint
opening: Données confidentielles
providers:
  - bdf
perimeter:
  label: Les entreprises ayant au moins 3 bilans et réalisant plus 750 000 euros
    de CA.
  description: >-
    Les données Banque de France ne couvrent pas de manière exhaustive tous les
    SIREN. Notamment, seules les entreprises réalisant un chiffre d'affaire
    supérieur à 750 000 euros et ayant *a minima* trois bilans sont
    disponibles. 


    Les bilans retenus sont ceux dont la date d’arrêté est comprise entre (MM+1/AAAA– 4) et MM/AAAA . MM/AAAA correspondant au mois en cours. Par exemple pour un appel le 17 janvier 2020, les bilans retenus ont une date d'arrêt comprise entre le 1er février 2016 et le 17 janvier 2020.


    ⚠️ Même si la Banque de France connaît un à deux bilans de l'entité appelée mais pas les trois derniers, aucune données sera transmise et l'erreur 404 sera renvoyée.
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
  timeout: 5 secondes
  format: Donnée structurée JSON
  description: >-
    Les 3 bilans sont listés les uns après les autres, le premier étant le plus
    récent. Chacun d'eux est accompagné des informations suivantes : 


    * Durée de l'exercice et date d'arrêt ;

    * Données comptables ;

    * Comparaison des montants de ces dernières avec l'année N-1. La clé étant alors précédée de l'intitulé `evolution_`.
  sample:
    code: >-
      {
        "monnaie": "kEuros",
        "bilans": [
          {
            "duree_exercice": "12",
            "valeur_ajoutee_bdf": "7848792", 
            // cette valeur ajoutée n'est pas calculée de la même façon que la valeur ajoutée "classique".
            "resultat_exercice": "347126", 
            // correspond au champ 'HN' de la liasse fiscale 2053.
            "capitaux_propres_et_assimiles": "5928663", 
            // correspond au champ 'DL' de la liasse fiscale 2051.
            "total_provisions_pour_risques_et_charges": "1957919", 
            // correspond au champ 'DR' de la liasse fiscale 2051.
            "dettes1_emprunts_obligataires_et_convertibles": "0", 
            // correspond au champ 'DS' de la liasse fiscale 2051.
            "dettes2_autres_emprunts_obligataires": "6552306", 
            // correspond au champ 'DT' de la liasse fiscale 2051.
            "total_dettes_stables": "6552306", 
            // Que le bilan soit valide ou non, cette valeur est calculée comme suit : 'dettes1_emprunts_obligataires_et_convertibles' + 'dettes2_autres_emprunts_obligataires' + 'dettes3_emprunts_et_dettes_aupres_des_etablissements_de_credit' - 'dettes4_maturite_a_un_an_au_plus'. Dans le cas ou un des termes du calcul ne serait pas renseigné, il est considéré comme ayant une valeur nulle pour le calcul.
            "emprunts_et_dettes_financieres_divers": "430634", 
            // correspond au champ 'DV' de la liasse fiscale 2051.
            "groupes_et_associes": "0", 
            // correspond au champ 'VI' de la liasse fiscale 2057.
            "besoin_en_fonds_de_roulement": "-721507",
            "disponibilites": "1983051",
            "total_passif": "18478051", 
            // correspond au champ 'EE' de la liasse fiscale 2051.



            



            
      // ÉVOLUTIONS

      // Les calculs d'évolution ne se font que si les bilans ont la même durée d'exercice et se fait de l'année N par rapport à l'année N - 1. Les champs sont calculés par la BdF sur le mode suivant : (valeur à date N - valeur à date N-1) *100 / valeur absolue (valeur à date N-1).
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
            
         
            "chiffre_affaires_ht": "12030700", 
            // correspond au champ 'FL' de la liasse fiscale 2052.
            "capacite_autofinancement": "891914",
            "date_arret_exercice": "201512",
            "dettes3_emprunts_et_dettes_aupres_des_etablissements_de_credit": "0", 
            // correspond au champ 'DU' de la liasse fiscale 2051.
            "dettes4_maturite_a_un_an_au_plus": "0", 
            // correspond à la somme des champs 'VG2' et 'VH2' de la liasse fiscale 2057.
            "autres_fonds_propres": "0", 
            // correspond au champ 'DO' de la liasse fiscale 2051.
            "capital_social_inclus_dans_capitaux_propres_et_assimiles": "3800000", 
            // correspond au champ 'DA' de la liasse fiscale 2051.
            "excedent_brut_exploitation": "-1876863",


      // ÉVOLUTIONS

      // Les calculs d'évolution ne se font que si les bilans ont la même durée d'exercice et se fait de l'année N par rapport à l'année N - 1. Les champs sont calculés par la BdF sur le mode suivant : (valeur à date N - valeur à date N-1) *100 / valeur absolue (valeur à date N-1).    
            "evolution_chiffre_affaires_ht": "",
            "evolution_capacite_autofinancement": "",
            "evolution_dettes3_emprunts_et_dettes_aupres_des_etablissements_de_credit": "",
            "evolution_dettes4_maturite_a_un_an_au_plus": "",
            "evolution_autres_fonds_propres": "",
            "evolution_capital_social_inclus_dans_capitaux_propres_et_assimiles": "",
            "evolution_excedent_brut_exploitation": "",
            "evolution_fonds_roulement_net_global": "",
            "evolution_ratio_fonds_roulement_net_global_sur_besoin_en_fonds_de_roulement": "",
            "evolution_total_dettes_stables": "",
            
            
            "fonds_roulement_net_global": "2464585",
            "ratio_fonds_roulement_net_global_sur_besoin_en_fonds_de_roulement": "-" 
            // Cette valeur est calculée en faisant le ratio 'fonds_roulement_net_global' * 100 / 'besoin_en_fonds_de_roulement', si ces deux champs ne sont pas négatifs.
            }, 
            
            // {bilan 2} même composition,
            // {bilan 3} même composition.
        ]
      }
---
