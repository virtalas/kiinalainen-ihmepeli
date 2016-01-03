GameApp.controller('GameListController', function ($scope, $location, Api) {
    Api.getStartingGames().success(function (games) {
        $scope.startingGames = games;
    });
    
    Api.getActiveGames().success(function (games) {
        $scope.activeGames = games;
    });
   
    $scope.newGame = function () {
        var newGame = {
            active: false,
            done: false
        }

        Api.addGame(newGame).success(function (game) {
            $location.path("/games/" + game.id);
        });
    }
});
