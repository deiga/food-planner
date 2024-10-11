const recipes = [
  'Kanaton curry keitto',
  'Sitruunainen hernepasta',
  'Makaronilaatikko',
  'Hernekeitto',
  'Kaalilaatikko',
  'Myskikurpitsakeitto',
  'Tacopelti',
  'Heroinipasta',
  'Vihapullat ja Perunamuusi',
  'Nugetit ja Perunamuusi',
  'Itkutofu',
  'Tikka masala tofulla',
  'Nyhtökaurakäristys',
  'Tofupuikot ja hernetahna',
  'Tofunugetit',
  'Uunipyttipannu',
  'Soijarouhebolognese',
  'Nyhtökaura-gnocchivuoka',
  'Pinaattikeitto',
  'Pitsaperjantai',
  'Fajitas',
  'Tofunuudelit',
  'Vegaaninen butter tofu',
  'Quornkiusaus',
  'Quornpihvejä ja kermaperunoita',
  'Lasagne',
  'Makkarakeitto',
  'Makkarakastike ja perunaa',
];

const randomRecipe = () => recipes[Math.floor(Math.random() * recipes.length)];

const weeksRecipes = new Set();

while (weeksRecipes.size < 5) {
  weeksRecipes.add(randomRecipe());
}

console.log(`This week's recipes are: ${Array.from(weeksRecipes).join(', ')}`);
