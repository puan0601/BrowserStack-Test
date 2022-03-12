const { default: BrowserstackService } = require("@wdio/browserstack-service");

describe('BStackdemo Home', () => {
    it('Should load with the proper title', async () => {
        await browser.url("https://bstackdemo.com/");
        await expect(browser).toHaveTitle('StackDemo');
        // await $('#signin').click();

        // await $('#username').setValue(['demouser', 'enter']);
        // await $('#password').setValue(['testingisfun99', 'enter']);
        // await $('button[type="submit"]').click();

        // await expect($('.username')).toBeExisting();
        // await expect($('.username')).toHaveTextContaining(
        //     'demouser');
    });
    it('Should display product item', async () => {
        await browser.url("https://bstackdemo.com/");
        const item = $('.shelf-item');
        await expect(item).toExist();
    });
    it('Should have a Sign In link', async () => {
        await browser.url("https://bstackdemo.com/");
        const signin = $('#signin');
        await expect(signin).toExist();
    })
});

