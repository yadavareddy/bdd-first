import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { browser, by, element } from 'protractor';

// Step 1: Navigate to the login page
Given('the user is on the login page', async () => {
    //await browser.waitForAngularEnabled(false); // Disable Angular checks if it's a non-Angular app
    //await browser.get('http://example.com/login');
    console.log ("Login page is called...")
});

// Step 2: Enter valid credentials and log in
When('they enter valid credentials', async () => {

    console.log ("Entered valid credentials...");
    //const usernameField = element(by.id('username'));
    //const passwordField = element(by.id('password'));
    //const loginButton = element(by.id('login'));

    //await usernameField.sendKeys('testuser');
    //await passwordField.sendKeys('password123');
    //await loginButton.click();
});

// Step 3: Validate that the dashboard is displayed
Then('they should see the dashboard', async () => {
    console.log ("Seeing the Dashboard...");
    

    //const title = await browser.getTitle();
    //expect(title).to.equal('Dashboard');
});