const core = require('@actions/core');
import * as github from '@actions/github'

try {
  // `pr-title` input defined in action metadata file
  const prTitle = getPRTitle();
  console.log(`Hello ${prTitle}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context)
  console.log(`The complete event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

function getPRTitle() {
  const pullRequest = github.context.payload.pull_request
  if (!pullRequest) {
    core.setFailed('Action not run in pull_request context.')
    return ''
  }

  const prTitle = pullRequest.title

  if (!prTitle) {
    core.setFailed('Action couldnt find the title on PR')
    return ''
  }

  core.debug(`get pr title : ${prTitle}`)
  return prTitle
}
