/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CheckInsCtrl', function () {
  var ctrl;

  beforeEach(module('checkIns'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CheckInsCtrl');
  }));

  it('should have ctrlName as CheckInsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CheckInsCtrl');
  });
});
