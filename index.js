const core = require('@actions/core')
const github = require('@actions/github')

try {
    const find = core.getInput('find')
    const replace = core.getInput('replace')
    const branchName = github.context.branchName.replace(find, replace)

    core.setOutput('value', branchName)
    console.log('branch name:', branchName)
} catch (error) {
    core.setFailed(error.message)
}