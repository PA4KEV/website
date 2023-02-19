FROM drupal:10.0.3-php8.2-apache-bullseye

COPY composer.json /opt/drupal/.
COPY composer.lock /opt/drupal/.

RUN composer install