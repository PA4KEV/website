FROM drupal:10.0.3-php8.2-apache-bullseye

WORKDIR /opt/drupal
COPY composer.json .
COPY composer.lock .
COPY .env .
COPY settings.php ./web/sites/default/

RUN composer install
