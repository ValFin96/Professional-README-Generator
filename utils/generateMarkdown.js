// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = '';
    if (license === 'MIT') {
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'Apache') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    } else if (license === 'GPL') {
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if (license === 'BSD') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
    }
    return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
    if (license === 'MIT') {
        licenseLink = `${renderLicenseBadge(license)}(https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache') {
        licenseLink = `${renderLicenseBadge(license)}(https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GPL') {
        licenseLink = `${renderLicenseBadge(license)}(https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'BSD') { 
        licenseLink = `${renderLicenseBadge(license)}(https://opensource.org/licenses/BSD-3-Clause)`
    }
    return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
    if (license !== 'None') {
        return (
            `This project is licensed under the ${renderLicenseLink(license)} license.`
        )
    } else {
        return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
 ## Description
 ${data.description}
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}
 ## License
 ${renderLicenseSection(data.license)}
 ## Contributing
 ${data.contribution}
 ## Tests
 ${data.test}
 ## Questions
 Full Name: ${data.userName}

 Github username: ${data.github}

 Email address: ${data.email}

 Repository URL: ${data.repo}
 
 Live URL: ${data.url}
 `;
}

module.exports = generateMarkdown;