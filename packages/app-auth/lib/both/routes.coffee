App.controllers.auth = App.controllers.AppController.extend
#    waitOn: ->
#        [
#            Meteor.subscribe('getAllPlayers')
#            Meteor.subscribe('getRedTeam')
#            Meteor.subscribe('getBlueTeam')
#        ]
    data: ->
        { users: Players.find({}) }

Meteor.startup ->
  console.log 'here in AUTH startup'
  Router.route '/logout',
    controller: App.controllers.auth
    action: ->
      console.log 'logging out'
      Meteor.logout()
      Router.go('login')
