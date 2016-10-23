/* global describe, beforeEach, it, browser, expect */
'use strict';

var CheckInsPagePo = require('./check-ins.po');

describe('Check ins page', function () {
  var checkInsPage;

  beforeEach(function () {
    checkInsPage = new CheckInsPagePo();
    browser.get('/#/check-ins');
  });

  it('should say CheckInsCtrl', function () {
    expect(checkInsPage.heading.getText()).toEqual('checkIns');
    expect(checkInsPage.text.getText()).toEqual('CheckInsCtrl');
  });
});
