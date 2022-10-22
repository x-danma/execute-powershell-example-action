const core = require('@actions/core');
try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet') || 'World';
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  console.log(`time ${time}!`);
  core.setOutput("returnEcho", time);
  // Get the JSON webhook payload for the event that triggered the workflow
} catch (error) {
  core.setFailed(error.message);
}
