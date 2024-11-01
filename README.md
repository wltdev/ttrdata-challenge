# Project Challenge

This project consists of two main folders: `laravel-api` and `react-comparison-app`. The `laravel-api` folder contains a Laravel-based API, while the `react-comparison-app` folder contains a React application designed to interact with the API to display comparison data.

### Folder Structure

- **laravel-api/** - The backend of the project, built using Laravel, serves data to the frontend through RESTful API endpoints.

- **react-comparison-app/** - The frontend of the project, built with Vite React-ts, fetches data from the Laravel API and displays it for comparison purposes

## Setup

## Backend - Laravel API

### Option 1: Local Setup (Without Docker)

1. Navigate to the laravel-api folder and Install Laravel dependencies using Composer::

```
composer install
```

2. Copy the .env.example file to .env and configure your environment variables (e.g., database credentials):

```
cp .env.example .env
```

3. Generate an application key:

```
php artisan key:generate
```

4. Run migrations to set up the database schema:

```
php artisan migrate
```

5. Start the Laravel development server:

```
php artisan serve
```

The Laravel API should now be running at http://localhost:8000.

### Option 2: Docker Setup

1. Copy the .env.example file to .env and configure your environment variables (e.g., database credentials):

```
cp .env.example .env
```

2. Start the Docker containers:

```
docker-compose up -d
```

This will build and start the Laravel API along with any required services as specified in the docker-compose.yml file.

3. Run migrations to set up the database schema in the Docker container:

```
docker-compose exec ttrdata-php php artisan migrate
```

The Laravel API should now be running in Docker at http://localhost:8080.

### Frontend - React Comparison App

1. Copy the .env.example file to .env and configure your environment variables (e.g., database credentials):

```
cp .env.example .env
```

2. Install project dependencies

```
yarn install
```

1. Start the React development server

```
yarn dev
```
