# React Quick Start

Quick start steps:

- Start a command prompt window or terminal and change directory to [unpacked path]/react/[demo] or [unpacked path]/atimak(project_file)
```
   npm install
   # OR
   yarn install
```

- Install the React local project dependencies by executing npm install or yarn install command. This command will install the dependencies to node_modules folder these dependencies are listed in package.json.
```
   npm install
   # OR
   yarn install
```

- Execute npm run dev or yarn dev command to launch the server which watches your files, and rebuilds the app as you make changes to those files. Open your browser on http://localhost:5173/.
```
   npm run dev
   # OR
   yarn dev
```
  
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
