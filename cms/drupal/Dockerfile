FROM drupal:10.0.3-php8.2-apache-bullseye

WORKDIR /opt/drupal

COPY .env .
COPY composer.json .
COPY composer.lock .
COPY services.yml ./web/sites/default/
COPY settings.php ./web/sites/default/

RUN composer install
