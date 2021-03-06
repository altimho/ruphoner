'use strict';

describe('RuPhoner filter', function () {
  var $filter, ruphoner;

  beforeEach(module('altimho.ruphoner'));
  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));
  beforeEach(function () {
    ruphoner = $filter('ruphoner');
  });

  it('should be registered', function () {
    expect(ruphoner).toBeDefined();
    expect(typeof ruphoner).toBe('function');
  });

  describe('shoud process', function () {

    it('correct formatted russian number', function () {
      expect(ruphoner('+7 987 654-32-10')).toBe('+7 987 654-32-10');
    });

    it('local formatted russian number', function () {
      expect(ruphoner('8(987)654 32 10 ')).toBe('+7 987 654-32-10');
    });

    it('digits-only russian number', function () {
      expect(ruphoner(79876543210)).toBe('+7 987 654-32-10');
    });

    it('partialy formatted russian number', function () {
      expect(ruphoner('+7 9876543210')).toBe('+7 987 654-32-10');
    });

    it('already formatted russian number with 4-digit code', function () {
      expect(ruphoner('8 9876 543210')).toBe('+7 9876 54-32-10');
    });

    it('already formatted russian number with 5-digit code', function () {
      expect(ruphoner('+7-98765-4-32-10')).toBe('+7 98765 4-32-10');
    });

  });

  describe('should passthrough', function () {

    it('correct formatted 9-digits number', function () {
      expect(ruphoner('+7 987 65-43-21')).toBe('+7 987 65-43-21');
    });

    it('Singhapoure number', function () {
      expect(ruphoner('+65 9876 5432')).toBe('+65 9876 5432');
    });

  });

  describe('shoud not fail invalid values', function () {

    it ('undefined value', function () {
      expect(function () { ruphoner() }).not.toThrow();
      expect(function () { ruphoner(undefined) }).not.toThrow();
    });

    it ('true value', function () {
      expect(function () { ruphoner(true) }).not.toThrow();
    });

    it ('false value', function () {
      expect(function () { ruphoner(false) }).not.toThrow();
    });

    it ('null value', function () {
      expect(function () { ruphoner(null) }).not.toThrow();
    });

    it ('Array value', function () {
      expect(function () { ruphoner([1, 2, 3]) }).not.toThrow();
    });

    it ('Object value', function () {
      expect(function () { ruphoner({ 'a': 1, 'b': 2 }) }).not.toThrow();
    });

  });

});
