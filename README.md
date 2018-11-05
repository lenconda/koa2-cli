# koa2-cli

[![Build Status](https://travis-ci.org/lenconda/koa2-cli)](https://travis-ci.org/lenconda/koa2-cli)

http://koajs.com/

[Koa](https://www.npmjs.com/package/koa) application generator.

Generating a RESTFul Koa2 template with `koa2-cli`. 

Inspired by [koa-generator](https://github.com/17koa/koa-generator).

## Features

- Express-style
- Support koa 2.x（koa middleware supported, need Node.js 7.6+ , babel optional）
- Generate RESTFul API ONLY

## Requirements

| Item        | Details                                                      |
| ----------- | ------------------------------------------------------------ |
| System      | GNU/Linux (>=2.6.x), macOS (>=10.10.x), Windows (later than XP) |
| Environment | Node.js and npm                                              |

## Installation

```sh
$ npm install -g koa2-cli
```

with 1 command

- koa2-restful-generator (Support koa 2.x)

## Command Line Options

This generator can also be further configured with the following command line flags.

```bash
    -h, --help          output usage information
    -V, --version       output the version number
    -f, --force         force on non-empty directory
```

## Quick Start


To get started in the quickest way, after you installed this package, the system will auto link script `koa2-restful-generator` to a directory that in your system's `$PATH`. Thus you can simply run the command as shown below:

### Create the App

```bash
$ koa2-cli test && cd ./test
```

then the process will **auto execute** `npm install` command in your project directory.

### Start the Project

```bash
# start via dev server
$ npm run dev

# start in production mode
$ npm run prod
# (production server requires pm2)
```

the application will start and listen on `*:3000`.

## License

[MIT](LICENSE)
