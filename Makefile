.PHONY=migrate rollback status todo

status:
	php artisan migrate:status

migrate:
	php artisan migrate

rollback:
	php artisan migrate:rollback --step=1

todo:
	vim todo.md
