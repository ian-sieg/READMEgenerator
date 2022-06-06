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
  let installToc = 'Installation'
  let usageToc = 'Usage'
  let contributeToc = 'Contributing'
  let testToc = 'Testing'

  function generateToc(section) {
    if (!section.install) {
      installToc = ''
    };
    if (!section.usage) {
      usageToc = ''
    };
    if (!data.contribute) {
      contributeToc = ''
    };
    if (!data.test) {
      testToc = ''
    };

    return `- [${installToc}](#${installToc})
  - [${usageToc}](#${usageToc})
  - [${contributeToc}](#${contributeToc})
  - [${testToc}](#${testToc})`
  }

  if (data.install) {
    var installSect = `## ${installToc}:\n\t${data.install}`
  } else {
    installSect = ''
  };

  if (data.usage) {
    var usageSect = `## ${usageToc}:\n\t${data.usage}`
  } else {
    usageSect = ''
  };
  
  if (data.contribute) {
    var contributeSect = `## ${contributeToc}:\n\t${data.contribute}`
  } else {
    contributeSect = ''
  };

  if (data.test) {
    var testSect = `## ${testToc}:\n\t${data.test}`
  } else {
    testSect = ''
  };

  return `# ${data.title}
  ## Project Description:
  ${data.description}

  ## Table of Contents:
  - [${usageToc}](#${usageToc})
  ${generateToc(data)}
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
