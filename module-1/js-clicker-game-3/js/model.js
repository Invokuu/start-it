/*
 * MODEL
 */

const model = {
    points: 0,
    time: 0,
    clicks: 0,
    cps: 0,
    pointsIncrement: 1,
    autoClick: false,
    message: '',
    emojiType: 0,
    emojiState: 0,
    emoji: [
        ['😁', '😀', '😊'],
        ['😼', '🙀', '😸', '😻', '😿']
    ],
    upgrades: {
        click: {
            cost: 10,
            fn: upgradeClick
        },
        emoji: {
            cost: 100,
            available: 1,
            fn: upgradeEmoji
        },
        autoClick: {
            cost: 500,
            available: 1,
            fn: upgradeAutoClick
        }
    },
    scoreboard: []
};