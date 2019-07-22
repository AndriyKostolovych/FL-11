/* Your code goes here */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Fighter(data) {
const totalHealth = data.hp;
let name = data.name
let health = data.hp;
let wins = 0;
let losses = 0;
let damage = data.damage
let oneHundred = 100;


this.getName = function() {
  return name;
}
this.getDamage = function() {
  return damage;
}
this.getAgility = function() {
  return data.agility;
}
this.getHealth = function() {
  return health;
}
this.attack = function(target) {
  let chance = oneHundred - target.getAgility();
  let isSuccess = getRandomInt(1, oneHundred) <= chance

  if (isSuccess) {
    target.dealDamage(damage);
    console.log(name + ' make ' + damage + ' damage to ' + target.getName())
  } else {
    console.log(name + ' attack missed');
  }
}
this.logCombatHistory = function() {
  return 'Name: ' + name + ', Wins: ' + wins + ', Losses: ' + losses;
}
this.heal = function(value) {
  health = health + value >= totalHealth ? totalHealth : health + value;
}
this.dealDamage = function(value) {
  health = health - value <= 0 ? 0 : health - value;
}
this.addWin = function() {
  return ++wins;
}
this.addLoss = function() {
  return ++losses;
}
}


let fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
let fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});

function battle(a, b) {
let magicTwo = 2;

if (!a.getHealth()) {
  console.log(a.getName() + ' is dead and can\' fight.');
  return 
}

if (!b.getHealth()) {
  console.log(b.getName() + ' is dead and can\'t fight.');
  return
}

let turn = 0;

do {
  if (turn % magicTwo === 0) {
    a.attack(b);
  } else {
    b.attack(a);
  }
  turn++;
} while(a.getHealth() && b.getHealth());

if (!a.getHealth()) {
  a.addLoss();
  b.addWin();
} else {
  b.addLoss();
  a.addWin();
}
}




