var GameApp = angular.module('GameApp', ['ngRoute']);

GameApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'GameListController',
                templateUrl: 'app/views/game/game_list.html',
                resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .when('/login', {
                controller: 'UsersController',
                templateUrl: 'app/views/user/login.html',
                resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .when('/register', {
                controller: 'UsersController',
                templateUrl: 'app/views/user/register.html',
                resolve: {
                    userLoggedIn: function ($rootScope, Api) {
                        return Api.getUserLoggedIn().success(function (user) {
                            $rootScope.userLoggedIn = user.username ? user : null;
                        });
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
});

GameApp.run(function ($rootScope, $location, Api) {
    $rootScope.logOut = function () {
        Api.logout().success(function () {
            $location.path('/login');
            $rootScope.userLoggedIn = null;
        });
    }
});
