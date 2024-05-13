#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n\t\tWORD COUNTER"));
console.log("=".repeat(60));
const anwers = await inquirer.prompt([{
        name: "sentence",
        types: "input",
        message: "Enter you sentence to count the words"
    }]);
const words = anwers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(words);
console.log(chalk.bold.blue(`you sentence words counts is: ${words.length}`));
console.log("=".repeat(60));
