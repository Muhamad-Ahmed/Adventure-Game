# Adventure Game

A simple, interactive command-line dungeon adventure game programmed in TypeScript and Node.js. Defeat enemies, manage your health, and use medikits wisely to win the dungeon!

## Features

- Fight against randomly selected enemies.
- Use medikits to heal yourself.
- Randomized enemy health and damage.
- Win by defeating all enemies or lose if your health drops to zero.
- Colorful and engaging CLI interface using [chalk](https://www.npmjs.com/package/chalk).
- Interactive prompts powered by [inquirer](https://www.npmjs.com/package/inquirer).

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ahmed-shahidd/Adventure-Game.git

   cd Adventure-Game
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

### Run with Node.js

If you have already compiled the TypeScript to JavaScript (`main.js`):

```sh
node main.js
```

### Run with ts-node (for TypeScript source)

If you want to run the TypeScript file directly (requires `ts-node`):

```sh
npx ts-node main.ts
```

### Make it Executable (Optional)

You can also run the game as a CLI tool if you have set the executable flag:

```sh
./main.js
```

## Game Rules

- You start with 50 health and 1 medikit.
- Defeat 3 randomly generated enemies to win.
- Each turn, you can:
  - **Attack:** Deal random damage to the enemy and receive damage in return.
  - **Use Medikit:** Heal yourself if you have medikits.
  - **Run Away:** End the game immediately.
- Defeating an enemy may reward you with an extra medikit.
- The game ends if your health drops to zero or you run away.

## Project Structure

- [`main.ts`](main.ts): Main TypeScript source file.
- [`main.js`](main.js): Compiled JavaScript file.
- [`package.json`](package.json): Project metadata and dependencies.
- [`tsconfig.json`](tsconfig.json): TypeScript configuration.


## Author

Ahmed Shahid

---


Enjoy your adventure in the dungeon!
