GameApp.controller('GameListController', function ($scope, $location, Api) {
    Api.getStartingGames().success(function (games) {
        $scope.startingGames = games;
    });
    
    $scope.activeGames = [{
            id: 1233
    }];

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
