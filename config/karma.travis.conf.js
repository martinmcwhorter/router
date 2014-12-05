/*
 * karma.conf.js and karma.es5.conf.js optionally load this
 */

module.exports = function(options) {
  if (!isTravis()) {
    return;
  } else if (!options.sauceLabs) {
    throw new Error('This should be loaded after karma.sauce config');
  }
  options.sauceLabs.build = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';
  options.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
  options.sauceLabs.startConnect = false;

  //process.env.SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY.split('').reverse().join('');

  // TODO(vojta): remove once SauceLabs supports websockets.
  // This speeds up the capturing a bit, as browsers don't even try to use websocket.
  options.transports = ['xhr-polling'];

  options.singleRun = true;
};

function isTravis() {
  return !!process.env.TRAVIS;
}
