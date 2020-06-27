Quickly develop and test HTML, CSS, and JavaScript in a modern, local web environment.

## NodeJS Prereqs

Install [NodeJS](https://nodejs.org/en/) if needed.  Then, install [Parcel](https://parceljs.org/) globally.  Parcel v2 (`@next`) is currently recommended at the time of writing.  From a command line, run:

```$ yarn global add parcel@next```

or

```$ npm install -g parcel@next```

## Usage

Parcel will start a webserver, watch for changes to files in `src/*`, automatically rebuild the project's JS/CSS files, and hot reload the browser.  Parcel automatically downloads and installs any package dependencies if it finds certain files or syntax in your code (e.g. TypeScript, SASS/LESS, lit-html, Preact, React, etc).

From a command line, run:

```sh
$ parcel src/index.html
```

Open the server's webpage and begin coding!

http://localhost:1234
