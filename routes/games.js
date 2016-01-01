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
        }
    }).then(function (games) {
        res.json(games);
    });
});

// POST /games
router.post('/', authentication, function (req, res, next) {
    // Lisää tämä aihealue
    var gameToAdd = req.body;
    Models.Game.create(gameToAdd).then(function (game) {
        res.json(game);
    });
});

module.exports = router;
