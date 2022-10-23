const exec = require('@actions/exec');
const core = require('@actions/core');

async function run() {

  try {
    console.log('Hello, world! asdasd');
    await exec.getExecOutput(`.\\example.ps1`);
    console.log('exec has run');
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet') || 'World';
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    console.log(`time ${time}!`);
    core.setOutput("returnEcho", time);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
