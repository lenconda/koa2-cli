# koa2-rest-cli

![Build Status](https://travis-ci.org/lenconda/koa2-rest-cli.svg?branch=master)
[![npm version](https://badge.fury.io/js/koa2-rest-cli.svg)](https://badge.fury.io/js/koa2-rest-cli)
![ndoe version](https://img.shields.io/node/v/koa2-rest-cli.svg)
1[monthly downloads](https://img.shields.io/npm/dm/koa2-rest-cli.svg)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/lenconda/koa2-rest-cli/blob/master/LICENSE)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


[Koa](https://www.npmjs.com/package/koa) application generator.

Generating a RESTFul Koa2 template with `koa2-rest-cli`. 

Inspired by [koa-generator](https://github.com/17koa/koa-generator).

## Features

- Support TypeScript with es6 class
- Support koa 2.x（koa middleware supported, need Node.js 7.6+ , babel optional）
- Generate RESTFul API ONLY

## Requirements

| Item        | Details                                                      |
| ----------- | ------------------------------------------------------------ |
| System      | GNU/Linux (>=2.6.x), macOS (>=10.10.x), Windows (later than XP) |
| Environment | Node.js and npm                                              |

## Installation

```bash
$ npm install -g koa2-rest-cli
```

with 1 command

- koa2-init (Support koa 2.x ONLY)

## Command Line Options

This generator can also be further configured with the following command line flags.

```bash
Usage: koa2-init [options] [project_name(dir)]

Options:
  -V, --version     output the version number
  -t, --typescript  add typescript support
  -f, --force       force generate in an empty directory
  -h, --help        output usage information
```

## Quick Start


To get started in the quickest way, after you installed this package, the system will auto link script `koa2-init` to a directory that in your system's `$PATH`. Thus you can simply run the command as shown below:

### Create the App

#### Without TypeScript

```bash
$ koa2-init test
```

#### With TypeScipt

```bash
$ koa2-init -t test

# or

$ koa2-init --typescript test
```

then the process will **auto execute** `npm install` command in your project directory.

### Start the Project

#### Without TypeScript

```bash
# start a dev server
$ npm run dev

# start a production server
$ npm run prod
# (production server requires pm2)
```

#### With TypeScript

```bash
# start a dev server
$ npm start

# start a production server
$ npm run prod
# (production server requires pm2)

# build the project
$ npm run build

# clean the project
$ npm run clean

# lint the project
$ npm run lint
```

the application will start and listen on `*:3000`.

## License

[MIT](LICENSE)
