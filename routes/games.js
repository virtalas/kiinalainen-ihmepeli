var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// GET /games/starting
router.get('/starting', function (req, res, next) {
    Models.Game.findAll({
        where: {
            active: false,
            done: false
        },
        include: {
            model: Models.User
        }
    }).then(function (games) {
        res.json(games);
    });
});

// GET /games/active
router.get('/active', function (req, res, next) {
    Models.Game.findAll({
        where: {
            active: true,
            done: false
        },
        include: {
            model: Models.User
        }
    }).then(function (games) {
        res.json(games);
    });
});

// GET /games/:id
router.get('/:id', function (req, res, next) {
    var gameId = req.params.id;
    Models.Game.findOne({
        where: {
            id: gameId
        },
        include: {
            model: Models.User
        }
    }).then(function (game) {
        res.json(game);
    })
});

// POST /games
router.post('/', authentication, function (req, res, next) {
    // Lisää tämä aihealue
    var gameToAdd = req.body;
    Models.Game.create(gameToAdd).then(function (game) {
        res.json(game);
    });
});

// POST /games/add/:id
router.post('/add/:id', authentication, function (req, res, next) {
    var gameId = req.params.id;
//    var messageToAdd = req.body;
//    messageToAdd.TopicId = gameId;
    Models.User.findOne({
        where: {
            id: req.session.userId
        }
    }).then(function (user) {
        user.kiGameId = gameId;
        Models.User.update({
            kiGameId: gameId
        }, {
            where: {
                id: user.id
            },
            fields: ["kiGameId"]
        });
    });
    

});

module.exports = router;
