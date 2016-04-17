module.exports = function() {
  this.Given(/^I am on the poker site$/, function () {
    browser.url('http://localhost:3000');
  });
  
  this.Then(/^I should see "([^"]*)"$/, function (arg1) {
    // <h1 className="display-3">Some Page!</h1>
    let _el = 'h1.display-3';
    browser.waitForExist(_el);
    expect(browser.getText(_el)).toEqual(arg1);
    // Write the automation code here
  });
};

