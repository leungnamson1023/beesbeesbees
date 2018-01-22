var ForagerBee = function() {
  Bee.call(this); 
  this.age = 10;
  this.job = 'find pollen'
  this.canFly = true;
  this.treasureChest = [];
};












ForagerBee.prototype = Object.create(Grub);

ForagerBee.prototype.eat = function(){};

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(thing) {
  this.treasureChest.push(thing); // only delegates to this ForageBee treasure chest
}