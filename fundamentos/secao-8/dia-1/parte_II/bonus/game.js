const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// PARTE I

const dragonAttack = () => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg;
};

const warriorAttack = () => {
  const minDmg = warrior.strength;
  const maxCalculator = minDmg * warrior.weaponDmg;
  const maxDmg = Math.floor(Math.random() * maxCalculator);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg;
};

const mageAttack = () => {
  const minDmg = mage.intelligence;
  const maxCalculator = minDmg * 2;
  const maxDmg = Math.floor(Math.random() * maxCalculator);
  
  const mageMana = mage.mana;
  const turnStats = {
    manaspent: 0,
    damageDealt: 'Not enough mana...'
  };
  if (mageMana > 15) {
    const mageDmg = maxDmg > minDmg ? maxDmg : minDmg;
    turnStats.manaspent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats
  }
  return turnStats
};

// PARTE II

