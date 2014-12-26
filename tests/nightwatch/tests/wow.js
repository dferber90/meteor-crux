module.exports = {
  "step one" : function (browser) {
    browser
      .url("http://localhost:3000")
      .waitForElementVisible('body', 1000);
  },
  
  "step two" : function (browser) {
    browser
      .pause(1000)
      .assert.containsText('h1', 'My App')
      .end();
  }
};