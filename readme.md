# Project viper.

This is a seed for `React` projects that uses most of the bleeding edge tools and techniques.
The seed follows the concept of tree shaking with the help of webpack2 and babel6.

## ⚠️ Caveat
At the moment of writing, `image-webpack-loader` is not compatible with `yarn 0.17`, therefore use `yarn 0.16` or `npm` for production builds.

## Prerequisites.

I recommend using `yarn`, but the classic `npm` will do just fine.
[Reactotron](https://github.com/reactotron/reactotron), in any flavour, must be running before the dev server is ran, check the [instructions](https://github.com/reactotron/reactotron/blob/master/docs/installing.md).

## How to use.

1.  clone the project somewhere.
```
> git clone https://github.com/andreiconstantinescu/project-viper
```

2.  move to the previously cloned location and install dependencies.
```
> cd project-viper
> yarn
```

3.  start reactotron cli (if you have installed it).
```
> reactotron
```
or open the App.

4.  start the dev server.
```
> yarn run dev
```

5. open `localhost:3000` in your browser.

6. Head over to an editor and start hacking.

## Project structure.
```
.
├── client
│   ├── Root.js
│   ├── api
│   │   ├── common.js
│   │   ├── foo.js
│   │   └── index.js
│   ├── assets
│   │   ├── images
│   │   │   ├── congruent_outline.png
│   │   │   └── crossword.png
│   │   └── template.html
│   ├── components
│   │   ├── MainLayout
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── RandomNumber
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── RoundImage
│   │   │   └── index.js
│   │   ├── WelcomeNote
│   │   │   └── index.js
│   │   └── index.js
│   ├── config.js
│   ├── containers
│   │   └── App
│   │       └── index.js
│   ├── index.js
│   ├── reactotron.config.js
│   ├── redux
│   │   ├── Message.redux.js
│   │   ├── RandomNumber.redux.js
│   │   ├── StarWars.redux.js
│   │   ├── common.redux.js
│   │   ├── rootReducer.js
│   │   └── store.js
│   ├── referenciallyEqualRootRoute.js
│   ├── routes.js
│   └── sagas
│       ├── actions.js
│       ├── index.js
│       └── starWarsSaga.js
├── config
│   ├── webpack
│   │   ├── webpack.config.dev.js
│   │   └── webpack.config.prod.js
│   └── webpack.config.js
├── license
├── package.json
├── postcss.config.js
├── readme.md
└── server
    ├── index.js
    └── routers
        ├── foo.js
        └── index.js
```
Each component can have it's own `.css` file that is required in the component's exported `.js` file. Because of using `css modules` the style is scoped in the component and there are no global selectors exposed.

This project uses tachyons, being the only global classes available throughout the project. For overriding variables, at the moment, just rewrite them in the `.css` file for each component.

Contents of the `assets` folder are linked on dev env and optimised when building for production.

This seed uses `Redux` for state management along with the `HMR` for reducers.

# Run for production.

Build the assets and serve them locally.
```
> yarn start
```

Build the assets and serve them in a prodlike env, using [node-foreman](https://github.com/strongloop/node-foreman).
```
> yarn run serve
```

Just build.
```
> yarn run build
```

The `public` folder will appear in the project root having the following structure.

```
public/
├── assets
│   └── images
│       ├── 1Zaf1.png
│       └── TQJIR.png
├── css
│   ├── style.css
│   ├── style.css.map
│   └── tachyons.css
├── index.html
└── js
    ├── 0.js
    ├── 0.js.map
    ├── 1.js
    ├── 1.js.map
    ├── main.js
    ├── main.js.map
    ├── vendor.bundle.js
    └── vendor.bundle.js.map

```

## Seen a problem?
If you find a better way to do something or simply want to add a new feature, just PR. Every little bit of help is welcomed 😀

## Other features.
* tree shaking.
* css modules.
* tachyons.
* hot module realoading (while maintaining the state).
* webpack2.
* webpack dashboard.
* redux.
* reactotron.
* code splitting.
* production ready.
* react-router.
* redux-saga.


## TO DO.
- [X] Add redux.
- [ ] Discard unused css classes.
- [ ] Testing.
- [ ] SSR.
- [ ] Create wiki.
- [X] Add `serve` for production build testing.
- [ ] Create NPM package for auto-scaffold.
- [X] Reactotron API monitor.
- [X] Add redux-saga.

## License.

MIT.
