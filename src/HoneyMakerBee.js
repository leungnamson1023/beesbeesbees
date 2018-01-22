var HoneyMakerBee = function() {
  Bee.call(this); // inherit properties from Bee
  
  this.age = 10;
  this.job = 'make honey';
  this.yellow = 'pink'
  this.honeyPot = 0;
  
};


HoneyMakerBee.prototype = Object.create(Grub.prototype); // have methods/property from Grub

HoneyMakerBee.prototype.constructor = HoneyMakerBee;


HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++; // should only point to this HoneyMakers Honey Pot
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--; // should only point to this HoneyMakers Honey Pot
}