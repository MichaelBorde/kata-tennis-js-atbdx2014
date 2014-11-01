'use strict';

var expect = require('chai').expect;
var Partie = require('../sources/partie');

describe('Une partie', function () {
  var partie;

  beforeEach('qui commence', function() {
    partie = new Partie();
  });

  it('a un score de 0-0', function () {
    var score = partie.score();

    expect(score).to.equal('0-0');
  });

  it('a un score de 15-0 si le serveur marque des points une fois', function () {
    partie.leServeurAMarqué();

    var score = partie.score();

    expect(score).to.equal('15-0');
  });

  it('a un score de 30-0 si le serveur marque des points deux fois de suite', function () {
    partie.leServeurAMarqué();
    partie.leServeurAMarqué();

    var score = partie.score();

    expect(score).to.equal('30-0');
  });

  it('a un score de 15-15 si le serveur et le receveur marquent des points une fois', function () {
    partie.leServeurAMarqué();
    partie.leReceveurAMarqué();

    var score = partie.score();

    expect(score).to.equal('15-15');
  });

  it('a un score de 40-0 si le serveur marque des points trois fois de suite', function () {
    partie.leServeurAMarqué();
    partie.leServeurAMarqué();
    partie.leServeurAMarqué();

    var score = partie.score();

    expect(score).to.equal('40-0');
  });

  it('a un score de 0-40 si le receveur marque des points trois fois de suite', function () {
    partie.leReceveurAMarqué();
    partie.leReceveurAMarqué();
    partie.leReceveurAMarqué();

    var score = partie.score();

    expect(score).to.equal('0-40');
  });

  it('a un score de A-40 si le serveur a l\'avantage', function () {
    partie.scoreALaReprise(3,3);
    partie.leServeurAMarqué();

    var score = partie.score();

    expect(score).to.equal('A-40');
  });

  it('a un score de 40-40 si le serveur perd l\'avantage', function () {
    partie.scoreALaReprise(4,3);

    partie.leReceveurAMarqué();

    var score = partie.score();

    expect(score).to.equal('40-40');
  });


  it('a un score de 40-40 si le receveur perd l\'avantage', function () {
    partie.scoreALaReprise(3,4);

    partie.leServeurAMarqué();

    var score = partie.score();

    expect(score).to.equal('40-40');
  });
});