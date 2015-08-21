/* global
    AccountsTemplates: false,
    Settings: false
*/

//////////////////////////////////
// AccountsTemplates configuration
//////////////////////////////////

if (Meteor.isServer) {
  Meteor.startup(function () {
    Accounts.emailTemplates.siteName = Settings.get('title');
    Accounts.emailTemplates.from = Settings.get('defaultEmail');
  });
}


AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'error.accounts.Invalid email',
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 8,
    errStr: 'error.minChar'
});



//Routes
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp', {
  path: '/register'
});
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('verifyEmail');


// Options
AccountsTemplates.configure({
    enablePasswordChange: true,
    showForgotPasswordLink: true,
    confirmPassword: false,
    overrideLoginErrors: true,
    lowercaseUsername: true,

    negativeFeedback: false,
    positiveFeedback: false,
    negativeValidation: true,
    positiveValidation: true
});

// hack to get signOut route not considered among previous paths
if (Meteor.isClient) {
    Meteor.startup(function(){
        AccountsTemplates.knownRoutes.push('/sign-out');
    });
}
