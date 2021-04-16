function generateMarkdown(data) {
  return (
`
 
# ${data.title}

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

##Table of Content

*[Description](#description)

*[Install](#install)

*[Usage](#usage)

*[Contribution](#contribution)

*[Test](#test)

*[GitHub](#github)

*[Email](#email)

## Description: 
${data.description}

## Install:

\`\`\`
${data.install}
\`\`\`

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Test:
${data.test}

## GitHub:
[${data.github}](https://github.com/${data.github}/)

## Email:
[${data.email}](mailto:${data.email})

`
  );
  //all the functions above should get called here
}

module.exports = generateMarkdown;