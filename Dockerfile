FROM php:8.3-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    libsqlite3-dev \
    zip \
    unzip \
    nodejs \
    npm

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql pdo_sqlite mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Copy existing application directory contents
COPY . /app

# Install PHP dependencies without running artisan scripts during build
# (because .env variables aren't natively accessible during the Docker image build phase)
RUN composer install --optimize-autoloader --no-dev --no-scripts

# Install Node dependencies and build Vite
RUN npm install
RUN npm run build

# Expose port
EXPOSE 8000

# Start Laravel server at Runtime! (This runs after Render injects environment variables)
CMD php artisan package:discover --ansi && php artisan serve --host=0.0.0.0 --port=8000
