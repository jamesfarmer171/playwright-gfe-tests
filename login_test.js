Feature('login');

Scenario('test something',  ({ I }) => {

    I.amOnPage('skyvegas.com')  
    I.waitForElement('#onetrust-reject-all-handler', 10);  
    I.click('#onetrust-reject-all-handler');  
    I.waitForElement('#ssc-href', 10);
    I.click('#ssc-href');
    I.waitForElement('#username', 10); 
    I.clearField('#username');
    I.fillField('#username', "");
    //I.updateField('#username', "")
    I.fillField('#password', "");  
    I.waitForElement('.cta.loginButton', 10); 
    I.click('.cta.loginButton');
    //I.waitForElement('.balance-component .my-account', 10);
    // I.click('.balance-component .my-account');
    I.scrollTo('.cta-button button');
    I.waitForElement('.cta-button button', 10);
    I.scrollTo('.cta-button button');
    I.click('.cta-button button');
    I.waitForText("Chance to win up to £1,000 every day you play!")
    I.waitForElement('#cta-button', 10);
    I.click('#cta-button');
    I.waitForElement('//button[@data-qa="PM-spinButton"]', 10); 
    I.click('//button[@data-qa="PM-spinButton"]');
    I.wait(10)
});


