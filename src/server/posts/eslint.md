It is better to rely on a project-local installation of ESLint than a system-global installation. If you rely on a system-global installation of ESLint, you must separately document the version of ESLint you expect to be used with your project as well as any additional plugins and/or configurations.

Configuring your editor to use a project-local version of ESLint means that you can avoid this hassle and risk. Your linting dependencies live under `devDependencies` in `package.json` like the rest of your development dependencies, which means that your existing `yarn` or `npm install` setup step gets you everything you need for linting.

Some documentation for using a project-local installation of ESLint with Vim requires that you install ESLint globally for Syntastic's sake. The configuration provided here demonstrates how to use a project-local version of ESLint *without* installing it globally.

1. Install [Syntastic](https://github.com/vim-syntastic/syntastic) if you haven't already.

2. Add `eslint` to your project:
```sh
$ yarn add -D eslint
```

3. Configure `syntastic` to use `eslint` in your `.vimrc`:
```vim
let g:syntastic_javascript_checkers=['eslint']
let g:syntastic_javascript_eslint_exec='node_modules/.bin/eslint'
```

4. In `package.json`, add something like:
  ```js
  {
     // ...
     "scripts": {
       "lint": "eslint ." // eg
       //...
     }
     // ...
  }
  ```

`yarn run lint` will now lint your project using your project-local installation of ESLint!
