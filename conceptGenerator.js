var request = ["the King", "a distressed looking peasant", "an ominous voice from nowhere", "a member of the local guard", "a wise old sage", "an old adventurer", "a magical creature", "a passing merchant", "a warning carved into an ancient looking tree", "a noble who known for their great deeds"];
var monster= ["an aberration", "a celestial", "a construct", "a dragon", "an elemental", "a group of fey", "a fiend", "a giant", "a group of humans", "a troop of dwarves", "a band of elves", "a tribe of gnolls", "a faction of gnomes", "a tribe of goblins", "a swarm of kobolds", "a band of lizardfolk", "a faction of merfolk", "a tribe of orcs", "a monstrosity", "a swarm of oozes", "a hoard of undead"];
var problem = ["kidnapped someone important", "has been poisoning the water", "seems to be recruiting people from the local area", "is trying to summon something", "arrived out of nowhere and claimed ownership of the area", "is disrupting the local economy with cheap forgeries", "has been using a strange artefact that is disrupting the ballance of nature", "has taken up residence in a local cave and now the miners have no more work", "are in a feud with something", "has been seen destroying a local ruin that is of great importance"];
var loc = ["the coast", "a desert", "a forest", "a mountain", "a swamp", "the arctic", "the Underdark", "the Nine Hells", "Shadowfell", "the Feywild", "the Astral Planes", "the Abyss", "the Far Realm"];
var twist = ["the quest giver was lying", "the party all have to be the same class", "each player character starts with a magic item", "the party have never met before", "the party gets given a magic item that is cursed", "the party is unaware that they are being stalked by a powerful entity", "the party all have to be the same race", "the party have to protect a NPC that has to go with them"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function concept() {
  var rand1 = Math.floor(Math.random() * request.length);
  var rand2 = Math.floor(Math.random() * monster.length);
  var rand3 = Math.floor(Math.random() * problem.length);
  var rand4 = Math.floor(Math.random() * loc.length);
  var rand5 = Math.floor(Math.random() * twist.length);
 
  var content = "The request comes from " + request[rand1] + " telling the party of  " + monster[rand2] + " (see Monster manual for stats and info), that " + problem[rand3] + ". The quest will take the party to " + loc[rand4] + " and, if you want to shake things up, " + twist[rand5] + ".";

  document.getElementById('concept').innerHTML = "&quot;" + content + "&quot;";
};
concept();
