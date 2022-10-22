import core from '@actions/core';
import exec from '@actions/exec';

try {
  const nameToGreet = core.getInput('who-to-greet') || 'World';
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();

  const output = await exec.getExecOutput('./example.ps1');

  console.log(`output ${output}!`);
  console.log(`time ${time}!`);
  core.setOutput("returnEcho", time);


} catch (error) {
  console.log(`Catch error ${error}!`);
  core.setFailed(error.message);
}