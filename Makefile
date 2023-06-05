# Démarrage du projet 
up:
	docker-compose up -d

# Arret du projet 
down:
	docker-compose down

# commandes Front
front-install:
	docker-compose exec react npm install
front-start:
	docker-compose exec react npm start
front-shell:
	docker-compose exec -it react /bin/sh
