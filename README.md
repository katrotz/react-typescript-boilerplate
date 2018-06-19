# react-typescript-boilerplate

### Steps
1. Install [create-react-app](https://github.com/facebookincubator/create-react-app)

```
npm i -g create-react-app
```

2. Generate a new react app using the typescript loader

```
create-react-app react-typescript-boilerplate --scripts-version=react-scripts-ts
```

3. [Rewire](https://github.com/timarney/react-app-rewired) the create-react-app. Note that the package.json will have to be updated to reflect the usage of the typescript scripts of the create-react-app

```
"scripts": {
    "start": "react-app-rewired start --scripts-version react-scripts-ts",
    "build": "react-app-rewired build --scripts-version react-scripts-ts",
    "test": "react-app-rewired test --env jsdom --scripts-version react-scripts-ts",
    "eject": "react-app-rewired eject"
  }
  ```

### Tips and Tricks
- [react-typescript-cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet)