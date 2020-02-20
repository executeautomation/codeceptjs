
Feature('LoginNavigate');

Scenario('Login to Demo site', (I) => {
    I.amOnPage('/Login.html')

    I.fillField("UserName", "admin")
    I.fillField("Password", "password")
    I.click("//input[@type='submit']");

    I.waitForElement({xpath: "//input[@name='Initial']"})

    I.saveScreenshot("loggedIn.jpg")

    I.selectOption({css: 'select[name=TitleId]'}, "Mr.")

    I.saveScreenshot("selectOption.jpg")

    I.checkOption("Hindi")

});
