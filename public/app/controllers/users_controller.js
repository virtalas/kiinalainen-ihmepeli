GameApp.controller('UsersController', function ($scope, $location, Api) {
    $scope.user = {
        username: "",
        password: ""
    }
    
    $scope.login = function () {
        Api.login($scope.user)
                .success(function (user) {
                    $location.path("/");
                })
                .error(function () {
                    $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
                });
    }

    $scope.register = function () {
        if ($scope.password1 == $scope.password2) {
            $scope.user.password = $scope.password1;
            
            Api.register($scope.user)
                    .success(function (user) {
                        $location.path("/");
                    })
                    .error(function () {
                        $scope.errorMessage = 'Käyttäjätunnus on jo käytössä!';
                    });
        } else {
            $scope.errorMessage = "Salasanat eivät täsmää!"
        }
    }
});
