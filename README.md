<!-- Projet Hackaton
Ceci est un site web développé dans le cadre d'un Hackaton utilisant React.js en front-end et Nest.js en back-end.

# Prérequis
- Avoir Docker
- La patience
- Le temps

# Étapes d'installation
- Cloner le projet
- Aller dans le dosser hackaton
   - cd hackaton
- Lancer ces commandes
  - make up # pour lancer les containers
  - make back-install # pour installer les dépendances du back
  - make front-install # pour installer les dépendances du front
  - make prisma-generate # pour générer les models
  - make prisma-db # pour créer la base de données
  - make prisma-seed # pour remplir la base de données
  - make back-start # pour lancer le back
  - make front-start # pour lancer le front

# Remarques
- Assurez-vous que les ports 3000 et 8000 sont disponibles sur votre machine avant de lancer l'application.

# Auteur
Ce projet a été développé par les développeurs de l'ESGI. Pour toute question ou remarque, veuillez me contacter à l'adresse myges@quimarche.pas -->

# Groupe 17

## Fonctionnalités

## Développeurs

EESHVARAN Kagistan **_Raavanan1000_**  
GACEM Torkia Hala **_TORKIAHALA_**  
KHAN Mustakim **_Mustakim-Khan_**  
LUSCAP Sonny **_Sonny00_**  
TALAH Said **_izemaghilas_**

## Installation / Lancement du projet

```bash
make start # pour lancer le projet

# si make n'est pas installer
docker-compose up -d

docker-compose exec nestjs npm install
docker-compose exec react npm install

docker-compose exec -it nestjs npx prisma generate
docker-compose exec -it nestjs npx prisma db push
docker-compose exec -it nestjs npx prisma db seed

docker-compose exec -d nestjs npm run start:dev
docker-compose exec -d react npm start

# si docker n'est pas installer
# back
cd ./backend
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run start:dev
# front
cd ./front
npm install
npm start
```
