# GitHub Commit History

---

## Technologies

- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **JavaScript:** A high-level, dynamic, untyped, and interpreted programming language.
- **TypeScript:** A superset of JavaScript that compiles to clean JavaScript.
- **Axios:** A Promise based HTTP client for the browser and node.js
- **Jest:** A testing framework for JavaScript
- **Tailwind CSS:** A utility-first CSS framework.

---

## Description

An app that shows git commit history on the same project you are working on.

---

## Clone Project Repository (GitHub)

```bash
# Using HTTPS
$ git clone https://github.com/lazaromer97/git-commit-history.git

# Using SSH
$ git clone git@github.com:lazaromer97/git-commit-history.git

# Using GitHub CLI
$ gh repo clone lazaromer97/git-commit-history
```

---

## Installation

Move to the project directory `cd git-commit-history`.

The version of Node used to run this project is `16.16.0`.
If you are using `nvm`, you can install this version and make use of it with the following command:

```bash
# This read the version from the .nvmrc file
$ nvm use
```

After that you can install the project dependencies with the following command:

```bash
$ npm install
```

---

## Set Environment Variables

Create a `.env` file in the root of the project and add the following line:

```bash
GITHUB_PROJECT_COMMIT_HISTORY_URL="https://api.github.com/repos/lazaromer97/git-commit-history/commits"
```

Or you can use the `.env.example` file, rename it to `.env`, and add the same value to the `GITHUB_PROJECT_COMMIT_HISTORY_URL` variable.


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

---

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## License

This project is licensed under the [MIT License](LICENSE).
