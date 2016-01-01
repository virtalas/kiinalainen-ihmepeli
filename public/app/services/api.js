GameApp.service('Api', function ($http) {
    this.addGame = function (game) {
        return $http.post("/games", game);
    }
    
    this.getStartingGames = function () {
        return $http.get("/games/starting");
    }
    
    // Aihealueiden Api-funktiot
//    this.getTopics = function () {
//        return $http.get("/topics");
//    }
//    this.getTopic = function (id) {
//        return $http.get("/topics/" + id);
//    }
//    this.addTopic = function (topic) {
//        return $http.post("/topics", topic);
//    }

    // Käyttäjän Api-funktiot
    this.login = function (user) {
        return $http.post("/users/authenticate", user);
    }
    this.register = function (user) {
        return $http.post("/users", user);
    }
    this.getUserLoggedIn = function () {
        return $http.get("/users/logged-in");
    }
    this.logout = function () {
        return $http.get('/users/logout');
    }
});
