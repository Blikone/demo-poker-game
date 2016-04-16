module.exports = function() {
  this.Given(/^I am on the poker site$/, function () {
    browser.url('http://localhost:3000');
  });
};