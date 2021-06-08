## HomeBud
![HomeBud Logo](webapp/src/assets/images/alt_logo.png)

HomeBud is a simple Web App that I am working on, building on top of the basic Vue App framework.

It is going to be an application that will help people find lost pets, including things like data-driven insights on best practices for finding a pet within a given time of when they go missing, as well as a dedicated missing pet page that can track pet sightings and consolidate missing pet details.

I am building the front end with Vue.js, alongside with Vuetify as a front end framework.

The application's back end is a Node.JS REST API built with the Express framework.

---

2021 Revision

- after being away from the project for over 2 years, i decided to come back and finish it before i start working full time
- a few things have changed since i started
 - Vue seems to be in a transition phase between Vue 2 and Vue 3, especially for users like me that rely on libraries that are being reworked to use Vue 3's composition API
 - i decided to implement the front end using React instead
 - leveraging React will also allow me to build a web app using React Native, making HomeBud a more accessible and flexible service
 - i'm not scraping the Vue work i had done, im keeping it for reference so the instructions remain, but i am building a new front end in React now
 - the backend remains the same, i will refactor the REST API as i rebuild the new front end, most of the old backend should still be more than relevant in terms of the functionality i had already completed


## Build Setup
# webapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).