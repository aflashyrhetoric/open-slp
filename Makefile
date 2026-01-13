.PHONY=migrate rollback status

status:
	php artisan migrate:status

migrate:
	php artisan migrate

rollback:
	php artisan migrate:rollback --step=1
