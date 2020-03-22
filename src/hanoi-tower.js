module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const countTurns = Math.pow(2, disksNumber) - 1;
    return { turns: countTurns, seconds: (countTurns/(turnsSpeed/3600))};
}