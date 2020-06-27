# Web Developer Shell

Quickly develop and test modern HTML, CSS, and JavaScript in a fast, local web environment.  Intended for begineers too!

## Prerequesites
1. Install [NodeJS/NPM](https://nodejs.org/en/download/current/), if needed.
1. Optionally, install [Yarn](https://yarnpkg.com/getting-started/install), a newer alternative to NPM. ([Read more](https://spin.atomicobject.com/2020/03/15/why-yarn-2020/))
1. Install [Parcel](https://v2.parceljs.org/) globally.  Parcel v2 (`@next`) is currently recommended at the time of writing.  From a command line, run:

    ```bash
    $ npm install -g parcel@next

            -- or --
        
    $ yarn global add parcel@next
    ```

## Usage

Parcel will start a webserver, watch for changes to files in `src/` folder, automatically rebuild the project's HTML/JS/CSS code, and hot reload the browser.  Parcel automatically downloads and installs any package dependencies if it finds certain files or syntax in your code (e.g. TypeScript, SASS/LESS, lit-html, Preact, React, etc).

From a command line, run:

```sh
$ parcel src/index.html
```

Open the server's webpage and begin coding!

http://localhost:1234
