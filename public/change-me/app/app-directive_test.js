/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('app', function () {
  var scope
    , element;

  beforeEach(module('changeMe', '/app-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<app></app>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().app.name).toEqual('app');
  });
});
