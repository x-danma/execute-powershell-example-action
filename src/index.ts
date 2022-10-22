import core from '@actions/core';

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet') || 'World';
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  console.log(`time ${time}!`);
  core.setOutput("returnEcho", time);
} catch (error) {
  core.setFailed(error.message);
}