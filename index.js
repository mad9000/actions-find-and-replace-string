const core = require('@actions/core')
const github = require('@actions/github')

try {
    const source = core.getInput('source')
    const find = core.getInput('find')
    const replace = core.getInput('replace')
    const replaceAllInput = core.getInput('replaceAll')
    const replaceAll = replaceAllInput ? replaceAllInput == 'true' : false
    const branchName = replaceAll ? source.replaceAll(find, replace) : source.replace(find, replace)
    core.setOutput('value', branchName)
} catch (error) {
    core.setFailed(error.message)
}
