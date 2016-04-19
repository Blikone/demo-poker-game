module.exports = function() {
  this.Given(/^I am on the poker site$/, function () {
    browser.url('http://localhost:3000');
  });
  
  this.Then(/^I should see "([^"]*)"$/, function (copy) {
    // <h1 className="display-3">Some Page!</h1>
    let _el = 'a.navbar-brand';
    browser.waitForExist(_el);
    expect(browser.getText(_el)).toEqual(copy);
    // Write the automation code here
  });
};

