const {Schema, model} = require('mongoose');

const rulesSchema = new Schema({
    tickets: {
        type: Number
    },
    vsd: {
        type: Number
    },
    bullet_damage: {
        type: Number
    },
    katk: {
        type: Number
    },
    player_health: {
        type: Number
    },
    prt: {
        type: Number
    },
    kai: {
        type: Number
    },
    bak: {
        type: Number
    }
})

const RulesModel = model('rules', RulesSchema);

module.exports = RulesModel;