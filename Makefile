.PHONY=migrate rollback status todo slides

status:
	php artisan migrate:status

migrate:
	php artisan migrate

rollback:
	php artisan migrate:rollback --step=1

todo:
	vim todo.md


# Usage is like: make slides resource=22
slides:
	node scripts/create-slides.js $(resource) $(url)
