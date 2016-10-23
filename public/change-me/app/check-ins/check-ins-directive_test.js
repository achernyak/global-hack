/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('checkIns', function () {
  var scope
    , element;

  beforeEach(module('checkIns', 'check-ins/check-ins-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<check-ins></check-ins>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().checkIns.name).toEqual('checkIns');
  });
});
