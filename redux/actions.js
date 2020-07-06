const { spookyTypes } = require('./types');

//code actions here
const incrementStep = function() {
  return this.state.steps++;
}

const createNewSpookySound = function(sound) {
  return this.state.spookySounds.push(sound);
}

module.exports = {
  incrementStep,
  createNewSpookySound,
};
