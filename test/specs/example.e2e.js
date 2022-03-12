const { default: BrowserstackService } = require("@wdio/browserstack-service");

describe('BStackdemo Home', () => {
    it('Should load with the proper title', async () => {
        await browser.url("https://bstackdemo.com/");
        await expect(browser).toHaveTitle('StackDemo');
    });

    it('Should display a product item', async () => {
        await browser.url("https://bstackdemo.com/");
        const item = $('.shelf-item');
        await expect(item).toExist();
    });

    it('Should display multiple product items', async () => {
        await browser.url("https://bstackdemo.com/");
        const items = $$('.shelf-item');
        await expect(items).length < 1;
    });

    it('Should have a Sign In link', async () => {
        await browser.url("https://bstackdemo.com/");
        const signin = $('#signin');
        await expect(signin).toExist();
    })

    it('Sign In link should bring you to the sign in page', async () => {
        await browser.url("https://bstackdemo.com/");
        const signin = $('#signin');
        await signin.click();
        await expect(browser).toHaveUrl('https://bstackdemo.com/signin');
    })
});

describe('Sign In', () => {
    it('Should have a username input', async () => {
        await browser.url("https://bstackdemo.com/signin");
        const usernameInput = $('#username');
        await expect (usernameInput).toExist();
    });

    it('Should have a password input', async () => {
        await browser.url("https://bstackdemo.com/signin");
        const passwordInput = $('#password');
        await expect (passwordInput).toExist();
    });

    it('Should have a login button', async () => {
        await browser.url("https://bstackdemo.com/signin");
        const button = $('#login-btn');
        await expect (button).toExist();
    });
})

