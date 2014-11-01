'use strict';

function Partie() {
  this.indexDuServeur = 0;
  this.indexDuReceveur = 0;
}

var SCORES = [ 0, 15, 30, 40, 'A' ];

Partie.prototype.score = function () {
  return SCORES[this.indexDuServeur] + '-' + SCORES[this.indexDuReceveur];
};

Partie.prototype.scoreALaReprise = function (indexInitialDuServeur, indexInitialDuReceveur) {
  this.indexDuServeur = indexInitialDuServeur;
  this.indexDuReceveur = indexInitialDuReceveur;
};

Partie.prototype.leServeurAMarqué = function () {
  if (4 === this.indexDuReceveur) {
    --this.indexDuReceveur;
  } else {
    ++this.indexDuServeur;
  }
};

Partie.prototype.leReceveurAMarqué = function () {
  if (4 === this.indexDuServeur) {
    --this.indexDuServeur;
  } else {
    ++this.indexDuReceveur;
  }
};

module.exports = Partie;