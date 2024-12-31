# clie (Command Line Interface Example)

This is an app primarily to showcase my skills with using TypeScript and creating a CLI (Command Line Interface) app. It runs on [Bun](https://bun.sh) 🍞.

## To Install

1. [Clone the Repository](#clone-the-repository)
2. [Install NVM for NPM](#install-nvm-for-npm)
3. [Install Bun and the Project](#install-bun-and-the-project)
4. [Set up the `.env`](#set-up-the-env)

### Clone the Repository

In a terminal, change directory to where you would like to clone the repository to, then run `git@github.com:ckhatton/typescript-cli-example-app.git` to clone the repository, and then run `cd typescript-cli-example-app` to change directory into "typescript-cli-example-app".

### Install NVM for NPM

Install NVM (Node Version Manager) by following their [documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

Then install a node version.

```bash
nvm install 20
```

> **Note:**
>
> If the `nvm` command does not work, try a new terminal window. If that still does not fix it, please refer to their [documentation](https://github.com/nvm-sh/nvm#troubleshooting-on-linux) on how to add it to your shell profile.

### Install Bun and the Project

> **Note:**
>
> If these instructions do not work for your OS, please head to the [Bun](https://bun.sh/docs/installation) website for install instructions and then follow it with `bun install && npm install -g`.

Run this command below to install Bun and the project packages, and to create a global system link.

```bash
npm install -g bun && bun install && npm install -g
```

> **Note:**
>
> To remove the global system link, run `npm remove -g` within the project directory.

### Set up the `.env`

Copy `.env.example` to `.env`.

Sign in to GitHub and go to <https://github.com/settings/tokens?type=beta>

Create a fine-grained personal access token:

- Repository access: "Public Repositories (read-only)"
- Permissions: None

This newly created token is to be used for `GITHUB_PERSONAL_ACCESS_TOKEN`.

## To Run

### Globally

Since running `npm install -g`, loci can be run anywhere on the system with:

```bash
clie <optional arguments>
```

### From the Project Root

```bash
bun run clie <optional arguments>
```

### Optional Arguments

```text
--server, -s to run a Bun server
```
