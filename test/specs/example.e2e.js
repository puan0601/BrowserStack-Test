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

