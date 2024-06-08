#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Injoon Oh/"),
  handle: chalk.cyan("injoon5"),
  description: chalk.white(
    "A student who is interested in math, science, and computers.",
  ),
  mastodon: chalk.cyan("https://mastodon.injoon5.com/@injoon5"),
  github: chalk.cyan("https://github.com/injoon5"),
  web: chalk.cyan("https://injoon5.com"),
  npx: chalk.white("npx injoon5"),
  labelMastodon: chalk.white.bold("  Mastodon:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const descriptioning = `${data.description}`;
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  descriptioning +
  newline +
  newline +
  webing +
  newline +
  githubing +
  newline +
  mastodoning +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
