# Docker commands

## Local

`docker build -t pa4kev/portfolio-reactjs-full:latest -f Dockerfile .`

`docker push pa4kev/portfolio-reactjs-full:latest`

## Server (Enaga)

`docker pull pa4kev/portfolio-reactjs-full`

if required, run certbot to set the certificates.
`docker run -it --rm -p 80:80 --name certbot -v "/etc/letsencrypt:/etc/letsencrypt" -v "/var/lib/letsencrypt:/var/lib/letsencrypt" certbot/certbot certonly --standalone --break-my-certs -d matsubara.nl -d www.matsubara.nl`

`docker run -d --name react -p 80:80 -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt -v /var/lib/letsencrypt:/var/lib/letsencrypt -v /var/www/html:/var/www/html pa4kev/portfolio-reactjs-full`

## Server (Wielewaal)

`docker pull pa4kev/portfolio-mariadb`

`docker pull pa4kev/portfolio-drupal`

## Drupal CMS

`docker build -t pa4kev/portfolio-drupal:latest -f cms/drupal/Dockerfile .`

`docker run -d --name drupal -p 8080:80 pa4kev/portfolio-drupal`

`composer require --dev drush/drush`

`composer require 'drupal/devel:^5.1'`

`composer require 'drupal/gin_toolbar:^1.0@beta'`

`composer require 'drupal/gin:^3.0@RC'`

---

## React

Bootstrap: `npm install bootstrap`

Routing: `npm install react-router-dom`

Dark mode: [https://www.makeuseof.com/how-to-add-dark-mode-to-a-react-application/](https://www.makeuseof.com/how-to-add-dark-mode-to-a-react-application/)

Emoji component: [https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7](https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7)

HTML parsing: `npm install html-react-parser`

https://www.npmjs.com/package/html-react-parser

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
