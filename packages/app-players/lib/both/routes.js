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
        template: 'layout',
        controller: App.controllers.players
    });
});

