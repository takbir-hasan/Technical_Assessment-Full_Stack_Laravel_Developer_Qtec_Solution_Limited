FROM php:8.4-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    libsqlite3-dev \
    libzip-dev \
    zip \
    unzip \
    nodejs \
    npm

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql pdo_sqlite mbstring exif pcntl bcmath gd zip

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Copy existing application directory contents
COPY . /app

# Install PHP dependencies without running artisan scripts during build
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN COMPOSER_MEMORY_LIMIT=-1 composer install --optimize-autoloader --no-dev --no-scripts --prefer-dist --no-interaction --ignore-platform-reqs

# Install Node dependencies and build Vite
RUN npm install --legacy-peer-deps
RUN npm run build

# Expose port
EXPOSE 8000

# Start Laravel server at Runtime!
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000
