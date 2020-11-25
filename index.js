const core = require('@actions/core')
const github = require('@actions/github')

try {
    const source = core.getInput('string')
    const find = core.getInput('find')
    const replace = core.getInput('replace')
    const branchName = source.replace(find, replace)
    core.setOutput('value', branchName)
} catch (error) {
    core.setFailed(error.message)
}
