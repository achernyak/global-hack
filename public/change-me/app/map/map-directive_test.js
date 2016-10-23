/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('map', function () {
  var scope
    , element;

  beforeEach(module('map', 'map/map-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<map></map>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().map.name).toEqual('map');
  });
});
