import core from '@actions/core';
import exec, { ExecOptions } from '@actions/exec';

try {
  const nameToGreet = core.getInput('who-to-greet') || 'World';
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();

  let myOutput = '';
  let myError = '';

  const options: ExecOptions = {};
  options.listeners = {
    stdout: (data: Buffer) => {
      myOutput += data.toString();
    },
    stderr: (data: Buffer) => {
      myError += data.toString();
    }
  };
  options.cwd = './lib';

  await exec.exec('./example.ps1', null, options);

  console.log(`myOutput ${myOutput}!`);
  console.log(`myError ${myError}!`);
  console.log(`time ${time}!`);
  core.setOutput("returnEcho", time);


} catch (error) {
  core.setFailed(error.message);
}