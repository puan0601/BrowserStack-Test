describe('My Login application', () => {
    it('Homepage should load properly', async () => {
        browser.url("https://bstackdemo.com/");
        await expect(browser).toHaveTitleContaining('Stack');
        // await $('#signin').click();

        // await $('#username').setValue(['demouser', 'enter']);
        // await $('#password').setValue(['testingisfun99', 'enter']);
        // await $('button[type="submit"]').click();

        // await expect($('.username')).toBeExisting();
        // await expect($('.username')).toHaveTextContaining(
        //     'demouser');
    });
});

