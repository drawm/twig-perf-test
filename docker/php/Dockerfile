FROM php:7.3-fpm

RUN docker-php-ext-install \
        mbstring opcache \
        && \
        rm -rf /var/lib/apt/lists/*


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer
# RUN composer global require hirak/prestissimo

ENV PHP_REVALIDATE=0

RUN echo "upload_max_filesize = 10M" > /usr/local/etc/php/php.ini && \
    echo "post_max_size = 10M" >> /usr/local/etc/php/php.ini && \
    echo "max_execution_time = 300" >> /usr/local/etc/php/php.ini && \
    echo "memory_limit = 256M" >> /usr/local/etc/php/php.ini && \
    echo "opcache.revalidate_freq = 0" >> /usr/local/etc/php/php.ini && \
    echo "opcache.validate_timestamps = \${PHP_REVALIDATE}" >> /usr/local/etc/php/php.ini

COPY ./docker/php/zzz-docker.conf /usr/local/etc/php-fpm.d/zzz-docker.conf

COPY --chown=www-data:www-data ./php-src /var/www/html
COPY --chown=www-data:www-data ./templates /var/www/templates

RUN composer install -d /var/www/html/ && \
    chown -R www-data:www-data /var/www/html/vendor && \
    chown -R www-data:www-data /var/www/html/composer.lock
