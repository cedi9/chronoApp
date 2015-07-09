// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

.state('app.signin', {
    url: "/sisgnin",
    //controller: 'LoginCtrl',
    controller: function($scope){
      console.log('OK ca marche!');
    },
    views: {
      'menuContent': {
        templateUrl: "templates/auth/signin/signin.html"
      }
    }
  })
  .state('app.search/search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search/search.html"
      }
    }
  })

  .state('app.signup', {
    url: "/signup",
    views: {
      'menuContent': {
        templateUrl: "templates/auth/signup/signup.html"
      }
    }
  })
    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent': {
          templateUrl: "templates/settings.html",
          controller: 'AppCtrl'
        }
      }
    })

    .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

    .state('app.home', {
    url: "/templates/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

    .state('app.maps/maps', {
    url: "/maps",
    views: {
      'menuContent': {
        templateUrl: "templates/maps/maps.html"
      }
    }
  })

    .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "templates/contact.html"
      }
    }
  })

    .state('app.detail', {
    url: "/detail",
    views: {
      'menuContent': {
        templateUrl: "templates/detail.html"
      }
    }
  })

    .state('app.comments', {
    url: "/comments",
    views: {
      'menuContent': {
        templateUrl: "templates/comment/comments.html"
      }
    }
  })



  .state('app.single', {
    url: "/comment/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/comment/comments.html",
        controller: 'AppCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/templates/home');
});
