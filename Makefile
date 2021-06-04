all:
	$(NOOP)

docs_build:
	docker-compose build amplify_demo

docs_run:
	docker-compose pull && docker-compose up
