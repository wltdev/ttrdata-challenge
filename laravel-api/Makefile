build:
	docker-compose build --no-cache --force-rm

stop:
	docker-compose stop

down:
	docker-compose down

up:
	docker-compose up -d

composer-update:
	docker exec ttrdata-php bash -c "composer update"

composer-install:
	docker exec ttrdata-php bash -c "composer install"

migrate:
	docker exec ttrdata-php bash -c "php artisan migrate"

optimize:
	docker exec ttrdata-php bash -c "php artisan optimize"

key-generate:
	docker exec ttrdata-php bash -c "php artisan key:generate"
