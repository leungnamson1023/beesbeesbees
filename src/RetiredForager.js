var RetiredForagerBee = function() {
  ForagerBee.call(this); 

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];
};










RetiredForagerBee.prototype = Object.create(Grub);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead"
};

RetiredForagerBee.prototype.eat = function(){};

RetiredForagerBee.prototype.gamble = function(win) {
  this.treasureChest.push(win);
};