GameApp.controller('GameController', function ($scope, $rootScope, $routeParams, $location, Api) {
    Api.getGame($routeParams.id).success(function (game) {
        $scope.game = game;
        
        if ($scope.game.active == false && $scope.game.done == false) {
            console.log("Adding user to game");
            Api.addUserToGame($scope.game.id);
        }
    })

    /*
     *  Game is starting - join game
     */
    

    /*
     *  Game is active - observe
     */
});
