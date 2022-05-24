#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const y = chalk.yellow;
const g = chalk.green;
const c = chalk.cyan;
const b = chalk.bold;

const cardOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  borderColor: "blue",
};

const content = `                  ${b("Sajjan Rampal")}

${g("Job")}                Software Engineer at Kochartech
${g("Twitter")}            ${y("https://twitter.com/sajjanrampal")}
${g("GitHub")}             ${y("https://github.com/sajjanrampal")}
${g("Website")}            ${y("https://sajjan-rampal.web.app")}
${g("LinkedIn")}           ${y("https://linkedin.com/in/sajjanrampal")}

                    ${b("About me")}

${g("Short Info.")}        ${y(`Frontend web/software engineer with 5 years experience participating`)}
                   ${y(`in the complete product development lifecycle of successfully launched applications.`)}
                   ${y(`Currentlly working in MEAN Stack technology.`)}`;

const slidesContent = ``;

const card = boxen(content, cardOptions);

console.log(card);
