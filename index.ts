const recipes = [
  'Bulgursalaatti',
  'Hernekeitto',
  'Heroinipasta',
  'Hot dog',
  'Itkutofu',
  'Kaalilaatikko',
  'Kanaton curry keitto',
  'Lasagne',
  'Makaronilaatikko',
  'Makkarakastike ja perunaa',
  'Makkarakeitto',
  'Myskikurpitsakeitto',
  'Nachopelti',
  'Nugetit ja Perunamuusi',
  'Nyhtökaura-gnocchivuoka',
  'Nyhtökaurakäristys',
  'Pinaattikeitto',
  'Pitsaperjantai',
  'Quornkiusaus',
  'Quornpihvejä ja kermaperunoita',
  'Sitruunainen hernepasta',
  'Soijarouhebolognese',
  'Tikka masala tofulla',
  'Tofunugetit',
  'Tofunuudelit',
  'Tofupuikot ja hernetahna',
  'Tortillas',
  'Uunipyttipannu',
  'Vegaaninen butter tofu',
  'Vihapullat ja Perunamuusi',
];

const randomRecipe = () => recipes[Math.floor(Math.random() * recipes.length)];

const weeksRecipes = new Set();

while (weeksRecipes.size < 5) {
  weeksRecipes.add(randomRecipe());
}

console.log(`This week's recipes are: ${Array.from(weeksRecipes).join(', ')}`);
