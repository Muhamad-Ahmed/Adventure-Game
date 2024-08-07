#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Enemy variables
let enemies: string[] = ["Skeleton", "Zombie", "Grimclaw", "Hellfire", "Ghost"];
let enemyMaxHealth: number = 50;
let enemyHealth: number = 0;
let enemyMinHealth: number = 20;
let enemyCount: number = 3;
let enemyMaxDamage: number = 30;

// Player variables
let playerHealth: number = 50;
let playerMaxDamage: number = 50;

// Game variables
let medikitPopChance: number = 50; // 50% chance
let medikitHealAmount: number = 25;
let medikit: number = 1;

let running: boolean = true;

console.log(chalk.blue.bold.underline("!!!\tWelcome to the Dungeon!\t!!!\n"));

// Game loop
Game: while (running) {
  console.log(
    chalk.blue.bold.underline(
      "#\tYou have to defeat 3 enemies to win the game.\t#\n"
    )
  );

  // Set up the enemy
  enemyHealth = Math.round(
    Math.random() * (enemyMaxHealth - enemyMinHealth) + enemyMinHealth
  );
  let randomEnemy: number = Math.floor(Math.random() * enemies.length);
  let enemy: string = enemies[randomEnemy];

  console.log(chalk.bold.red(`!!!\t Your enemy is ${enemy}.\t!!!\n`));
  console.log(chalk.bold.green(`###\t Your health is ${playerHealth}. \t###\n`));
  console.log(chalk.bold.red(`###\t ${enemy} health is ${enemyHealth}. \t###\n`));

  while (playerHealth > 0 && enemyHealth > 0) {
    let options = await inquirer.prompt([
      {
        name: "user",
        type: "list",
        message: "###\t What do you want to do? \t###\n",
        choices: ["Attack", "Use Medikit", "Run Away"],
      },
    ]);

    if (options.user === "Attack") {
      let damageDealt: number = Math.round(Math.random() * enemyMaxDamage) + 1; // Damage between 1 and 30
      let damageDone: number = Math.round(Math.random() * (playerMaxDamage - 25)) + 25; // Damage between 25 and 50

      playerHealth -= damageDealt;
      enemyHealth -= damageDone;

      console.log(
        chalk.bold.green(
          `###\t You strike the enemy for ${damageDone} damage. \t###\n`
        )
      );
      console.log(
        chalk.bold.red(
          `###\t You have received ${damageDealt} damage in retaliation. \t###\n`
        )
      );
      console.log(chalk.bold.green(`###\t Your health is ${playerHealth}. \t###\n`));
      console.log(chalk.bold.red(`###\t ${enemy} health is ${enemyHealth}. \t###\n`));

      if (playerHealth <= 0) {
        console.log(
          chalk.bold.italic.red.bgBlack("###\t You have fallen to your doom. \t###\n")
        );
        console.log(chalk.bold.italic.red.bgBlack(`###\t Game over. \t###\n`));
        running = false;
        break Game;
      } else if (enemyHealth <= 0) {
        console.log(
          chalk.bold.italic.underline.yellow(`###\t ${enemy} is dead. \t###\n`)
        );
        enemyCount--;
        if (enemyCount === 0) {
          console.log(
            chalk.bold.italic.cyan.bgBlack(
              `###\t\t Congratulations! You have won the Dungeon. \t\t###\n`
            )
          );
          break Game;
        }

        let medikitPop: number = Math.round(Math.random() * 100); // Number between 0 and 100
        if (medikitPop <= medikitPopChance) {
          medikit++;
          console.log(chalk.bold.green(`###\t You have received 1 medikit. \t###\n`));
          console.log(chalk.bold.green(`###\t You have ${medikit} medikits. \t###\n`));
        }
        continue Game;
      }
    } else if (options.user === "Use Medikit") {
      if (medikit > 0) {
        playerHealth += medikitHealAmount;
        medikit--;
        console.log(chalk.bold.green(`###\t Your health is ${playerHealth}. \t###\n`));
        console.log(chalk.bold.green(`###\t You have ${medikit} medikits left. \t###\n`));
      } else {
        console.log(chalk.bold.green(`###\t You don't have any more medikits. \t###\n`));
        console.log(chalk.bold.green(`###\t Defeat enemies to earn more medikits. \t###\n`));
      }
    } else if (options.user === "Run Away") {
      console.log(chalk.bold.red("###\t You run away. \t###\n"));
      console.log(chalk.bold.red(`###\t Game over. \t###\n`));
      break Game;
    } else {
      console.log(chalk.bold.red("###\t Invalid option, Please choose a valid option. \t###\n"));
    }
  }
}
