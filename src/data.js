export const DAYS = [
  {
    id: "A", name: "Dzień 1", focus: "UPPER A — Push",
    tag: "Klatka / Barki / Triceps", color: "#E8D44D",
    exercises: [
      { type:"main",     name:"Wyciskanie leżąc",        sets:4, reps:"6-8",    note:"3 min przerwy" },
      { type:"main",     name:"OHP sztanga",              sets:3, reps:"8-10",   note:"2 min przerwy" },
      { type:"compound", name:"Wyciskanie skos hantli",   sets:3, reps:"10-12",  note:"90s przerwy" },
      { type:"superset", name:"Rozpiętki", pair:"Wznosy bokiem",      sets:3, reps:"12-15", pairReps:"15", note:"60-75s między parami" },
      { type:"superset", name:"Triceps linki", pair:"Triceps łamany", sets:3, reps:"15",    pairReps:"12", note:"60-75s między parami" },
    ]
  },
  {
    id: "B", name: "Dzień 2", focus: "LOWER A — Quad",
    tag: "Czworogłowe / Pośladki / Core", color: "#4ECDC4",
    exercises: [
      { type:"main",     name:"Przysiady",                              sets:4, reps:"6-8",     note:"3 min przerwy" },
      { type:"compound", name:"Bułgary",                                sets:3, reps:"10/nogę", note:"2 min przerwy" },
      { type:"superset", name:"Wyprosty nóg", pair:"Uginanie leżąc",   sets:3, reps:"15",      pairReps:"15", note:"60-75s między parami" },
      { type:"superset", name:"Wspięcia stojąc", pair:"Wznosy nóg",    sets:3, reps:"20",      pairReps:"15", note:"60-75s między parami" },
      { type:"core",     name:"Deska",                                  sets:3, reps:"45s",     note:"Finisher" },
    ]
  },
  {
    id: "C", name: "Dzień 3", focus: "UPPER B — Pull",
    tag: "Plecy / Barki tylne / Biceps", color: "#A78BFA",
    exercises: [
      { type:"main",     name:"Wiosło sztanga",                           sets:4, reps:"6-8",   note:"3 min przerwy" },
      { type:"main",     name:"Drążek / Wyciąg górny",                   sets:4, reps:"8-10",  note:"2 min przerwy" },
      { type:"compound", name:"Wiosło hantlem",                           sets:3, reps:"10-12", note:"90s przerwy" },
      { type:"superset", name:"Wyciąg dolny", pair:"Face pulls",          sets:3, reps:"12",    pairReps:"15", note:"Tylny bark" },
      { type:"superset", name:"Biceps młotki", pair:"Biceps łamana",      sets:3, reps:"12",    pairReps:"12", note:"60-75s między parami" },
      { type:"compound", name:"Kapturki",                                 sets:3, reps:"15",    note:"60s przerwy" },
    ]
  },
  {
    id: "D", name: "Dzień 4", focus: "LOWER B — Hinge",
    tag: "Martwy / Łańcuch tylny / Core", color: "#F97316",
    exercises: [
      { type:"main",     name:"Martwy ciąg",                               sets:4, reps:"4-6",   note:"3 min przerwy" },
      { type:"compound", name:"RDL (rumuński martwy)",                      sets:3, reps:"8-10",  note:"2 min przerwy" },
      { type:"compound", name:"Uginanie nóg siedzące",                     sets:3, reps:"12-15", note:"90s przerwy" },
      { type:"superset", name:"Hip thrust", pair:"Wspięcia siedzącw",      sets:3, reps:"15",    pairReps:"20", note:"60-75s między parami" },
      { type:"superset", name:"Brzuszki z hantlem", pair:"Deska bokiem",   sets:3, reps:"12",    pairReps:"30s", note:"Core finisher" },
    ]
  },
]

export const NOTES = [
  { icon:"🎾", text:"Tenis to Twoje cardio — nie dokładamy osobnych sesji" },
  { icon:"⏱️", text:"3 min przy głównych, 90s przy pomocniczych, 60-75s między supersetami" },
  { icon:"⚖️", text:"Cel na redukcji: utrzymać ciężary — nie gonić za progresją" },
  { icon:"💪", text:"Jeśli siła spada — zmniejsz ciężar, zachowaj zakres powtórzeń" },
  { icon:"🔄", text:"Co 5-6 tygodni: mini odciążenie (−30% objętości przez tydzień)" },
  { icon:"📅", text:"Układ: Pon/Wt/Czw/Pt lub Pon/Śr/Czw/Sob" },
]

export const TYPE_COLORS = {
  main:     { bg:"#E8D44D22", border:"#E8D44D", text:"#E8D44D", label:"Główne" },
  compound: { bg:"#4ECDC422", border:"#4ECDC4", text:"#4ECDC4", label:"Pomocnicze" },
  superset: { bg:"#A78BFA22", border:"#A78BFA", text:"#A78BFA", label:"Superset" },
  core:     { bg:"#6EE7B722", border:"#6EE7B7", text:"#6EE7B7", label:"Core" },
}
