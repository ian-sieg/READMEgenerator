// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
  } else {
    return `![A badge of the ${license} License](https://img.shields.io/badge/License-${license.split(' ').join('')}-brightgreen)`
  }
};

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `## License\n[${license}](https://choosealicense.com/licenses/mit/) License`;
    case 'GNU GPLv3':
      return `## License\n[${license}](https://www.gnu.org/licenses/gpl-3.0.en.html) License`;
    case 'Apache 2.0':
      return `## License\n[${license}](https://www.apache.org/licenses/LICENSE-2.0) License`;
    case 'ISC':
      return `## License\n[${license}](https://choosealicense.com/licenses/isc/) License`
    case 'none':
      return ''
  }
};

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
  ${renderLicenseBadge(data.license)}
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

  ${renderLicenseLink(data.license)}

  ## Questions
  - Github Profile: https://github.com/${data.username}
  - Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
