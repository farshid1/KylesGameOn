/**
 *
 */
Meteor.publish('getAllPlayers', function() {
    return Players.find({});
});

/**
 *
 */
Meteor.publish('getRedTeam', function() {
    return Players.find({});
});

/**
 *
 */
Meteor.publish('getBlueTeam', function() {
    return Players.find({});
});