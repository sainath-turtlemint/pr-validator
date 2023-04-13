const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `pr-title` input defined in action metadata file
  const prTitle = core.getInput('pr-title');
  console.log(`Hello ${prTitle}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
