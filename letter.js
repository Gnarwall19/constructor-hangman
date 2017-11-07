function Letter(ltr) {
  this.ltr = ltr;
  this.show = false;
};

Letter.prototype.renderLetter = function() {
  if (this.show === false) {
    return "_";
  } else {
    return this.ltr;
  }
};

module.exports = Letter;
