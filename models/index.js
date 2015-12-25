var Database = require('../db/connection');

var User = Database.sequelize.define('ki_User', {
    id: {type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    username: Database.DataTypes.STRING,
    password: Database.DataTypes.STRING
});

var Game = Database.sequelize.define('ki_Game', {
    id: {type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    active: Database.DataTypes.BOOLEAN,
    done: Database.DataTypes.BOOLEAN
});

var Card = Database.sequelize.define('ki_Card', {
    id: {type: Database.DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    rank: Database.DataTypes.INTEGER,
    suit: Database.DataTypes.INTEGER // 1=c, 2=d, 3=h, 4=s
});

Card.belongsTo(User);
User.belongsTo(Game);

Game.hasMany(User);
User.hasMany(Card);

module.exports = {
    User: User,
    Game: Game,
    Card: Card
};
