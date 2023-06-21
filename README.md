# Docker commands

## Local

`docker build -t pa4kev/portfolio-reactjs-full:latest -f Dockerfile .`

`docker push pa4kev/portfolio-reactjs-full:latest`

Node: `v19.3.0`

## Server (Enaga)

`docker pull pa4kev/portfolio-reactjs-full`

if required, run certbot to set the certificates.
`docker run -it --rm -p 80:80 --name certbot -v "/etc/letsencrypt:/etc/letsencrypt" -v "/var/lib/letsencrypt:/var/lib/letsencrypt" certbot/certbot certonly --standalone --break-my-certs -d matsubara.nl -d www.matsubara.nl -d pa4kev.nl -d www.pa4kev.nl`

`docker run -d --name react -p 80:80 -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt -v /var/lib/letsencrypt:/var/lib/letsencrypt -v /var/www/html:/var/www/html pa4kev/portfolio-reactjs-full`

To renew, stop the current running container. Then re-run the same commands as above again.

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

## Documentation

[Create React App](https://github.com/facebook/create-react-app)

[React documentation](https://reactjs.org/)

[Boostrap 5.2 documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

[MySqlConnector documentation](https://mysqlconnector.net/tutorials/connect-to-mysql/)

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
