interface House {
  name: "Gryffindor" | "Ravenclaw" | "Hufflepuff" | "Slytherin";
  founder: string;
  mascot: string;
  professor: string;
  characterTreats: string;
}

interface Wand {
  wood: string;
  core: string;
  length: number;
}

interface Spell {
  name: string;
  type: string;
  description: string;
  difficulty: "easy" | "medium" | "difficult";
}

interface Ingredient {
  name: string;
  harvestSeason: "spring" | "summer" | "autumn" | "winter";
  harvest: string;
  effect: string;
  use: string;
}

interface Potions {
  name: string;
  ingredients: Ingredient[];
  effect: string;
  difficulty: "easy" | "medium" | "difficult";
}

interface Pet {
  name: string;
  species: string;
  abbilities: string;
  care: string;
  rarity: "ordinary" | "rare" | "mythical";
}

interface WizardWitch {
  id: number;
  name: string;
  house: House;
  wand: Wand;
  spells: Spell[];
  pets: Pet[];
  potions: Potions[];
}
