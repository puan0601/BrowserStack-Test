describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://bstackdemo.com/signin`);

        await $('#username').setValue('demouser');
        await $('#password').setValue('testingisfun99');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

// describe("Google's Search Functionality", () => {
//     it("can find search results", () => {
//       browser.url("https://www.google.com/");
//       const inputForm = $("//input[@name='q']");
//       inputForm.setValue(["BrowserStack", "Enter"]); // this helps in majority desktops
  
//       try {
//         browser.waitUntil(() => browser.getTitle().match(/BrowserStack/i));
//       } catch (e) {
//         browser.elementSubmit(inputForm.elementId); // this helps in remaining cases, i.e. iPhone
//       }
  
//       browser.waitUntil(
//         () => browser.getTitle().match(/BrowserStack/i),
//         5000,
//         "Title didn't match with BrowserStack"
//       );
//     });
//   });
