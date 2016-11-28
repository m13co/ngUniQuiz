'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /1_Dashboard when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/1_Dashboard");
  });


  describe('1_Dashboard', function() {

    beforeEach(function() {
      browser.get('index.html#!/1_Dashboard');
    });


    it('should render 1_Dashboard when user navigates to /1_Dashboard', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('2_NewGame', function() {

    beforeEach(function() {
      browser.get('index.html#!/2_NewGame');
    });


    it('should render 2_NewGame when user navigates to /2_NewGame', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
