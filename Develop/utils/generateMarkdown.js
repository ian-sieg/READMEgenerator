// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let installTitle = 'Installation'
  let usageTitle = 'Usage'
  let contributeTitle = 'Contributing'
  let testTitle = 'Testing'

  if (data.install) {
    var installToc = `- [${installTitle}](#${installTitle})`
    var installSect = `## ${installTitle}:\n\t${data.install}`
  } else {
    installToc = ''
    installSect = ''
  };
  if (data.usage) {
    var usageToc = `- [${usageTitle}](#${usageTitle})`
    var usageSect = `## ${usageTitle}:\n\t${data.usage}`
  } else {
    usageToc = ''
    usageSect = ''
  };
  if (data.contribute) {
    var contributeToc = `- [${contributeTitle}](#${contributeTitle})`
    var contributeSect = `## ${contributeTitle}:\n\t${data.contribute}`
  } else {
    contributeToc = ''
    contributeSect = ''
  };
  if (data.test) {
    var testToc = `- [${testTitle}](#${testTitle})`
    var testSect = `## ${testTitle}:\n\t${data.test}`
  } else {
    testToc = ''
    testSect = ''
  };

  return `# ${data.title}
  ## Project Description:
  ${data.description}

  ## Table of Contents:
  ${installToc}
  ${usageToc}
  ${contributeToc}
  ${testToc}
  - [License](#License)
  - [Questions](#Questions)

  ${installSect}
  ${usageSect}
  ${contributeSect}
  ${testSect}

  ## License
    ${data.license} License

  ## Questions
  - Github Profile: https://github.com/${data.username}
  - Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
