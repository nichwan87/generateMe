// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
}
return ''

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, github, title) {
  if (license !== "None") {
    return `[![license](https://img.shields.io/link/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
}
return ''

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, github, title) {
  function renderLicenseLink(license) {
    if (license !== "None") {
      return `[![license]](${generateProjectUrl(github, title)})`
  }
  return ''
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1>##${answers.title}</h1>

  # Table of Contents
- [Description](#description)
- [Useage](#useage)
- [Installation](#installation)
- [Support](#support)
- [Roadmap](#roadmap)
- [Collaborating](#permissions)
- [Acknowledgements](#acknowledgements)
- [Acknowledgements](#acknowledgements)
- [License](#license)

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  # Description
  ${answers.description}

  # Usage
  ${answers.useage}

  # Installation
  ${answers.installation}

  # Support
  ${answers.contactNames}

  # Roadmap
  ${answers.roadmap}

  # Collaborating
  ${answers.permissions}

  #Acknowledgements
  ${answers.acknowledgements}

  #License
  ![badge](https://img.shields.io/badge/license-${answers.license})
  <br>
  This application is under licence of ${answers.license}
`;
}

module.exports = generateMarkdown;