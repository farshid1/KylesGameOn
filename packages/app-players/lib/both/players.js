/**
 * The global namespace for Players.
 * @namespace Players
 */
Players = new Mongo.Collection("players");

Players.schema = new SimpleSchema({
    /**
     ID
     */
    _id: {
        type: String,
        optional: true
    },
    /**
     The player's name
     */
    name: {
        type: String,
        optional: true
    },
    /**
     The player's position
     */
    position: {
        type: String,
        optional: true
    }
});

Players.attachSchema(Players.schema);