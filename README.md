Developer web app shell to quickly build and test components, CSS, and JS in a web or NodeJS environment.

## NodeJS Prereqs

- Install [Parcel](https://parceljs.org/) globally
- install [Browsersync](https://www.browsersync.io/) globally

## Usage

In a terminal, dynamically watch and rebuild resources in src/

```sh
$ parcel watch src/index.html
```

In another terminal, run Browsersync to start a webserver that automatically reloads when files are rebuilt.  Here's an alias you can use:

```bash
# start a browser from the current folder
alias bs-here="browser-sync start \
  --port 8000 \
  --no-browser \
  --directory \
  --server \
  --no-notify \
  --no-open \
  --reload-delay 0 \
  --reload-debounce 0 \
  --no-inject-changes \
  --no-ghost-mode \
  --files ./ \
  "
```

```
$ cd dist
$ bs-here
```

Open index.html in the browser:

http://localhost:8000/index.html
