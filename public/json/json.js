const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "Demografisk informasjon",
      "elements": [
        {
          "type": "text",
          "name": "Age",
          "title": "Alder",
          "isRequired": true,
          "inputType": "number"
        },
        {
          "type": "checkbox",
          "name": "Gender",
          "title": "Kjønn",
          "isRequired": true,
          "choices": [
            {
              "value": "Male",
              "text": "Mann"
            },
            {
              "value": "Female",
              "text": "Kvinne"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "title": "Kosthold",
      "elements": [
        {
          "type": "dropdown",
          "name": "MealsPerDay",
          "title": "Hvor mange måltid spiser du per dag?",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "1"
            },
            {
              "value": "2",
              "text": "2"
            },
            {
              "value": "3",
              "text": "3"
            },
            {
              "value": "4",
              "text": "4"
            },
            {
              "value": "5OrMore",
              "text": "5 eller flere"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "FruitAndVegetables",
          "title": "Hvor mange porsjoner frukt og grønnsaker spiser du daglig?",
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": "0"
            },
            {
              "value": "1-2",
              "text": "1-2"
            },
            {
              "value": "3-4",
              "text": "3-4"
            },
            {
              "value": "5OrMore",
              "text": "5 eller flere"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "UnhealthyFoodFrequency",
          "title": "Hvor ofte spiser du usunn mat (f.eks. hurtigmat, godteri, snacks)?",
          "isRequired": true,
          "choices": [
            {
              "value": "RarelyOrNever",
              "text": "Sjeldent eller aldri"
            },
            {
              "value": "1-2TimesPerWeek",
              "text": "1-2 ganger per uke"
            },
            {
              "value": "3-4TimesPerWeek",
              "text": "3-4 ganger per uke"
            },
            {
              "value": "AlmostDaily",
              "text": "Nesten hver dag"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "WaterIntake",
          "title": "Hvor mange liter vann drikker du daglig?",
          "isRequired": true,
          "choices": [
            {
              "value": "LessThan1L",
              "text": "Mindre enn 1 liter"
            },
            {
              "value": "1-2L",
              "text": "1-2 liter"
            },
            {
              "value": "2-3L",
              "text": "2-3 liter"
            },
            {
              "value": "MoreThan3L",
              "text": "Mer enn 3 liter"
            }
          ]
        }
      ]
    },
    {
      "name": "page3",
      "title": "Trening",
      "elements": [
        {
          "type": "dropdown",
          "name": "WorkoutDaysPerWeek",
          "title": "Hvor mange dager i uken trener du?",
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": "0"
            },
            {
              "value": "1-2",
              "text": "1-2"
            },
            {
              "value": "3-4",
              "text": "3-4"
            },
            {
              "value": "5OrMore",
              "text": "5 eller flere"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "WorkoutDuration",
          "title": "Hvor lang tid varer en typisk treningsøkt?",
          "isRequired": true,
          "choices": [
            {
              "value": "LessThan30Minutes",
              "text": "Mindre enn 30 minutter"
            },
            {
              "value": "30-60Minutes",
              "text": "30-60 minutter"
            },
            {
              "value": "1-2Hours",
              "text": "1-2 timer"
            },
            {
              "value": "MoreThan2Hours",
              "text": "Mer enn 2 timer"
            }
          ]
        },
        {
          "type": "tagbox",
          "name": "WorkoutTypes",
          "title": "Hva slags trening driver du mest med? (flere svar mulig)",
          "isRequired": true,
          "choices": [
            {
              "value": "StrengthTraining",
              "text": "Styrketrening"
            },
            {
              "value": "Cardio",
              "text": "Kardio (løping, sykling, svømming, etc.)"
            },
            {
              "value": "GroupTraining",
              "text": "Gruppetrening (f.eks. spinning, yoga, crossfit)"
            },
            {
              "value": "TeamSports",
              "text": "Lagidrett (fotball, håndball, etc.)"
            },
            {
              "value": "OtherTraining",
              "text": "Annen trening"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "WorkoutSatisfaction",
          "title": "Hvor fornøyd er du med din nåværende treningsrutine?",
          "isRequired": true,
          "choices": [
            {
              "value": "VerySatisfied",
              "text": "Veldig fornøyd"
            },
            {
              "value": "Satisfied",
              "text": "Fornøyd"
            },
            {
              "value": "Neutral",
              "text": "Nøytral"
            },
            {
              "value": "Dissatisfied",
              "text": "Misfornøyd"
            },
            {
              "value": "VeryDissatisfied",
              "text": "Veldig misfornøyd"
            }
          ]
        }
      ]
    },
    {
      "name": "page4",
      "title": "Kosttilskudd",
      "elements": [
        {
          "type": "boolean",
          "name": "UsesSupplements",
          "title": "Bruker du kosttilskudd?",
          "isRequired": true
        },
        {
          "type": "tagbox",
          "name": "SupplementTypes",
          "visibleIf": "{UsesSupplements} = true",
          "title": "Hvis ja, hvilke kosttilskudd bruker du? (flere svar mulig)",
          "isRequired": true,
          "choices": [
            {
              "value": "ProteinPowder",
              "text": "Proteinpulver"
            },
            {
              "value": "Creatine",
              "text": "Kreatin"
            },
            {
              "value": "VitaminsMinerals",
              "text": "Vitaminer/mineraler"
            },
            {
              "value": "PreWorkout",
              "text": "Pre-workout"
            },
            {
              "value": "Omega3",
              "text": "Omega-3/fiskolje"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "SupplementFrequency",
          "visibleIf": "{UsesSupplements} = true",
          "title": "Hvor ofte bruker du kosttilskudd?",
          "isRequired": true,
          "choices": [
            {
              "value": "Daily",
              "text": "Daglig"
            },
            {
              "value": "3-5TimesPerWeek",
              "text": "3-5 ganger per uke"
            },
            {
              "value": "1-2TimesPerWeek",
              "text": "1-2 ganger per uke"
            },
            {
              "value": "Rarely",
              "text": "Sjeldent"
            }
          ]
        }
      ]
    },
    {
      "name": "page5",
      "title": "Generelt",
      "elements": [
        {
          "type": "dropdown",
          "name": "GeneralHealth",
          "title": "Hvordan vil du beskrive din generelle helse?",
          "isRequired": true,
          "choices": [
            {
              "value": "Excellent",
              "text": "Utmerket"
            },
            {
              "value": "Good",
              "text": "God"
            },
            {
              "value": "Average",
              "text": "Gjennomsnittlig"
            },
            {
              "value": "Poor",
              "text": "Dårlig"
            },
            {
              "value": "VeryPoor",
              "text": "Svært dårlig"
            }
          ]
        },
        {
          "type": "comment",
          "name": "FitnessGoals",
          "title": "Har du noen mål knyttet til trening eller kosthold? (valgfritt)",
          "isRequired": false
        }
      ]
    }
  ]
}