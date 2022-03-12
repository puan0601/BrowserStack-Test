describe('My Login application', () => {
    it('Homepage should load properly', async () => {
        await browser.url("https://bstackdemo.com/");
        let signin = $('#signin');
        should.exist(signin);
        // await $('#signin').click();

        // await $('#username').setValue(['demouser', 'enter']);
        // await $('#password').setValue(['testingisfun99', 'enter']);
        // await $('button[type="submit"]').click();

        // await expect($('.username')).toBeExisting();
        // await expect($('.username')).toHaveTextContaining(
        //     'demouser');
    });
});


