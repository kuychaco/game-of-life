var id = 0;

var Animal = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  this.id = id++;
  this.$node = $('<span class="animal" id="'+ this.id +'"></span>');
  this.setPosition(top, left);
  this.step();
};

Animal.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Animal.prototype.setPosition = function(top, left){
  var border = 25;
  var height = $("body").height();
  var width = $("body").width();
  top = Math.max(Math.min(top, height - border), border);
  left = Math.max(Math.min(left, width - border), border);
  var styleSettings = {
    top: top,
    left: left
  };
  // if (this.inBoundPosition())
  this.$node.css(styleSettings);
};

Animal.prototype.getID = function() {
  return this.id;
};