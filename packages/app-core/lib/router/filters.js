//--------------------------------------------------------------------------------------------------//
//--------------------------------------------- Filters --------------------------------------------//
//--------------------------------------------------------------------------------------------------//

Router._filters = {

  isReady: function () {
    if (!this.ready()) {
      // console.log('not ready')
      this.render('loading');
    }else{
      this.next();
      // console.log('ready')
    }
  },

  isLoggedIn: function () {

  },

  isLoggedOut: function () {
    if(Meteor.user()){
      this.render('already_logged_in');
    } else {
      this.next();
    }
  },

  isAdmin: function () {
    if(!this.ready()) return;
    if(!Users.is.admin()){
      this.render('no_rights');
    } else {
      this.next();
    }
  }
};

var filters = Router._filters;

Meteor.startup( function (){

  if(Meteor.isClient){

    // Load Hooks

    Router.onBeforeAction( function () {

      // if we're not on the search page itself, clear search query and field
      if(Router.current().route.getName() !== 'search'){
        Session.set('searchQuery', '');
        $('.search-field').val('').blur();
      }

      this.next();

    });

    // onRun Hooks

    // note: this has to run in an onRun hook, because onBeforeAction hooks can get called multiple times
    // per route, which would erase the message before the user has actually seen it
    // TODO: find a way to make this work even with HCRs.

    // Before Hooks

    Router.onBeforeAction(filters.isReady);
    Router.onBeforeAction(filters.isLoggedOut, {only: []});
    Router.onBeforeAction(filters.isAdmin, {only: ['posts_pending', 'all-users', 'settings', 'toolbox', 'logs']});

    //Router.plugin('ensureSignedIn', {only: ['post_submit', 'post_edit', 'comment_edit']});


    // After Hooks

    // Router.onAfterAction(filters.resetScroll, {except:['posts_top', 'posts_new', 'posts_best', 'posts_pending', 'posts_category', 'all-users']});
    //Router.onAfterAction(Events.analyticsInit); // will only run once thanks to _.once()

    // Unload Hooks


  }

});
