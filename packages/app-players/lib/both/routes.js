App.controllers.players =  RouteController.extend({
    waitOn: function() {
        return [
            Meteor.subscribe('getAllPlayers'),
            Meteor.subscribe('getRedTeam'),
            Meteor.subscribe('getBlueTeam')
        ];
    },
    data: function() {
        return {
            players: Players.find({})
        };
    },

});

Meteor.startup( function () {
    Router.route('/', {
        controller: App.controllers.players,
        action: function(){
            this.render('dashboard');
        }
    });
});

